"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import { API_DIVISION, BASE_URL } from "@/utils/apiUrls";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Division() {
  const [data, setData] = useState<DivisionData[]>([]);

  interface DivisionData {
    id: number;
    title_division: string;
    description: string;
    image_division: string;
    focus_area: string;
    link_silabus: string;
    updatedAt: string;
    createdAt: string;
  }

  const GetDataDivision = () => {
    try {
      fetch(API_DIVISION)
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
    GetDataDivision();
  }, []);
  return (
    <div className="bg-[url('/bg-1.png')] bg-cover bg-no-repeat w-full  overflow-x-hidden">
      <TopNav />
      <Navbar />

      {data.map((item) => (
        <>
          <div className="bg-[url('/bg-1.png')] bg-cover bg-no-repeat  overflow-x-hidden font-poppins font-bold text-white flex flex-col items-center text-center md:text-justify md:flex-row justify-center gap-12 ">
            <p className="text-4xl uppercase ">{item.title_division}</p>
            <img src={`${BASE_URL}/${item.image_division}`} alt="" />
          </div>
          <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col items-center text-white gap-10 font-poppins">
            <div className="py-1 px-5 border-b border-white">
              <p className="font-bold text-4xl uppercase bg-gradient-to-r from-white to-[#3876D3] bg-clip-text text-transparent">ABOUT</p>
            </div>
            <p className="text-sm text-justify md:text-center px-16 md:px-48 ">{item.description}</p>
          </div>
          <div className="w-full bg-[#090f1f] pt-10 pb-20 flex flex-col md:flex-row justify-around px-32 text-white gap-10 font-poppins">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold uppercase">FOCUS AREA</h2>
              <ul className="list-disc">
                {item.focus_area.split(",").map((focus, i) => (
                  <li key={i}>{focus.trim()}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold uppercase">LINKS</h2>
              <h2 className="text-3xl font-bold uppercase">SILABUS DIVISI {item.title_division}</h2>
              <Link href={item.link_silabus} className="underline">
                Silabus Cyber Sec
              </Link>
            </div>
          </div>
        </>
      ))}

      <Footer />
    </div>
  );
}

export default Division;
