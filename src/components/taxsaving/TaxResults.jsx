export default function TaxResults() {
  return (
    <div
      className="
        w-[calc(100%+5rem)] h-[9.25rem] bg-[#A890F0] rounded-[1.875rem] mt-[2.8125rem]
        flex justify-between items-center px-[2.5rem] py-[1.25rem] ml-[-2.5rem]

        max-[640px]:w-full
        max-[640px]:flex-col max-[640px]:h-auto max-[640px]:gap-[1.25rem]
        max-[640px]:px-[1.5rem] max-[640px]:py-[1.5rem]
        max-[640px]:ml-0
      "
    >
      <div
        className="
          bg-black text-white
          w-[20rem] h-[6.75rem] rounded-[1.875rem] mr-5
          flex flex-col items-center justify-center
          max-[640px]:w-full max-[640px]:h-[5.625rem] max-[640px]:mr-0
        "
      >
        <p className="text-[0.875rem] max-[640px]:text-[0.75rem]">
          Total Loss on Investment
        </p>
        <p className="text-[2.5rem] font-bold max-[640px]:text-[1.875rem]">
          $0.0
        </p>
      </div>

      <div
        className="
          bg-black text-white
          w-[20rem] h-[6.75rem] rounded-[1.5rem]
          flex flex-col items-center justify-center
          max-[640px]:w-full max-[640px]:h-[5.625rem]
        "
      >
        <p className="text-[0.875rem] max-[640px]:text-[0.75rem]">
          Estimated Potential Tax Savings
        </p>
        <p className="text-[2.5rem] font-bold max-[640px]:text-[1.875rem]">
          $0
        </p>
      </div>
    </div>
  );
}
