import Logo from "../assets/Logo2.png";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SPEAKING</a>
            </li>
            <li>
              <a href="#">BOOTCAMPS</a>
            </li>
            <li>
              <a href="#">COURSES</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">MEDIA</a>
            </li>
            <li>
              <a href="#">SUCCESS STORIES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <img src={Logo} className="logo" alt="" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
