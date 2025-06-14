
function Projects() {
  return (
    <div className='m-auto max-w-[1024px] border-2 mb-30'>
      <h1 className="text-2xl font-[700]  sm:ml-40 md:ml-60 ml-12">Projects</h1>

      {/* ProjectCard */}
      <div className=" max-w-[1024px]  sm:ml-60 ml-12 flex mt-10">

        <div className="projectCard w-[445px] h-[432px] border rounded-md relative ">
          <div className="border-2 w-[380px] h-[316px] rounded-md ml-8 mt-8"></div>
          <div className="border-2 text w-[380px] m-auto flex justify-between">
            <div className="project"> 
              <h1>helixAI</h1>
              <h1>Landing page</h1>
            </div>
            <div className="iconsTwo flex">
              <span><img src="icon_github.svg" alt="github"/></span>
              <span><img src="icon_linkedin.svg" alt="github"/></span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Projects