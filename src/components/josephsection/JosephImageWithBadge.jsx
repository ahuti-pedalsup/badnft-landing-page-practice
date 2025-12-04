import josephImg from "../../assets/joseph.svg";
import star from "../../assets/star.svg";

export default function JosephImageWithBadge() {
  return (
    <div className="relative max-[640px]:w-full max-[640px]:flex max-[640px]:justify-center">

      <img
        src={josephImg}
        alt="Joseph"
        className="
          w-[840px] h-[490px] object-cover rounded-[50px]

          max-[1024px]:w-[520px] max-[1024px]:h-[320px] max-[1024px]:rounded-[40px]
          max-[640px]:w-full max-[640px]:h-[260px] max-[640px]:rounded-[30px]
        "
      />

      <div
        className="
          absolute z-20 flex items-center gap-[10px]
          bg-black/55 backdrop-blur-md rounded-[40px]

          right-[290px] bottom-[190px]
          w-[298px] h-[110px] p-[20px]

          max-[1024px]:right-0 max-[1024px]:bottom-[180px]
          max-[1024px]:w-[240px] max-[1024px]:p-[16px]

          max-[640px]:right-[5px] max-[640px]:bottom-[1px]
          max-[640px]:w-[210px] max-[640px]:h-[70px] max-[640px]:p-[14px]
        "
      >
        <img
          src={star}
          alt="star"
          className="
            w-[70px] h-[70px]
            max-[1024px]:w-[50px] max-[1024px]:h-[50px]
            max-[640px]:w-[40px] max-[640px]:h-[40px]
          "
        />

        <div>
          <p
            className="
              text-white text-[24px] font-semibold
              max-[1024px]:text-[18px]
              max-[640px]:text-[16px]
            "
          >
            Joseph Charles
          </p>

          <p
            className="
              text-gray-200 text-[16px] leading-tight
              max-[1024px]:text-[12px]
              max-[640px]:text-[11px]
            "
          >
            NFT Collector
          </p>
        </div>
      </div>
    </div>
  );
}
