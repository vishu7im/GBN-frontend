import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import gbn from "../../Assets/gbn.png";
import Logo from "../../Assets/Logo.jpeg";

const MeetTheDeveloper = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className=" bg-slate-200 ">
        {/* content  */}

        <header className="bg-white shadow-lg">
          <div className="flex justify-center items-center">
            <div>
              <img src={Logo} alt="GBN logo" className="h-20  m-3 " />
            </div>
            <p class="text m-3 heading">GBN Govt. polytechnic Nilokheri</p>
          </div>
          <nav className={`px-4 py-1 z-40 bg-green-600 `}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center  justify-between py-3 md:py-5 md:block">
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/"
                  >
                    <img src={gbn} alt="" />
                  </Link>
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => {
                        setNavbar(false);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/member"
                      >
                        Member
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/event"
                      >
                        Event
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/news"
                      >
                        News
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/gallery"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/aboutUs"
                      >
                        About US
                      </Link>
                    </li>
                    <li
                      className="text-white hover:text-indigo-200"
                      onClick={() => setNavbar(false)}
                    >
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        to="/contactUs"
                      >
                        Contact US
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-3 space-y-2 lg:hidden  md:hidden sm:inline-block">
                    <Link
                      onClick={() => {
                        setNavbar(false);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      to="/login"
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Sign in
                    </Link>
                    <Link
                      onClick={() => {
                        setNavbar(false);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      to="/signUp"
                      className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden space-x-2 md:inline-block">
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to="/login"
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to="/signup"
                  className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* content  */}

        <div className="bg-green-400 py-6">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="flex justify-center">
              <h1 className="text-2xl lg:text-4xl text-white font-bold mb-6">
                Developer
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
              <div className="lg:w-2/5 flex justify-center items-center flex-col mb-6 lg:mb-0">
                <img
                  src="/images/developer.jpg"
                  alt="Developer"
                  className="rounded-full w-72 h-72 object-cover object-center border-4 border-white"
                />

                <h1 className="text-2xl lg:text-4xl text-white font-semibold my-6">
                  vishal
                </h1>
                <div className="flex justify-center mt-4 space-x-8">
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-url/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-url/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <span className="sr-only">Whatsapp</span>
                    <FaWhatsapp className="text-4xl" />
                  </a>
                  <a
                    href="https://github.com/your-github-username/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href="https://twitter.com/your-twitter-username/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="text-4xl" />
                  </a>
                </div>
              </div>
              <div className="lg:w-3/5 text-white">
                <p className="text-xl lg:text-2xl mb-4">
                  Hi there! My name is Vishal, <br />
                  <p className="mb-4">
                    Computer Engg "2021-2024" , 210090800122
                  </p>
                  and I'm the developer behind this website. I'm a passionate
                  web developer with experience in the MERN stack, as well as
                  other web development technologies.
                </p>
                <p className="text-xl lg:text-2xl mb-4">
                  I created this website as a project to showcase my skills and
                  provide a platform for alumni of GBN Govt Polytechnic
                  Nilokheri to connect and stay in touch with each other.
                </p>
                <p className="text-xl lg:text-2xl">
                  If you have any feedback, suggestions, or just want to say hi,
                  feel free to reach out to me using the contact form on the{" "}
                  <a href="/contactus" className="underline">
                    Contact Us page
                  </a>{" "}
                  of this website. I'm always happy to hear from fellow
                  developers and members of the alumni community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* content  */}
      </div>
    </>
  );
};

export default MeetTheDeveloper;
