import lizard1 from "../../assets/lizard1.svg";
import lizard2 from "../../assets/lizard2.svg";

export default function AboutImages() {
  return (
    <div
      className="
        relative 
        w-full 
        sm:w-[330px] md:w-[360px] lg:w-[430px]
        h-[400px] md:h-[460px] lg:h-full
      "
    >
      <img
        src={lizard2}
        className="
          absolute top-0 left-0
          w-[220px] sm:w-[250px] md:w-[260px] lg:w-[324px]
          h-[260px] sm:h-[300px] md:h-[320px] lg:h-[405px]
          object-cover
          rounded-[30px] md:rounded-[40px] lg:rounded-[50px]
        "
      />

      <img
        src={lizard1}
        className="
          absolute
          top-[110px] sm:top-[120px] md:top-[130px] lg:top-[150px]
          left-[70px] sm:left-[90px] md:left-[100px] lg:left-[110px]
          w-[220px] sm:w-[250px] md:w-[260px] lg:w-[324px]
          h-[260px] sm:h-[300px] md:h-[320px] lg:h-[405px]
          object-cover
          rounded-[30px] md:rounded-[40px] lg:rounded-[50px]
        "
      />
    </div>
  );
}
