import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";


const Servises = () => {
  return (
    <>
    <div>
      <div className='sm:pt-0 pt-12'>
        <center><h3 className='text-2xl underline font-bold py-4 w-fit shadow-md shadow-red-400 p-2 rounded-md'>My Services</h3></center>
      </div>
      <div className='lg:flex  lg:space-x-8 space-x-0 lg:space-y-0 space-y-8 px-10 py-10 '>
        <div className='space-y-4 rounded-xl shadow-xl bg-white p-5 w-full'>
            <center>
                <FaNodeJs className="text-2xl text-black"  />
            <h4 className='text-xl text-black font-bold'>Web Devloper</h4>
            </center>
            <p className='text-gray-400 text-center'>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</p>
            <center>
            <button className='px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-slate-400 hover:transform hover:duration-500'>Chack</button>
            </center>
        </div>
        <div className='space-y-4 rounded-xl shadow-xl bg-white p-5 w-full'>
            <center>
                <IoLogoJavascript className="text-2xl text-black" />
            <h4 className='text-xl text-black font-bold'>Backend Devloper</h4>
            </center>
            <p className='text-gray-400 text-center'>Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see</p>
            <center>
            <button className='px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-slate-400 hover:transform hover:duration-500'>Chack</button>
            </center>
        </div>
        <div className='space-y-4 rounded-xl shadow-xl bg-white p-5 w-full'>
            <center>
                <FaReact className="text-black text-2xl" />
            <h4 className='text-xl text-black font-bold'>React js Devlopar</h4>
            </center>
            <p className='text-gray-400 text-center'>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
            <center>
            <button className='px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-slate-400 hover:transform hover:duration-500'>Chack</button>
            </center>
        </div>
      </div>
    </div>
    </>
  )
}

export default Servises


