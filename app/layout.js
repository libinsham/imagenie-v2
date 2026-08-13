import "./globals.css";
import "./styles/socials.css";
import "./styles/hero.css";
import "./styles/b2b.css";
import "./styles/b2c.css";
import "./styles/team.css";
import "./styles/industriesorbit.css";
import "./styles/workcases.css";
import "./styles/workpage.css";
import "./styles/home.css";
import "./styles/workpage.css";

export const metadata = {
  title: "B2B Tech Marketing Agency - Global x Integrated | Imagenie",
  description:
    "We're the B2B tech marketing agency for world-leading brands; combining art and science to create global opportunities for our clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
