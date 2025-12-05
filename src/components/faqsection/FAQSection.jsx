import FAQGrid from "./FAQGrid";
import FAQFooter from "./FAQFooter";

export default function FAQSection() {
  return (
    <section className="w-full bg-[#0B0B12] pt-[6.25rem]">
      <div
        className="
          w-[85.4375rem] mx-auto px-[10.25rem]
          max-[1024px]:w-full max-[1024px]:px-[2.5rem]
          max-[640px]:px-[1.25rem]
        "
      >
        <h2
          className="
            text-[3.75rem] font-bagel text-white mb-[6.25rem] leading-[1]
            max-[1024px]:text-[2.75rem] max-[1024px]:mb-[4.375rem]
            max-[640px]:text-[2rem] max-[640px]:mb-[3.125rem]
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
