export default function Button({ text, icon }) {
  return (
    <button
      className="
        mt-[30px] md:mt-[46px]
        w-[200px] h-[55px] 
        sm:w-[230px] sm:h-[60px]
        md:w-[262px] md:h-[68px]

        border border-black rounded-full
        bg-white
        font-medium 
        text-[16px] sm:text-[18px] md:text-[20px]
        flex items-center justify-center gap-[8px] sm:gap-[10px]

        mx-auto
      "
      >

      {text}
      <img src={icon} alt="arrow" className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[44px] md:h-[44px]" />
    </button>
  );
}
