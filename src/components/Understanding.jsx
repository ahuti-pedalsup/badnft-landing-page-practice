import image from "../assets/image.svg";
import arrowvector from "../assets/arrowvector.svg";

export default function Understanding() {
  return (
    <section className="w-full bg-[#F8F8FA] py-[150px] flex justify-center">
      <div className="w-[1400px] max-[1024px]:w-full max-[640px]:px-[20px]">

        <h2
          className="
            text-[60px] font-bold text-center
            max-[1024px]:text-[42px]
            max-[640px]:text-[28px] max-[640px]:text-left
          "
        >
          Understanding BAD NFT
        </h2>

        <p
          className="
            text-[18px] text-gray-600 max-w-[1097px] text-center mx-auto mt-[20px] leading-[1.7]

            max-[1024px]:text-[16px]
            max-[640px]:text-left max-[640px]:text-[14px] max-[640px]:leading-[1.6]
          "
        >
          BAD NFT is not a scam or a joke. It is a legitimate and legal way to save
          money on taxes, especially if you have short-term capital gains from other
          NFTs or crypto assets. Short-term capital gains are taxed at a higher rate
          than long-term capital gains, so you can use your NFT losses to offset them
          and lower your tax rate.
        </p>

        <div
          className="
            mt-[50px] grid grid-cols-[463.5px,357px,450px] gap-[58px] mx-auto items-start w-[1400px]

            max-[1024px]:grid-cols-1
            max-[1024px]:w-full
            max-[1024px]:

            max-[640px]:
          "
        >
          <div
            className="
             text-[18px] text-gray-600 max-w-[1097px] text-center mx-auto mt-[20px] leading-[1.7]

            max-[1024px]:text-[16px]
            max-[640px]:text-left max-[640px]:text-[14px] max-[640px]:leading-[1.6]
            "
          >
            <p>
              For example, let’s say you bought 100 NFTs for 1 ETH each, and now they
              are worth 0.001 ETH each. If you sell them on BAD NFT, you can claim a
              loss of 99.9 ETH, which is the difference between the purchase price and
              the Sell price. If your tax rate is 30%, you can save 29.97 ETH on your
              taxes, which is more than what you paid for the NFTs in the first place.
            </p>

            <div
              className="
                mt-[45px]
                max-[1024px]:hidden   
                max-[640px]:hidden    
              "
            >
              <p className="font-bold text-[18px] mb-[10px]">Watch Our Video</p>
              <img src={arrowvector} className="w-[280px] mt-[10px]" alt="arrow" />
            </div>

            <p
              className="
                font-bold text-[16px] mt-[20px] hidden
                max-[1024px]:block
                max-[640px]:text-[14px]
              "
            >
              Watch Our Video
            </p>
          </div>

          <div
            className="
              flex justify-center
              max-[1024px]:order-2 max-[1024px]:w-full
            "
          >
            <img
              src={image}
              className="
                w-[357px] h-[423px] rounded-[40px] object-cover shadow-lg

                max-[1024px]:w-[420px] max-[1024px]:h-[480px]
                max-[640px]:w-full max-[640px]:h-auto
              "
              alt="video"
            />
          </div>

          <div
            className="
              relative top-[70px] text-[18px] leading-[1.75] text-gray-700

              max-[1024px]:order-3 max-[1024px]:top-0
              max-[1024px]:text-center

              max-[640px]:text-left max-[640px]:text-[14px]
            "
          >
            <p>
              Of course, every tax situation is different, and you should consult with
              a tax professional before using this service. BAD NFT is not a tax
              advisor, and does not provide individual tax advice. However, they do
              work with the tax professionals at TaxBit, who can help you craft your
              tax strategy, unlock deductions, and keep your taxes clear and
              legitimate. You can learn more about their 30-minute consultation service
              on their website.
            </p>

            <button
              className="
                mt-[20px] max-[640px]:mt-[10px]
                px-[28px] py-[14px]
                bg-white text-black border border-black rounded-full
                text-[18px] font-semibold flex items-center gap-[12px]

                max-[1024px]:mx-auto max-[1024px]:text-[16px]

                max-[640px]:mx-0 max-[640px]:text-[14px]
              "
            >
              Sell Your NFTs Now
              <span
                className="
                  w-[32px] h-[32px] bg-[#E6EF6A] rounded-full flex items-center justify-center text-black text-[20px]

                  max-[640px]:w-[26px] max-[640px]:h-[26px]
                "
              >
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
