"use client";

import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import FAQQuestion from "@/components/FAQQuestion";
import Footer from "@/components/Footer";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function FAQ() {
  const [data, setData] = useState<AboutData[]>([]);

  interface AboutData {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  const getDataFaq = () => {
    try {
      fetch(`http://localhost:9000/api/csc/faq`)
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
    getDataFaq();
  }, []);
  return (
    <div className="bg-[#090E1A] overflow-x-hidden">
      <TopNav />
      <Navbar />
      <div className="w-full min-h-screen  p-12 md:p-20">
        <div className="flex items-center gap-3 font-poppins font-bold">
          <TbMessageCircleQuestion className="text-[#6597E1] text-2xl" />
          <p className="bg-gradient-to-r from-[#6597E1] to-[#D2D2D3] bg-clip-text text-transparent uppercase">Tentang CSC</p>
        </div>
        <div className="flex flex-col md:flex-row justify-normal md:justify-between gap-5 font-poppins mt-5">
          <p className="w-full text-4xl text-white font-bold uppercase">
            Frequently
            <br className="block sm:hidden" />
            <a className="bg-gradient-to-r from-[#9BC3FF] to-[#3935FF] bg-clip-text text-transparent ml-0 sm:ml-3">Asked</a>
            <br />
            Question
          </p>
          <p className="w-full text-[#B8B8B8] text-xs md:text-sm">
            Selamat datang di halaman FAQ Klub Komputer! Di sini, kami telah mengumpulkan berbagai pertanyaan yang sering diajukan oleh anggota dan calon anggota klub kami. Halaman ini bertujuan untuk memberikan informasi yang jelas dan
            membantu menjawab berbagai pertanyaan Anda mengenai CSC.
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 mt-10">
          {data.map((data) => (
            <>
              <FAQQuestion question={data.title} answer={data.description} />
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
