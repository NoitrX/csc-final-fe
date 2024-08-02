"use client";
import Thead from "@/components/Thead";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AboutPage() {
  const [data, setData] = useState<AboutData[]>([]);

  interface AboutData {
    description: string;
    vision: string;
    mission: string;
    img: string;
    title_img: string;
    createdAt: string;
    updatedAt: string;
  }

  const getAboutData = () => {
    try {
      fetch(`http://localhost:9000/api/csc/about`)
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
    getAboutData();
  }, []);
  return (
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl max-w-screen">
        <div className="p-6">
          <div className="flex flex-col justify-end items-end">
            <button className="flex items-center py-2 px-16 bg-primary mb-4 text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
              <Link href={"/admin/dashboard/about/add"} className="uppercase">
                Tambah DATA
              </Link>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <Thead theads={["#", "Description", "Vision", "Mission", "Img", "Title Img", "Log"]} />
              <tbody className="text-xs">
                {data.map((d: AboutData, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="py-2 px-4 border-b border-gray-200">{i + 1}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.description}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.vision}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.mission}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.img ? <img src={`http://localhost:9000/${d.img}`} alt="" className="w-24" /> : "No Image"}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.title_img}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.createdAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
