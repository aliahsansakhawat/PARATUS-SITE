import Girlpic from "../assets/girlpic.png";
import Rectangle62 from "../assets/Rectangle62.png";
import Rectangle64 from "../assets/Rectangle64.png";
import Rectangle63 from "../assets/Rectangle63.png";
const Empower = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="big-div">
          <div className="child1">
            <div className="groupimg">
              {" "}
              <img src={Rectangle63} className="girlpic-top" alt="" />
              <img src={Girlpic} className="girlpic" alt="" />
              <img src={Rectangle64} className="girlpic-bottom" alt="" />
            </div>{" "}
            <div className="heading-p">
              <span className="heading-span ">
                Empower Yourself: <br /> Navigating Personal <br />
                Safety Risks in <br /> Todays World
              </span>
              <span className="para-span">
                From workplace harassment to sexual harassment, peer pressure,
                and other forms of personal safety risks, our communities face a
                wide range of potential dangers.
              </span>
              <span className="para-span">
                These threats can impact people of all ages, backgrounds, and
                walks of life.
              </span>
              <span className="para-span">
                Its crucial that we equip ourselves with the knowledge and
                skills necessary to navigate these risks effectively.
              </span>
            </div>
          </div>
          <div className="child2">
            <span className="para-span2">
              To not only respond with focus and a lack of panic, but also to be
              aware of and avoid these kinds of modern day threats, it takes a
              program that focuses on more than just the traditional training
              methods
            </span>
            <div className="babyimgd">
              <img src={Rectangle62} className="babypic" alt="" />
              <img src={Rectangle63} className="babypic-top" alt="" />
              <img src={Rectangle64} className="babypic-bottom" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empower;
