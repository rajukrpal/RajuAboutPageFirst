import  { useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import About from "../about/About";

const AboutPage = () => {
    const [typeing,setTypeing] = useState([" Raju Kumar Pal"])
  return (
    <>
    <Header/>
    <About />
      <div>
        <center>
          <h3 className="py-5 font-semibold italic text-indigo-200 text-2xl">
             
             
          </h3>
    
        </center>
        <div className="lg:flex  gap-20">
          <div className="lg:w-[40%] flex justify-center items-center px-8">
            <img className="" src="/raju.png" alt="" />
          </div>
          <div className=" lg:w-[50%] flex justify-center items-center">
            <div className="p-5 flex ">
                <div className="w-full italic">
              <center>
                <h4 className=" py-4 italic text-xl font-extralight tracking-wider text-[#1FDE30]">
                  Hello,&nbsp;
                  <ReactTyped 
              typeSpeed={50}
              backSpeed={50}
              loop={true}
              showCursor={false}
              style={{fontSize:"20px" , fontWeight:"bold", color:"#BFC9CA"}}
              strings={ typeing} />
                </h4>
              </center>
              <p className="text-gray-400 tracking-wider leading-7">
              I'm a passionate and experienced professional working in the
                 <span> React Js</span> industry. My background includes [brief
                description of your background]. With 1 years of
                experience in React js, I bring a wealth of
                expertise to the table. I thrive on challenges and view every
                opportunity as a chance to learn and grow. My skills include
                React js , javaScript , html , css , tailwined css , which enable me to excel in my work. My
                mission is to Softwere Enginiar. I
                strive to promote excellence and creativity in my work and
                always welcome new challenges. For any inquiries or
                collaboration opportunities, feel free to reach out using the
                details provided below:<br /><br /> Email: <span className="hover:underline hover:text-blue-500"><Link> rajukumarpal95@gmail.com</Link>  </span><br /> Phone: <span className="hover:underline hover:text-blue-500"> <Link> +91 6209090900</Link>  </span> <br /> LinkedIn: <span  className="hover:underline hover:text-blue-500"> <Link>http://linkedin.com/in/raju-kumar-pal-1938652a6</Link> </span> <br /> <p className="py-4 text-white">Thank you!</p> 
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
