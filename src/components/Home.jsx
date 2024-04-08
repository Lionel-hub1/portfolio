import lion from "../assets/images/lionel-one.png";
import { useState, useEffect } from "react";
const Home = () => {
  const [visible, setVisible] = useState(true);
  const tabs = [
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Education",
      link: "#education",
    },
    {
      title: "Contact Me",
      link: "#contact",
    },
  ];
  useEffect(() => {
    document.title = "Jean Lionel Ndabaga";
  }, [visible]);
  return (
    <div className="bg-primary font-[Roboto-Condensed] flex flex-col text-white text-center min-h-screen relative">
      <div className="flex sticky top-0 justify-between px-20 py-5  z-50">
        <div
          className="flex flex-col w-[12rem] h-[4rem] items-center justify-center "
          onMouseOver={() => setVisible(false)}
          onMouseOut={() => setVisible(true)}
        >
          {visible ? (
            <div>
              <div className="h-10 flex items-center text-xl font-bold">
                <div className=" text-secondary inline-flex">Jean Lionel</div>
                <div className="bg-secondary ml-1 px-1 min-h-full inline-flex items-center text-primary">
                  Ndabaga
                </div>
              </div>
              <div className="flex items-center">
                <span className="border-t border-secondary-light w-full"></span>
                <span className="whitespace-nowrap mx-4 text-secondary-light">
                  Full Stack Developer
                </span>
                <span className="border-t border-secondary-light w-full"></span>
              </div>
            </div>
          ) : (
            <>
              <a
                className="text-xl transition-all animate-pulse px-4 py-1 border"
                href="https://docs.google.com/document/d/19JvpMsRmWCi8vQI5VoBW8_PIEpVHPvs9/edit?usp=sharing&ouid=110566634388359731224&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </>
          )}
        </div>
        <div className="lg:space-x-10 text-lg hidden lg:flex items-center">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className="hover:border-b-4 py-2 transition-all ease-in-out duration-200 hover:border-secondary cursor-pointer"
            >
              {tab.title}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-center max-w-full lg:w-1/2 mx-20 relative">
          <div className="bg-secondary bg-opacity-10 rotate-[38deg] overflow-hidden">
            <img
              className="h-[15rem] lg:h-[24rem] -rotate-[30deg] -mb-14  text-wrap opacity-80"
              src={lion}
              alt=""
            />
          </div>
        </div>
        <div className="relative lg:absolute bottom-2 left-20 flex flex-col text-left py-4 space-y-3">
          <span>
            <span className="text-secondary">Kigali, Rwanda</span>
          </span>
          <span>
            <a href="tel:+250789912852">+250 789 912 852</a>/{" "}
            <a href="tel:+250785919170">+250785919170</a>
          </span>
          <span>
            <a
              href="mailto:ndabagajeanlionel@gmail.com?subject=Mail from My Portfolio"
              className="text-secondary"
            >
              ndabagajeanlionel@gmail.com
            </a>
          </span>
        </div>
        <div className="flex ml-20 lg:ml-0 lg:w-1/2 mr-20 lg:text-3xl items-center">
          <p className="text-left text-wrap ">
            Hello, I&apos;m
            <span className="text-secondary inline-flex mx-1 font-semibold">
              Jean Lionel Ndabaga
            </span>
            , a full stack developer and mobile apps developer. I code with
            <span className="text-danger inline-flex mx-1 font-semibold">
              Love
            </span>{" "}
            and Passion.
          </p>
        </div>
      </div>
      <footer className="relative lg:absolute right-0 left-0 mx-auto bottom-2  text-secondary-light text-center py-4 w-1/2">
        <p className="z-50">&copy; 2024 Jean Lionel Ndabaga</p>
      </footer>
    </div>
  );
};

export default Home;
