import React from "react";

import "./upload.css";
import { useState } from "react";
import axios from "axios";
import { AlertApi } from "../../context/AlertContext";
import Loader from "../Loader";
export default function Upload() {
  const { setAlert } = AlertApi();

  const [input, setInput] = useState({ Document: "", Title: "" });
  const [loder, setloder] = useState(true);
  const handleFileProfile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setInput({ ...input, Document: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    console.log(input);
    if (!input.Document || !input.Title) {
      setAlert({ type: "warning", message: "All fileds are Required " });
      return;
    }
    let url = `${process.env.REACT_APP_API_KEY}/admin/uploadDocument`;
    try {
      const response = await axios.post(url, input, {
        headers: {
          authorization: `berer ${window.sessionStorage.admin}`,
        },
      });
      console.log(response);
      setAlert({ type: "success", message: "Gallery Upload" });
    } catch (error) {
      setAlert({ type: "error", message: "somthing went wrong" });
    }
    setInput({ Document: "", Title: "" });
  };

  return (
    <>
      {loder ? (
        <div className="flex justify-center items-center h-32 ">
          <Loader />
        </div>
      ) : (
        <div className="upload_box">
          <div className="mb-5 w-full">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image Title
            </label>
            <input
              id="image"
              name="image"
              type="text"
              className="w-full border rounded px-3 py-2  text-green-700 bg-white  border-green-400 ring-green-300 focus:outline-none ring ring-opacity-40"
              placeholder="Image Title ......"
              value={input.Title}
              onChange={(e) => {
                setInput({ ...input, Title: e.target.value });
              }}
            />
          </div>
          <div className="form">
            <input type="file" onChange={handleFileProfile} />
            <p>Drag your files here or click in this area.</p>
            <div className="w-full flex justify-center ">
              <button onClick={handleSubmit}>Upload</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
