import josephImg from "../../assets/joseph.svg";
import star from "../../assets/star.svg";

export default function JosephImageWithBadge() {
  return (
    <div className="relative max-[640px]:w-full max-[640px]:flex max-[640px]:justify-center">

      <img
        src={josephImg}
        alt="Joseph"
        className="
          w-[52.5rem] h-[30.625rem] object-cover rounded-[3.125rem]

          max-[1024px]:w-[32.5rem] max-[1024px]:h-[20rem] max-[1024px]:rounded-[2.5rem]
          max-[640px]:w-full max-[640px]:h-[16.25rem] max-[640px]:rounded-[1.875rem]
        "
      />

      <div
        className="
          absolute z-20 flex items-center gap-[0.625rem]
          bg-black/55 backdrop-blur-md rounded-[2.5rem]

          right-[19.125rem] bottom-[11.875rem]
          w-[18.625rem] h-[6.875rem] p-[1.25rem]

          max-[1024px]:right-0 max-[1024px]:bottom-[11.25rem]
          max-[1024px]:w-[15rem] max-[1024px]:p-[1rem]

          max-[640px]:right-[0.3125rem] max-[640px]:bottom-[0.0625rem]
          max-[640px]:w-[13.125rem] max-[640px]:h-[4.375rem] max-[640px]:p-[0.875rem]
        "
      >
        <img
          src={star}
          alt="star"
          className="
            w-[4.375rem] h-[4.375rem]
            max-[1024px]:w-[3.125rem] max-[1024px]:h-[3.125rem]
            max-[640px]:w-[2.5rem] max-[640px]:h-[2.5rem]
          "
        />

        <div>
          <p
            className="
              text-white text-[1.5rem] font-semibold
              max-[1024px]:text-[1.125rem]
              max-[640px]:text-[1rem]
            "
          >
            Joseph Charles
          </p>

          <p
            className="
              text-gray-200 text-[1rem] leading-tight
              max-[1024px]:text-[0.75rem]
              max-[640px]:text-[0.6875rem]
            "
          >
            NFT Collector
          </p>
        </div>
      </div>
    </div>
  );
}
