import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className={'w-[18%] min-h-[100vh] border-r'}>
        {/* options */}
        <div className='flex flex-col gap-8 pt-8 pl-8'>
            <NavLink to="/add" className='flex items-center gap-2 p-2  border border-r-0 rounded-l-[15px]'>
                <img src={assets.add_icon} alt="add-icon" />
                <p className=' max-sm:hidden'>Add Item</p>
            </NavLink>

            <NavLink to="/list" className='flex items-center gap-2 p-2 border border-r-0 rounded-l-[15px]'>
                <img src={assets.order_icon} alt="order-icon" />
                <p className=' max-sm:hidden'>List Items</p>
            </NavLink>

            <NavLink to="/orders" className='flex items-center gap-2 p-2 border border-r-0 rounded-l-[15px]'>
                <img src={assets.order_icon} alt="add-icon" />
                <p className=' max-sm:hidden'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar