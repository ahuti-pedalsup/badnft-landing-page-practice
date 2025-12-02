export default function FAQItem({ title, children }) {
  return (
    <div>
      <h3
        className="
          text-[32px] font-semibold text-white mb-[20px]
          max-[1024px]:text-[28px] max-[640px]:text-[22px]
        "
      >
        {title}
      </h3>

      <ul
        className="
          text-[18px] text-gray-300 leading-[1.8] list-disc pl-[22px]
          max-[1024px]:text-[16px] max-[640px]:text-[15px]
        "
      >
        <li>{children}</li>
      </ul>
    </div>
  );
}
