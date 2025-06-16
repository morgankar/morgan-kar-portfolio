type ProjectProps = {
  title:string;
  subtitle:string;
  img:string;
}
;

function Projects({title, subtitle ,img} : ProjectProps) {
  return (
    <div className='m-auto mb-10  max-w-[510px]'>
     

      {/* Project  */}
      <div className="flex justify-center items-center mt-10">

      {/* Project Card */}
        <div className="projectCard w-[445px] h-[432px] rounded-md relative  
        border">
          
          <div className=" w-[380px] h-[316px] rounded-md ml-8 mt-8 hover:cursor-pointer overflow-hidden">
            <img src={img} alt="img" />
          </div>
          <div className="text w-[380px] m-auto flex justify-between mt-5 items-center">
              <div className="project"> 
                <h1 className="text-xl font-[600]">{title}</h1>
                <h1 className="text-gray-500 text-xs">{subtitle}</h1>
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