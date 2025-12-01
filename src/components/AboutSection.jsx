import lizard1 from "../assets/lizard1.svg"; 
import lizard2 from "../assets/lizard2.svg"; 

export default function AboutSection() {
  return (
    <> 
      <section className="w-full flex flex-col items-center pb-[40px] md:pb-[0px]">

        <div className="w-full max-w-[1400px] px-[20px] md:px-[60px] lg:px-[165px] mx-auto">

          <div
            className="
              relative
              w-full
              h-auto lg:h-[557px]
              flex
              flex-col md:flex-row
              items-start
              gap-[30px] md:gap-[50px] lg:gap-[120px]   
            "
          >
            <div
              className="
                relative 
                w-full 
                sm:w-[330px] 
                md:w-[360px]       
                lg:w-[430px] 
                h-[400px] 
                md:h-[460px] 
                lg:h-full 
              "
            >
              <img
                src={lizard2}
                className="
                  absolute
                  top-[0px]
                  left-[0px]           
                  w-[220px] sm:w-[250px] md:w-[260px] lg:w-[324px]
                  h-[260px] sm:h-[300px] md:h-[320px] lg:h-[405px]
                  object-cover
                  rounded-[30px] md:rounded-[40px] lg:rounded-[50px]
                "
              />

              <img
                src={lizard1}
                className="
                  absolute
                  top-[110px] sm:top-[120px] md:top-[130px] lg:top-[150px]
                  left-[70px] sm:left-[90px] md:left-[100px] lg:left-[110px]
                  w-[220px] sm:w-[250px] md:w-[260px] lg:w-[324px]
                  h-[260px] sm:h-[300px] md:h-[320px] lg:h-[405px]
                  object-cover
                  rounded-[30px] md:rounded-[40px] lg:rounded-[50px]
                "
              />
            </div>

            <div className="
              flex flex-col 
              gap-[15px]
              pt-[20px] sm:pt-[40px] md:pt-[70px] lg:pt-[220px] 
              w-full md:w-[380px] lg:w-[736px]
            ">

              <h1 className="text-[38px] sm:text-[46px] md:text-[50px] lg:text-[60px] font-bold leading-none">
                BAD NFT
              </h1>

              <h2 className="text-[20px] sm:text-[26px] md:text-[28px] lg:text-[34px] font-extrabold leading-[1.2]">
                The Ultimate Solution for NFT Losers
              </h2>

              <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 leading-[1.7]">
                Do you wish you could get rid of them and save some money on taxes?
                If so, you need BAD NFT, the platform that lets you sell your worthless
                NFTs for a fraction of a penny, and get a tax receipt that you can use
                to claim a deduction.
              </p>

              <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 leading-[1.7]">
                BAD NFT is a revolutionary service that helps you turn your NFT losses
                into tax savings. By selling your unsellable NFTs on BAD NFT, you can
                reduce your taxable income and lower your tax bill, while freeing up your
                wallet from unwanted NFTs.
              </p>

            </div>
          </div>
        </div>

        
        <div className="relative w-full overflow-visible h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] hidden sm:block">

          <div
            className="
              absolute 
              w-[200%]
              left-[-50%]
              top-[100px] md:top-[120px] lg:top-[126px]
              h-[100px] md:h-[110px] lg:h-[120px]
              bg-[#E5f066]
              rotate-[-6deg]
              flex items-center justify-center z-10
            "
          >
            <p className="text-[32px] md:text-[38px] lg:text-[42px] font-extrabold whitespace-nowrap">
              BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT ◆ BAD NFT
            </p>
          </div>

          <div
            className="
              absolute 
              w-[200%]
              left-[-50%]
              top-[170px] md:top-[190px] lg:top-[200px]
              h-[100px] md:h-[110px] lg:h-[120px]
              bg-[#BBA5F0]
              rotate-[6deg]
              flex items-center justify-center z-0
            "
          >
            <p className="text-[32px] md:text-[38px] lg:text-[42px] font-extrabold text-white whitespace-nowrap">
              SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW ◆ SELL NOW
            </p>
          </div>

        </div>

      </section>
    </>
  );
}
