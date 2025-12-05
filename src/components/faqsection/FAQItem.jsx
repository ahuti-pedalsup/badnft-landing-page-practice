export default function FAQItem({ title, children }) {
  return (
    <div>
      <h3
        className="
          text-[2rem] font-semibold text-white mb-[1.25rem]
          max-[1024px]:text-[1.75rem] 
          max-[640px]:text-[1.375rem]
        "
      >
        {title}
      </h3>

      <ul
        className="
          text-[1.125rem] text-gray-300 leading-[1.8] list-disc pl-[1.375rem]
          max-[1024px]:text-[1rem] 
          max-[640px]:text-[0.9375rem]
        "
      >
        <li>{children}</li>
      </ul>
    </div>
  );
}
