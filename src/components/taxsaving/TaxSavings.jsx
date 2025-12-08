import TaxText from "./TaxText";
import TaxCalculator from "./TaxCalculator";

export default function TaxSavings() {
  return (
    <section
      className="
        w-full bg-[#F8F8FA] py-[8.75rem] flex justify-center px-[10.3125rem]
        max-[1024px]:px-[2.5rem] max-[1024px]:py-[5rem]
        max-[640px]:px-[1.25rem] max-[640px]:py-[3.75rem]
      "
    >
      <div
        className="
          w-[87.5rem] grid grid-cols-2 gap-[3.625rem]
          max-[1024px]:grid-cols-1 max-[1024px]:gap-[3.125rem]
          max-[640px]:gap-[2.5rem]
        "
      >
        <TaxText />

        <TaxCalculator />
      </div>
    </section>
  );
}
