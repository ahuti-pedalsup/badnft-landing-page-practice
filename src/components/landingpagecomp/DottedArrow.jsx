export default function DottedArrow({ src }) {
  return (
    <div className="relative w-full h-[120px]">
      <img
        src={src}
        alt="connecting arrow"
        className="absolute w-[95px] h-[158px] left-[510px] top-[-35px]"
      />
    </div>
  );
}
