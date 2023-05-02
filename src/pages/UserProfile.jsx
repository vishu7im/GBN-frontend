import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_KEY}/admin/getuser/${id}`
        );
        setLoader(false);
        setUser(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        navigate("/");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    fetchUser();
  }, [id]);

  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <div className=" bg-slate-200 ">
          <Navbar />
          <div className="bg-green-200 p-4 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={user.profile}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full border-4 border-green-600"
                />
                <h2 className="text-3xl font-bold text-gray-800 mt-6">
                  {user.name}
                </h2>
                <p className="text-green-600 text-xl mt-2">{user.profession}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between mt-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <FaLinkedin className="h-8 w-8 text-green-600" />
                  <a
                    href={user.linkedin}
                    className="text-green-600 hover:text-green-700 text-lg ml-2"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                  <FaFacebook className="h-8 w-8 text-green-600" />
                  <a
                    href={user.facebook}
                    className="text-green-600 hover:text-green-700 text-lg ml-2"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                  <FaTwitter className="h-8 w-8 text-green-600" />
                  <a
                    href={user.twitter}
                    className="text-green-600 hover:text-green-700 text-lg ml-2"
                  >
                    Twitter
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-8 w-8 text-green-600" />
                  <a
                    href={`mailto:${user.email}`}
                    className="text-green-600 hover:text-green-700 text-lg ml-2"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-800">{user.about}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center mt-10">
                <div className="flex items-center justify-center bg-green-600 text-white rounded-full h-10 w-10 mb-4 md:mb-0 md:mr-4">
                  <FaLinkedin
                    onClick={() => {
                      window.open(`${user.linkdln}`);
                    }}
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex items-center justify-center bg-green-600 text-white rounded-full h-10 w-10 mb-4 md:mb-0 md:mr-4">
                  <FaFacebook
                    onClick={() => {
                      window.open(`${user.facebook}`);
                    }}
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex items-center justify-center bg-green-600 text-white rounded-full h-10 w-10">
                  <FaTwitter
                    onClick={() => {
                      window.open(`${user.twitter}`);
                    }}
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default UserProfile;
