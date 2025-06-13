import { Button } from "./components/ui/button"

function Hero() {
  return (
    <div className='container mt-20 sm:ml-40 md:ml-60 ml-12 h-auto mb-40'> 
        <div className='bg-amber-400 rounded-[50%] w-[148px] h-[148px]'></div>
        <h1 className='font-[700] text-4xl max-w-[400px] mt-20'>Hey, I'm Arranyak Kar, Developer & Designer</h1>
        <h1 className=" font-[400] mt-2 text-gray-500">Guwahati City, IN</h1>
        <h1 className="font-[400] mt-3 max-w-[400px]  text-gray-500">I make your websites look awesome and functional. Developer by day, designer and thinker by night.</h1>
        
        <div className="btn max-w-[400px] flex gap-6 mt-5">

          <Button size="lg" className=" w-[120px] rounded-bl-sm hover:w-[140px]">
            <span className="block w-full text-left">Let's Chat</span>
          </Button>
          <Button variant="green" size="lg" className="w-[230px]  rounded-full "> 
            <div className='w-[10px] h-[10px] rounded-full  bg-[#16B528] pulse-dot absolute mr-41'></div> Available for projects
            </Button>
        </div>

    </div>
  )
}

export default Hero