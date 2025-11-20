import RoboIcon from "../assets/RoboIcon.svg";
import BADNFTText from "../assets/BADNFTText.svg";

import Logo from "../components/headercomp/Logo";
import Navigation from "../components/headercomp/Navigation";
import HeaderButton from "../components/headercomp/HeaderButton";

export default function Header() {
  return (
    <header className="w-full bg-transparent">
      <div
        className="
          max-w-[1728px] 
          mx-auto 
          h-[95px] 
          flex 
          items-center 
          justify-between 
          px-[120px]
          mb-[47px]
        "
      >
        
        <Logo icon={RoboIcon} text={BADNFTText} />
        
        <div className="flex items-center gap-[40px]">
          <Navigation />
          <HeaderButton />
        </div>

      </div>
    </header>
  );
}
