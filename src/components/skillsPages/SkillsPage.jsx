import Expertise from "../experience/Expertise"
import Footer from "../footer/Footer"
import Header from "../header/Header"


const SkillsPage = () => {
  return (
    <>
    <Header />
    <div>
      <section className='skill-page py-5'>
        <div className='container mx-auto'>

            <div className="title text-center md:text-4xl text-2xl py-5 leading-10 -tracking-tighter font-bold shadow-2xl shadow-gray-500 rounded-2xl">
                <p className="capitalize">I learn this language</p>
                <h2 >My Exprince Arrea</h2>
            </div>

            <div className="exprince-items lg:grid grid-cols-12 gap-x-20 gap-y-6  py-5 px-8 lg:space-y-0 space-y-6">

                <div className="col-span-6  ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100 ">
                        <p>React JS</p>
                        <p>80%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                        <span className="transition-all transform origin-left h-[100%] rounded-full absolute left-0 top-0 duration-700 bg-[#4cd67adc]" style={{width:"80%"}}></span>
                    </div>
                </div>

                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>javaScripat</p>
                        <p>90%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                        <span className="transition-all transform origin-left h-[100%] rounded-full absolute left-0 top-0 duration-700 bg-[#7FBD3E]" style={{width:"90%"}}></span>
                    </div>
                </div>

                <div className=" col-span-6">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>Firebase</p>
                        <p>78%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                        <span className="transition-all transform origin-left h-[100%] rounded-full absolute left-0 top-0 duration-700 bg-[#7FBD3E]" style={{width:"78%"}}></span>
                    </div>
                </div>

                <div className=" col-span-6">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>Tailwind CSS</p>
                        <p>85%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                        <span className="transition-all transform origin-left h-[100%] rounded-full absolute left-0 top-0 duration-700 bg-[#7FBD3E]" style={{width:"85%"}}></span>
                    </div>
                </div>

                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>Node JS</p>
                        <p>40%%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                        <span className="transition-all transform origin-left h-[100%] rounded-full absolute left-0 top-0 duration-700 bg-[#3c3ea0fd]" style={{width:"40%"}}></span>
                    </div>
                </div>
                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>html</p>
                        <p>98%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                    <span className=" h-full bg-[#7FBD3E] rounded-full absolute left-0 top-0 duration-300 content-['']" style={{ width: "98%" }}></span>

                    </div>
                </div>

                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>Bootstrap</p>
                        <p>80%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                    <span className=" h-full bg-[#4cd67adc] rounded-full absolute left-0 top-0 duration-300 content-['']" style={{ width: "80%" }}></span>

                    </div>
                </div>

                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>C</p>
                        <p>87%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                    <span className=" h-full bg-[#7FBD3E] rounded-full absolute left-0 top-0 duration-300 content-['']" style={{ width: "87%" }}></span>

                    </div>
                </div>
                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>MUI</p>
                        <p>89%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                    <span className=" h-full bg-[#7FBD3E] rounded-full absolute left-0 top-0 duration-300 content-['']" style={{ width: "89%" }}></span>

                    </div>
                </div>
                <div className="col-span-6 ">
                    <div className="flex justify-between font-semibold leading-9 text-[#51ebeb] opacity-100">
                        <p>Mongodb</p>
                        <p>30%</p>
                    </div>
                    <div className="mt-2 h-3 w-full bg-[#d34343fb] rounded-full relative" data-percent="90%">
                    <span className=" h-full bg-[#3c3ea0fd] rounded-full absolute left-0 top-0 duration-300 content-['']" style={{ width: "30%" }}></span>

                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
    <Expertise />
    <Footer />
    </>
  )
}

export default SkillsPage









