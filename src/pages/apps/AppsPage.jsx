import ScrollIntro from "./ScrollIntro";
import AppShowcase from "./AppShowcase";
import FoundersSection from "../../components/FoundersSection";

const AppsPage = () => {
  return (
    <>
      <ScrollIntro />
      <AppShowcase />
      <FoundersSection />

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
