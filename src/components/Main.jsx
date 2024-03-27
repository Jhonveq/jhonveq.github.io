import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaFreeCodeCamp, FaInstagram  } from "react-icons/fa";

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jhon Coding" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jhon Velasco</h1>
                <h2 className='flex sm:text-3xl text-2xl'>I'm a 
                    <TypeAnimation sequence={[
                        'Full Stack Developer',
                        2000,
                        'Coder',
                        2000,
                        'JavaScript Lover', 
                        2000]} 
                    wrapper='div'
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                 <a href="https://www.linkedin.com/in/jhon-velasco-a1aa40282/" target='_blank'><FaLinkedin className='cursor-pointer' size={20} /></a>
                 <a href="https://github.com/Jhonveq" target='_blank'><FaGithub className='cursor-pointer' size={20} /></a>
                 <a href="https://www.freecodecamp.org/jhonveq" target='_blank'><FaFreeCodeCamp className='cursor-pointer' size={20} /></a>
                 <a href="https://www.instagram.com/jhonvelascoq_?igsh=cHpqZ3YzZHp3eTJv&utm_source=qr" target='_blank'><FaInstagram className='cursor-pointer' size={20} /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main