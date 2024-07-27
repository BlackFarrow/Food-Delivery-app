import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='items-center m-auto mt-5 text-center font-[500] text-[20px]' id='app-download'>

        <p>For Better experience download <br /> Tomato App</p>
        <div className='flex justify-center gap-5 mt-3'>
            <img  className='h-10 cursor-pointer hover:scale-105 hover:duration-150' src={assets.play_store} alt="" />
            <img className='h-10 cursor-pointer hover:scale-105 hover:duration-150'  src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload