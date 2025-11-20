export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-[40px] w-full">

      <div className="text-left">
        <h3 className="text-[36px] font-extrabold leading-none">20,152</h3>
        <p className="text-[16px] font-medium leading-tight mt-[10px]">
          Daily Estimated <br />
          Illiquid NFTs
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-[36px] font-extrabold leading-none">$4,214,012</h3>
        <p className="text-[16px] font-medium leading-tight mt-[10px]">
          Potential NFT <br />
          Losses to Harvest
        </p>
      </div>

    </div>
  );
}
