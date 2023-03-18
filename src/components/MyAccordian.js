import { useState } from "react";
import React from "react";

function MyAccordian({ question, answer }) {
  const [show, setShow] = useState(false);

  let showItem = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="que-ans">
        {/* CLICK KE BAAD // "show" KI VAL "TRUE" HAI TO ➖ DIKHAO  NI TO ➕ */}
        <span onClick={showItem}> {show ? "➖" : "➕"} </span>
        <h3 className="ques"> {question}</h3>

        {/* // AGR "show" KI VALUE TRUE HAI TBHI "answer" KO SHOW KRO */}
        {show && <p className="ans">{answer}</p>}
      </div>
    </>
  );
}

export default MyAccordian;
