import Header from "../components/Header";
import Hero from "../components/Hero";
import bg from "../assets/bg.jpg";

export default function LandingPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Hero />
    </div>
  );
}
