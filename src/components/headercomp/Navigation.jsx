import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="flex items-center
    gap-[10px] md:gap-[12px] lg:gap-[20px]
    text-[14px] md:text-[15px] lg:text-[18px]
    text-[#7a7a7a] font-medium">
      
      <NavItem label="Home" active />
      <NavItem label="Gallery" />
      <NavItem label="Sell Your NFT" />

    </nav>
  );
}
