import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import rhino from "../assets/rhino.svg";
import arrow from "../assets/arrow.svg";
import dottedarrow from "../assets/dottedarrow.svg";

import Title from "../components/landingpagecomp/Title";
import UserAvatars from "../components/landingpagecomp/UserAvatars";
import Stats from "../components/landingpagecomp/Stats";
import Button from "../components/landingpagecomp/Button";
import RhinoCenter from "../components/landingpagecomp/RhinoCenter";
import DottedArrow from "../components/landingpagecomp/DottedArrow";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center">

      <Title />

      <div className="h-[126px]" />

      <div
        className="
          w-full max-w-[1384px] mx-auto
          h-[300px]
          rounded-[20px]
          flex items-center justify-between
          px-[120px]
        "
      >
        
        <div className="w-[404px] text-left mr-[38px]">

          <h2 className="text-[36px] font-bold leading-[1.1] mb-[23px]">
            Are you stuck with <br />
            NFTs that nobody <br />
            wants to buy?
          </h2>

          <UserAvatars icons={[icon1, icon3, icon2]} />

        </div>

        <RhinoCenter src={rhino} />

        
        <div className="w-[398px] flex flex-col ml-[50px]">

        <Stats />

        <Button text="Connect Wallet" icon={arrow} />

        </div>

      </div>

      <DottedArrow src={dottedarrow} />

      
      <p className="mt-[-10px] ml-[290px] text-[18px] font-medium flex items-center gap-[10px]">
        <span className="w-[14px] h-[14px] bg-black rounded-full inline-block"></span>
        Bad NFT Collection Launching. Standby.
      </p>

    </section>
  );
}
