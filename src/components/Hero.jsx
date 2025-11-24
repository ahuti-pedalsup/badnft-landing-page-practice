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

      <div className="h-[50px] md:h-[120px] lg:h-[126px]" />

      <div
        className="
          w-full max-w-[1384px] mx-auto
          rounded-[20px]

          flex flex-col md:flex-col lg:flex-row
          items-center md:items-center lg:items-center
          justify-start md:justify-start lg:justify-between

          px-6 md:px-12 lg:px-[120px]
          gap-10
        "
      >
      <div className="w-full md:w-full lg:w-[404px] text-left md:mr-0 lg:mr-[38px] px-[5px]">

        <div className="flex md:flex lg:block justify-start gap-6 items-center md:items-start w-full">
          
          <h2 className="text-[18px] sm:text-[28px] md:text-[36px] font-bold leading-[1.1] max-w-[220px] sm:max-w-[260px] md:max-w-full">
            Are you stuck with <br />
            NFTs that nobody wants to buy?
          </h2>

          <div className="ml-[25px] md:ml-0 max-w-[120px] md:max-w-none shrink-0 md:shrink">
          <UserAvatars icons={[icon1, icon3, icon2]} />
          </div>

        </div>

      </div>

      <RhinoCenter src={rhino} />

        
        <div className=" flex flex-col
          md:flex-row md:items-center md:gap-10
          lg:flex-col">

        <Stats />

        <div className="md:shrink-0 lg:shrink-0">
          <Button text="Connect Wallet" icon={arrow} />
        </div>
        </div>

      </div>

      <DottedArrow src={dottedarrow} />

      
      <p className="mt-[20px] md:mt-[-10px] md:ml-[290px] text-[16px] md:text-[18px] ...">
        <span className="w-[14px] h-[14px] bg-black rounded-full inline-block"></span>
        Bad NFT Collection Launching. Standby.
      </p>

    </section>
  );
}
