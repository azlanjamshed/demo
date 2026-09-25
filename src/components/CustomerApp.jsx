import AppStoreButtons from "./AppStoreButtons";
import AppFeatures from "./AppFeatures";
import PhoneMockups from "./PhoneMockups";

const features = [
  {
    title: "Grooming",
    description: "Professional grooming at home or salons.",
    icon: "grooming",
  },
  {
    title: "Walking",
    description: "Safe and reliable dog walking.",
    icon: "walking",
  },
  {
    title: "Boarding",
    description: "Trusted boarding homes and sitters.",
    icon: "boarding",
  },
  {
    title: "Veterinary Care",
    description: "Online and in-clinic consultations.",
    icon: "vet",
  },
  {
    title: "In-App Chat",
    description: "Chat with your service provider.",
    icon: "chat",
  },
  {
    title: "Secure Payments",
    description: "Easy and safe transactions.",
    icon: "payment",
  },
];

export default function CustomerApp() {
  const screens = [
    {
      src: "/images/apps/customer-booking.png",
      alt: "Scoobyz grooming screen",
    },
    {
      src: "/images/apps/customer-home.png",
      alt: "Scoobyz customer home",
    },
    {
      src: "/images/apps/customer-profile.png",
      alt: "Scoobyz booking confirmation",
    },
  ];

  return (
    <section className="bg-[#f5ede2] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#50749b]">
              Scoobyz App
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-5xl font-normal leading-[0.95] text-[#1f2a33]">
              For the ones
              <br />
              who call them
              <br />
              family.
            </h2>

            <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#5f625f]">
              Find trusted pet-care professionals, book services, make secure
              payments and stay connected — all in one app.
            </p>

            <div className="mt-7">
              <AppStoreButtons
                appStoreUrl="#"
                playStoreUrl="https://play.google.com/store/apps/details?id=com.scobys.scoooobys"
              />
            </div>
          </div>

          <PhoneMockups screens={screens} />
        </div>

        <div className="mt-16">
          <AppFeatures features={features} />
        </div>
      </div>
    </section>
  );
}
