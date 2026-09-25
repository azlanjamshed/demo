export default function PhoneMockups({ screens = [], className = "" }) {
  return (
    <div
      className={`relative flex min-h-[430px] items-center justify-center ${className}`}
    >
      {screens.map((screen, index) => {
        const positions = [
          "left-[5%] top-[60px] rotate-[-7deg] z-10",
          "left-1/2 top-[10px] -translate-x-1/2 rotate-[0deg] z-30",
          "right-[5%] top-[75px] rotate-[7deg] z-20",
        ];

        return (
          <div
            key={screen.src}
            className={`absolute w-[185px] overflow-hidden rounded-[28px] border-[7px] border-[#1f2a33] bg-[#1f2a33] shadow-[0_18px_40px_rgba(31,42,51,0.16)] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 ${positions[index] || positions[1]}`}
          >
            <div className="aspect-[9/19] overflow-hidden rounded-[20px] bg-white">
              <img
                src={screen.src}
                alt={screen.alt || "Scoobyz app screen"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
