export default function TaxResults() {
  return (
    <div
      className="
        w-[calc(100%+80px)] h-[148px] bg-[#A890F0] rounded-[30px] mt-[45px]
        flex justify-between items-center px-[40px] py-[20px] ml-[-40px]

        max-[640px]:w-full
        max-[640px]:flex-col max-[640px]:h-auto max-[640px]:gap-[20px]
        max-[640px]:px-[24px] max-[640px]:py-[24px]
        max-[640px]:ml-0
      "
    >
      <div
        className="
          bg-black text-white
          w-[320px] h-[108px] rounded-[30px] mr-5
          flex flex-col items-center justify-center
          max-[640px]:w-full max-[640px]:h-[90px] max-[640px]:mr-0
        "
      >
        <p className="text-[14px] max-[640px]:text-[12px]">Total Loss on Investment</p>
        <p className="text-[40px] font-bold max-[640px]:text-[30px]">$0.0</p>
      </div>

      <div
        className="
          bg-black text-white
          w-[320px] h-[108px] rounded-[24px]
          flex flex-col items-center justify-center
          max-[640px]:w-full max-[640px]:h-[90px]
        "
      >
        <p className="text-[14px] max-[640px]:text-[12px]">
          Estimated Potential Tax Savings
        </p>
        <p className="text-[40px] font-bold max-[640px]:text-[30px]">$0</p>
      </div>
    </div>
  );
}
