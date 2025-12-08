export default function TaxText() {
  return (
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
        Calculate Your Tax Savings
      </h2>

      <p
        className="
          text-[16px] text-gray-700 mt-[40px] leading-[1.7]
          max-[1024px]:text-[15px]
          max-[640px]:text-[14px] max-[640px]:mt-[20px]
        "
      >
        Let’s take a look at what you might be able to write off your taxes this
        year by harvesting your NFT losses with BadNFTs.
      </p>

      <p
        className="
          text-[16px] text-gray-700 mt-[30px] leading-[1.7]
          max-[1024px]:text-[15px]
          max-[640px]:text-[14px] max-[640px]:mt-[20px]
        "
      >
        Enter the number of NFTs you want to sell and the total amount paid to
        estimate your total loss. Enter your tax rate and voilà — your estimated
        tax savings!
      </p>

      <p
        className="
          text-[12px] text-gray-500 italic mt-[50px]
          max-[640px]:mt-[25px]
        "
      >
        Please consult with a tax professional. Every tax situation is different.
      </p>
    </div>
  );
}
