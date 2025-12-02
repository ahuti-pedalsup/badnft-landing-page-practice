import arrowvector from "../../assets/arrowvector.svg";

export default function UnderstandingLeftText() {
  return (
    <div
      className="
        text-[18px] text-gray-600 leading-[1.7] mt-[20px] text-center mx-auto
        max-[1024px]:text-[16px]
        max-[640px]:text-left max-[640px]:text-[14px] max-[640px]:leading-[1.6]
      "
    >
      <p>
        For example, let’s say you bought 100 NFTs for 1 ETH each, and now they are worth 0.001 ETH each. If you sell them on BAD NFT, you can claim a loss of 99.9 ETH, which is the difference between the purchase price and the Sell price. If your tax rate is 30%, you can save 29.97 ETH on your taxes, which is more than what you paid for the NFTs in the first place.
      </p>

      <div className="mt-[45px] max-[1024px]:hidden">
        <p className="font-bold text-[18px] mb-[10px]">Watch Our Video</p>
        <img src={arrowvector} className="w-[280px]" alt="arrow" />
      </div>

      <p
        className="
          font-bold text-[16px] mt-[20px] hidden
          max-[1024px]:block max-[640px]:text-[14px]
        "
      >
        Watch Our Video
      </p>
    </div>
  );
}
