import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { FiBookmark, FiPhone } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";
import { FaHeadphones, FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/bg-1.png')] bg-cover">
      <TopNav />
      <Navbar />
      <div className="  p-20 flex flex-col gap-3 items-center text-center text-white">
        <p className="font-ubuntu font-bold text-2xl uppercase">Selamat Datang di</p>
        <p className="font-poppins font-bold text-5xl uppercase">
          Website <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent">Computer</a> Student Club
        </p>
        <p className="font-poppins font-bold text-3xl uppercase">CSC PNJ</p>
        <p className="font-poppins w-[48rem] max-w-full text-sm">
          Kami adalah kelompok studi mahasiswa di bawah naungan jurusan TIK Politeknik Negeri Jakarta. Berfokus pada pengembangan minat dan bakat mahasiswa serta meningkatkan capaian prestasi mahasiswa. 
        </p>
        <div className="w-48 h-48 rounded-full border border-white flex items-center justify-center">
          <img src="/csc-logo.png" alt="" />
        </div>
        <p className="font-ubuntu font-bold text-2xl">#UnlimitedConnectionID</p>
        <div className="flex flex-col md:flex-row mt-10 gap-3 md:gap-32">
          <Link href={"/about"} className="flex items-center py-2 px-16 border-2 border-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
            <FiBookmark />
            <p className="uppercase">Learn More</p>
          </Link>
          <button className="flex items-center py-2 px-16 bg-primary text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
            <FiPhone />
            <Link href={"https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU"} className="uppercase">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
      <Partners />
      <div className="w-full bg-[#01040E] text-white flex flex-col-reverse md:flex-row p-20 gap-20">
        <div className="flex flex-col gap-10 min-w-full max-w-full md:min-w-[50%] md:max-w-[50%]">
          <div className="flex items-center gap-5 text-[#6597E1] font-bold font-poppins">
            <FaRegSnowflake />
            <p className="uppercase">Tentang CSC</p>
          </div>
          <p className="font-poppins font-bold text-3xl">Tempat Untuk Mempelajari Sesuatu dan Mengasah Sesuatu</p>
          <p className="font-poppins text-sm text-justify">
            Computer Student Club (CSC) adalah kelompok studi mahasiswa di Politeknik Negeri Jakarta yang berfokus pada ranah keamanan siber, pengembangan perangkat lunak, dan IoT. Kami bertujuan untuk mengembangkan minat dan bakat
            mahasiswa serta meningkatkan prestasi mereka dalam bidang teknologi.
          </p>
          <Link href={"/about"} className="w-full bg-primary flex justify-center items-center gap-3 py-3 hover:bg-blue-700 transition-all duration-200">
            <FaMagnifyingGlass />
            <p className="font-ubuntu font-bold text-sm uppercase">About CSC</p>
          </Link>
          <div className="flex flex-col lg:flex-row items-end gap-10">
            <div className="border-b border-[#6597E1] py-2 flex items-center font-poppins font-bold text-3xl gap-3 w-full h-full">
              <p className="bg-gradient-to-r from-[#6597E1] to-[#999999] bg-clip-text text-transparent">100++</p>
              <p className="uppercase bg-gradient-to-r from-[#6597E1] to-[#999999] bg-clip-text text-transparent">
                Graduate
                <br />
                Member
              </p>
            </div>
            <div className="border-b border-[#6597E1] py-2 flex items-center font-poppins font-bold text-3xl gap-3 w-full h-full">
              <p className="bg-gradient-to-r from-[#6597E1] to-[#999999] bg-clip-text text-transparent">3</p>
              <p className="uppercase bg-gradient-to-r from-[#6597E1] to-[#999999] bg-clip-text text-transparent">Division</p>
            </div>
          </div>
        </div>
        <div className="min-h-[auto] md:min-h-full max-h-full min-w-full max-w-full md:min-w-[auto] overflow-hidden">
          <img src="/coding.png" className="h-auto md:h-full w-full md:w-auto object-cover" />
        </div>
      </div>
      <div className="w-full p-20 bg-[#0D1221] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-poppins">
        <div className="flex items-center justify-center lg:justify-center gap-5">
          <img src="/softdev-logo.svg" />
          <p className="font-bold text-3xl uppercase bg-gradient-to-r from-[#6597E1] to-white bg-clip-text text-transparent">
            Software
            <br />
            Development
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-center gap-5">
          <img src="/cybersec-logo.svg" />
          <p className="font-bold text-3xl uppercase bg-gradient-to-r from-[#6597E1] to-white bg-clip-text text-transparent">
            Cyber
            <br />
            Security
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-center md:col-span-2 lg:col-span-1 gap-5">
          <img src="/explore-logo.svg" />
          <p className="font-bold text-3xl uppercase bg-gradient-to-r from-[#6597E1] to-white bg-clip-text text-transparent">
            Explore
            <br />
            (IoT)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
