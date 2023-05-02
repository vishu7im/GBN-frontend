import React, { useEffect, useState } from "react";
import { AlertApi } from "../../context/AlertContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [Disable, setDisable] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setAlert } = AlertApi();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setAlert({ type: "warning", message: "All feilds are mendatory!" });
      return;
    }
    setDisable(true);

    let url = `${process.env.REACT_APP_API_KEY}/admin`;
    try {
      const response = await axios.post(url, {
        email: username,
        password: password,
      });
      console.log(response);
      sessionStorage.setItem("admin", response.data.token);
      setAlert({ type: "success", message: response.data.message });
      navigate("/admin/panel");

      setDisable(false);
    } catch (error) {
      setAlert({ type: "error", message: error.response.data.error });
      setDisable(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("admin");
    console.log(token);
    if (!token) {
      navigate("/admin");
      return;
    }

    const decodedToken = jwt_decode(token);

    if (decodedToken.admin) {
      navigate("/admin/panel");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Admin Panel Login
          </h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            type="button"
            disabled={Disable}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="mt-8 text-center">
          <a className="text-gray-600 hover:text-gray-800 font-bold" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
