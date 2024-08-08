"use client";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import { BsArrow90DegDown, BsArrow90DegRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_JOIN_US } from "@/utils/apiUrls";

export default function About() {
  const [data, setData] = useState<JoinUsData[]>([]);

  interface JoinUsData {
    id: number;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }
  const getDataAbout = () => {
    try {
      fetch(API_JOIN_US)
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
      <div className=" bg-[#0D1221] w-screen min-h-screen flex items-center justify-center">
        {data.map((item) => (
          <>
            <div className="text-center bg-white p-8 rounded shadow-lg max-w-md mx-auto">
              <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
              <p className="text-lg mb-4">{item.description}</p>
              <Link href={item.url} className="text-blue-500 underline">
                Eligibility Link
              </Link>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
}
