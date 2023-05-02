import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReactGA from "react-ga";

import "./app.css";
import Home from "./pages/Home";
import Error from "./pages/Error/Error";
import Member from "./pages/Member";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin/Admin";
import LoginPage from "./pages/Admin/LoginAdmin";
import UserProfile from "./pages/UserProfile";
import News from "./pages/News";
import Events from "./pages/Events";
import EventDetails from "./components/EventsDetail";
import MeetTheDeveloper from "./pages/Admin/Devloper";

function App() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_AN_KEY);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member" element={<Member />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin/panel" element={<Admin />} />
            <Route path="/admin" element={<LoginPage />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/news" element={<News />} />
            <Route path="/event" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/devloper" element={<MeetTheDeveloper />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
