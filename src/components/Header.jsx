import { useState } from "react";

import RoboIcon from "../assets/RoboIcon.svg";
import BADNFTText from "../assets/BADNFTText.svg";

import Logo from "../components/headercomp/Logo";
import Navigation from "../components/headercomp/Navigation";
import HeaderButton from "../components/headercomp/HeaderButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
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

          
          <button
            className="md:hidden w-[56px] h-[56px] border border-black bg-white rounded-[20px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-[6px]">
              <span className="w-[20px] h-[2px] bg-black"></span>
              <span className="w-[14px] h-[2px] bg-black"></span>
              <span className="w-[20px] h-[2px] bg-black"></span>
            </div>
          </button>

        </div>

      </div>

      
      {open && (
        <div className="md:hidden w-full bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          <Navigation />
        </div>
      )}
    </header>
  );
}
