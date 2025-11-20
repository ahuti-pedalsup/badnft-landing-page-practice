import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-[15px] text-[18px] text-[#7a7a7a] font-medium">
      
      <NavItem label="Home" active />
      <NavItem label="Gallery" />
      <NavItem label="Sell Your NFT" />

    </nav>
  );
}
