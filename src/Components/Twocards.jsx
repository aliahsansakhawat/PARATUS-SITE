import Rectangle27 from "../assets/Rectangle27.png";
const Twocards = () => {
  return (
    <>
      <div className="section">
        <div className="sub-section">
          <img src={Rectangle27} className="rectangle27" alt="" />
        </div>
        {/* --------styling of heading div right side with image------- */}
        <div className="textmaindiv">
          <div className="headingdiv">
            Responding Is
            <span>No Subtitute</span>
            For Prepration
          </div>
          {/* div for the arragment for the paragraphs */}
          <div className="paragraph-text">
            <span>
              We are a unique training that empowers the learning of habits,
              behaviors and mindset.
            </span>
          </div>
          <div className="paragraph-text">
            <span>
              “You have 2 choices: Become Prepared to Protect your family and to
              teach them how to protect themselves. Be Unprepared and use HOPE
              as a Strategy.”
            </span>
          </div>
          <div className="clickhere">
            <button>CLICK HERE TO READ OUR STORY...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Twocards;
