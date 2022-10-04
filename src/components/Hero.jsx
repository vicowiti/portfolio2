import React from "react";
import headerImg from "../assets/skills/panther.png";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CV from "../../public/001resume.pdf";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const textList = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Python Developer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % textList.length;
    let fullText = textList[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner min-h-[100vh]" id="home">
      <div className="flex flex-col lg:flex-row justify-between mx-5 lg:mx-16">
        <div className="flex-1 mt-32 lg:mt-[10%]">
          <span className="font-bold text-lg lg:text-2xl py-[8px] px-[10px] border mb-4 inline-block border-[rgba(255,255,255,0.5)] bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] ">
            Welcome to my Portfolio
          </span>
          <h1 className="text-[30px] lg:text-[65px] font-bold mb-[5px] block">{`Hi, I'm Victor`}</h1>{" "}
          <span className="text-[30px] lg:text-[55px] font-bold mb-14 block  h-8">
            {text}
          </span>
          <p className="text-[#b8b8b8 text-lg w-96% ">
            I am a full stack developer specializing in building secure,
            accessibility oriented digital experiences. I am always seeking to
            learn and apply new technologies.
          </p>
          <a href={CV} download target="_blank">
            <button className="mt-5 flex gap-2 items-center">
              <span className="text-xl hover:scale-105 duration-700">
                Download CV
              </span>{" "}
              <FaArrowRight size={20} />
            </button>
          </a>
        </div>
        <div className="bg-transparent h-[400px] flex-1 mt-32">
          <img
            src={headerImg}
            alt="header image"
            className="bg-inherit h-full hero-animate w-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
