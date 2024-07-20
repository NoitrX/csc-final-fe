"use client";
import { FiHome } from "react-icons/fi";

function Slider({ images }: { images: string[] }) {
  return (
    <div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${-250 * images.length - 64 * images.length}px);
          }
        }

        .slider {
          animation: slide 10s linear infinite;
        }
      `}</style>
      <div className="slider min-w-full h-full absolute top-0 flex items-center gap-16 overflow-hidden">
        {images.map((image, index) => (
          <div className="w-[250px] h-full flex justify-center overflow-hidden" key={index}>
            <img src={image} alt={`partner-${index}`} className="h-full object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="w-[250px] h-full flex justify-center overflow-hidden" key={images.length+index}>
            <img src={image} alt={`partner-${index}`} className="h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Partners() {
  return (
    <div className="w-full bg-[#0D1221] text-white items-center gap-7 py-10 flex flex-col">
      <div className="flex items-center gap-5">
        <hr className="w-20 border border-[#555555]" />
        <div className="text-sm font-bold font-poppins uppercase flex items-center gap-2">
          <FiHome /> <p>Our Top Partner</p>
        </div>
        <hr className="w-20 border border-[#555555]" />
      </div>
      <hr className="w-[calc(100%-10rem)] border border-[#555555]" />
      <div className="w-full h-16 relative flex gap-16 overflow-hidden ">
        <Slider
          images={[
            "/dicoding.png",
            "/rumahhost.png",
            "/sekolahsiber.png",
            "/ethicalhackerid.png"
          ]}
        />
      </div>
      <hr className="w-[calc(100%-10rem)] border border-[#555555]" />
    </div>
  );
}
