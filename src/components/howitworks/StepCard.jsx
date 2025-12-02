export default function StepCard({ img, stepNumber, text, isReverse }) {
  return (
    <div
      className={`
        flex flex-col items-center text-center
        max-[640px]:flex-row max-[640px]:items-center max-[640px]:gap-[20px]
        max-[640px]:text-left
        ${isReverse ? "max-[640px]:flex-row-reverse max-[640px]:text-right" : ""}

        min-[641px]:max-[1024px]:flex-col 
        min-[641px]:max-[1024px]:items-center
        min-[641px]:max-[1024px]:text-center
        min-[641px]:max-[1024px]:gap-[10px]
      `}
    >
      <img
        src={img}
        alt={`step-${stepNumber}`}
        className="
          w-[149px] h-[160px] mb-[20px]
          min-[641px]:max-[1024px]:w-[130px] min-[641px]:max-[1024px]:h-[140px]
          max-[640px]:w-[110px] max-[640px]:h-[110px] max-[640px]:mb-0
        "
      />

      <div className="max-[640px]:w-[62%] min-[641px]:max-[1024px]:w-full">
        <h3
          className="
            text-[32px] font-bold
            max-[1024px]:text-[26px]
            max-[640px]:text-[20px]
          "
        >
          Step {stepNumber}
        </h3>

        <p className="text-[18px] text-gray-300 mt-[6px] max-[640px]:text-[14px]">
          {text}
        </p>
      </div>
    </div>
  );
}
