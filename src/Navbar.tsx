import { gsap } from "gsap";
import { useEffect } from "react";



gsap.from(".card", {
 
})

function Navbar() {

  useEffect(() => {
    gsap.fromTo(".card", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });

    gsap.fromTo(".blur", 
      {filter:"blur(4px)", opacity:0},
      { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power2.out"});
  }, []);

  return (
    <div className='m-auto text-center  flex justify-center items-center mt-10 mb-30 gap-2'>

      {/* Mini Cards  */}
      <a href="https://x.com/MorganKarX" target="blank" rel="noopener noreferrer">
        <div className='card group w-[50px] h-[50px] border rounded-md'>
          <span><img className='m-auto mt-2 group-hover:brightness-0 transition hover:cursor-pointer' src="icon_x.svg" alt="x icon" /></span>
        </div>
      </a>

      <a href="https://github.com/morgankar" target="blank" rel="noopener noreferrer">
      <div className='card group w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-1.5 group-hover:brightness-0 transition hover:cursor-pointer' src="icon_github.svg" alt="x icon" /></span>
      </div>
      </a>
       <a href="https://x.com/MorganKarX" target="blank" rel="noopener noreferrer">
      <div className='card group w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2 group-hover:brightness-0 transition hover:cursor-pointer' src="icon_mail.svg" alt="x icon" /></span>
      </div>
      </a>
       <a href="https://www.linkedin.com/in/morgankar" target="blank" rel="noopener noreferrer">
      <div className='card group w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2 group-hover:brightness-0 transition hover:cursor-pointer' src="icon_linkedin.svg" alt="x icon" /></span>
      </div>
      </a>
       <a href="https://x.com/MorganKarX" target="blank" rel="noopener noreferrer">
       <div className='card group w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2 group-hover:brightness-0 transition hover:cursor-pointer' src="page.svg" alt="x icon" /></span>
      </div>
      </a>

      
    </div>
  )
}

export default Navbar