
import javaScript from '../../../public/javaScript.png'
import { Button } from '@mui/material';

const About = () => {
  return (
    <>
      <div className="pb-10">
        <div className="py-4">
          <h1 className="text-2xl underline font-extralight">
            <center className=''> <h1 className='w-fit font-bold shadow-yellow-300 shadow-md p-2 rounded-lg'>About Me</h1></center>
          </h1>
        </div>
        <div className='md:grid grid-cols-12 gap-x-10 px-6'>
          <div className='col-span-6'>
          <div className=" w-full flex justify-center items-center  h-full">
               <img className='w-80 h-40' src={javaScript} alt="" />
            </div>
          </div>
          <div className='col-span-6 text-gray-400'>
            <h1 className='text-2xl font-bold py-4 tracking-wider text-blue-400'>javaScript</h1>
          <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.</p>
            <br />
            <p>JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.</p><br />
            <Button variant='outlined'>Read More...</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
