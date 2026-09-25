import AppStoreButtons from "./AppStoreButtons";
import AppFeatures from "./AppFeatures";
import PhoneMockups from "./PhoneMockups";

const features = [
  {
    title: "Manage Bookings",
    description: "Accept and manage service requests.",
    icon: "bookings",
  },
  {
    title: "Manage Schedule",
    description: "Set your availability and stay organized.",
    icon: "schedule",
  },
  {
    title: "Customize Services",
    description: "Set your services, pricing and location.",
    icon: "services",
  },
  {
    title: "Connect With Customers",
    description: "Chat and share pet updates.",
    icon: "chat",
  },
  {
    title: "Manage Earnings",
    description: "Track your wallet and request payouts.",
    icon: "earnings",
  },
  {
    title: "Build Your Reputation",
    description: "Collect reviews and showcase your experience.",
    icon: "payment",
  },
];

export default function PartnerApp() {
  const screens = [
    {
      src: "/images/apps/partner-bookings.png",
      alt: "Scoobyz Partner bookings",
    },
    {
      src: "/images/apps/partner-home.png",
      alt: "Scoobyz Partner dashboard",
    },
    {
      src: "/images/apps/partner-wallet.png",
      alt: "Scoobyz Partner earnings",
    },
  ];

  return (
    <section className="border-t border-[#d9d2c7] bg-[#f5ede2] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <PhoneMockups screens={screens} />

          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#50749b]">
              Scoobyz Partner App
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-5xl font-normal leading-[0.95] text-[#1f2a33]">
              For the people
              <br />
              who care for them.
            </h2>

            <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#5f625f]">
              Manage your bookings, services, customers and earnings with the
              Scoobyz Partner app. Grow your pet-care business with the right
              tools, all in one place.
            </p>

            <div className="mt-7">
              <AppStoreButtons
                appStoreUrl="#"
                playStoreUrl="https://play.google.com/store/apps/details?id=com.differ2099.scoob"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <AppFeatures features={features} />
        </div>
      </div>
    </section>
  );
}
