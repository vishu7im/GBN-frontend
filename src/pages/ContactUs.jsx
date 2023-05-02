import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div className=" bg-slate-200 ">
        <Navbar />

        {/* content  */}

        <div className="flex flex-col p-6 items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-8 text-green-600">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-lg font-bold mb-2 text-green-600">
                Get in touch
              </h2>
              <p className="text-gray-700 mb-4">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your message"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-lg font-bold mb-2 text-green-600">
                Contact info
              </h2>
              <div className="flex flex-col mb-4">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-3xl text-green-600 mr-4" />
                  <p className="text-gray-700">
                    GBN Govt Polytechnic Nilokheri <br />
                    Karnal, Haryana - 132117
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhone className="text-3xl text-green-600 mr-4" />
                  <p className="text-gray-700">+91 1745-246002</p>
                </div>
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-3xl text-green-600 mr-4" />
                  <p className="text-gray-700">gpnilokheri@hry.nic.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content  */}
      </div>
      <Footer />
    </>
  );
}
