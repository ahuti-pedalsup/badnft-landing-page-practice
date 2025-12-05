import star1 from "../../assets/star1.svg";

export default function HowItWorksInfo() {
  return (
    <div className="w-[41.6875rem] max-[1024px]:w-full mt-[1.25rem]">
      <img
        src={star1}
        alt="star"
        className="w-[1.875rem] h-[1.875rem] mb-[1.25rem]"
      />

      <p className="text-[0.9375rem] text-gray-300 leading-[1.75] max-[640px]:text-[0.875rem]">
        The platform uses a verified and audited smart contract to ensure the security
        and transparency of the transactions. It also supports low-cost bulk
        transactions, so you can sell up to 1,000 NFTs at once. You only pay a small
        transaction fee, up to 0.01 ETH max, which is much lower than the gas fees you
        would pay on other platforms.
      </p>
    </div>
  );
}
