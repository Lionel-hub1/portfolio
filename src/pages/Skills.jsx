import frontend from "../assets/icons/frontend.svg";
import star from "../assets/icons/star.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import bootsrap from "../assets/icons/bootstrap.svg";
import backend from "../assets/icons/backend.svg";
import mobile from "../assets/icons/mobile.svg";
import others from "../assets/icons/others.svg";
import django from "../assets/icons/django.svg";
import restful from "../assets/icons/restful.svg";
import spring from "../assets/icons/spring.svg";
import mysql from "../assets/icons/mysql.svg";
import python from "../assets/icons/python.svg";
import reactnative from "../assets/icons/reactnative.svg";
import expo from "../assets/icons/expo.svg";
import androidstudio from "../assets/icons/androidstudio.svg";
import flutter from "../assets/icons/flutter.svg";
import java from "../assets/icons/java.svg";
import server from "../assets/icons/server.svg";

const Skills = () => {
  return (
    <section className="py-2 ">
      <h2 className="text-2xl font-bold py-1 text-center">Skills</h2>
      <div className="grid auto-cols-[300px] grid-flow-col gap-x-5 snap-always snap-x snap-mandatory overflow-x-auto pb-5 mx-16 lg:mx-24">
        <div className="border-secondary-light text-primary-dark p-4 ">
          <h3 className="text-lg flex justify-center space-x-4 font-bold py-1 rounded-md shadow-lg w-full">
            <img className="w-6" src={frontend} alt="" />
            <span>Frontend</span>
          </h3>
          <ul className="flex flex-col mx-7 mt-4 space-y-4 list-none">
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={html} alt="" />
                <span>HTML</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={css} alt="" />
                <span>CSS</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={javascript} alt="" />
                <span>JavaScript</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>90%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={react} alt="" />
                <span>React</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>87%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={tailwind} alt="" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={bootsrap} alt="" />
                <span>Bootstrap</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4">
          <h3 className="text-lg flex justify-center bg-secondary-light bg-opacity-50 space-x-4 font-bold py-1 rounded-md shadow-lg w-full">
            <img className="w-6" src={backend} alt="" />
            <span></span>
            <p className="flex items-center">
              Backend <span className="text-xs mx-1">(Specialized)</span>{" "}
            </p>
          </h3>
          <ul className="flex flex-col mx-7 mt-4 space-y-4 list-none">
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={django} alt="" />
                <span>Django</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>80%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={python} alt="" />
                <span>Python</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>90%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={spring} alt="" />
                <span>Java SpringBoot</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>20%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={mysql} alt="" />
                <span>MySQL</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={restful} alt="" />
                <span>RESTful APIs</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>80%</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4">
          <h3 className="text-lg flex justify-center space-x-4 font-bold py-1 rounded-md shadow-lg w-full">
            <img className="w-6" src={mobile} alt="" />
            <span>Mobile</span>
          </h3>
          <ul className="flex flex-col mx-7 mt-4 space-y-4 list-none">
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={reactnative} alt="" />
                <span>React Native</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>60%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={expo} alt="" />
                <span>Expo</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={androidstudio} alt="" />
                <span>Android Studio</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>100%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={flutter} alt="" />
                <span>Flutter</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>80%</span>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <div className="flex space-x-2">
                <img className="w-6" src={java} alt="" />
                <span>Java</span>
              </div>
              <div className="flex space-x-2">
                <img className="w-5" src={star} alt="" />
                <span>60%</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4">
          <h3 className="text-lg flex justify-center space-x-4 font-bold py-1 rounded-md shadow-lg w-full">
            <img className="w-6" src={server} alt="" />
            <span>DevOps</span>
          </h3>
          <ul className="flex flex-col mx-7 mt-4 space-y-4 list-none">
            <li>Windows 2019 Server</li>
            <li>Linux</li>
            <li>Shell Scripting</li>
            <li>Puppet</li>
          </ul>
        </div>
        <div className="border-secondary-light text-primary-dark p-4">
          <h3 className="text-lg flex justify-center space-x-4 font-bold py-1 rounded-md shadow-lg w-full">
            <img className="w-6" src={others} alt="" />
            <span>Others</span>
          </h3>
          <ul className="flex flex-col mx-7 mt-4 space-y-4 list-none">
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Retool</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
