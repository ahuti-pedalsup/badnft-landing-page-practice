export default function NavItem({ label, active = false }) {
  if (active) {
    return (
      <div className="relative text-black font-semibold">
        {label}
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F3E79E]"></span>
      </div>
    );
  }

  return (
    <a href="#" className="hover:text-black transition">
      {label}
    </a>
  );
}
