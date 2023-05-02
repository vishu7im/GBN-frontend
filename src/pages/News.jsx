import { useState, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Campus Building Announced",
      date: "April 15, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 2,
      title: "Student Wins National Coding Competition",
      date: "April 10, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      title: "New Scholarship Program Announced",
      date: "April 5, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 4,
      title: "New Campus Building Announced",
      date: "April 15, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 5,
      title: "Student Wins National Coding Competition",
      date: "April 10, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 6,
      title: "New Scholarship Program Announced",
      date: "April 5, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 7,
      title: "New Campus Building Announced",
      date: "April 15, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 8,
      title: "Student Wins National Coding Competition",
      date: "April 10, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 9,
      title: "New Scholarship Program Announced",
      date: "April 5, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor vel quam sodales tincidunt. Aliquam erat volutpat. Etiam placerat sagittis lacus, vel faucibus enim blandit at. Nulla euismod auctor faucibus. Fusce ut mi ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ]);

  return (
    <>
      <div className=" bg-slate-200 ">
        <Navbar />

        {/* news   */}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Latest News
          </h2>
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg p-6 mb-6 flex items-center"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl">
                <FiAlertCircle />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                <p className="text-gray-800 text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
