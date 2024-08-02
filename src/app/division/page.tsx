import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

function Division() {
  return (
    <div className="bg-[url('/bg-1.png')] bg-cover bg-no-repeat w-full  overflow-x-hidden">
      <TopNav />
      <Navbar />
      <div className=" font-poppins font-bold text-white flex flex-col items-center text-center md:text-justify md:flex-row justify-center gap-12 ">
        <p className="text-4xl uppercase ">
          CYBER
          <br />
          <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent mx-12">SECURITY</a>
        </p>
        <img src="/cybersecurity.png" alt="" />
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
        <div className="py-1 px-5 border-b border-white">
          <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">ABOUT</p>
        </div>
        <p className="text-sm text-justify md:text-center px-24 md:px-48 ">
          Divisi yang mempelajari dasar-dasar ethical hacking dan penetration testing. Para member akan diajari teknik-teknik peretasan yang umum digunakan serta syarat-syarat peretasan yang dianggap sah atau legal. Selain itu, para member
          di-support untuk aktif mengikuti kompetisi seperti Capture The Flag (CTF) dan lain-lain. Komunitas yang sehat dan terus belajar diharapkan terbentuk dari divisi ini.
        </p>
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">FOCUS AREA</h2>
          <ul className="list-disc">
            <li>Intro to Ethical Hacking</li>
            <li>Intro to Kali Linux</li>
            <li>5 Steps of Hacking</li>
            <li>Web Explanation</li>
            <li>Intro To CTF</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">LINKS</h2>
          <h2 className="text-3xl font-bold uppercase">SILABUS DIVISI CYBER SECURITY</h2>
          <Link href={"https://drive.google.com/file/d/1VU7ZppllIVihHJnFXuN7hQW9PjWuiWLy/view"} className="underline">
            Silabus Cyber Sec
          </Link>
        </div>
      </div>

      <div className=" bg-[url('/bg-1.png')] pt-10 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins  bg-cover bg-no-repeat w-full  overflow-x-hidden">
        <div className=" font-poppins font-bold text-white flex flex-col text-center items-center  md:text-justify md:flex-row justify-center gap-12 ">
          <p className="text-4xl uppercase mt-12">
            SOFTWARE
            <br />
            <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent mx-12">DEVELOPER</a>
          </p>
          <img src="/img2.png" alt="" />
        </div>
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
        <div className="py-1 px-5 border-b border-white">
          <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">ABOUT</p>
        </div>
        <p className="text-sm text-justify md:text-center  px-24 md:px-48 ">
          Divisi yang menggali dunia pemrograman dengan berfokus pada bahasa pemrograman, teknologi, dan konsep Pemrograman Berorientasi Objek (OOP). Kami menyelenggarakan berbagai proyek pengembangan perangkat lunak dan kompetisi
          pemrograman, serta berbagi sumber daya belajar dan tutorial bagi anggota kami. Divisi ini menjadi tempat yang ideal bagi individu yang ingin memperluas pengetahuan mereka dalam pengembangan perangkat lunak, baik untuk pemula
          maupun mereka yang telah memiliki pengalaman sebelumnya dalam dunia pemrograman. 
        </p>
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">FOCUS AREA</h2>
          <ul className="list-disc">
            <li>Pengembangan Perangkat Lunak dengan Python</li>
            <li>Fundamental Pemrograman</li>
            <li>Web Development</li>
            <li>HTML,CSS, Javascript, React</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">LINKS</h2>
          <h2 className="text-3xl font-bold uppercase">SILABUS DIVISI SoftDev</h2>
          <Link href={"https://docs.google.com/document/d/1ePnv0wGObce5oArHNT96i-AATvp79az5apFK7QNV5ng/edit"} className="underline">
            Silabus SoftDev
          </Link>
        </div>
      </div>

      <div className=" bg-[url('/bg-1.png')] pt-10 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins  bg-cover bg-no-repeat w-full  overflow-x-hidden">
        <div className=" font-poppins font-bold text-white flex flex-col text-center items-center  md:text-justify md:flex-row justify-center gap-12 ">
          <p className="text-4xl uppercase ">
            <br />
            <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent mx-12">EXPLORE</a>
          </p>
          <img src="/img3.png" alt="" />
        </div>
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
        <div className="py-1 px-5 border-b border-white">
          <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">ABOUT</p>
        </div>
        <p className="text-sm text-justify md:text-center px-24 md:px-48 ">
          Divisi yang memperkenalkan dunia dari Internet of Things (IoT) dan teknologi fisik. Kami mengeksplorasi konsep dasar IoT dan memberikan kesempatan bagi Anda untuk terlibat dalam praktik perakitan perangkat keras, eksperimen IoT,
          serta pengenalan komponen-komponen komputer. Di sini, kami mengundang Anda untuk menjelajahi kreativitas Anda dalam menciptakan solusi yang inovatif, yang dapat menghubungkan dunia fisik dengan dunia digital. Bergabunglah dengan
          kami dan temukan bagaimana teknologi dapat mengubah cara kita berinteraksi dengan lingkungan sekitar.  
        </p>
      </div>

      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">FOCUS AREA</h2>
          <ul className="list-disc">
            <li>Pengembangan Internet of Things (IoT).</li>
            <li>Praktik Perakitan Perangkat Keras</li>
            <li>Eksperimen IoT</li>
            <li>Pengenalan Komponen-Komponen Komputer</li>
            <li>Inovasi dalam pengembangan Produk Fisik.</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold uppercase">LINKS</h2>
          <h2 className="text-3xl font-bold uppercase">SILABUS DIVISI EXPLORE</h2>
          <Link href={"https://docs.google.com/document/d/1cbfB-5ni2MjKKhuxEsjybvWSSAGGHIO8J8jTMe_9s98/edit"} className="underline">
            Silabus EXPLORE
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Division;
