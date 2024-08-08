"use client";
import InputLabel from "@/components/InputLabel";
import XButton from "@/components/XButton";
import { showSuccessAlert } from "@/utils/alert";
import { API_ABOUT } from "@/utils/apiUrls";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddAbout() {
  const router = useRouter();
  const [form, setForm] = useState({
    headerImage: "",
    img: undefined,
    title_img: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post(API_ABOUT, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessAlert("Data About Has Been Added Successfully!");
      router.push("/admin/dashboard/about");
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
            <InputLabel errors={alert.msg} label="Header Image" type="text" placeholder="Enter Header Image" name="headerImage" value={form.headerImage} onChange={handleChange} />
          </div>

          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Image" type="file" placeholder="Enter Image" name="img" onChange={handleChange} />
          </div>

          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Title Img" type="text" placeholder="Enter Title Img" name="title_img" value={form.title_img} onChange={handleChange} />
          </div>

          <div className="flex justify-end items-end mt-3">
            <XButton onClick={handleSubmit}>SUBMIT</XButton>
          </div>
        </form>
      </div>
    </div>
  );
}
