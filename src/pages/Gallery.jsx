import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  const fetchgallery = async () => {
    let URL = `${process.env.REACT_APP_API_KEY}/admin/gallery`;
    try {
      const response = await axios.get(URL);
      setGalleryImages(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchgallery();
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
                key={image._id}
              >
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-40 hover:opacity-70 transition-opacity duration-300"></div>
                <img
                  src={image.Document}
                  alt={image.Title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <p className="text-lg font-medium text-white">
                    {image.Title}
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
