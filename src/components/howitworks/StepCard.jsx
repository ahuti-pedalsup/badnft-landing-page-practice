export default function StepCard({ img, stepNumber, text, isReverse }) {
  return (
    <div
      className={`
        flex flex-col items-center text-center
        max-[640px]:flex-row max-[640px]:items-center max-[640px]:gap-[1.25rem]
        max-[640px]:text-left
        ${isReverse ? "max-[640px]:flex-row-reverse max-[640px]:text-right" : ""}

        min-[641px]:max-[1024px]:flex-col 
        min-[641px]:max-[1024px]:items-center
        min-[641px]:max-[1024px]:text-center
        min-[641px]:max-[1024px]:gap-[0.625rem]
      `}
    >
      <img
        src={img}
        alt={`step-${stepNumber}`}
        className="
          w-[9.3125rem] h-[10rem] mb-[1.25rem]
          min-[641px]:max-[1024px]:w-[8.125rem] min-[641px]:max-[1024px]:h-[8.75rem]
          max-[640px]:w-[6.875rem] max-[640px]:h-[6.875rem] max-[640px]:mb-0
        "
      />

      <div className="max-[640px]:w-[62%] min-[641px]:max-[1024px]:w-full">
        <h3
          className="
            text-[2rem] font-bold
            max-[1024px]:text-[1.625rem]
            max-[640px]:text-[1.25rem]
          "
        >
          Step {stepNumber}
        </h3>

        <p className="text-[1.125rem] text-gray-300 mt-[0.375rem] max-[640px]:text-[0.875rem]">
          {text}
        </p>
      </div>
    </div>
  );
}
