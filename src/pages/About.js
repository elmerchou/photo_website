import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "90vh" }} className="about">
      <div className="a">
        <h1>Hi There</h1>
        <p>
          I am Elmer Chou, a student from Taiwan who is passionate about the
          information field.
        </p>
        <p>
          This site is one of my practice React works, hope you will like it!
        </p>
      </div>
      <div className="b">
        <img src={require("../img/untitled.png")} alt="my modeling" />
      </div>
    </div>
  );
};

export default About;
