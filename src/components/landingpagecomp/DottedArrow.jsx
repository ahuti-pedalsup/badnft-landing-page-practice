export default function DottedArrow({ src }) {
  return (
    <div className="relative w-full h-[120px]">
      <img
        src={src}
        alt="connecting arrow"
        className="
          absolute hidden
          md:block
          md:w-[140px] md:h-[220px]
          md:left-[50px] md:top-[-335px]
          lg:w-[95px] lg:h-[158px]
          lg:left-[510px] lg:top-[-35px]
        "
      />
    </div>
  );
}
