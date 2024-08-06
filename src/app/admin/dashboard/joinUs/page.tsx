"use client";
import Thead from "@/components/Thead";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { showConfirmDeleteAlert } from "@/utils/alert";

function JoinUsPage() {
  const [data, setData] = useState<JoinUsData[]>([]);

  interface JoinUsData {
    id: number;
    title: string;
    description: string;
    url: string;
  }

  const getJoinUsData = () => {
    try {
      fetch(`http://localhost:9000/api/csc/join_us`)
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
      await showConfirmDeleteAlert(`http://localhost:9000/api/csc/join_us/delete/${id}`);
      await getJoinUsData();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getJoinUsData();
  }, []);
  return (
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl max-w-screen">
        <div className="p-6">
          <div className="flex flex-col justify-end items-end">
            <button className="flex items-center py-2 px-16 bg-primary mb-4 text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
              <Link href={"/admin/dashboard/joinUs/add"} className="uppercase">
                Tambah DATA
              </Link>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <Thead theads={["#", "Title", "Description", "URL"]} />
              <tbody className="text-xs">
                {data.map((d: JoinUsData, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="py-2 px-4  border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                          <Link href={`/admin/dashboard/joinUs/edit/${d.id}`}>
                            <FaRegEdit className="text-2xl text-orange-500" />
                          </Link>
                          <p onClick={() => handleDelete(d.id)}>
                            <FaRegTrashAlt className="text-2xl text-red-500" />
                          </p>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.title}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.description}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.url}</td>
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

export default JoinUsPage;
