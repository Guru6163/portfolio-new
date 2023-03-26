import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Innovative Front End Developer with 2 years experience building and maintaining responsive websites. Proficient in HTML, CSS,
          JavaScript, React, Node JS; plus modern libraries and frameworks.
        </p>
       
      </div>
    </div>
  );
};

export default About;
