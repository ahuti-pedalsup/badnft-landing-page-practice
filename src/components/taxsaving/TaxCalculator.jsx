import TaxInputs from "./TaxInputs";
import TaxResults from "./TaxResults";

export default function TaxCalculator() {
  return (
    <div
      className="
        w-full max-w-[43.75rem] bg-white rounded-[2.5rem] p-[2.5rem] shadow-sm
        max-[1024px]:h-auto max-[1024px]:mx-auto
        max-[640px]:p-[1.25rem] max-[640px]:rounded-[1.5rem]
      "
    >
      <h3 className="text-[1.5rem] font-semibold max-[640px]:text-[1.25rem]">
        Tax Calculator
      </h3>

      <TaxInputs />

      <div
        className="
          flex justify-between items-center mt-[1.1875rem] mb-[0.5rem]
          max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[0.625rem]
        "
      >
        <p className="text-[1rem] text-gray-600 max-[640px]:text-[0.875rem]">
          Federal + State Tax Rate (%)
        </p>

        <p className="text-[1rem] text-gray-500 max-[640px]:text-[0.875rem] text-right">
          Amount BAD NFT Pays
        </p>
      </div>

      <div
        className="
          flex items-center justify-between
          max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[0.9375rem]
        "
      >
        <div className="relative w-[19rem] max-[640px]:w-full">
          <div className="w-full h-[0.125rem] bg-gray-300 rounded-full"></div>

          <div
            className="
              absolute top-[-0.375rem] left-0
              w-[1.25rem] h-[1.25rem] bg-[#A890F0] rounded-full border-[0.1875rem] border-white
            "
          ></div>
        </div>

        <p className="text-[1.25rem] font-semibold text-gray-500 max-[640px]:text-[1rem]">
          $0.01 per NFT
        </p>
      </div>

      <TaxResults />
    </div>
  );
}
