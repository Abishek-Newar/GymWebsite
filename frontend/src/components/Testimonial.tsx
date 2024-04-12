import avatar from "../assets/avatar.jpg"

const Testimonial = () => {
  return (
    <div className=' pt-36 pb-36 bg-[#464646]'>
        <div className='flex flex-col xl:grid xl:grid-cols-2 '>
            <div className='flex items-center justify-center'>
                <div className='w-[40rem]'>
                <h1 className='text-6xl text-white font-bold mb-10'>What Our  Happy Clients Say About Us</h1>
                <p className='text-xl text-gray-300'>I've been a member of Fitness Within for 6 months now asn I absolutely love it! The trainers are so motivated and they really help to reach fitness goals</p>
                </div>
            </div>
            <div className='border lg:w-[35rem]  p-8 mt-20 lg:p-24 lg:h-[400px] mx-auto  rounded-xl'>
                <div className="flex items-center mb-6 gap-6">
                  <img src={avatar} className="w-12 h-12 rounded-full " alt="" />
                <h1 className='text-2xl uppercase font-semibold text-center text-white'>FArhan Rio</h1>
                </div>
                <p className='text-lg text-gray-300'>I've been comming to this gym for 3 years now and I've been in the better shape. the trainers are amazing and they always push me be my best. I am gald to this gym</p>
            </div>

        </div>
    </div>
  )
}

export default Testimonial