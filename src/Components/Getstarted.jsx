import React from "react";

const Getstarted = () => {
  return (
    <>
      <div className="tex">
        HOW TO <span>GET STARTED</span>
        <hr className="hr1" />
      </div>

      {/* section has two divs */}
      <section className="row">
        {/* 1st div */}
        <div className="textdiv">
          WANT TO <span>KNOW WHAT</span>
          <span className="yellowt">NECESSARY</span>
          <span className="bluet">SKILLS YOU'LL NEED TO PROTECT</span>
          <span className="yellowt">YOURSELF?</span>
        </div>
        {/* 2nd div  */}
        <div className="textbtn">
          Simply put, you want to learn how to become your own First Responder
          in situations where you have no one to protect you.
          <div className="yellowbtn">
            GETTING STARTED INTO THE PROGRAM“BE AWARE STAY SAFE”
          </div>
        </div>
      </section>
      <hr className="hr1" />

      {/* another section forr the second part */}
      <section className="row">
        {/* 1st div */}
        <div className="textdiv2">
          BE EMPOWERED <span>TO HELP MAKE</span>
          <span className="bluesmallspan">YOUR COMMUNITY SAFE</span>
        </div>
        {/* 2nd div  */}
        <div className="textbtn2">
          Gain access to  an impactful and unique Situational Awareness Program
          and Up to date and relevant “real world” information.
          <div className="yellowbtn2">
            GETTING STARTED INTO THE PROGRAM“BE AWARE STAY SAFE”
          </div>
        </div>
      </section>
    </>
  );
};

export default Getstarted;
