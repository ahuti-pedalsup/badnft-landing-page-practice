export default function Logo({ icon, text }) {
  return (
    <div className="flex items-center gap-[12px]">
      <img src={icon} alt="Robot Icon" className="h-[45px] w-auto" />
      <img src={text} alt="BADNFT Logo" className="h-[32px] w-auto" />
    </div>
  );
}
