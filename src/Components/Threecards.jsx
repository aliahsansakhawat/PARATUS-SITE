import { IoPersonCircleOutline } from "react-icons/io5";

const Threecards = () => {
  return (
    <>
      <div className="cardsmain">
        <div className="uppercardtext">
          <p>WHAT PEOPLE ARE SAYING</p>

          {/* ------------three cards formation----- */}
          <div className="id">
            <IoPersonCircleOutline className="ioperson" />
            <IoPersonCircleOutline className="ioperson" />
            <IoPersonCircleOutline className="ioperson" />
          </div>

          <div className="threecards">
            <div className="firstcards">
              <span className="">
                Brian is an amazing speaker. His talk on ‘Safety and Situational
                Awareness’ has never been more timely. He’s the type of speaker
                who engages his audience from the minute he takes the stage and
                leaves them ready to take action!
              </span>
              <div className="spans">
                <span>Jeff Crilley,</span>
                <span className="spantext">
                  CEO, Real News Public Relations
                </span>
              </div>
            </div>
            <div className="firstcards">
              <span>
                I honestly never realized how many precautions I take now that I
                did not before. I used to be such a trusting person, to a fault
                really. Your messages are validating and let me know that I'm
                not becoming a paranoid, crazy old lady.
              </span>
              <div className="spans">
                <span>Pam Feeney</span>
              </div>
            </div>
            <div className="firstcards">
              <span>
                Brian is an amazing speaker. His talk on ‘Safety and Situational
                Awareness’ has never been more timely. He’s the type of speaker
                who engages his audience from the minute he takes the stage and
                leaves them ready to take action!
              </span>
              <div className="spans">
                <span>D. Brown </span>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <button className="testimonials">SEE MORE TESTIMONIALS</button>
          </div>
          <div className="associations">ASSOCIATIONS</div>
        </div>
      </div>
    </>
  );
};

export default Threecards;
