import { Button } from "./components/ui/button"

function Hero() {
  return (
    <div className='container m-auto mt-40 border-2 '> 
        <div className='bg-amber-400 rounded-[50%] w-[148px] h-[148px]'></div>
        <h1 className='font-[700] text-4xl max-w-[400px] mt-20'>Hey, I'm Morgan A. Kar, Developer & Designer</h1>
        <h1 className=" font-[400] mt-2 text-gray-500">Guwahati City, IN</h1>
        <h1 className="font-[400] mt-3 max-w-[400px]  text-gray-500">I make your websites look awesome and functional. Developer by day, designer and thinker by night.</h1>
        <div className="btn border-2 max-w-[400px] flex gap-5 mt-4">

          <Button size="lg" className=" w-[100px] rounded-bl-sm ">Let's Chat</Button>
          <Button variant="green" size="lg" className="w-[173px]  rounded-4xl "> 
            <div className='w-[10px] h-[10px] rounded-full  bg-[#16B528] '></div> Available for projects
            </Button>
        </div>

    </div>
  )
}

export default Hero