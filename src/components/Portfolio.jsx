import React from "react";
import Netflix from "../assets/portfolio/Netflix.png";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import Advicer from "../assets/portfolio/Advicer.png";
import PasswordGenerator from "../assets/portfolio/PasswordGenerator.png"
import DadJokes from "../assets/portfolio/DadJokes.png"
import CountDown from "../assets/portfolio/CountDown.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PasswordGenerator,
      name: "Password Generator",
      sourceCode: "https://github.com/Guru6163/passwordGenerator",
      demo: "https://shiny-pastelito-1e63a9.netlify.app/",
    },
    {
      id: 2,
      src: Ecommerce,
      name: "Ecommerce Site",
      sourceCode: "https://github.com/Guru6163/reactboost",
      demo: "https://cozy-paprenjak-d7aa2a.netlify.app/",
    },
    {
      id: 3,
      src: DadJokes,
      name: "Dad Jokes",
      sourceCode: "https://github.com/Guru6163/dadJokes",
      demo: "https://nimble-blini-98a52d.netlify.app/",
    },
    {
      id: 4,
      src: Netflix,
      name: "Netflix UI",
      sourceCode: "https://github.com/Guru6163/Netflix",
    },
    {
      id: 5,
      src: CountDown,
      name: "Newyear Countdown",
      sourceCode: "https://github.com/Guru6163/countdown-timer",
      demo: "https://animated-wisp-68bca7.netlify.app/",
    },
    {
      id: 6,
      src: Advicer,
      name: "Random Advicer",
      sourceCode: "https://github.com/Guru6163/advicer",
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
          {portfolios.map(({ id, src, name, sourceCode, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center m-2 p-2">
                <div>{name}</div>
                <div className="flex">
                  {demo ? (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 m-2 p-2 duration-200 hover:scale-105 bg-green-400 "
                    >
                      Demo
                    </a>
                  ) : (
                    <p className="m-2 p-2 bg-red-400">Demo Not available</p>
                  )}

                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 m-2 p-2 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
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
