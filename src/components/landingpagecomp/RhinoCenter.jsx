export default function RhinoCenter({ src }) {
  return (
    <div
      className="
        w-[380px] h-[196px]        
        sm:w-[350px] sm:h-[200px]  
        md:w-[492px] md:h-[300px]  
        rounded-[999px]
        flex items-center justify-center
      "
    >
      <img 
        src={src}
        alt="rhino"
        className="
          h-[160px]                
          sm:h-[180px]
          md:h-[260px]
          object-contain
        "
      />
    </div>
  );
}
