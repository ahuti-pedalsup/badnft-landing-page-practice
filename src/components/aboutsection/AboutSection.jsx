import AboutImages from "./AboutImages";
import AboutContent from "./AboutContent";
import AboutStrips from "./AboutStrips";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center pb-[40px] md:pb-0">
      <div className="w-full max-w-[1400px] px-[20px] md:px-[60px] lg:px-[165px] mx-auto">

        <div
          className="
            relative w-full h-auto lg:h-[557px]
            flex flex-col md:flex-row
            items-start
            gap-[30px] md:gap-[50px] lg:gap-[120px]
          "
        >
          <AboutImages />
          <AboutContent />
        </div>

      </div>

      <AboutStrips />
    </section>
  );
}
