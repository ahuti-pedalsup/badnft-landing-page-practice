import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import step5 from "../assets/step5.svg";
import star1 from "../assets/star1.svg"

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#0B0B0E] text-white py-[120px] flex justify-center pt-[238px] ">
      
      <div className="w-full max-w-[1400px] max-h-[727px] px-[164px]">

      
        <div className="w-full flex items-start justify-between gap-[54px]">

          <div className="w-[679px] h-[150px] gap-[54px]">
            <h2 className="text-[50px] font-bold leading-[1.05] whitespace-nowrap">
              How BAD NFT Works
            </h2>

            <p className="text-[36px] font-medium mt-[24px] leading-[1.28]">
              Selling your NFTs on BAD NFT is very simple and fast. Just follow these five steps:
            </p>
          </div>

          <div className="w-[667px] h-[247px] mt-[10px]">
            
          <img
            src={star1}
            alt="star"
            className="w-[50px] h-[50px] mb-[32px]"
          />
            <p className="text-[15px] text-gray-300 leading-[1.75]">
              The platform uses a verified and audited smart contract to ensure the security and transparency of the transactions. It also supports low-cost bulk transactions, so you can sell up to 1,000 NFTs at once. You only pay a small transaction fee, up to 0.01 ETH max, which is much lower than the gas fees you would pay on other platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-[40px] mt-[80px] items-start">

          <div className="flex flex-col items-center text-center relative top-[0px]">
            <img src={step1} alt="step1" className="w-[149px] h-[160px] mb-[20px]" />
            <h3 className="text-[32px] font-bold">Step 1</h3>
            <p className="text-[18px] text-gray-300 mt-[8px]">
              Connect your wallet to the platform
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative top-[40px]">
            <img src={step2} alt="step2" className="w-[149px] h-[160px] mb-[20px]" />
            <h3 className="text-[32px] font-bold">Step 2</h3>
            <p className="text-[18px] text-gray-300 mt-[8px]">
              Select the NFTs that you want to sell
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative top-[0px]">
            <img src={step3} alt="step3" className="w-[149px] h-[160px] mb-[20px]" />
            <h3 className="text-[32px] font-bold">Step 3</h3>
            <p className="text-[18px] text-gray-300 mt-[8px]">
              Allow access to the smart contract
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative top-[40px]">
            <img src={step4} alt="step4" className="w-[149px] h-[160px] mb-[20px]" />
            <h3 className="text-[32px] font-bold">Step 4</h3>
            <p className="text-[18px] text-gray-300 mt-[8px]">
              Sell your NFTs for 0.000001 ETH each
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative top-[0px]">
            <img src={step5} alt="step5" className="w-[149px] h-[160px] mb-[20px]" />
            <h3 className="text-[32px] font-bold">Step 5</h3>
            <p className="text-[18px] text-gray-300 mt-[8px]">
              Get a receipt
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
