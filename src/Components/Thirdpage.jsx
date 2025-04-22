
const Thirdpage = () => {
  return (
    <>
      {/* -----------this is mian card div---------- */}
      <div className="maincard">
        {/* ---------this is the card div ----- */}

        <div className="brian">
          <p className="title-brian">BRIAN</p>
          <p className="title-searcy">SEARCY </p>
          {/* <span>BRIAN </span>
          <span>SEARCY</span> */}
        </div>

        <div className="card">
          {/* ----------this is the div which contain a 1st p inside the card------- */}
          <div className="firstp">
            <p>IF YOU’RE LOOKING TO LEARN OR TO TEACH OTHERS THE SKILLS OF</p>
          </div>
          {/* --------this is the bold (2nd text) under the 1st p of card--------- */}
          <div className="secondp">
            <p>
              Situational <span>Awareness,</span>
            </p>
          </div>
          <p className="thirdp">YOU’RE IN THE RIGHT PLACE.</p>
          <div className="fourthp">
            <p>
              <span>
                Brian Searcys programs empower those with the knowledge,
                skills, habits and situational awareness to be able to stay
                ahead of potential threats as well as be in a better
              </span>
              <span>
                Retired Col Brian Searcy joined the USAF in 1987, winning the
                Commanders Trophy in May 1988 after graduating from
                Undergraduate Navigator Training at Mather AFB. He worked as an
                AWACS instructor before transitioning to the JSTARS cadre in
                Melbourne Florida, then commanding the 608th Combat Operations
                Squadron at Barksdale AFB.
              </span>
              <span>
                He attended Air War College and served at the Pentagon for the
                Missile Defense Agency. Col Searcy completed his 23-year career
                as the Group and then Active Duty/Vice Wing Commander at Robins
                AFB for the 116th ACW. With over 3700 flight hours as a Command
                Navigator and multiple deployments, he has extensive senior
                leadership and training experience
              </span>
            </p>
          </div>
          
        </div>
      </div>

      {/* ---------------start of another section with green rectangle-------- */}

      <div className="bluerectangle">
        <div className="whitetext">BE AWARE</div>
      </div>
      <div className="bluetext">STAY SAFE</div>

      <div className="yellowtext">
        Stay vigilant, stay protected. Be aware and prioritize your safety in
        all situations
      </div>

      {/* ---------------------code after curly image-----------------{} */}
      <div className="curve">
        <div className="curvetext">
          <p>
            TODAY’S TRAINING FAILS BY
            <span className="yellowspan"> FOCUSING ON “RESPONDING”</span>
            <span className="whitespan">
              AFTER ONE’S FACEDWITH HARM OR THREAT. THE
            </span>
            <span className="yellowspan"> “BE AWARE STAY SAFE”</span>
            <span className="whitespan">TRAINING SUCCEEDS BY FOCUSING ON</span>
            <span className="yellowspan">“PREPARATION”...</span> GIVING PEOPLE
            THE ABILITY TO PREPARE, PREVENT AND PROTECT.
          </p>

          <div className="divp2">
            <p className="p2">
              BRIAN “PATTON” SEARCY
              <span className="whitespan2">
                Col (Ret) USAF, Founder - President
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdpage;
