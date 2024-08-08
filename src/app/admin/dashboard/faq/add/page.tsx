"use client";
import InputLabel from "@/components/InputLabel";
import XButton from "@/components/XButton";
import { showSuccessAlert } from "@/utils/alert";
import { API_FAQ } from "@/utils/apiUrls";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddFaq() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: value });
  };

  console.log(form);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post(API_FAQ, form);
      showSuccessAlert("Data Faq Has Been Added Successfully!");
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
        <h2 className="font-semibold">Form Faq</h2>
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
}
