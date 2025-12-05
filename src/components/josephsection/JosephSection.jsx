import JosephImageWithBadge from "../josephsection/JosephImageWithBadge";
import JosephTestimonialBox from "../josephsection/JosephTestimonialBox";

export default function JosephSection() {
  return (
    <section className="w-full bg-[#F8F8FA] flex justify-center py-[3.625rem]">
      <div
        className="
          w-[87.5rem] h-[42.5rem] mx-auto px-[10.25rem] relative flex

          max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:px-[2.5rem]
          max-[1024px]:gap-[1.875rem]

          max-[640px]:flex-col max-[640px]:px-[1.25rem] max-[640px]:gap-[1.25rem]
        "
      >
        <JosephImageWithBadge />
        <JosephTestimonialBox />
      </div>
    </section>
  );
}
