import AppsHero from "./components/AppsHero";
import AppsIntro from "./components/AppsIntro";
import CustomerApp from "./components/CustomerApp";
import DownloadCTA from "./components/DownloadCTA";
import PartnerApp from "./components/PartnerApp";
import AppsPage from "./pages/apps/AppsPage";

function App() {
  return (
    <>
      {/* <main className="overflow-hidden">
        <AppsHero />

        <AppsIntro />

        <CustomerApp />

        <PartnerApp />

        <DownloadCTA />
      </main> */}
      <AppsPage />
    </>
  );
}

export default App;
