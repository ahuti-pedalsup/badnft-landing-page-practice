export default function TaxInputs() {
  return (
    <div
      className="
        grid grid-cols-2 gap-[40px] mt-[24px]
        max-[640px]:grid-cols-1 max-[640px]:gap-[20px]
      "
    >
      <div>
        <p className="text-[12px] text-gray-500 mb-[5px]"># NFTs to sell</p>
        <input
          type="number"
          placeholder="0"
          className="
            w-full border-b border-gray-300 text-[24px] outline-none pb-[6px]
            max-[640px]:text-[20px]
          "
        />
      </div>

      <div>
        <p className="text-[12px] text-gray-500 mb-[5px]">Total Paid For All NFTs</p>
        <input
          type="number"
          placeholder="$ 0"
          className="
            w-full border-b border-gray-300 text-[24px] outline-none pb-[6px]
            max-[640px]:text-[20px]
          "
        />
      </div>
    </div>
  );
}
