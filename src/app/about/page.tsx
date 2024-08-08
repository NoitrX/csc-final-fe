"use client";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BASE_URL, API_ABOUT } from "@/utils/apiUrls";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState<AboutData[]>([]);

  interface AboutData {
    id: number;
    headerImage: string;
    img: string;
    title_img: string;
    createdAt: string;
    updatedAt: string;
  }
  const getDataAbout = () => {
    try {
      fetch(API_ABOUT)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataAbout();
  }, []);
  return (
    <div className="bg-[url('/bg-1.png')] bg-cover bg-no-repeat w-full  overflow-x-hidden">
      <TopNav />
      <Navbar />
      <div className="p-20 font-poppins font-bold text-white">
        <p className="text-4xl uppercase">
          <AiOutlineInfoCircle className="inline text-3xl" /> About
          <br />
          <a className="bg-gradient-to-r from-[#3876D3] to-[#919EAA] bg-clip-text text-transparent">Computer</a> Student Club
        </p>
        <p className="text-sm mt-2">Temukan informasi lengkap mengenai Computer Student Club</p>
      </div>
      <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
        <div className="py-1 px-5 border-b border-white">
          <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">Profile CSC</p>
        </div>
        <p className="text-sm text-justify md:text-start  px-12 md:px-32 ">
          Computer Student Club (CSC) adalah kelompok studi mahasiswa di bawah naungan Jurusan Teknik Informatika dan Komputer, Politeknik Negeri Jakarta. Dengan fokus pada pengembangan minat dan bakat mahasiswa dalam bidang teknologi, CSC
          telah menjadi wadah untuk pemahaman yang lebih dalam tentang keamanan jaringan,pengembangan perangkat lunak, dan Internet of Things (IoT). Sejak berdiri pada tahun 2012, CSC telah berkomitmen untuk memberikan pengetahuan teknologi
          yang berharga, menginspirasi inovasi, dan mendukung prestasi mahasiswa dalam berbagai kegiatan dan proyek yang kami jalankan.
        </p>
        <div className="flex px-16 gap-14">
          <>
            <div className="w-full flex flex-col items-end gap-3">
              <div className="flex items-center font-medium text-2xl gap-3 uppercase">
                <p>Vision</p>
                <FaChevronDown />
              </div>
              <p className="text-xs text-justify md:text-start ">
                Menjadi wadah pengembangan minat dan bakat mahasiswa di bidang teknologi yang berfokus pada keamanan jaringan, pengembangan perangkat lunak, dan Internet of Things (IoT) yang menginspirasi inovasi dan menghasilkan pemimpin
                masa depan dalam dunia teknologi.
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center font-medium text-2xl gap-3 uppercase">
                <FaChevronDown />
                <p>Mission</p>
              </div>
              <p className="text-xs text-justify md:text-start ">
                Menjadi wadah pengembangan minat dan bakat mahasiswa di bidang teknologi yang berfokus pada keamanan jaringan, pengembangan perangkat lunak, dan Internet of Things (IoT) yang menginspirasi inovasi dan menghasilkan pemimpin
                masa depan dalam dunia teknologi.
              </p>
            </div>
          </>
        </div>
      </div>
      <div className="w-full bg-[url('/bg-1.png')] bg-cover pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
        <div className="py-1 px-5 border-b border-white">
          <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">History</p>
        </div>
        <p className="text-xs px-20 text-justify  md:px-32 md:text-center font-bold">
          Awal Terbentuk (2012):
          <br />
          CSC didirikan pada tahun 2012 oleh sekelompok mahasiswa yang bersemangat di Politeknik Negeri Jakarta. Klub ini awalnya berfokus pada teknologi secara umum, tetapi dengan waktu, berkembang menjadi wadah yang lebih luas untuk
          pengembangan minat dan bakat mahasiswa TIK.
        </p>
        <p className="text-xs px-20 text-justify  md:px-32 md:text-center font-bold">
          Momen Resmi Sebagai Kelompok Studi Mahasiswa (2012/2013):
          <br />
          Pada tahun 2012/2013, CSC secara resmi diakui sebagai Kelompok Studi Mahasiswa (KSM) di bawah naungan Jurusan Teknik Informatika dan Komputer. Ini menjadi tonggak bersejarah yang menegaskan peran penting CSC dalam pengembangan
          pemahaman teknologi mahasiswa.
        </p>
        <p className="text-xs px-20 text-justify  md:px-32 md:text-center font-bold">
          Fokus Divisi (2014):
          <br />
          Seiring berjalannya waktu, CSC membagi diri menjadi tiga divisi utama: Divisi Cyber Security, Divisi Soft Dev, dan Divisi Explore. Setiap divisi mengkhususkan diri dalam bidang tertentu seperti keamanan jaringan, pengembangan
          perangkat lunak, dan Internet of Things (IoT).
        </p>
        <p className="text-xs px-20 text-justify  md:px-32 md:text-center font-bold">
          Harapan CSC Untuk Masa Depan:
          <br />
          CSC terus memberikan dukungan berharga bagi mahasiswa yang ingin mendalami teknologi dan mengasah keahlian mereka. Menjadi wadah untuk eksplorasi teknologi, pembelajaran yang mendalam, dan kolaborasi inovatif.
        </p>
      </div>
      {data.map((item) => (
        <>
          <div className="w-full bg-[#01040E] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
            <div className="py-1 px-5 border-b border-white">
              <p className="font-bold text-4xl text-center bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">{item.headerImage}</p>
            </div>

            <>
              <div className="w-full flex justify-center px-20 gap-14">
                <div className="relative hidden md:flex font-medium mt-[10%]">
                  <BsArrow90DegDown className="rotate-45 absolute -right-5 -top-5 text-2xl" />
                  <p>President CSC</p>
                </div>
                <div className="min-w-64 max-w-[50%]">
                  <img src={`${BASE_URL}/${item.img}`} className="w-full" />
                </div>
                <div className="relative hidden md:flex font-medium mt-[10%]">
                  <BsArrow90DegRight className="rotate-45 absolute -left-5 -top-5 text-2xl" />
                  <p>Vice President CSC</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 px-20">
                <div className="text-right">
                  <p className="font-bold text-lg block md:hidden uppercase bg-gradient-to-r from-[#3876D3] to-white bg-clip-text text-transparent">President CSC</p>
                  <p className="text-sm md:text-base">{item.title_img}</p>
                </div>
              </div>
            </>
          </div>
        </>
      ))}

      <Footer />
    </div>
  );
}
