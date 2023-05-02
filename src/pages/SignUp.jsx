import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileForm from "../components/Form/ProfileForm";
import { AlertApi } from "../context/AlertContext";
export default function SignUp() {
  const [match, setMatch] = useState(true);
  const [Toggle, setToggle] = useState(true);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: "",
    rollNo: "",
    batch: "",
    profession: "",
    profile: "",
    proof: "",
    linkdln: "",
    facebook: "",
    twitter: "",
    about: "",
  });

  const { setAlert } = AlertApi();

  const handleinput = (e) => {
    const { value, id } = e.target;
    setInput({ ...input, [id]: value });
  };

  const checkpwd = () => {
    const { password, Cpassword } = input;

    if (!Cpassword || !password) {
      return setMatch(true);
    }

    if (Cpassword === password) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, password, email } = input;
    if (!name || !password || !email) {
      setAlert({ type: "error", message: "All feilds are required" });

      return;
    }
    const url = `${process.env.REACT_APP_API_KEY}/exist`;
    try {
      await axios.post(url, { email: email });
      setToggle(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      setAlert({ type: "error", message: "User are allredy exists " });
    }
  };

  useEffect(() => {
    checkpwd();
  }, [input]);

  return (
    <>
      <Navbar />

      {Toggle ? (
        <div className="w-full p-6 m-auto my-10 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700 underline">
            Sign up
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => {
                  handleinput(e);
                }}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  handleinput(e);
                }}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  handleinput(e);
                }}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="Cpassword"
                onChange={(e) => {
                  handleinput(e);
                }}
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            {match === true ? (
              ""
            ) : (
              <p className=" text-red-700">Password Not Match </p>
            )}

            <div className="mt-6">
              <button
                disabled={!match}
                onClick={(e) => {
                  onSubmit(e);
                }}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            having an account?{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:underline"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Sign in
            </Link>
          </p>
        </div>
      ) : (
        <ProfileForm
          input={input}
          setInput={setInput}
          handleinput={handleinput}
          setToggle={setToggle}
        />
      )}
      <Footer />
    </>
  );
}
