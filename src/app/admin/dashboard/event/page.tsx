"use client";
import Thead from "@/components/Thead";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { showConfirmDeleteAlert } from "@/utils/alert";

function EventPage() {
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
      fetch(`http://localhost:9000/api/csc/event`)
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
      await showConfirmDeleteAlert(`http://localhost:9000/api/csc/event/delete/${id}`);
      await getEventData();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEventData();
  }, []);
  return (
    <div>
      <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl max-w-screen">
        <div className="p-6">
          <div className="flex flex-col justify-end items-end">
            <button className="flex items-center py-2 px-16 bg-primary mb-4 text-white font-bold gap-5 font-ubuntu hover:bg-blue-700 transition-all duration-200">
              <Link href={"/admin/dashboard/event/add"} className="uppercase">
                Tambah DATA
              </Link>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <Thead theads={["#", "Img Event", "Title Image", "Description", "Date Event", "Log"]} />
              <tbody className="text-xs">
                {data.map((d: EventData, i) => {
                  return (
                    <tr className="text-center" key={i}>
                      <td className="py-2 px-4  border-gray-200">
                        <div className="flex justify-center items-center gap-2">
                          <Link href={`/admin/dashboard/event/edit/${d.id}`}>
                            <FaRegEdit className="text-2xl text-orange-500" />
                          </Link>
                          <p onClick={() => handleDelete(d.id)}>
                            <FaRegTrashAlt className="text-2xl text-red-500" />
                          </p>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.img_event ? <img src={`http://localhost:9000/${d.img_event}`} alt="" className="w-24" /> : "No Image"}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.description}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.title_img}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{d.dateEvent}</td>
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

export default EventPage;
