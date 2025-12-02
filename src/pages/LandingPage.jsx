import Header from "../components/headercomp/Header";
import Hero from "../components/landingpagecomp/Hero";
import bg from "../assets/bg.jpg";
import AboutSection from "../components/aboutsection/AboutSection";
import HowItWorks from "../components/howitworks/HowItWorks";
import Understanding from "../components/understanding/Understanding";
import JosephSection from "../components/josephsection/JosephSection";
import TaxSavings from "../components/taxsaving/TaxSavings";
import FAQSection from "../components/faqsection/FAQSection";

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">

      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
        <Hero />
      </div>

      <AboutSection />
      <HowItWorks />
      <Understanding />
      <JosephSection />
      <TaxSavings />
      <FAQSection />
    </div>
  );
}
