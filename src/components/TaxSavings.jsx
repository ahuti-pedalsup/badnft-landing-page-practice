export default function TaxSavings() {
  return (
    <section
      className="
        w-full bg-[#F8F8FA] py-[140px] flex justify-center px-[165px]
        max-[1024px]:px-[40px] max-[1024px]:py-[80px]
        max-[640px]:px-[20px] max-[640px]:py-[60px]
      "
    >
      <div
        className="
          w-[1400px] grid grid-cols-2 gap-[58px]
          max-[1024px]:grid-cols-1 max-[1024px]:gap-[50px]
          max-[640px]:gap-[40px]
        "
      >
        <div
          className="
            max-w-[646px]
            max-[1024px]:mx-auto max-[1024px]:text-center
            max-[640px]:text-left
          "
        >
          <h2
            className="
              text-[60px] font-bold leading-[1.1]
              max-[1024px]:text-[44px]
              max-[640px]:text-[32px]
            "
          >
            Calculate Your Tax  
            Savings
          </h2>

          <p
            className="
              text-[16px] text-gray-700 mt-[40px] leading-[1.7]

              max-[1024px]:text-[15px]
              max-[640px]:text-[14px] max-[640px]:mt-[20px]
            "
          >
            Let’s take a look at what you might be able to write off your taxes this year  
            by harvesting your NFT losses with BadNFTs.
          </p>

          <p
            className="
              text-[16px] text-gray-700 mt-[30px] leading-[1.7]

              max-[1024px]:text-[15px]
              max-[640px]:text-[14px] max-[640px]:mt-[20px]
            "
          >
            Enter the number of NFTs you want to sell, and the total amount paid for the  
            batch you are selling, to estimate your total loss. Enter the Federal + State  
            tax rate you’d expect to pay, and voilà! Your estimated tax savings!
          </p>

          <p
            className="
              text-[12px] text-gray-500 italic mt-[50px]
              max-[640px]:mt-[25px]
            "
          >
            Please consult with a tax professional. Every tax situation is different,  
            and this is not individual tax advice.
          </p>
        </div>

        <div
          className="
            w-full max-w-[700px] h-[464px] bg-white rounded-[40px] p-[40px] shadow-sm
            max-[1024px]:h-auto max-[1024px]:mx-auto
            max-[640px]:p-[20px] max-[640px]:rounded-[24px]
          "
        >
          <h3
            className="
              text-[24px] font-semibold
              max-[640px]:text-[20px]
            "
          >
            Tax Calculator
          </h3>

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
              <p className="text-[12px] text-gray-500 mb-[5px]">
                Total Paid For All NFTs
              </p>
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

          <div
            className="
              flex justify-between items-center mt-[19px] mb-[8px]
              max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[10px]
            "
          >
            <p className="text-[16px] text-gray-600 max-[640px]:text-[14px]">
              Federal + State Tax Rate (%)
            </p>

            <p className="text-[16px] text-gray-500 text-right max-[640px]:text-left max-[640px]:text-[14px]">
              Amount BAD NFT Pays
            </p>
          </div>

          <div
            className="
              flex items-center justify-between
              max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[15px]
            "
          >
            <div className="relative w-[304px] max-[640px]:w-full">
              <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>

              <div
                className="
                  absolute top-[-6px] left-[0px]
                  w-[20px] h-[20px] bg-[#A890F0] rounded-full border-[3px] border-white
                "
              ></div>
            </div>

            <p className="text-[20px] font-semibold text-gray-500 max-[640px]:text-[16px]">
              $0.01 per NFT
            </p>
          </div>

          <div
            className="
              w-[calc(100%+80px)] h-[148px] bg-[#A890F0] rounded-[30px] mt-[45px]
              flex justify-between items-center px-[40px] py-[20px] ml-[-40px]
                  max-[640px]:w-full
                  max-[640px]:flex-col max-[640px]:h-auto max-[640px]:gap-[20px]
                  max-[640px]:px-[24px] max-[640px]:py-[24px]
                  max-[640px]:ml-0
            "
          >
            <div
              className="
                bg-black text-white
                w-[320px] h-[108px] rounded-[30px] mr-5
                flex flex-col items-center justify-center
                max-[640px]:w-full max-[640px]:h-[90px] max-[640px]:mr-0
              "
            >
              <p className="text-[14px] max-[640px]:text-[12px]">
                Total Loss on Investment
              </p>
              <p className="text-[40px] font-bold max-[640px]:text-[30px]">$0.0</p>
            </div>

            <div
              className="
                bg-black text-white
                w-[320px] h-[108px] rounded-[24px]
                flex flex-col items-center justify-center
                max-[640px]:w-full max-[640px]:h-[90px]
              "
            >
              <p className="text-[14px] max-[640px]:text-[12px]">
                Estimated Potential Tax Savings
              </p>
              <p className="text-[40px] font-bold max-[640px]:text-[30px]">$0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
