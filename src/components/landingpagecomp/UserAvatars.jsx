export default function UserAvatars({ icons }) {
  return (
    <div
      className="
        flex items-center gap-[10px] mt-[20px]
        md:flex-row md:items-center
        flex-col 
      "
    >

      <div className="flex items-center -space-x-4">
        {icons.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user icon"
            className="
              w-[50px] h-[50px]
              sm:w-[50px] sm:h-[50px]
              md:w-[55px] md:h-[55px]
              lg:w-[63px] lg:h-[64px]
              rounded-full border-[3px] gap-6 border-white
            "
          />
        ))}
      </div>

      <p
        className="
          text-[14px] leading-tight text-center
          md:text-left md:text-[16px] lg:text-[18px]
        "
      >
        Meet our <br /> Valuable Users
      </p>

    </div>
  );
}
