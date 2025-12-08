import TaxText from "./TaxText";
import TaxCalculator from "./TaxCalculator";

export default function TaxSavings() {
  return (
    <section
      className="
        w-full bg-[#F8F8FA] py-[140px] flex justify-center px-[165px]
        max-[1024px]:px-[40px] max-[1024px]:py-[80px]
        max-[640px]:px-[20px] max-[640px]:py-[60px]
      "
    >
      <div
        className="
          w-[1400px] grid grid-cols-2 gap-[58px]
          max-[1024px]:grid-cols-1 max-[1024px]:gap-[50px]
          max-[640px]:gap-[40px]
        "
      >
        <TaxText />

        <TaxCalculator />
      </div>
    </section>
  );
}
