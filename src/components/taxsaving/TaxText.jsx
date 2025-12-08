export default function TaxText() {
  return (
    <div
      className="
        max-w-[40.375rem]
        max-[1024px]:mx-auto max-[1024px]:text-center
        max-[640px]:text-left
      "
    >
      <h2
        className="
          text-[3.75rem] font-bold leading-[1.1]
          max-[1024px]:text-[2.75rem]
          max-[640px]:text-[2rem]
        "
      >
        Calculate Your Tax Savings
      </h2>

      <p
        className="
          text-[1rem] text-gray-700 mt-[2.5rem] leading-[1.7]
          max-[1024px]:text-[0.9375rem]
          max-[640px]:text-[0.875rem] max-[640px]:mt-[1.25rem]
        "
      >
        Let’s take a look at what you might be able to write off your taxes this
        year by harvesting your NFT losses with BadNFTs.
      </p>

      <p
        className="
          text-[1rem] text-gray-700 mt-[1.875rem] leading-[1.7]
          max-[1024px]:text-[0.9375rem]
          max-[640px]:text-[0.875rem] max-[640px]:mt-[1.25rem]
        "
      >
        Enter the number of NFTs you want to sell and the total amount paid to
        estimate your total loss. Enter your tax rate and voilà — your estimated
        tax savings!
      </p>

      <p
        className="
          text-[0.75rem] text-gray-500 italic mt-[3.125rem]
          max-[640px]:mt-[1.5625rem]
        "
      >
        Please consult with a tax professional. Every tax situation is different.
      </p>
    </div>
  );
}
