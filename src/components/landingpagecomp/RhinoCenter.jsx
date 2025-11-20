export default function RhinoCenter({ src }) {
  return (
    <div
      className="
        w-[492px] h-[300px]
        rounded-[999px]
        flex items-center justify-center
      "
    >
      <img 
        src={src}
        alt="rhino"
        className="h-[260px] object-contain"
      />
    </div>
  );
}
