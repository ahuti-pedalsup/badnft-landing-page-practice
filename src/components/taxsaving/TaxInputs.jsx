export default function TaxInputs() {
  return (
    <div
      className="
        grid grid-cols-2 gap-[2.5rem] mt-[1.5rem]
        max-[640px]:grid-cols-1 max-[640px]:gap-[1.25rem]
      "
    >
      <div>
        <p className="text-[0.75rem] text-gray-500 mb-[0.3125rem]"># NFTs to sell</p>
        <input
          type="number"
          placeholder="0"
          className="
            w-full border-b border-gray-300 text-[1.5rem] outline-none pb-[0.375rem]
            max-[640px]:text-[1.25rem]
          "
        />
      </div>

      <div>
        <p className="text-[0.75rem] text-gray-500 mb-[0.3125rem]">Total Paid For All NFTs</p>
        <input
          type="number"
          placeholder="$ 0"
          className="
            w-full border-b border-gray-300 text-[1.5rem] outline-none pb-[0.375rem]
            max-[640px]:text-[1.25rem]
          "
        />
      </div>
    </div>
  );
}
