import image from "../../assets/image.svg";

export default function UnderstandingImage() {
  return (
    <div className="flex justify-center max-[1024px]:order-2 max-[1024px]:w-full">
      <img
        src={image}
        alt="video"
        className="
          w-[357px] h-[423px] rounded-[40px] object-cover shadow-lg
          max-[1024px]:w-[420px] max-[1024px]:h-[480px]
          max-[640px]:w-full max-[640px]:h-auto
        "
      />
    </div>
  );
}
