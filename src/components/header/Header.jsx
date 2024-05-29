
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  .menu-links {
    display: flex;
    gap: 3px;
    margin: 4px 0;

    a {
      color: white;
      transition: color 0.5s, transform 0.5s;
    }

    a:hover {
      color: #0949e6;
      transform: scale(1.1);
    }

    .active {
      color: #0949e6;
    }
  }

`;

const Header = () => {
  let [brandName, setBrandName] = useState("Raju Kumar Pal");
  const location = useLocation(); 
console.log("Current Pathname:", location.pathname);
  return (
    <>
    <Container>
      <div className="lg:flex justify-between items-center px-5 lg:h-20 py-5 bg-black">
        <div>
        
          <h1 className="text-2xl font-semibold flex gap-3 items-center italic">
            <img className="w-14 h-14 rounded-full" src="/raju1.jpg" alt="" />
            {brandName} <span><img className="h-9" src="/blueTik.png" alt="" /></span>
          </h1>
        </div>
        <div className="lg:space-x-10  flex lg:flex-row font-bold flex-col gap-3 lg:my-0 my-4 menu-links uppercase">
       
          <Link
            className={`hover:text-[#0949E6] hover:transform hover:duration-500 lg:py-0 py-2 ${location.pathname === '/' ? 'active' : ''}`}
            to={"/"}
          >
            Home
          </Link>
          
          <Link
            className={`hover:text-[#0949E6] hover:transform hover:duration-500 lg:pb-0 pb-2 ${location.pathname === '/skills' ? 'active' : ''}`}
            to={"/skills"}
          >
            Skills
          </Link>
          <Link
            className={`hover:text-[#0949E6] hover:transform hover:duration-500 lg:pb-0 pb-2 ${location.pathname === '/contact' ? 'active' : ''}`}
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={`hover:text-[#0949E6] hover:transform hover:duration-500 lg:pb-0 pb-2 ${location.pathname === '/about' ? 'active' : ''}`}
            to={"/about"}
          >
            About
          </Link>
         
        </div>
        <div>

          <button className="sm:px-6 sm:py-3 px-4 py-2 rounded-md bg-white text-black font-semibold shadow hover:bg-slate-300 hover:transform hover:duration-500">
            <Link >Hire Me</Link>
          </button>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Header;






