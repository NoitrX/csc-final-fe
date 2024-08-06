"use client";
import Thead from "@/components/Thead";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { showConfirmDeleteAlert } from "@/utils/alert";

function DivisionPage() {
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

  const getDivisionData = () => {
    try {
      fetch(`http://localhost:9000/api/csc/division`)
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
      await showConfirmDeleteAlert(`http://localhost:9000/api/csc/division/delete/${id}`);
      await getDivisionData();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDivisionData();
  }, []);
  return (
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl max-w-screen">
        <div className="p-6">
          <div className="flex flex-col justify-end items-end">
            <button className="flex items-center py-2 px-16 bg-primary mb-4 text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
              <Link href={"/admin/dashboard/division/add"} className="uppercase">
                Tambah DATA
              </Link>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <Thead theads={["#", "Title Division", "Description", "Image Division", "Focus Area", "Link Silabus", "Log"]} />
              <tbody className="text-xs">
                {data.map((d: DivisionData, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="py-2 px-4  border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                          <Link href={`/admin/dashboard/division/edit/${d.id}`}>
                            <FaRegEdit className="text-2xl text-orange-500" />
                          </Link>
                          <p className="cursor-pointer" onClick={() => handleDelete(d.id)}>
                            <FaRegTrashAlt className="text-2xl text-red-500" />
                          </p>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.title_division}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.description}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.image_division ? <img src={`http://localhost:9000/${d.image_division}`} alt="" className="w-24" /> : "No Image"}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.focus_area}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.link_silabus}</td>
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

export default DivisionPage;
