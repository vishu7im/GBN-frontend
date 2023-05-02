import React from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";

const NewsBox = () => {
  //  need only 5 news their

  const newsItems = [
    {
      id: 1,
      title: "Alumnus Mr. Arun Goyal felicitated with Himachal Icon Award 2021",
      date: "July 23 2021",
      content:
        "Mr. Arun Goyal, an alumnus of Govt. Polytechnic, Nilokheri, was honored with the Himachal Icon Award by CM Sh. Jai Ram Thakur in recognition of his contributions to the healthcare industry and successful management of Tirupati group, with a turnover of approximately 1000 crores.",
    },
    {
      id: 2,
      title:
        "Govt. Polytechnic, Nilokheri alumni start innovative tech company",
      date: "November 10 2022",
      content:
        "Two alumni of Govt. Polytechnic, Nilokheri, Mr. Ravi and Mr. Ashok, have co-founded a tech start-up that aims to revolutionize the automobile industry with their cutting-edge battery technology. Their company, VoltTech, has received a seed funding of 5 million dollars and is set to launch their first product by early 2023.",
    },
    {
      id: 3,
      title: "Alumni association raises funds for school infrastructure",
      date: "June 5 2023",
      content:
        "The alumni association of Govt. Polytechnic, Nilokheri, has raised a significant amount of funds through a charity event to support the school's infrastructure development. The funds will be used to provide better facilities to the students, including a new computer lab, sports equipment, and upgraded classrooms.",
    },
    {
      id: 4,
      title:
        "Alumnus Mr. Inderjeet Singh's construction chemical firm gets BIS certification",
      date: "October 15 2023",
      content:
        "Mr. Inderjeet Singh, an alumnus of Govt. Polytechnic, Nilokheri, and the founder of Molecules Conchem Private Limited, has received BIS certification for their range of construction chemicals. This certification adds another feather to the cap of the company, which has been rapidly growing and serving prestigious government projects across India.",
    },
    {
      id: 5,
      title:
        "Govt. Polytechnic, Nilokheri alumni win prestigious award for eco-friendly initiative",
      date: "February 28 2024",
      content:
        "A group of alumni from Govt. Polytechnic, Nilokheri, has won the 'Green Innovation Award' for their eco-friendly initiative that utilizes waste plastic to produce low-cost building materials. The alumni, who founded the start-up named 'EcoBuild', have successfully implemented their initiative in several villages in Haryana, and plan to scale it up to a larger area in the coming years.",
    },
  ];

  const navigate = useNavigate();
  return (
    <section className="w-full lg:w-1/2 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest News</h2>
        <div className="h-80 overflow-hidden hover:overflow-y-scroll">
          {newsItems.map((news) => {
            return (
              <div
                key={news.id}
                onClick={() => {
                  navigate("/news");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="mb-8"
              >
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 mr-4">
                    <span className="text-white font-bold text-lg">
                      {news.date.split(" ")[1]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {news.title}.
                    </h3>
                    <p className="text-gray-600 text-sm">{news.date}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {news.content.slice(0, 100)}...{" "}
                  <span className="text-lg text-red-700 leading-relaxed mb-4">
                    read more
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const EventBox = () => {
  const events = [
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
  ];

  const navigate = useNavigate();

  return (
    <section className="w-full lg:w-1/2 bg-green-400">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Upcoming Events</h2>

        <div className="h-80 overflow-hidden hover:overflow-y-scroll">
          {events.map((event) => (
            <div
              key={event._id}
              className={`flex items-center bg-white rounded-lg p-4 mb-4 `}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mr-4">
                <span className="text-gray-600 font-bold text-lg">
                  {event.date.split(" ")[1]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p>
                  {event.description.slice(0, 100)}...{" "}
                  <span
                    className="text-green-600 cursor-pointer hover:text-green-300"
                    onClick={() => {
                      navigate(`/events/${event._id}`);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    read more
                  </span>
                </p>

                <p className="text-gray-600 text-sm">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function NewsAndEvent() {
  return (
    <div className="flex sm:flex-row flex-col">
      <NewsBox />
      <EventBox />
    </div>
  );
}
