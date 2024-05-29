
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

const Footer = () => {
  const location = useLocation();
  return (
    <>
    <Container>
      <footer className="md:flex px-10 justify-between py-10 md:space-y-0 space-y-5 items-center bg-black">
        <div className="w-full justify-center flex items-center">
          <h6 className="italic md:text-[15px] text-sm"> Copyright &#169;2024-2025 Raju Kumar Pal </h6>
        </div>
        <div className="w-full  flex md:justify-end justify-center items-center uppercase">
          <div className="md:space-x-20 space-x-5 flex md:text-[15px] text-sm items-center justify-center menu-links ">
            <Link to={"/about"} className={`hover:text-[#0949E6] hover:transform hover:duration-500 ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <Link to={"/privacy-policy"} className={`hover:text-[#0949E6] hover:transform hover:duration-500 ${location.pathname === '/privacy-policy' ? 'active' : ''}`}>
            Privacy Policy
            </Link>
            <Link to={"/contact"} className={`hover:text-[#0949E6] hover:transform hover:duration-500 ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contect
            </Link>
            
          </div>
        </div>
      </footer>
      </Container>
    </>
  );
};

export default Footer;
