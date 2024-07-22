"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import { SlideTabs } from '../animation/NavAnimation'
import { FaRegUser } from 'react-icons/fa6'

const NavBar = () => {
    const [navBackground, setNavBackground] = useState<boolean>(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            console.log(navBackground);
            setNavBackground(true)
        } else {
            setNavBackground(false)
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", changeBackground)
    }
    return (
        <div className={`fixed z-40 w-full ${navBackground ? "duration-[2000ms] bg-black" : "duration-[2000ms] bg-gradient-to-tr from-black/0 via-black/5 to-stone-800"}`}>
            <div className='h-20 md:flex hidden items-center justify-around'>
                <Logo isBlack={navBackground} />
                <SlideTabs />
                <FaRegUser className={`text-3xl hover:text-slate-500 duration-75 ${navBackground ? "text-white duration-[3000ms]" : "text-white duration-[3000ms]"} hover:cursor-pointer `} />
            </div>
            <div>
            </div>
        </div>
    )
}

export default NavBar