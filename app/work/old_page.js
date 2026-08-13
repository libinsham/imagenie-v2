import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkHero from "../../components/WorkHero";
import WorkGrid from "../../components/WorkGrid";
import WorkFilterNav from "../../components/WorkFilterNav";

import { workCategories } from "../../lib/workPageContent";

export default function WorkPage() {
  return (
    <>
      <Header />

      <main className="work-page">

        <WorkHero />

        <WorkFilterNav categories={workCategories} />

        <WorkGrid categories={workCategories} />

      </main>

      <Footer />
    </>
  );
}