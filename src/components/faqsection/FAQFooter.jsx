export default function FAQFooter() {
  return (
    <div
      className="
        w-full bg-[#BBA5F0] h-[6.25rem] flex flex-col items-center relative mt-[6.5625rem]
        max-[640px]:h-auto max-[640px]:py-[1.875rem]
      "
    >
      <div
        className="
          w-[3.125rem] h-[3.125rem] bg-[#E5f066] rounded-full flex items-center justify-center
          absolute -top-[1.5625rem] shadow-md
        "
      >
        <span className="text-black text-[1.375rem] font-bold">↑</span>
      </div>

      <div
        className="
          w-full max-w-[85.4375rem] px-[10.25rem] h-full flex items-center justify-between
          max-[1024px]:px-[2.5rem]
          max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-[0.625rem] max-[640px]:px-[1.25rem]
        "
      >
        <p
          className="
            text-black text-[1rem] font-bold
            max-[640px]:order-2 max-[640px]:text-center
          "
        >
          BAD NFT © 2024. All rights reserved.
        </p>

        <div
          className="
            flex items-center gap-[1.25rem]
            max-[640px]:order-1 max-[640px]:flex-col max-[640px]:gap-[0.375rem]
          "
        >
          <div className="flex items-center gap-[0.625rem]">
            <p className="text-black text-[1rem] font-bold cursor-pointer">
              Terms of Service
            </p>
            <span className="text-black text-[1.125rem]">|</span>
            <p className="text-black text-[1rem] font-bold cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
