import Header from "../components/Header";
import Hero from "../components/Hero";
import TextText from "../components/TextText";
import VideoEmbed from "../components/VideoEmbed";
import MessageTicker from "../components/MessageTicker";
import WorkShowcase from "../components/WorkShowcase";
import IndustriesOrbit from "../components/IndustriesOrbit";
import FourCapabilitiesBoxes from "../components/FourCapabilitiesBoxes";
import SimpleContactForm from "../components/SimpleContactForm";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { workArticles, insightArticles,   insightArticles2, } from "../lib/homeContent";

import HomeOffset from "../components/HomeOffset";


export default function HomePage() {
  return (
    <>
      <Header />

      <main id="content">
        <Hero />

        <TextText heading="Where Strategy Meets
Creativity." variant="white">
          <p>
            Growth begins with clarity. We combine strategic thinking, creative excellence,
             and digital innovation to help businesses build stronger brands, create meaningful customer experiences, 
             and achieve sustainable growth.
          </p>
        </TextText>


       <VideoEmbed
  src="https://player.vimeo.com/video/1214487870?h=929d6cb0b6&background=1&autoplay=1&muted=1&loop=1"
  title="Creating opportunity for global B2B tech brands | Imagenie"
/>

               

        <TextText heading="Helping Businesses
Grow Across
Every Stage" variant="white">
          <p>
         We work with ambitious B2B and B2C brands that need clearer stories, 
         stronger identities, and sharper digital experiences. Whether your audience is an enterprise buyer or an everyday consumer, 
         we shape brand communication around how people understand, trust and choose.
          </p>
          <p>
        
          </p>
        </TextText>

<HomeOffset />

    <FourCapabilitiesBoxes />

    <MessageTicker words={["IDEATE",  "ILLUSTRATE", "ARTICULATE"]} />

        <WorkShowcase />

        <IndustriesOrbit />

        <SimpleContactForm />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
