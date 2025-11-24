export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-[20px] sm:gap-[30px] md:gap-[40px] w-full text-center justify-items-center sm:justify-items-start">

      <div className="text-left">
        <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold leading-none">20,152</h3>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-tight mt-[10px]">
          Daily Estimated <br />
          Illiquid NFTs
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold leading-none">$4,214,012</h3>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-tight mt-[10px]">
          Potential NFT <br />
          Losses to Harvest
        </p>
      </div>

    </div>
  );
}
