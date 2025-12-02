import FAQItem from "./FAQItem";

export default function FAQGrid() {
  return (
    <div
      className="
        grid grid-cols-2 gap-x-[94px] gap-y-[33px]
        max-[640px]:grid-cols-1 max-[640px]:gap-y-[40px]
      "
    >
      <FAQItem title="What is BAD NFT?">
        BAD NFT is a platform that allows you to sell your worthless NFTs for a
        fraction of a penny and get a tax receipt for deductions.
      </FAQItem>

      <FAQItem title="How does BAD NFT work?">
        BAD NFT uses a smart contract to facilitate transactions. Sellers get a
        small amount of ETH, and buyers get a receipt showing purchase and sale price.
      </FAQItem>

      <FAQItem title="Is BAD NFT Legal?">
        Yes, BAD NFT is legal and compliant with tax laws — but always consult a 
        tax professional. BAD NFT is not a tax advisor.
      </FAQItem>

      <FAQItem title="Is BAD NFT Safe and Secure?">
        Yes — it uses verified and audited smart contracts, supports bulk
        transactions up to 1,000 NFTs, and charges low fees (max 0.01 ETH).
      </FAQItem>
    </div>
  );
}
