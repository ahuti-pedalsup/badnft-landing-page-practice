import FAQGrid from "./FAQGrid";
import FAQFooter from "./FAQFooter";

export default function FAQSection() {
  return (
    <section className="w-full bg-[#0B0B12] pt-[100px]">
      <div
        className="
          w-[1367px] mx-auto px-[164px]
          max-[1024px]:w-full max-[1024px]:px-[40px]
          max-[640px]:px-[20px]
        "
      >
        <h2
          className="
            text-[60px] font-bagel text-white mb-[100px] leading-[1]
            max-[1024px]:text-[44px] max-[1024px]:mb-[70px]
            max-[640px]:text-[32px] max-[640px]:mb-[50px]
          "
        >
          Frequently Asked Questions
        </h2>

        <FAQGrid />
      </div>

      <FAQFooter />
    </section>
  );
}
