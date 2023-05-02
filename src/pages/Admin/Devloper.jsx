import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const MeetTheDeveloper = () => {
  return (
    <>
      <div className=" bg-slate-200 ">
        <Navbar />

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
