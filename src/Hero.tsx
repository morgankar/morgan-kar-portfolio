import { Button } from "./components/ui/button"
import { useEffect } from "react";
import { gsap } from "gsap";


function Hero() {
  useEffect(() => {
 
    gsap.fromTo(".blur", 
      {filter:"blur(4px)", opacity:0},
      { filter: "blur(0px)", opacity: 1, duration: 1.2, ease: "power2.out"});
    
    gsap.fromTo(".up",
      {y:40,duration:1.3},
      {y:0}
    )
  }, []);

  return (
    <div className='container mt-20 m-auto h-auto mb-40 blur up  max-w-[510px] '> 
        <div className='  rounded-[50%] w-[100px] h-[100px] overflow-hidden relative'>
          <img className="object-cover  absolute " src="profilenewpic.jpg" alt="profile pic" />
        </div>
        <h1 className='font-[700] text-5xl max-w-[500px] mt-10 '>Hey, I'm Morgan. Developer & Designer</h1>
        <h1 className=" font-[400] mt-2 text-gray-500">Guwahati City, IN</h1>
        <h1 className="font-[400] mt-3 max-w-[400px]  text-gray-500">I make your websites look awesome and functional. Developer by day, designer and thinker by night.</h1>
        
        <div className="btn max-w-[400px] flex gap-6 mt-5">

          <a href="https://calendly.com/morgankar/30min" target="blank" rel="noopener noreferrer">
            <Button size="lg"  className="w-[120px] rounded-bl-sm hover:w-[140px]">
              <span className="block w-full text-left">Let's Chat</span>
            </Button>
          </a>
          <Button variant="green" size="lg" className="w-[230px]  rounded-full "> 
            <div className='w-[10px] h-[10px] rounded-full  bg-[#16B528] pulse-dot absolute mr-41'></div> Available for projects
            </Button>
        </div>

    </div>
  )
}

export default Hero