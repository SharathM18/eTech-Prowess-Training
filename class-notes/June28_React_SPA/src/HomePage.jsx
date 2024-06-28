import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <header>
        <div className="title">Form</div>
        <div className="nav_links">
          <nav>
            <Link to="">Home</Link>
            <NavLink to="/about">Contact Form</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
