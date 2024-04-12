
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Membership = () => {
    const discovers = ["5 classes per month","4 group classes monthly","Online class access","E-book fitness guide"]
    const Enterprise = ["10 classes per month","8 group classes monthly","Online class access","E-book fitness guide","7-Extra fitness training"]
    const Professional = ["7 classes per month","6 group classes monthly","Online class access","E-book fitness guide"]
  return (
    <div className=' bg-[#37383C]  lg:pt-36 lg:pb-36'>
        <div className=''>
            <h1 className='text-center w-full  mb-10 text-6xl font-bold text-white'>Choose The Best Plan</h1>
            <p className='text-center mt-10 mb-16 text-xl text-gray-300'>Choose a plan That's right for growing your team. Simple Pricing & No hidden charges</p>
            <div className='flex flex-wrap gap-6   lg:px-64'>
            <div className='w-[rem] flex  items-center mx-auto justify-center ' >
                <div className='lg:w-[400px] h-[550px] flex flex-col mx-auto  rounded-xl bg-[#464646]'>
                    <Headers  title="Discover"/>
                    <Text dollars="99" />
                    {discovers.map((item)=>(
                        <Desc descrip={item} />
                    ))}
                 </div>
                </div>
                <div className='lg:w-[400px] flex flex-col mx-auto h-[600px] rounded-xl bg-[#FF662D]' >
                <Headers  title="Enterprise"/>
                    <Text dollars="299" />
                    {Enterprise.map((item)=>(
                        <Desc descrip={item} />
                    ))}
                </div>
                <div className='lg:w-[400px] h-[600px] flex items-center mx-auto justify-center ' >
                <div className='lg:w-[32rem] flex flex-col  mx-auto h-[550px] rounded-xl bg-[#464646]'>
                <Headers  title="Professional"/>
                    <Text dollars="199" />
                    {Professional.map((item)=>(
                        <Desc descrip={item} />
                    ))}
                 </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
interface TExtProps{
    dollars: string
}
function Text({dollars}:TExtProps){
    return <div className='mt-8 text-center'>
        <span className='text-6xl font-bold text-white'>${dollars}</span>
        <span className='text-xl text-gray-300 '>/Per Month</span>
    </div>
}
interface titkeProps {
    title: string
}
function Headers({title}:titkeProps){
    return <h1 className='text-4xl text-white font-semibold text-center pt-16'>
        {title}
    </h1>
}
interface descProps{
    descrip: string
}
function Desc({descrip}:descProps){
    return <div className='flex gap-3 mt-10 px-12 lg:pl-24'>
        <IoCheckmarkDoneSharp className='text-white text-2xl ' />
        <p className='text-xl font-semibold text-gray-300'>{descrip}</p>
    </div>
}

export default Membership