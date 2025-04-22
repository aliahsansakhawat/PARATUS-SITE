import React from "react";
import Arrow from "../assets/arrow.png";
import Rectangle52 from "../assets/Rectangle52.png";
import Rectangle58 from "../assets/Rectangle58.png";
import Girlpic from "../assets/Girlpic.png";
import Rectangle63 from "../assets/Rectangle63.png";
import Rectangle64 from "../assets/Rectangle64.png";
import Rectangle62 from "../assets/Rectangle62.png";

function criticalSection() {
  return (
    <div>
      <div className="background">
        <div className="content">
          <span> Looking for an easy things you can do right now to keep</span>
          <span> your family,students and community safe?</span>
        </div>
        <div className="arrowdata">
          <img src={Arrow} alt="" className="arrowpic" />
          <p className="arrowtext">
            LEARN TO CRITICAL PREPARNESS SKILLS FOR FREE
          </p>
        </div>
        <div className="below">
          <span>
            Download our free guide on the 10 critical skills every person,
            young or
          </span>
          <span>
            old, can learn in order to keep themselves or their families and
          </span>
          <span>communities safe.</span>
        </div>

        {/* form and button code */}
        <div className="form">
          <form action="" onSubmit={""}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <button className="download" type="submit">
              DOWNLOAD NOW
            </button>
          </form>

          {/* laptop image named as rectangle52.png */}
          <img src={Rectangle52} alt="" className="rectangle52" />
        </div>
      </div>

      {/* code after laptop pic */}

      <p className="belowform">ARE YOU CONCERNED ABOUT THE SAFETY AND </p>
      <p className="belowform1">
        Well-Being of Your <span>Loved Ones</span> , Your <br />
        <span>Organization</span>, or Your <span>Community</span>
      </p>
      <div className="maindiv">
        <div className="child-div">
          <span>
            In today's fast-paced and ever-evolving world, staying safe has
            become more complex than ever before.
          </span>

          <span>
            It's not just about protecting ourselves from traditional threats
            like gun violence, kidnappings, or drug-related issues.
          </span>

          <span>
            The modern world presents a multitude of challenges that require a
            comprehensive approach to personal safety.
          </span>
          {/* ---------button of read more---------- */}
          <button className="readmorebtn">READ MORE</button>
        </div>
        <div className="image">
          {" "}
          {/* image code------------- */}
          <img src={Rectangle58} className="rectangle58" alt="" />
        </div>
      </div>

      {/* -----------another div  card div----------- */}

      {/* <div className="big-div">
        <p className="big-divp">
          Empower Yourself: <br /> Navigating Personal <br /> Safety Risks in{" "}
          <br />
          Today's World
        </p>
        <div className="sub-bigdiv">
          <span>
            From workplace harassment to sexual harassment, peer pressure, and
            other forms of personal safety risks, our communities face a wide
            range of potential dangers
          </span>
          <span>
            These threats can impact people of all ages, backgrounds, and walks
            of life.
          </span>
          <span>
            It's crucial that we equip ourselves with the knowledge and skills
            necessary to navigate these risks effectively.
          </span>
        </div>
        <img src={Girlpic} className="girlpic" alt="" />
        ------images attached with upper left and lower right corner-----
        <img src={Rectangle63} alt="" className="rectangleimg1" />
        <img src={Rectangle64} alt="" className="rectangleimg2" />
        -----------making 2nd part of card--------------
        <div className="childcontent">
          <p>
            To not only respond with focus and a lack of panic, but also to be
            aware of and avoid these kinds of modern day threats, it takes a
            program that focuses on more than just the traditional training
            methods.
          </p>
          <img src={Rectangle62} alt="" className="rectangle62" />
          <img src={Rectangle63} alt="" className="rectangleimg3" />
          <img src={Rectangle64} alt="" className="rectangleimg4" />
        </div>
      </div> */}
    </div>
  );
}

export default criticalSection;
