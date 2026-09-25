import ScrollIntro from "./ScrollIntro";
import AppShowcase from "./AppShowcase";

const AppsPage = () => {
  return (
    <>
      <ScrollIntro />
      <AppShowcase />

      <style>{`
        .scoobyz-app-page {
          background: #f5ede2;
          color: #1f2a33;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default AppsPage;
