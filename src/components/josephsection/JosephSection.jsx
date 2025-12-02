import josephImg from "../../assets/joseph.svg";
import star from "../../assets/star.svg";

export default function JosephSection() {
  return (
    <section className="w-full bg-[#F8F8FA] flex justify-center py-[58px]">

      <div className="w-[1400px] h-[680px] mx-auto px-[164px] relative flex">

        <div className="relative">
          <img
            src={josephImg}
            alt="Joseph"
            className="
              w-[840px]
              h-[490px]
              object-cover
              rounded-[50px]"
          />

          <div
            className="
              absolute
              z-20
              flex items-center
              gap-[11px]
              bg-black/55
              backdrop-blur-md
              rounded-[50px]"

            style={{
              width: "298.71px",
              height: "110.71px",
              padding: "20px",
              right: "290px",
              bottom: "190px",
            }}
          >
            <img src={star} alt="star" style={{ width: "70px", height: "70px" }} />

            <div>
              <p className="text-white text-[24px] font-semibold">
                Joseph Charles
              </p>
              <p className="text-gray-200 text-[16px] leading-tight">
                NFT Collector
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            absolute 
            right-[164px]      
            top-[90px]          
            w-[520px]
            h-[500px]
            bg-white
            p-[50px]
            rounded-[50px]
            shadow-lg"
        >
          <h2 className="text-[50px] font-bold leading-[1] mb-[20px]">
            Joseph Sold His BAD NFTs
          </h2>

          <p className="text-[18px] text-gray-700 leading-[1.7]">
            I am an artist, and I created some NFTs to showcase my work.
            Unfortunately, they didn’t sell well, and I was stuck with them.
            I was also paying a lot of taxes on my other income sources, and
            I was looking for a way to reduce them. That’s when I discovered
            BAD NFT, and I was blown away by the concept. I sold my NFTs on
            BAD NFT, and I got a tax receipt that I used to lower my taxable
            income. I was able to save a lot of money on taxes, and I also
            got rid of my unsold NFTs. It was a win–win situation for me!
          </p>
        </div>
      </div>
    </section>
  );
}
