import React, { useEffect, useState } from "react";
import { AlertApi } from "../../context/AlertContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OTPForm from "./OtpForm";

export default function ProfileForm({ input, setInput, handleinput }) {
  const { setAlert } = AlertApi();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [ForValidation, setForValidation] = useState(false);
  const [Validatetoken, setValidatetoken] = useState("");

  const handleFileProof = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setInput({ ...input, proof: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFileProfile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setInput({ ...input, profile: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const sentOtp = async () => {
    console.log("otp");
    let url = `${process.env.REACT_APP_API_KEY}/otpsent`;
    try {
      const res = await axios.post(url, { email: input.email });
      setValidatetoken(res.data.token);
    } catch (error) {}
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, rollNo, batch, profession, proof } = input;
    if (
      !name ||
      !email ||
      !password ||
      !rollNo ||
      !proof ||
      !batch ||
      !profession
    ) {
      setAlert({ type: "warning", message: "Feilds are mandatory" });
      return;
    }
    sentOtp();
    setForValidation(true);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  };

  const toggleclose = () => {
    navigate("/");
    setInput({
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Modal overlay */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed w-full h-full top-0 left-0 flex items-center  z-50 justify-center bg-gray-800 bg-opacity-50`}
      >
        {/* Modal container */}
        <div className="bg-white    rounded-lg w-1/2">
          <div className="px-4 py-2  text-center">
            <h2 className="text-lg font-bold mb-2">Thank You for Joining!</h2>
            <p className="text-gray-500">
              Your registration is being processed. Please wait for the
              institute's approval.
            </p>
          </div>
          <div className="px-4 py-2 flex justify-end">
            <button
              onClick={toggleclose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {ForValidation ? (
        <>
          <div className="max-w-md mx-auto m-10  bg-white rounded p-5 shadow">
            <OTPForm
              sentOtp={sentOtp}
              Validatetoken={Validatetoken}
              setForValidation={setForValidation}
              input={input}
              setIsOpen={setIsOpen}
            />
          </div>
        </>
      ) : (
        <div className="max-w-md mx-auto m-10  bg-white rounded p-5 shadow">
          <h2 className="text-2xl font-bold mb-5">Alumni profile </h2>
          <form
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border rounded px-3 py-2  text-green-700 bg-white  border-green-400 ring-green-300 focus:outline-none ring ring-opacity-40"
                placeholder="Enter your name"
                value={input.name}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  text-green-700 bg-white  border-green-400 ring-green-300  ring ring-opacity-40"
                placeholder="johndoe@example.com"
                value={input.email}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="rollNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Roll No.
              </label>
              <input
                type="text"
                id="rollNo"
                name="rollNo"
                value={input.rollNo}
                onChange={handleinput}
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                placeholder="123456"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="batch"
                className="block text-gray-700 font-bold mb-2"
              >
                Batch
              </label>
              <input
                type="text"
                id="batch"
                name="batch"
                onChange={handleinput}
                value={input.batch}
                className="appearance-none border rounded w-full py-2 px-3  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="2021 - 2023"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="profession"
                className="block text-gray-700 font-bold mb-2"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                onChange={handleinput}
                value={input.profession}
                className="appearance-none border rounded w-full py-2 px-3  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Web Developer"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="linkdln"
                className="block text-gray-700 font-bold mb-2"
              >
                LinkedIn
              </label>
              <input
                id="linkdln"
                type="text"
                onChange={handleinput}
                value={input.linkdln}
                className=" appearance-none w-full border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your LinkedIn profile URL"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="facebook"
                className="block text-gray-700 font-bold mb-2"
              >
                Facebook
              </label>
              <input
                id="facebook"
                type="text"
                onChange={handleinput}
                value={input.facebook}
                className="w-full  appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                placeholder="Enter your Facebook profile URL"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="twitter"
                className="block text-gray-700 font-bold mb-2"
              >
                Twitter
              </label>
              <input
                id="twitter"
                type="text"
                onChange={handleinput}
                value={input.twitter}
                className="w-full appearance-none border leading-tight focus:outline-none focus:shadow-outline rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                placeholder="Enter your Twitter profile URL"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="about"
                className="block text-gray-700 font-bold mb-2"
              >
                Tell us something interesting about yourself
              </label>
              <textarea
                id="about"
                onChange={handleinput}
                value={input.about}
                className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded px-3 py-2  text-green-700 bg-white  focus:border-green-400 focus:ring-green-300  focus:ring focus:ring-opacity-40"
                placeholder="Write something unique about yourself"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-6 z-0 ">
              <label
                htmlFor="profile"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile
              </label>
              <div className="relative z-2 border-dashed border-2 border-gray-400 bg-white py-6 px-3 rounded-lg">
                <div className="flex justify-center items-center text-gray-400">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5C3 4.11929 4.11929 3 5.5 3H11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16L21 11M21 11L16.5 6.5M21 11L11.5 11M8.5 16L11.5 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16L8.5 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-2 text-gray-400">Upload a file</span>
                </div>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  className="absolute z-0 left-0 top-0 border-2 border-indigo-600 w-full h-full opacity-5 "
                  onChange={handleFileProfile}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="Proof"
                className="block text-gray-700 font-bold mb-2"
              >
                Proof
              </label>
              <div className="relative border-dashed border-2 border-gray-400 bg-white py-6 px-3 rounded-lg">
                <div className="flex justify-center items-center text-gray-400">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5C3 4.11929 4.11929 3 5.5 3H11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16L21 11M21 11L16.5 6.5M21 11L11.5 11M8.5 16L11.5 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16L8.5 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-2 text-gray-400">Upload a file</span>
                </div>
                <input
                  type="file"
                  id="proof"
                  name="proof"
                  className="absolute left-0 top-0 border-2 border-indigo-600 w-full h-full opacity-5 "
                  onChange={handleFileProof}
                />
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
