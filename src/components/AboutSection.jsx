import lizard1 from "../assets/lizard1.svg"; 
import lizard2 from "../assets/lizard2.svg"; 

export default function AboutSection() {
  return (
    <> 
      <section className="w-full flex flex-col items-center pb-[0px]">
        
        <div className="w-full max-w-[1400px] px-[165px] mx-auto">

          <div
            className="
              relative
              w-full
              h-[557px]
              flex
              items-start
              gap-[120px]    
            "
          >
            <div className="relative w-[430px] h-full">

              <img
                src={lizard2}
                className="
                  absolute
                  top-[0px]
                  left-[0px]
                  w-[324px]
                  h-[405px]
                  object-cover
                  rounded-[50px]
                "
              />

              <img
                src={lizard1}
                className="
                  absolute
                  top-[150px]
                  left-[110px]
                  w-[324px]
                  h-[405px]
                  object-cover
                  rounded-[50px]
                "
              />
            </div>
            
            <div className="flex flex-col gap-[20px] pt-[220px] w-[736px] h-[387px]">

              <h1 className="text-[60px] font-bold leading-none">
                BAD NFT
              </h1>

              <h2 className="text-[34px] font-extrabold leading-[1.2]">
                The Ultimate Solution for NFT Losers
              </h2>

              <p className="text-[16px] text-gray-600 leading-[1.7]">
                Do you wish you could get rid of them and save some money on taxes?
                If so, you need BAD NFT, the platform that lets you sell your worthless
                NFTs for a fraction of a penny, and get a tax receipt that you can use
                to claim a deduction.
              </p>

              <p className="text-[16px] text-gray-600 leading-[1.7]">
                BAD NFT is a revolutionary service that helps you turn your NFT losses
                into tax savings. By selling your unsellable NFTs on BAD NFT, you can
                reduce your taxable income and lower your tax bill, while freeing up your
                wallet from unwanted NFTs.
              </p>

            </div>
          </div>
        </div>
        
        <div className="relative w-full overflow-visible h-[280px]">

          <div
            className="
              absolute 
              w-[200%]
              left-[-50%]
              top-[126px]
              h-[120px]
              bg-[#E6EF6A]
              rotate-[-6deg]
              flex
              items-center
              justify-center
              z-10
            "
          >
            <p className="text-[42px] font-extrabold whitespace-nowrap">
              BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT
            </p>
          </div>

          <div
            className="
              absolute 
              w-[200%]
              left-[-50%]
              top-[200px]
              h-[120px]
              bg-[#C8B3FF]
              rotate-[6deg]
              flex
              items-center
              justify-center
              z-0
            "
          >
            <p className="text-[42px] font-extrabold text-white whitespace-nowrap">
              SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW
            </p>
          </div>

        </div>

      </section>
    </>
  );
}
