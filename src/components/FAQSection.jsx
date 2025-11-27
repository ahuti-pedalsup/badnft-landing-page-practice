export default function FAQSection() {
  return (
    <section className="w-full bg-[#0B0B12] pt-[100px]">

      <div className="w-[1367px] mx-auto px-[164px]">

        <h2 className="text-[60px] font-bagel text-white mb-[100px] leading-[1]">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-2 gap-x-[94px] gap-y-[33px]">

          <div>
            <h3 className="text-[32px] font-semibold text-white mb-[20px]">
              What is BAD NFT?
            </h3>
            <ul className="text-[18px] text-gray-300 leading-[1.8] list-disc pl-[22px] max-w-[600px]">
              <li>
                BAD NFT is a platform that allows you to sell your worthless NFTs
                for a fraction of a penny and get a tax receipt that you can use
                to claim a deduction.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[32px] font-semibold text-white mb-[20px]">
              How does BAD NFT work?
            </h3>
            <ul className="text-[18px] text-gray-300 leading-[1.8] list-disc pl-[22px] max-w-[630px]">
              <li>
                BAD NFT uses a smart contract to facilitate the transactions.
                Sellers get a small amount of ETH, and buyers get a receipt
                showing original purchase price and sell price.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[32px] font-semibold text-white mb-[20px]">
              Is BAD NFT Legal?
            </h3>
            <ul className="text-[18px] text-gray-300 leading-[1.8] list-disc pl-[22px] max-w-[620px]">
              <li>
                Yes, BAD NFT is legal and compliant with tax laws. However, you
                should always consult a tax professional. BAD NFT is not a tax
                advisor and does not provide individual tax advice.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[32px] font-semibold text-white mb-[20px]">
              Is BAD NFT Safe and Secure?
            </h3>
            <ul className="text-[18px] text-gray-300 leading-[1.8] list-disc pl-[22px] max-w-[630px]">
              <li>
                Yes — BAD NFT is secure, using verified and audited smart
                contracts. It supports bulk transactions (up to 1,000 NFTs) with
                very low fees (up to 0.01 ETH), much lower than other platforms.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#C8B3FF] h-[100px] flex flex-col items-center relative mt-[105px]">

        <div className="w-[50px] h-[50px] bg-[#E6EF6A] rounded-full flex items-center justify-center absolute -top-[25px] shadow-md">
          <span className="text-black text-[22px] font-bold">↑</span>
        </div>

        <div className="w-full max-w-[1367px] px-[164px] h-full flex items-center justify-between">

          <p className="text-black text-[16px] font-bold">
            BAD NFT © 2024. All rights reserved.
          </p>

          <div className="flex items-center gap-[20px]">
            <p className="text-black text-[16px] font-bold cursor-pointer">Terms of Service</p>
            <span className="text-black text-[18px]">|</span>
            <p className="text-black text-[16px] font-bold cursor-pointer">Privacy Policy</p>
          </div>

        </div>
      </div>

    </section>
  );
}
