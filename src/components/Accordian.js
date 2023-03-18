import React, { useState } from "react";
import "./Accordian.css";
import MyAccordian from "./MyAccordian";
import { questions } from "./Data/AccorData";

const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="main-div">
        <h1>ACCORDIAN OF QUES & ANS</h1>
        <div className="inner-div">
          {data.map((currEle) => {
            return <MyAccordian key={currEle.id} {...currEle} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
