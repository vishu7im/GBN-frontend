import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

function GalleryScroll() {
  const [gallery, setGallery] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchgallery = async () => {
    let URL = `${process.env.REACT_APP_API_KEY}/admin/gallery`;
    try {
      const response = await axios.get(URL);
      setGallery(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchgallery();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/admin/gallery/${id}`)
      .then((response) => {
        const updatedGallery = gallery.filter((item) => item.id !== id);
        setGallery(updatedGallery);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-wrap  scrollView ">
      {gallery.map((item) => (
        <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-gray-200 p-2">
            <img src={item.Document} alt={item.Title} className="w-full" />
            <h3 className="text-lg font-medium">{item.Title}</h3>
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryScroll;
