import Rectangle40 from "../assets/Rectangle40.png";
import Rectangle41 from "../assets/Rectangle41.png";
import Rectangle42 from "../assets/Rectangle42.png";
import Rectangle43 from "../assets/Rectangle43.png";
import Rectangle44 from "../assets/Rectangle44.png";
import Rectangle45 from "../assets/Rectangle45.png";
import { FaEdit } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-grid">
        <div className="itams">
          <img src={Rectangle40} className="set" alt="" />
          {/* -------styling of the text below img----- */}
          <div className="footertext text1">
            Self - Mastery
            <span>Learn how to become your own First Responder</span>
          </div>

          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
        <div className="itams">
          <img src={Rectangle41} className="set" alt="" />
          {/* -----styling of the text below the img----- */}
          <div className="footertext text2 ">
            Self - Mastery
            <span>Learn how to become your own First Responder</span>
          </div>
          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
        <div className="itams">
          <img src={Rectangle42} className="set" alt="" />
          {/* -----styling of the text below the img----- */}
          <div className="footertext text3">
            Self - Mastery
            <span>Learn how to become your own First Responder</span>
          </div>
          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
        <div className="itams">
          <img src={Rectangle43} className="set" alt="" />
          {/* -----styling of the text below the img----- */}
          <div className="footertext text4">
            Self - Mastery
            <span>Learn how to become your own First Responder</span>
          </div>
          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
        <div className="itams">
          <img src={Rectangle44} className="set" alt="" />
          {/* -----styling of the text below the img----- */}
          <div className="footertext text5">
            Family - Mastery
            <span>
              Learn the steps needed to make sure your kids learn how to be
              responsible for themselves
            </span>
          </div>
          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
        <div className="itams">
          <img src={Rectangle45} className="set" alt="" />
          {/* -----styling of the text below the img----- */}
          <div className="footertext text6">
            Word - Mastery
            <span>
              Learn the steps needed to make sure your kids learn how to be
              responsible for themselves
            </span>
          </div>
          <div className="icon">
            <FaEdit className="editicon" />
            READ POST
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023  BeAwareStaySAfe.com All Right Reserved. | Terms &
        Conditions | Privacy Policy | Innovated by
      </div>
    </>
  );
};

export default Footer;
