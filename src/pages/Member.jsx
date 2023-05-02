import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import UserCard from "../components/UserCard";
export default function Member() {
  const [users, setUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredUsers);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_KEY}/admin/fetch`;
    const response = await axios.get(url);
    setUsers(response.data.data);
  };
  useEffect(() => {
    // Fetch user data here and set it in the state

    fetchData();
  }, []);
  return (
    <>
      <div className=" bg-slate-200 ">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="w-full  py-6 mb-10">
            <div className="max-w-screen-lg mx-auto">
              <div className="relative flex items-center justify-center">
                <svg
                  className="absolute left-3 text-gray-500 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-5-5 5-5"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search users by name..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredUsers.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
