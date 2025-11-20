export default function UserAvatars({ icons }) {
  return (
    <div className="flex items-center gap-[10px] mt-[20px]">

      <div className="flex items-center -space-x-4">
        {icons.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user icon"
            className="w-[63px] h-[64px] rounded-full border-[3px] border-white"
          />
        ))}
      </div>

      <p className="text-[18px] leading-tight">
        Meet our <br /> Valuable Users
      </p>

    </div>
  );
}
