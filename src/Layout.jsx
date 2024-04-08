import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import previous from "./assets/icons/arrow-previous.svg";
import next from "./assets/icons/arrow-next.svg";
import github from "./assets/icons/github.svg";
import linkedin from "./assets/icons/linkedin.svg";
import { useState } from "react";

const Layout = () => {
  const tabs = [
    {
      title: "Intro",
      link: "/",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact Me",
      button: true,
      link: "/contact",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [trioPaths, setTrioPaths] = useState({
    previous: tabs[tabs.length - 1].link,
    current: "",
    next: tabs[1].link,
  });

  const findTrioPaths = (currentPath) => {
    const paths = tabs.map((tab) => tab.link);
    const currentIndex = paths.findIndex((path) => path === currentPath);
    const previousIndex =
      currentIndex === 0 ? paths.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === paths.length - 1 ? 0 : currentIndex + 1;

    setTrioPaths({
      previous: paths[previousIndex],
      current: paths[currentIndex],
      next: paths[nextIndex],
    });
  };

  const handleNext = () => {
    navigate(trioPaths.next);
    findTrioPaths(trioPaths.next);
  };

  const handlePrevious = () => {
    navigate(trioPaths.previous);
    findTrioPaths(trioPaths.previous);
  };

  const activeTabStyle = (link) => {
    return (
      location.pathname === link &&
      "border-b-2 border-secondary px-3 py-1 transition-all ease-in-out duration-200 border-secondary"
    );
  };

  return (
    <div className="bg-primary font-[Roboto-Condensed] flex flex-col text-white text-center min-h-screen relative">
      <nav
        className="flex sticky top-0 bg-primary justify-center lg:justify-between px-20 py-5 z-50"
        onScroll={() => {
          if (window.scrollY > 0) {
            document.querySelector("nav").classList.add("bg-primary");
          } else {
            document.querySelector("nav").classList.remove("bg-primary");
          }
        }}
      >
        <div className="flex relative group overflow-hidden flex-col w-[12rem] h-[4rem] items-center justify-center ">
          <div className="flex cursor-pointer absolute group-hover:translate-y-[5rem] transition-transform duration-700 bottom-0 flex-col space-y-4">
            <a
              className="h-[4rem] flex items-center justify-center text-xl px-4 py-1 border"
              href="https://docs.google.com/document/d/19JvpMsRmWCi8vQI5VoBW8_PIEpVHPvs9/edit?usp=sharing&ouid=110566634388359731224&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
            <div className="h-[4rem] animate-pulse">
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
          </div>
        </div>
        <div className="lg:space-x-10 text-lg hidden lg:flex items-center">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.link}
              className={`${
                tab.button ? "border-2 px-3" : "hover:border-b-4"
              } py-1 ${activeTabStyle(
                tab.link
              )} transition-all ease-in-out duration-200 hover:border-secondary cursor-pointer`}
            >
              {tab.title}
            </Link>
          ))}
        </div>
      </nav>
      <img
        className="w-12 absolute left-3 lg:left-10 bottom-0 top-0 my-auto z-50 cursor-pointer"
        src={previous}
        onClick={handlePrevious}
        alt=""
      />

      <TransitionGroup className="flex-1">
        <CSSTransition
          key={location.pathname}
          timeout={5000}
          exit={false}
          classNames="fade"
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <img
        className="w-12 absolute right-3 lg:right-10 bottom-0 top-0 my-auto cursor-pointer z-50"
        onClick={handleNext}
        src={next}
        alt=""
      />
      <div className="px-10 lg:px-0 absolute bottom-8 left-5 lg:left-20 flex flex-col text-left space-y-3">
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
      <div className="flex items-center space-x-4 rotate-90 absolute right-0 bottom-16 lg:bottom-32">
        <span className="text-secondary hidden lg:flex">Follow Me</span>
        <span className="w-10 h-px bg-secondary hidden lg:flex"></span>
        <a
          href="https://github.com/Lionel-hub1"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-6 -rotate-90" src={github} alt="" />
        </a>
        <a
          className=""
          href="https://www.linkedin.com/in/jean-lionel-ndabaga-536734213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-6 -rotate-90" src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
