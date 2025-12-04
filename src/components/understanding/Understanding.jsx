import UnderstandingTitle from "./UnderstandingTitle";
import UnderstandingLeftText from "./UnderstandingLeftText";
import UnderstandingImage from "./UnderstandingImage";
import UnderstandingRightText from "./UnderstandingRightText";

export default function Understanding() {
  return (
    <section className="w-full bg-[#F8F8FA] py-[150px] max-[1024px]:py-[100px] max-[640px]:py-[60px]  flex justify-center">
      <div className="w-[1400px] max-[1024px]:w-full max-[640px]:px-[20px]">

        <UnderstandingTitle />

        <div
          className="
            mt-[50px] grid grid-cols-[463.5px,357px,450px] gap-[58px] mx-auto items-start w-[1400px]
            max-[1024px]:grid-cols-1 max-[1024px]:w-full
          "
        >
          <UnderstandingLeftText />
          <UnderstandingImage />
          <UnderstandingRightText />
        </div>

      </div>
    </section>
  );
}
