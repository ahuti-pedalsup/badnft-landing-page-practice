export default function HeaderMobileMenu({ open }) {
  if (!open) return null;

  return (
    <div
      className="
        md:hidden 
        w-full 
        bg-black 
        pt-6 pb-10 px-6 
        shadow-lg 
        absolute top-[70px] left-0 
        z-50
      "
    >
      <div className="flex flex-col items-center gap-10 text-white">

        <div className="text-[18px] font-bold">
          Home
          <div className="w-[50px] h-[1px] bg-[#E5F066] mx-auto mt-2"></div>
        </div>

        <div className="text-gray-400 text-[18px]">Gallery</div>
        <div className="text-gray-400 text-[18px]">Sell Your NFT</div>

        <button
          className="
            bg-white text-black px-10 py-4 
            rounded-[30px] text-[18px] mt-6
          "
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
