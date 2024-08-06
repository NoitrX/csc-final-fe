"use client";
import React, { useEffect, useState } from "react";

import { NextPage } from "next";
import InputLabel from "@/components/InputLabel";
import XButton from "@/components/XButton";
import axios from "axios";
import { showSuccessAlert } from "@/utils/alert";
import { useRouter } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditAbout: NextPage<Props> = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    headerImage: "",
    img: undefined,
    title_img: "",
  });

  const getDataNow = async () => {
    try {
      const newRes = await axios.get(`http://localhost:9000/api/csc/about/${params.id}`);
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
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  useEffect(() => {
    getDataNow();
  }, []);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:9000/api/csc/about/update/" + params.id, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessAlert("Data About Has Been Updated Successfully!");
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
};

export default EditAbout;
