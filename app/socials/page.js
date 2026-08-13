

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";

import SocialHero from "../../components/SocialHero";
import SocialSection from "../../components/SocialSection";

import SocialCTA from "../../components/SocialCTA";


export const metadata = {
  title: "Socials & Events | Imagenie",
  description:
    "See our latest campaigns, events, launches, behind-the-scenes moments and creative insights.",
};

export default function SocialPage() {
  return (
    <>
      <Header />

      <main id="content">
        <SocialHero />
        <SocialSection />
      
        
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}