import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import step5 from "../assets/step5.svg";
import star1 from "../assets/star1.svg";

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
    <section className="w-full bg-[#0B0B0E] text-white flex justify-center py-[120px] ">
      <div
        className="
          w-full max-w-[1400px] px-[164px]

          max-[1024px]:px-[40px]
          max-[1024px]:pt-[150px]
          max-[1024px]:pb-[60px]

          max-[640px]:px-[20px]
          max-[640px]:pt-[100px]
        "
      >

        <div
          className="
            w-full flex items-start justify-between gap-[54px]
            max-[1024px]:flex-col
            max-[640px]:text-left
          "
        >

          <div className="w-[679px] max-[1024px]:w-full">
            <h2
              className="
                text-[50px] font-bold leading-[1.05]
                max-[1024px]:text-[40px]
                max-[640px]:text-[28px]
              "
            >
              How BAD NFT Works
            </h2>

            <p
              className="
                text-[36px] font-medium mt-[24px] leading-[1.28]
                max-[1024px]:text-[28px]
                max-[640px]:text-[18px]
              "
            >
              Selling your NFTs on BAD NFT is very simple and fast. Just follow
              these five steps:
            </p>
          </div>

          <div className="w-[667px] max-[1024px]:w-full">
            <img
              src={star1}
              alt="star"
              className="w-[30px] h-[30px] mb-[20px] max-[640px]:mt-[10px]"
            />

            <p className="text-[15px] text-gray-300 leading-[1.75] max-[640px]:text-[14px]">
              The platform uses a verified and audited smart contract to ensure
              the security and transparency of the transactions. It also
              supports low-cost bulk transactions, so you can sell up to 1,000 NFTs
              at once. You only pay a small transaction fee, up to 0.01 ETH max,
              which is much lower than the gas fees you would pay on other
              platforms.
            </p>
          </div>
        </div>

        <div
          className="
            grid grid-cols-5 gap-[40px] mt-[80px]

            max-[1024px]:grid-cols-3
            max-[1024px]:gap-[32px]

            max-[640px]:grid-cols-1
            max-[640px]:gap-[45px]
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center

                max-[640px]:flex-row
                max-[640px]:items-center
                max-[640px]:gap-[20px]
                max-[640px]:text-left
                ${
                  i % 2 === 1
                    ? "max-[640px]:flex-row-reverse max-[640px]:text-right"
                    : ""
                }

                min-[641px]:max-[1024px]:flex-col
                min-[641px]:max-[1024px]:items-center
                min-[641px]:max-[1024px]:text-center
                min-[641px]:max-[1024px]:gap-[10px]
              `}
            >
              <img
                src={img}
                alt={`step${i + 1}`}
                className="
                  w-[149px] h-[160px] mb-[20px]

                  min-[641px]:max-[1024px]:w-[130px]
                  min-[641px]:max-[1024px]:h-[140px]

                  max-[640px]:w-[110px]
                  max-[640px]:h-[110px]
                  max-[640px]:mb-0
                "
              />

              <div
                className="
                  max-[640px]:w-[62%]
                  min-[641px]:max-[1024px]:w-full
                "
              >
                <h3
                  className="
                    text-[32px] font-bold
                    max-[1024px]:text-[26px]
                    max-[640px]:text-[20px]
                  "
                >
                  Step {i + 1}
                </h3>

                <p
                  className="
                    text-[18px] text-gray-300 mt-[6px]
                    max-[640px]:text-[14px]
                  "
                >
                  {steps[i]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
