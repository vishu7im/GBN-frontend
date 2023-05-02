import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.jpeg";
import Fab from "@mui/material/Fab";
import ReplyIcon from "@mui/icons-material/Reply";
import { FiDownload, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Email, LinkedIn, Facebook, Twitter } from "@mui/icons-material";
import { Transition } from "@headlessui/react";
import axios from "axios";
import { AlertApi } from "../../context/AlertContext";

const Proof = ({ src, title }) => {
  const fileName = title.split("/").pop();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleZoomIn = () => {
    setIsFullScreen(true);
  };

  const handleZoomOut = () => {
    setIsFullScreen(false);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isFullScreen ? "fixed top-0 left-0 w-full h-full z-50" : ""
      }`}
      onClick={!isFullScreen ? handleZoomIn : handleZoomOut}
    >
      <div
        className={`p-4 flex items-center justify-between border-b border-gray-200 ${
          isFullScreen ? "hidden" : ""
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white flex-shrink-0 rounded-lg p-2">
            <IoDocumentTextOutline className="h-6 w-6" />
          </div>
          <div className="font-semibold text-lg text-gray-800">{fileName}</div>
        </div>
        <a href={src} download className="flex items-center space-x-1">
          <FiDownload className="h-6 w-6 text-gray-600" />
          <span className="text-gray-600">Download</span>
        </a>
      </div>
      <Transition
        show={isFullScreen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={handleZoomOut}
              className="bg-gray-700 text-white rounded-md px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-600"
            >
              <FiZoomOut className="h-5 w-5" />
              <span className="ml-2">Exit Fullscreen</span>
            </button>
          </div>
          <iframe
            src={src}
            title={title}
            className="w-screen h-screen"
            style={{ minHeight: "800px" }}
          />
        </div>
      </Transition>
      <div
        className={`absolute top-0 right-0 p-4 ${isFullScreen ? "hidden" : ""}`}
      >
        <button
          onClick={handleZoomIn}
          className="bg-gray-700 text-white rounded-md px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-600"
        >
          <FiZoomIn className="h-5 w-5 z-0" />
          <span className="ml-2">Zoom In</span>
        </button>
      </div>
    </div>
  );
};

export default function Response({
  setLoders,
  Toggle,
  data,
  Disablebtn,
  setDisablebtn,
  setToggle,
}) {
  const navigate = useNavigate();
  const [isOpenAccept, setIsOpenAccept] = useState(false);
  const [isOpenReject, setIsOpenReject] = useState(false);
  const [input, setInput] = useState("");
  const { setAlert } = AlertApi();
  const ConfirmAccept = async () => {
    setDisablebtn(true);
    setLoders(true);
    let url = `${process.env.REACT_APP_API_KEY}/admin/response`;
    try {
      const response = await axios.post(
        url,
        {
          email: `${data.email}`,
          flage: "Accept",
        },
        {
          headers: {
            authorization: `berer ${window.sessionStorage.admin}`,
          },
        }
      );
      setAlert({ type: "success", message: response.data.msg });
      navigate("/admin/panel");
      setLoders(false);
      setToggle(false);
    } catch (error) {
      setAlert({ type: "error", message: error.response.data.msg });
    }
    setLoders(false);

    setDisablebtn(false);
  };

  const ConfirmReject = async () => {
    setDisablebtn(true);
    setLoders(true);
    let url = `${process.env.REACT_APP_API_KEY}/admin/response`;
    try {
      const response = await axios.post(
        url,
        {
          email: `${data.email}`,
          flage: "Reject",
          remark: input,
        },
        {
          headers: {
            authorization: `berer ${window.sessionStorage.admin}`,
          },
        }
      );
      setAlert({ type: "success", message: response.data.msg });
      navigate("/admin/panel");
      setLoders(false);
      setToggle(false);
    } catch (error) {
      console.log(error);
      console.log(`JWT ${window.sessionStorage.admin}`);
      setAlert({ type: "error", message: error.response.data.msg });
    }
    setLoders(false);

    setDisablebtn(false);
  };
  //buttons
  const handleAccept = () => {
    setIsOpenAccept(!isOpenAccept);
  };
  const handleReject = () => {
    setIsOpenReject(!isOpenReject);
  };
  return (
    <>
      {/* Accept model  */}
      <div
        className={`${
          isOpenAccept
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
      >
        {/* Modal container */}
        <div className="bg-white rounded-lg z-50 w-1/2">
          <div className="px-4 py-2 text-center">
            <h2 className="text-lg font-bold mb-2">Alert!</h2>
            <p className="text-gray-500">
              Are you sure you want to Accept this alumni?
            </p>
          </div>
          <div className="px-4 py-2 flex justify-end">
            <button
              onClick={handleAccept}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              disabled={Disablebtn}
              onClick={ConfirmAccept}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
      {/* Accept model  */}

      {/* Reject model  */}
      <div
        className={`${
          isOpenReject
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
      >
        {/* Modal container */}
        <div className="bg-white rounded-lg z-50 w-1/2">
          <div className="px-4 py-2 text-center">
            <h2 className="text-lg font-bold mb-2">Alert!</h2>
            <p className="text-gray-500">
              Are you sure you want to Reject this alumni?
            </p>
            <div className="mb-5 my-4">
              <label
                htmlFor="about"
                className="block text-gray-700 font-bold mb-2"
              >
                Remarks
              </label>
              <textarea
                id="about"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                placeholder="Write something why you Reject this Application?"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="px-4 py-2 flex justify-end">
            <button
              onClick={handleReject}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              disabled={Disablebtn}
              onClick={ConfirmReject}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
      {/* Reject model  */}

      <div className="flex justify-center z-4 items-center">
        <div>
          <img src={Logo} alt="GBN logo" className="h-20  m-3 " />
        </div>
        <p class="text m-3 heading">GBN Govt. polytechnic Nilokheri</p>
      </div>

      <div className="admin_heading_main  ">
        <div className="icon z-10">
          <Fab
            variant="extended"
            onClick={() => {
              Toggle(false);
            }}
          >
            <ReplyIcon sx={{ mr: 1 }} />
            Back
          </Fab>
        </div>
        <div className="admin_heading_box">
          <p className="admin_heading">Alumni Profile</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center mb-4">
              <img
                src={data.profile}
                alt="Profile"
                className="rounded-full w-40 h-40 object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p className="text-gray-500">{data.profession}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="flex items-center mb-4">
                <Email className="w-4 h-4 mr-2 fill-current text-gray-500" />
                <p className="text-gray-500">{data.email}</p>
              </div>
              <div className="flex items-center mb-4">
                <LinkedIn className="w-4 h-4 mr-2 fill-current text-gray-500" />
                <a
                  href={data.linkdln}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  {data.linkdln}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Facebook className="w-4 h-4 mr-2 fill-current text-gray-500" />
                <a
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  {data.facebook}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Twitter className="w-4 h-4 mr-2 fill-current text-gray-500" />
                <a
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  {data.twitter}
                </a>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={handleAccept}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17l-3.59-3.58L4 14l5 5 10-10-1.41-1.42L9 16.17z"></path>
                    </svg>
                    Accept
                  </span>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={handleReject}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.83 12l4.88-4.88L18.71 6l-4.88 4.88L18.71 16l1.41-1.41L14.83 12z"></path>
                      <path d="M9.17 12l-4.88-4.88L5.29 6 10.17 10.88 5.29 16l1.41 1.41L9.17 12z"></path>
                    </svg>
                    Reject
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* about block  */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-gray-500">{data.about}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-500">
                {data.batch} Batch | Roll No: {data.rollNo}
              </p>
            </div>
            {data.proof && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Proof</h3>
                <Proof src={data.proof} title={"Document"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
