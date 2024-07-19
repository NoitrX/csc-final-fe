import { FiHome } from "react-icons/fi";

export default function Partners() {
    return (
        <div className="w-full bg-[#0D1221] text-white items-center gap-7 py-10 flex flex-col">
            <div className="flex items-center gap-5">
                <hr className="w-20 border border-[#555555]" />
                <div className="text-sm font-bold font-poppins uppercase flex items-center gap-2"><FiHome/> <p>Our Top Partner</p></div>
                <hr className="w-20 border border-[#555555]" />
            </div>
            <hr className="w-[calc(100%-10rem)] border border-[#555555]" />
            <div className="w-[calc(100%-10rem)] h-16 relative flex gap-16 overflow-hidden">
                <div className="min-w-full h-full absolute top-0 flex items-center animate-partner-slider gap-16 overflow-hidden">
                    <img src="/dicoding.png" alt="dicoding" className="h-full" />
                    <img src="/rumahhost.png" alt="rumahhost" className="h-full" />
                    <img src="/sekolahsiber.png" alt="sekolah siber" className="h-full" />
                    <img src="/ethicalhackerid.png" alt="ethical hacker indonesia" className="h-full" />
                </div>
                <div className="min-w-full h-full absolute top-0 flex items-center left-full animate-partner-slider-delayed gap-16 overflow-hidden">
                    <img src="/dicoding.png" alt="dicoding" className="h-full" />
                    <img src="/rumahhost.png" alt="rumahhost" className="h-full" />
                    <img src="/sekolahsiber.png" alt="sekolah siber" className="h-full" />
                    <img src="/ethicalhackerid.png" alt="ethical hacker indonesia" className="h-full" />
                </div>
            </div>
            <hr className="w-[calc(100%-10rem)] border border-[#555555]" />
        </div>
    )
}
