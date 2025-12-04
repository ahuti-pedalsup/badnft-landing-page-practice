import { useState } from "react";
import RoboIcon from "../../assets/RoboIcon.svg";
import BADNFTText from "../../assets/BADNFTText.svg";
import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderButton from "./HeaderButton";
import HeaderMobileToggle from "./HeaderMobileToggle";
import HeaderMobileMenu from "./HeaderMobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent relative">

      <div
        className="
          max-w-[1728px]
          mx-auto
          h-[70px] md:h-[95px]
          flex items-center justify-between
          px-4 md:px-8 lg:px-[120px]
          mb-[47px]
        "
      >
        <img
          src={RoboIcon}
          alt="logo"
          className="w-[37px] h-[56px] md:hidden"
        />


        <div className="hidden md:block">
          <Logo icon={RoboIcon} text={BADNFTText} />
        </div>

        <div className="flex items-center gap-[20px] md:gap-[40px]">


          <div className="hidden md:block">
            <Navigation />
          </div>

          <div className="hidden md:block">
            <HeaderButton />
          </div>

          <HeaderMobileToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      <HeaderMobileMenu open={open} />
    </header>
  );
}
