export default function HeaderMobileToggle({ open, setOpen }) {
  return (
    <button
      className={`
        md:hidden 
        w-[56px] h-[56px] 
        border border-black 
        rounded-[20px]
        flex items-center justify-center
        transition-all
        ${open ? "bg-black" : "bg-white"}
      `}
      onClick={() => setOpen(!open)}
    >
      {!open ? (
        <div className="flex flex-col gap-[6px]">
          <span className="w-[20px] h-[2px] bg-black"></span>
          <span className="w-[14px] h-[2px] bg-black"></span>
          <span className="w-[20px] h-[2px] bg-black"></span>
        </div>
      ) : (
        
        <span className="text-white text-3xl font-bold">×</span>
      )}
    </button>
  );
}
