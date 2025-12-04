import JosephImageWithBadge from "../josephsection/JosephImageWithBadge";
import JosephTestimonialBox from "../josephsection/JosephTestimonialBox";

export default function JosephSection() {
  return (
    <section className="w-full bg-[#F8F8FA] flex justify-center py-[58px]">
      <div
        className="
          w-[1400px] h-[680px] mx-auto px-[164px] relative flex

          max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:px-[40px]
          max-[1024px]:gap-[30px]

          max-[640px]:flex-col max-[640px]:px-[20px] max-[640px]:gap-[20px]
        "
      >
        <JosephImageWithBadge />

        <JosephTestimonialBox />
      </div>
    </section>
  );
}
