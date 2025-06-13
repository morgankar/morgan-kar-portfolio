import React from 'react'

function Navbar() {
  return (
    <div className='m-auto text-center  flex justify-center items-center mt-10 mb-30 gap-2'>
      <div className='card w-[50px] h-[50px] border rounded-md'>
        <span><img className='m-auto mt-2' src="icon_x.svg" alt="x icon" /></span>
      </div>
      <div className='card w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-1.5' src="icon_github.svg" alt="x icon" /></span>
      </div>
      <div className='card w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2' src="icon_mail.svg" alt="x icon" /></span>
      </div>
      <div className='card w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2' src="icon_linkedin.svg" alt="x icon" /></span>
      </div>
       <div className='card w-[50px] h-[50px] border rounded-md'>
         <span><img className='m-auto mt-2' src="page.svg" alt="x icon" /></span>
      </div>
      
    </div>
  )
}

export default Navbar