import React from 'react'

function Header() {
  return (
    <div className=' mt-5 h-[34vw] m-auto  bg-[url(/public/header_img.png)]  bg-no-repeat  bg-contain relative  '>
        {/* headercontent */}
        <div className='absolute flex flex-col max-w-[50%] bottom-[10%] items-start gap-[1.5vw] left-[6vh] animate-fade'>
            <h1  className='font-bold md:text-[max(4vw,22px)] text-white'>
                Order your favourite food here
            </h1>
            <p  className='text-white font-[1vw]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo voluptate maxime ducimus totam aliquam, id laboriosam error sunt hic tempora voluptatum quod. Earum illo ipsam expedita reiciendis suscipit quae!
            </p>
            <button className='px-5 py-3 rounded-full bg-slate-200'>View Menu</button>
        </div>
    </div>
  )
}

export default Header