"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEventNote } from "react-icons/md";

function EventDetailPage({ params }: { params: { id: string } }) {
  interface EventData {
    id: number;
    img_event: string;
    title_img: string;
    description: string;
    dateEvent: string;
    createdAt: string;
    updatedAt: string;
  }

  const [data, setData] = useState<EventData | null>(null);

  const getDataNow = async () => {
    try {
      const newRes = await axios.get(`http://localhost:9000/api/csc/event/${params.id}`);
      setData(newRes.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataNow();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-hidden bg-[#0B101C]">
      <TopNav />
      <Navbar />
      <div className="max-w-screen p-20 min-h-screen ">
        <div className="flex text-white items-center gap-2 ">
          <MdEventNote className="text-white icon-gradient text-2xl " />
          <p className="font-extrabold bg-gradient-to-r from-blue-500 to-white inline-block text-transparent bg-clip-text">DETAIL EVENT CSC</p>
        </div>

        <div className="flex flex-col justify-between md:flex-row mt-2">
          <div className="">
            <h1 className="text-3xl font-bold text-white tracking-[2px] md:text-xl">
              EVENT COMPUTER <br /> <span className="student">STUDENT</span> CLUB
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center bg-primary p-10 mt-2">
          <img src={`http://localhost:9000/${data.img_event}`} alt={data.title_img} />
          <div className="w-1/2">
            <p className="text-white text-center">{data.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetailPage;
