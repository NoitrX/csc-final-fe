"use client";
import React, { useEffect, useState } from "react";

import { NextPage } from "next";
import InputLabel from "@/components/InputLabel";
import XButton from "@/components/XButton";
import axios from "axios";
import { showSuccessAlert } from "@/utils/alert";
import { useRouter } from "next/navigation";
import { API_FAQ } from "@/utils/apiUrls";

interface Props {
  params: { id: string };
}

const EditFaq: NextPage<Props> = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const getDataFaq = async () => {
    try {
      const newRes = await axios.get(`${API_FAQ}/${params.id}`);
      setForm(newRes.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    getDataFaq();
  }, []);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put(API_FAQ + "/update/" + params.id, form);
      showSuccessAlert("Data FAQ Has Been Updated Successfully!");
      router.push("/admin/dashboard/faq");
    } catch (err: any) {
      console.log(err);
      setAlert({
        status: true,
        type: "error",
        msg: err.response.data.msg,
      });
    }
  };
  return (
    <div className=" max-w-screen">
      <div className="border border-gray-200 p-6 mt-3 rounded-md w-full">
        <h2 className="font-semibold">Form About</h2>
        <p className="text-red-500">{alert.msg}</p>
        <hr className="mt-2" />
        <form className="w-full">
          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Title" type="text" placeholder="Enter Title" name="title" value={form.title} onChange={handleChange} />
          </div>

          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Description" type="text" placeholder="Enter Description" name="description" value={form.description} onChange={handleChange} />
          </div>

          <div className="flex justify-end items-end mt-3">
            <XButton onClick={handleSubmit}>SUBMIT</XButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFaq;
