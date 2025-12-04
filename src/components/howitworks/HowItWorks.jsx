import step1 from "../../assets/step1.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import step4 from "../../assets/step4.svg";
import step5 from "../../assets/step5.svg";

import HowItWorksHeader from "./HowItWorksHeader";
import HowItWorksInfo from "./HowItWorksInfo";
import StepCard from "./StepCard";

export default function HowItWorks() {
  const steps = [
    "Connect your wallet to the platform",
    "Select the NFTs that you want to sell",
    "Allow access to the smart contract",
    "Sell your NFTs for 0.000001 ETH each",
    "Get a receipt",
  ];

  const images = [step1, step2, step3, step4, step5];

  return (
    <section className="w-full bg-[#0B0B0E] text-white flex justify-center py-[120px]">
      <div
        className="
          w-full max-w-[1400px] px-[164px]
          max-[1024px]:px-[40px] max-[1024px]:pt-[150px] max-[1024px]:pb-[60px]
          max-[640px]:px-[20px] max-[640px]:pt-[0px]
        "
      >
        <div
          className="
            w-full flex items-start justify-between gap-[54px]
            max-[640px]:flex-col max-[640px]:text-left
          "
        >

          <HowItWorksHeader />
          <HowItWorksInfo />
        </div>

        <div
          className="
            grid grid-cols-5 gap-[40px] mt-[80px]
            max-[1024px]:grid-cols-3 max-[1024px]:gap-[32px]
            max-[640px]:grid-cols-1 max-[640px]:gap-[45px]
          "
        >
          {images.map((img, i) => (
            <StepCard
              key={i}
              img={img}
              text={steps[i]}
              stepNumber={i + 1}
              isReverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
