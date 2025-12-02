import star1 from "../../assets/star1.svg";

export default function HowItWorksInfo() {
  return (
    <div className="w-[667px] max-[1024px]:w-full">
      <img
        src={star1}
        alt="star"
        className="w-[30px] h-[30px] mb-[20px] max-[640px]:mt-[10px]"
      />

      <p className="text-[15px] text-gray-300 leading-[1.75] max-[640px]:text-[14px]">
        The platform uses a verified and audited smart contract to ensure
        security and transparency. It also supports low-cost bulk transactions,
        allowing you to sell up to 1,000 NFTs at once with a small fee (max 0.01 ETH).
      </p>
    </div>
  );
}
