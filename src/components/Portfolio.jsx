import React from "react";
import Netflix from "../assets/portfolio/Netflix.png";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import Advicer from "../assets/portfolio/Advicer.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Netflix,
      name: "Netflix UI",
    },
    {
      id: 2,
      src: Ecommerce,
      name: "Ecommerce Site",
    },
    {
      id: 3,
      src: Advicer,
      name:"Random Advicer"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Side - Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center m-2 p-2">
                <div>{name}</div>
                <div className="flex">
                  <button className="w-1/2 m-2 p-2 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 m-2 p-2 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
