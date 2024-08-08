"use client";
import Thead from "@/components/Thead";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { showConfirmDeleteAlert } from "@/utils/alert";
import { API_ABOUT, BASE_URL } from "@/utils/apiUrls";

function AboutPage() {
  const [data, setData] = useState<AboutData[]>([]);

  interface AboutData {
    id: number;
    headerImage: string;
    img: string;
    title_img: string;
    createdAt: string;
    updatedAt: string;
  }

  const getAboutData = () => {
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

  const handleDelete = async (id: number) => {
    try {
      await showConfirmDeleteAlert(`${API_ABOUT}/delete/${id}`);
      await getAboutData();
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
              <Thead theads={["#", "Header Image", "Img", "Title Img", "Log"]} />
              <tbody className="text-xs">
                {data.map((d: AboutData, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="py-2 px-4  border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                          <Link href={`/admin/dashboard/about/edit/${d.id}`}>
                            <FaRegEdit className="text-2xl text-orange-500" />
                          </Link>
                          <p onClick={() => handleDelete(d.id)}>
                            <FaRegTrashAlt className="text-2xl text-red-500" />
                          </p>
                        </div>
                      </td>

                      <td className="py-2 px-4 border-b border-gray-200">{d.img ? <img src={`${BASE_URL}/${d.img}`} alt="" className="w-24" /> : "No Image"}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.headerImage}</td>
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
