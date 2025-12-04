import star1 from "../../assets/star1.svg";

export default function HowItWorksInfo() {
  return (
    <div className="w-[667px] max-[1024px]:w-full mt-[20px]">
      <img
        src={star1}
        alt="star"
        className="w-[30px] h-[30px] mb-[20px] max-[640px]"
      />

      <p className="text-[15px] text-gray-300 leading-[1.75] max-[640px]:text-[14px]">
        The platform uses a verified and audited smart contract to ensure the security and transparency of the transactions. It also supports low-cost bulk transactions, so you can sell up to 1,000 NFTs at once. You only pay a small transaction fee, up to 0.01 ETH max, which is much lower than the gas fees you would pay on other platforms.
      </p>
    </div>
  );
}
