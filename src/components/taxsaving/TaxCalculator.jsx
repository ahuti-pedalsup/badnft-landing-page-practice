import TaxInputs from "./TaxInputs";
import TaxResults from "./TaxResults";

export default function TaxCalculator() {
  return (
    <div
      className="
        w-full max-w-[700px] bg-white rounded-[40px] p-[40px] shadow-sm
        max-[1024px]:h-auto max-[1024px]:mx-auto
        max-[640px]:p-[20px] max-[640px]:rounded-[24px]
      "
    >
      <h3 className="text-[24px] font-semibold max-[640px]:text-[20px]">
        Tax Calculator
      </h3>

      <TaxInputs />

      <div
        className="
          flex justify-between items-center mt-[19px] mb-[8px]
          max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[10px]
        "
      >
        <p className="text-[16px] text-gray-600 max-[640px]:text-[14px]">
          Federal + State Tax Rate (%)
        </p>

        <p className="text-[16px] text-gray-500 max-[640px]:text-[14px] text-right">
          Amount BAD NFT Pays
        </p>
      </div>

      <div
        className="
          flex items-center justify-between
          max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[15px]
        "
      >
        <div className="relative w-[304px] max-[640px]:w-full">
          <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>

          <div
            className="
              absolute top-[-6px] left-0
              w-[20px] h-[20px] bg-[#A890F0] rounded-full border-[3px] border-white
            "
          ></div>
        </div>

        <p className="text-[20px] font-semibold text-gray-500 max-[640px]:text-[16px]">
          $0.01 per NFT
        </p>
      </div>

      <TaxResults />
    </div>
  );
}
