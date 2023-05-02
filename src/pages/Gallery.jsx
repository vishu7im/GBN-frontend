import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
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
      <div className=" bg-slate-200 ">
        <Navbar />

        {/* Gallery */}
        <div className="container mx-auto py-10">
          <div className="flex justify-center">
            <h1 className="text-2xl lg:text-4xl text-gray font-bold mb-6">
              Alumni Gallery
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Render gallery images */}
            {galleryImages.map((image) => (
              <div
                className="relative overflow-hidden rounded-lg shadow-lg"
                key={image.id}
              >
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-40 hover:opacity-70 transition-opacity duration-300"></div>
                <img
                  src={image.image}
                  alt={image.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <p className="text-lg font-medium text-white">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
      </div>
      <Footer />
    </>
  );
}
