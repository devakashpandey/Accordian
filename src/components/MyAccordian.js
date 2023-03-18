import { useState } from "react";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

function MyAccordian({ question, answer }) {
  const [show, setShow] = useState(false);

  let showItem = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="que-ans">
        <div style={{ display: "flex", margin: "15px" }}>
          <span onClick={showItem}>
            {!show ? (
              <BsPlusCircleFill className="icon" />
            ) : (
              <AiFillMinusCircle className="icon minus" />
            )}
          </span>{" "}
          &nbsp;&nbsp;
          <div className="ques"> {question}</div>
          {/* // AGR "show" KI VALUE TRUE HAI TBHI "answer" KO SHOW KRO */}
        </div>

        {show && <h3 className="ans">{answer}</h3>}
      </div>
    </>
  );
}

export default MyAccordian;
