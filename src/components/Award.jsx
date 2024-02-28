import React from 'react';

function Award() {
  return (
    <div className="award-container">
      <div className="trophy">
        <img src="./1.png" alt="award1" className="timage" />
      </div>
      <div className="award-info">
        <h4>C.RI. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</h4>
        <ul>
          <li>
            C.R.I&apos;s energy efficient products are well recognized by various Government Institutions. as trustworthy products for various projects across the globe to save energy.
          </li>
          <li>
            C.R.I is the highest contributor in the country for the projects of EESI (Energy Eificiency Services Limited) to replace the
            Old inefficient pumps will 5 star rated energy efficient smart pumps will IoT enabled control panel.
          </li>
        </ul>
        <img src="./2.png" alt="award2" className="awardimage" />
        <p>
          Government of India has awarded the <q>National Energy Conservation Award 2018</q>. Mr. G. Selvaraj, Joint Managing Director Of C.R.I. Group received the award from Smt. Sumitra Mahajan, speaker of Lok sabha & Shri. Raj Kumar Singh, Honorable
          Minister of State.
        </p>
      </div>
    </div>
  );
}

export default Award;
