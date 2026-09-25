import AppStoreButtons from "./AppStoreButtons";

export default function DownloadCTA() {
  return (
    <section className="bg-[#b8d1df] bg-[repeating-linear-gradient(90deg,#b8d1df_0px,#b8d1df_7px,#d8e7ed_7px,#d8e7ed_15px)] px-6 py-20">
      <div className="mx-auto max-w-4xl border border-[#d7cbbb] bg-[#f5ede2] px-7 py-14 text-center shadow-[0_10px_30px_rgba(31,42,51,0.08)] sm:px-12">
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#50749b]">
          Ready to get started?
        </p>

        <h2 className="mt-4 font-serif text-4xl text-[#1f2a33] sm:text-5xl">
          Join the Scoobyz community.
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-[#5f625f]">
          Download the app that's right for you and be part of a happier,
          healthier pet-care experience.
        </p>

        <div className="mt-7 flex justify-center">
          <AppStoreButtons
            appStoreUrl="#"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.scobys.scoooobys"
          />
        </div>
      </div>
    </section>
  );
}
