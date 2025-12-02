export default function FAQFooter() {
  return (
    <div
      className="
        w-full bg-[#BBA5F0] h-[100px] flex flex-col items-center relative mt-[105px]
        max-[640px]:h-auto max-[640px]:py-[30px]
      "
    >
      <div
        className="
          w-[50px] h-[50px] bg-[#E5f066] rounded-full flex items-center justify-center
          absolute -top-[25px] shadow-md
        "
      >
        <span className="text-black text-[22px] font-bold">↑</span>
      </div>

      <div
        className="
          w-full max-w-[1367px] px-[164px] h-full flex items-center justify-between
          max-[1024px]:px-[40px]
          max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-[10px] max-[640px]:px-[20px]
        "
      >
        <p
          className="
            text-black text-[16px] font-bold
            max-[640px]:order-2 max-[640px]:text-center
          "
        >
          BAD NFT © 2024. All rights reserved.
        </p>

        <div
          className="
            flex items-center gap-[20px]
            max-[640px]:order-1 max-[640px]:flex-col max-[640px]:gap-[6px]
          "
        >
          <div className="flex items-center gap-[10px]">
            <p className="text-black text-[16px] font-bold cursor-pointer">
              Terms of Service
            </p>
            <span className="text-black text-[18px]">|</span>
            <p className="text-black text-[16px] font-bold cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
