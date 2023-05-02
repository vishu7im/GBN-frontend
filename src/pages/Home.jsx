import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import Carousel from "../components/Carousel/MyCarousel";
import NewsAndEvent from "../components/NewsRoom";
import GalleryCard from "../components/GalleryCard";
import DeviceCounter from "../components/DeviceCounter";

export default function Home() {
  const [Users, setUsers] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  const fetchuser = async () => {
    let URL = `${process.env.REACT_APP_API_KEY}/admin/fetchhomeuser`;
    try {
      const response = await axios.get(URL);
      setUsers(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchuser();
    setGalleryImages([
      {
        image: "http://gpnilokheri.ac.in/assets/img/g1.jpg",
        title: "Student at work ",
      },

      {
        image: "http://gpnilokheri.ac.in/assets/img/visit23_1.png",
        title: "Industrial Visit",
      },
      {
        image: "	http://gpnilokheri.ac.in/assets/img/placement23_1.png",
        title: "Campus Drives",
      },
      {
        image: "	http://gpnilokheri.ac.in/assets/img/fancy.png",
        title: "Co-Curricular Activities",
      },

      {
        image: "http://gpnilokheri.ac.in/assets/img/T3.jpeg",
        title: "Tree Plantation",
      },

      {
        image: "	http://gpnilokheri.ac.in/assets/img/independence.png",
        title: "Tringa Abhiyan",
      },
    ]);
  }, []);
  return (
    <>
      <div className=" bg-slate-200 overflow-hidden">
        <Navbar />
        <DeviceCounter />

        <div className="my-2">
          <Carousel />
        </div>

        <div className="my-2">
          <NewsAndEvent />
        </div>

        {/* card  */}
        <div className="w-full flex my-6 justify-center">
          <h1 className="text-2xl lg:text-4xl text-gray font-bold mb-6">
            Alumni profile
          </h1>
        </div>

        <div className="flex w-full  overflow-hidden hover:overflow-x-scroll">
          {Users.map((element) => (
            <Card element={element} />
          ))}
        </div>

        {/* gallary */}
        <div className="w-full flex my-6 justify-center">
          <h1 className="text-2xl lg:text-4xl text-gray font-bold mb-6">
            Gallery
          </h1>
        </div>

        <div className="w-full overflow-hidden hover:overflow-x-scroll">
          <div className="flex flex-nowrap">
            {galleryImages.map((item) => {
              return (
                <GalleryCard
                  image={item.image}
                  title={item.title}
                  key={item._id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
