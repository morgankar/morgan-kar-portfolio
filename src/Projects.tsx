
function Projects() {
  return (
    <div className='m-auto max-w-[1024px] mb-30'>
      <h1 className="text-2xl font-[700]  sm:ml-40 md:ml-60 ml-12">Projects</h1>

      {/* ProjectCard */}
      <div className=" max-w-[1024px]  sm:ml-60 ml-12 flex mt-10">

        <div className="projectCard w-[445px] h-[432px] border rounded-md relative ">
          <div className="border-2 w-[380px] h-[316px] rounded-md ml-8 mt-8"></div>
          <div className="text w-[380px] m-auto flex justify-between mt-5 items-center">
            <div className="project"> 
              <h1 className="text-xl font-[600]">helixAI</h1>
              <h1 className="text-gray-500">Landing page</h1>
            </div>
            <div className="iconsTwo flex gap-3 items-center">
              <span className="hover:brightness-0 transition hover:cursor-pointer"><img src="icon_github.svg" alt="github"/></span>
              <span className="hover:brightness-0 transition hover:cursor-pointer"><img src="link.svg" alt="github"/></span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Projects