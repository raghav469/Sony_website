import gsap from 'gsap'
import { useState } from 'react'

const MenuCrossIcons = () => {
    const [isOpen , setIsOpen] = useState(false);
    const handleClick = () => {
        const gsapTl = gsap.timeline();
        if(!isOpen){
            gsapTl.to(".l1", {
                top : "0rem"
            }, "a1")
            gsapTl.to(".l1", {
                rotate : "45deg",
                duration : 0.3
            }, "a2")
            gsapTl.to(".l2", {
                top : "0rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate : "-45deg" ,
                duration : 0.3
            }, "a2")
        } else {
            gsapTl.to(".l1", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l1", {
                top: "-0.3rem"
            }, "a1")
            gsapTl.to(".l2", {
                rotate: "0deg",
            }, "a2")
            gsapTl.to(".l2", {
                top: "0.3rem"
            }, "a1")
        }

        setIsOpen(prev => !prev);
    }
    return (
        <div onClick={handleClick} className='relative cursor-pointer mt-6 h-[1.5rem] w-[2rem]'>
            <div className='absolute l1 top-[-0.25rem] h-[0.2rem] rounded-xl w-[1.9rem] bg-white'/>
            <div className='absolute l2 top-[0.25rem]  h-[0.2rem] rounded-xl w-[1.9rem] bg-white'/>
        </div>
    )
}

export default MenuCrossIcons