import AppStoreButtons from "./AppStoreButtons";
import PhoneMockups from "./PhoneMockups";

export default function AppsHero() {
  const screens = [
    {
      src: "/images/apps/customer-home.png",
      alt: "Scoobyz customer home screen",
    },
    {
      src: "/images/apps/customer-booking.png",
      alt: "Scoobyz customer booking screen",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-[#d9d2c7] bg-[#f5ede2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#446040]">
            Our Apps
          </p>

          <h1 className="max-w-[620px] font-serif text-5xl font-normal leading-[0.95] tracking-[-0.035em] text-[#1f2a33] sm:text-6xl lg:text-[76px]">
            Pet care,
            <br />
            now in your
            <br />
            pocket.
          </h1>

          <p className="mt-7 max-w-[500px] font-sans text-[15px] leading-7 text-[#5f625f]">
            Whether you're a pet parent looking for trusted care or a
            professional growing your pet-care business, we have an app built
            just for you.
          </p>

          <div className="mt-8">
            <AppStoreButtons
              appStoreUrl="#"
              playStoreUrl="https://play.google.com/store/apps/details?id=com.scobys.scoooobys"
            />
          </div>
        </div>

        <div className="relative">
          <PhoneMockups screens={screens} />

          <div className="pointer-events-none absolute right-0 top-4 hidden font-serif text-2xl italic text-[#446040] lg:block">
            For
            <br />
            Pet Care
            <br />
            Professionals
          </div>

          <div className="pointer-events-none absolute bottom-8 left-5 hidden font-serif text-2xl italic text-[#446040] lg:block">
            For
            <br />
            Pet Parents
          </div>
        </div>
      </div>
    </section>
  );
}
