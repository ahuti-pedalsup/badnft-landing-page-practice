export default function Button({ text, icon }) {
  return (
    <button
      className="
        mt-[46px]
        w-[262px] h-[68px]
        border border-black rounded-full
        bg-white
        font-medium text-[20px]
        flex items-center justify-center gap-[10px]
      "
    >
      {text}
      <img src={icon} alt="arrow" className="w-[44px] h-[44px]" />
    </button>
  );
}
