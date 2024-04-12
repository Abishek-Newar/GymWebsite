

const AboutUS = () => {
  return (
    <div className='lg:h-screen p-4 lg:p-0  xl:grid grid-cols-2 bg-[#3A3B3F]'>
        <div className="h-full w-full hidden xl:block"></div>
        <div className="w-full h-full flex items-center">
            <div className="lg:w-[45rem]">
                <h1 className="text-6xl text-white font-bold mb-10">Get Ready To Reach Your Fitness Goals</h1>
                <p className="text-white font-semibold mb-10 text-xl">We are a gym that is committed to helping people reach their fitness goals. We offer a variety of theirs programs and services to fit your needs. wheather you are a experienced athlete</p>
                <p className="text-xl font-semibold text-gray-300">We believe that everyone should have access to the benefits of exercise make it happen.</p>
                <button className="bg-red-600 font-semibold text-2xl rounded-lg mt-14 text-white p-5">Free Trial Today</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUS