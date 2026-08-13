import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import B2BCaseStudies from "../../components/B2BCaseStudies";

export const metadata = {
  title: "Case Studies | Imagenie",
  description:
    "Explore our latest branding and marketing case studies.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main id="content">

        <section className="case-studies-page">

          <B2BCaseStudies />

        </section>

      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}