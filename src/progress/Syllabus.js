import React from "react";
import ProgressCard from "./ProgressCard";

const Syllabus = () => {
  return (
    <div className="syllabus border">
      <h3>Syllabus wise analysis</h3>
      <ProgressCard
        text={"HTML Tools, Forms, History"}
        percentage={80}
        color={"#ff0000"}
      />
      <ProgressCard
        text={"Tags & References in HTML"}
        percentage={60}
        color={"#FF9142"}
      />
      <ProgressCard
        text={"Tables & CSS Basics"}
        percentage={24}
        color={"#FB5E5E"}
      />
      <ProgressCard
        text={"Tables & CSS Basics"}
        percentage={96}
        color={"#2EC971"}
      />
    </div>
  );
};

export default Syllabus;
