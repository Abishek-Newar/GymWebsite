import React, { ReactElement } from 'react'
import { FaDrumSteelpan } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { IoBodySharp } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
const Program = () => {
  return (
    <div className=' px-36 py-20 bg-[#37383C]'>
        <div className='w-full'>
            <div className='pt-36 h-96 flex flex-col md:grid md:grid-cols-2 '>
                <h1 className='text-6xl text-white w-full md:w-[50rem] font-bold'>The Best Programs We Offers For You</h1>
                <p className='text-xl text-gray-300 font-semibold w md:w-[50rem]'>We offer a wide range of comprehensive fitness programs designed to cater to individuals of fitness levels. Our aim to help you achieve specific goals and maximize results</p>
            </div>
            <div className='flex flex-wrap  gap-10'>
                <ProgramBox colors="#464646" Icon={<FaDrumSteelpan className='text-7xl text-white' />} title="Strength Training" description="Our trainers will design that a progresive workout plans that proper achieve gains strength"/>
                <ProgramBox colors="#464646" Icon={<GrYoga className='text-7xl text-white' />} title="Baisc Yoga" description='This pProgram comboins yoga with cardio & strength training to help lose weight & fitness' />
                <ProgramBox colors="#FFffff" Icon={<IoBodySharp  className='text-7xl text-white' />} title="Body Building" description='For those looking to increase strength and build musclkes as well, this is the place you are looking for' />
                <ProgramBox colors="#464646" Icon={<FaRunning className='text-7xl text-white' />} title="Weight Loss" description="Our weight loss programs are designed to help you make sustainable lifestyle changes" />
            </div>
        </div>
    </div>
  )
}

interface programProps{
    title: string,
    description: string,
    Icon: ReactElement,
    colors: string
}
function ProgramBox({title,description,Icon,colors}:programProps){

    return <div className={`border w-[30rem] gap-10 flex pt-20  flex-col p-10 h-[450px] rounded-xl mx-auto bg-[${colors}]`} >
        {Icon}
        <div>
        <h1 className='text-3xl font-bold mb-6 text-white'>{title}</h1>
        <p className='text-gray-300 text-xl font-semibold'>{description}</p>
        </div>
    </div>
}

export default Program