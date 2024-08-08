"use client";
import CardSlider from "@/components/CardSlider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import { API_EVENT } from "@/utils/apiUrls";
import React, { useEffect, useState } from "react";
import { MdEventNote } from "react-icons/md";

function Event() {
  const [data, setData] = useState<EventData[]>([]);
  interface EventData {
    id: number;
    img_event: string;
    title_img: string;
    description: string;
    dateEvent: string;
    createdAt: string;
    updatedAt: string;
  }
  const getEventData = () => {
    try {
      fetch(API_EVENT)
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
    getEventData();
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#0B101C]">
      <TopNav />
      <Navbar />
      <div className="max-w-screen p-20">
        <div className="flex text-white items-center gap-2 ">
          <MdEventNote className="text-white icon-gradient text-2xl " />
          <p className="font-extrabold bg-gradient-to-r from-blue-500 to-white inline-block text-transparent bg-clip-text">EVENT CSC</p>
        </div>

        <div className="flex flex-col justify-between md:flex-row  mt-2">
          <div className="">
            <h1 className="text-3xl font-bold text-white tracking-[2px] md:text-xl">
              EVENT COMPUTER <br /> <span className="student">STUDENT</span> CLUB
            </h1>
          </div>

          {/* <button className="text-white font-bold bg-[#071952] px-16 py-2 mt-2 md:mt-0 rounded-sm md:rounded-xl hover:bg-blue-500 transition-all duration-300 tracking-[1px]">VIEW ALL</button> */}
        </div>

        <div className="">
          <CardSlider slides={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
