"use client";
import InputLabel from "@/components/InputLabel";
import XButton from "@/components/XButton";
import { showSuccessAlert } from "@/utils/alert";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddDivision() {
  const router = useRouter();
  const [form, setForm] = useState({
    title_division: "",
    description: "",
    image_division: undefined,
    focus_area: "",
    link_silabus: "",
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
      await axios.post("http://localhost:9000/api/csc/division", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessAlert("Data Division Has Been Added Successfully!");
      router.push("/admin/dashboard/division");
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
        <h2 className="font-semibold">Form Division</h2>
        <p className="text-red-500">{alert.msg}</p>
        <hr className="mt-2" />
        <form className="w-full">
          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Title Division" type="text" placeholder="Enter Title Division" name="title_division" value={form.title_division} onChange={handleChange} />
            <InputLabel errors={alert.msg} label="Description " type="text" placeholder="Enter Description" name="description" value={form.description} onChange={handleChange} />
          </div>

          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Focus Area" type="text" placeholder="Enter Focus Area" name="focus_area" value={form.focus_area} onChange={handleChange} />
            <InputLabel errors={alert.msg} label="Image Division" type="file" placeholder="Enter Image Division" name="image_division" onChange={handleChange} />
          </div>

          <div className="mt-3 flex w-full justify-between gap-3">
            <InputLabel errors={alert.msg} label="Link Silabus" type="text" placeholder="Enter Link Silabus" name="link_silabus" value={form.link_silabus} onChange={handleChange} />
          </div>

          <div className="flex justify-end items-end mt-3">
            <XButton onClick={handleSubmit}>SUBMIT</XButton>
          </div>
        </form>
      </div>
    </div>
  );
}
