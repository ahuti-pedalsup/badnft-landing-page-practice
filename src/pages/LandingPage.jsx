import Header from "../components/Header";
import Hero from "../components/Hero";
import bg from "../assets/bg.jpg";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/HowItWorks";
import Understanding from "../components/Understanding";
import JosephSection from "../components/JosephSection";
import TaxSavings from "../components/TaxSavings";
import FAQSection from "../components/FAQSection";

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
