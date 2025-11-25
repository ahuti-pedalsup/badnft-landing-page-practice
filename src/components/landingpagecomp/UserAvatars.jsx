export default function UserAvatars({ icons }) {
  return (
    <div
      className="
        flex flex-col items-center gap-[10px] mt-[20px]
        lg:flex-row lg:items-start
      "
    >
      
      <div className="flex items-center -space-x-4 shrink-0">
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
              rounded-full border-[3px] border-white
            "
          />
        ))}
      </div>
      
      <p
        className="
          text-[14px] text-center whitespace-nowrap
          md:text-[16px]
          lg:text-left lg:whitespace-normal lg:text-[18px] lg:leading-tight
        "
      >
        <span className="inline lg:hidden">Meet our Valuable Users</span>

        <span className="hidden lg:inline">
          Meet our <br /> Valuable Users
        </span>
      </p>
    </div>
  );
}
