import { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Alumni Meet 2022",
      date: "August 20 2022",
      description:
        "On August 20th, 2022, the Govt. Polytechnic, Nilokheri organized an alumni meet where former students gathered to share their experiences and memories.",
    },
    {
      id: "2",
      title: "Career Development Workshop",
      date: "March 10 2022",
      description:
        "The Career Development Workshop was held on March 10, 2022, at Govt. Polytechnic, Nilokheri. The workshop aimed to provide guidance and support to current students for their future careers.",
    },
    {
      id: "3",
      title: "Guest Lecture on Emerging Technologies",
      date: "November 15 2021",
      description:
        "On November 15, 2021, Govt. Polytechnic, Nilokheri organized a guest lecture on emerging technologies. The lecture was conducted by a renowned expert in the field and provided students with valuable insights and knowledge.",
    },
    {
      id: "4",
      title: "Technical Exhibition",
      date: "April 25 2022",
      description:
        "The Technical Exhibition was held on April 25, 2022, at Govt. Polytechnic, Nilokheri. The exhibition showcased various technical projects and innovations developed by students and faculty members.",
    },
    {
      id: "5",
      title: "Annual Sports Meet",
      date: "January 30 2022",
      description:
        "The Annual Sports Meet was held on January 30, 2022, at Govt. Polytechnic, Nilokheri. The event featured various sports competitions and activities, promoting physical fitness and team spirit among students.",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("/api/events")
  //     .then((response) => {
  //       setEvents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <div className=" bg-slate-200 ">
        <Navbar />
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Upcoming Events
          </h2>
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-lg p-6 mb-6 flex items-center"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center text-4xl">
                <FiCalendar />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-lg mb-2">{event.date}</p>
                <p className="text-gray-800 text-lg">{event.description}</p>
                <a
                  href={`/events/${event.id}`}
                  className="text-green-500 hover:text-green-600 font-medium text-lg mt-4 inline-block border-b-2 border-green-500 pb-1"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
