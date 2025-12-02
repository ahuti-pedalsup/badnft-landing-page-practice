export default function AboutStrips() {
  return (
    <div className="relative w-full overflow-visible h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] hidden sm:block">

      <div
        className="
          absolute w-[200%] left-[-50%]
          top-[100px] md:top-[120px] lg:top-[126px]
          h-[100px] md:h-[110px] lg:h-[120px]
          bg-[#E5f066] rotate-[-6deg]
          flex items-center justify-center z-10
        "
      >
        <p className="text-[32px] md:text-[38px] lg:text-[42px] font-extrabold whitespace-nowrap">
          BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT
        </p>
      </div>

      <div
        className="
          absolute w-[200%] left-[-50%]
          top-[170px] md:top-[190px] lg:top-[200px]
          h-[100px] md:h-[110px] lg:h-[120px]
          bg-[#BBA5F0] rotate-[6deg]
          flex items-center justify-center z-0
        "
      >
        <p className="text-[32px] md:text-[38px] lg:text-[42px] font-extrabold text-white whitespace-nowrap">
          SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW
        </p>
      </div>

    </div>
  );
}
