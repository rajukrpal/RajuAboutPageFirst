import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const Banner = () => {
  const [typing,setTyping] = useState([" 💻 Frontend Devloper .","💻 React Devloper ."])

  return (
    <>
      <div className=" lg:grid grid-cols-12 py-5 px-5 gap-5">
        <div className="col-span-6 "
          
        >
          <div className="py-6 space-y-5 ">
            <h3 className="italic lg:text-3xl text-2xl font-semibold text-[#3B77A9] py-4 ">
              Hi, i am
            </h3>
           
            <h1 className="lg:text-5xl text-3xl font-bold">Raju Kumar Pal</h1>
            <h2 className="lg:text-2xl text-xl font-extrabold italic">
              <span className="font-light">I Am </span>
              <span className="space-x-4">
                <ReactTyped 
              typeSpeed={50}
              backSpeed={50}
              loop={true}
              style={{fontSize:"20px" , fontWeight:"bold", color:"#BFC9CA"}}
              strings={typing} /></span>
            </h2>
            <p className="text-[#6fc3c9] lg:text-[25px] font-thin text-[20px]">
            React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like.
            </p>
            <div className="icons flex space-x-10">
              <Link  className="hover:text-[#0949E6] hover:transform hover:duration-500">
                {" "}
                <FaFacebookF className="text-3xl " />{" "}
              </Link>
              <Link  className="hover:text-[#0949E6] hover:transform hover:duration-500">
                {" "}
                <FaInstagram className="text-3xl " />{" "}
              </Link >
              <Link to={"http://linkedin.com/in/raju-kumar-pal-1938652a6"} target="_blank" className="hover:text-[#0949E6] hover:transform hover:duration-500">
                <IoLogoLinkedin className="text-3xl " />{" "}
              </Link>
              <Link to={"https://github.com/rajukrpal"} target="_blank"  className="hover:text-[#0949E6] hover:transform hover:duration-500">
                {" "}
                <FaGithub className="text-3xl " />{" "}
              </Link>
            </div>
            <button className="bg-white px-4 py-2 text-black rounded-md font-semibold hover:transform hover:duration-500 hover:bg-slate-300">
              <Link to={"/contact"}>Contect Me</Link>
            </button>
          </div>
        </div>
        <div className=" col-span-6  flex items-center justify-center ">
          <div className="">
            <img
              className=" rounded-3xl shadow-orange-200 shadow-2xl "
              src="../../../public/devloper1.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
