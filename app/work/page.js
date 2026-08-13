import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkHero from "../../components/WorkHero";
import WorkB2bSection from "../../components/WorkB2bSection";
import WorkB2CSection from "../../components/WorkB2CSection";

export default function WorkPage() {
  return (
    <>
      <Header />

      <main className="work-page">
        <WorkHero />

        <WorkB2bSection />

        <WorkB2CSection/>

        {/* B2C will be added next */}
      </main>

      <Footer />
    </>
  );
}