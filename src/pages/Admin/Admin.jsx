import React, { useState } from "react";
import "./admin.css";
import Logo from "../../Assets/Logo.jpeg";
import Request from "../../components/Request/Request";
import Response from "./Response";
import Upload from "../../components/upload/Upload";
import Loader from "../../components/Loader";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setrequest] = useState([]);
  const [Loders, setLoders] = useState(false);
  const [Disablebtn, setDisablebtn] = useState(false);
  const [currentUser, setcurrentUser] = useState({});
  const [NewsEvent, setNewsEvent] = useState("Event");
  const [Toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const fetchRequest = async () => {
    let url = `${process.env.REACT_APP_API_KEY}/admin/user`;
    setLoders(true);
    try {
      const response = await axios.get(url, {
        headers: {
          authorization: `berer ${window.sessionStorage.admin}`,
        },
      });
      setrequest(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoders(false);
  };
  useEffect(() => {
    setLoders(true);
    const token = sessionStorage.getItem("admin");
    console.log(token);
    if (!token) {
      navigate("/admin");
      return;
    }

    const decodedToken = jwt_decode(token);
    if (!decodedToken.admin) {
      navigate("/admin");
    }
    setLoders(false);
    fetchRequest();
  }, []);
  useEffect(() => {
    fetchRequest();
  }, [Toggle]);

  if (Toggle) {
    return (
      <>
        {Loders ? (
          <Loader />
        ) : (
          <Response
            data={currentUser}
            Toggle={setToggle}
            Disablebtn={Disablebtn}
            setDisablebtn={setDisablebtn}
            setLoders={setLoders}
            setToggle={setToggle}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {Loders ? (
          <Loader />
        ) : (
          // logout modal

          <div>
            {/* logout model  */}
            <div
              className={`${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}
            >
              {/* Modal container */}
              <div className="bg-white rounded-lg z-50 w-1/2">
                <div className="px-4 py-2 text-center">
                  <h2 className="text-lg font-bold mb-2">Confirm Logout</h2>
                  <p className="text-gray-500">
                    Are you sure you want to log out?
                  </p>
                </div>
                <div className="px-4 py-2 flex justify-end">
                  <button
                    onClick={toggleModal}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      sessionStorage.removeItem("admin");
                      navigate("/admin");
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {/* logout model  */}

            <div className="flex justify-center items-center">
              <div>
                <img src={Logo} alt="GBN logo" className="h-20  m-3 " />
              </div>
              <p class="text m-3 heading">GBN Govt. polytechnic Nilokheri</p>
            </div>
            <div className="Admin_container">
              <div className="admin_heading_box">
                <p className="admin_heading">Admin Panel </p>
                <div className="Logout" onClick={toggleModal}>
                  <LogoutIcon />
                </div>
              </div>
              <div className="admin_content">
                <div className="admin_boxA">
                  <div>
                    <h1 className="admin_Request">Requests</h1>
                  </div>
                  <div className="admin_series">
                    {requests.map((element) => {
                      return (
                        <Request
                          user={setcurrentUser}
                          profile={element}
                          Toggle={setToggle}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="admin_boxB">
                  <div className="updateNewsEvent">
                    <div
                      className={`tag event ${
                        NewsEvent === "Event" ? "active" : ""
                      }`}
                      onClick={() => {
                        setNewsEvent("Event");
                      }}
                    >
                      <p>Event</p>
                    </div>
                    <div
                      className={`tag news ${
                        NewsEvent === "News" ? "active" : ""
                      }`}
                      onClick={() => {
                        setNewsEvent("News");
                      }}
                    >
                      <p>News</p>
                    </div>
                  </div>

                  {NewsEvent === "Event" ? (
                    <>
                      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
                        <div className="mb-5">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Event Heading
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full border rounded px-3 py-2  text-green-700 bg-white  border-green-400 ring-green-300 focus:outline-none ring ring-opacity-40"
                            placeholder="Enter Event Heading"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="about"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Event Content
                          </label>
                          <textarea
                            id="about"
                            className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                            placeholder="Write content of event "
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Date
                          </label>
                          <input
                            id="name"
                            type="date"
                            className="w-full border rounded px-3 py-2  text-green-700 bg-white  border-green-400 ring-green-300 focus:outline-none ring ring-opacity-40"
                            placeholder="Enter your name"
                          />
                        </div>
                        <button
                          disabled={Disablebtn}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Event
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
                        <div className="mb-5">
                          <label
                            htmlFor="about"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            News
                          </label>
                          <textarea
                            id="about"
                            className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                            placeholder="Write their News "
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                          >
                            Date
                          </label>
                          <input
                            id="name"
                            type="date"
                            className="w-full border rounded px-3 py-2  text-green-700 bg-white  border-green-400 ring-green-300 focus:outline-none ring ring-opacity-40"
                            placeholder="Enter your name"
                          />
                        </div>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          disabled={Disablebtn}
                        >
                          News
                        </button>
                      </form>
                    </>
                  )}
                </div>
                <div className="admin_boxC">
                  <div className="justify-center flex">
                    <h1 className="Upload_heading">Gallery</h1>
                  </div>
                  <Upload />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
