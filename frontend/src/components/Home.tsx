import main from "../assets/main.png"

const Home = () => {
  return (
    <div className="lg:h-screen pb-32 pt-32 relative  bg-gradient-to-tr from-[#333238]  to-[#1E1E26]  xl:grid lg:grid-cols-2">
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <div className="w-full pl-10 lg:w-[56rem] ">
            <h1 className="text-5xl mt-20 w-32 lg:w- lg:mt-0 lg:text-6xl font-bold mb-5 text-white uppercase ">GET healthy body with the perfect exercises</h1>
            <p className="text-xl text-white mb-6 ">we are always there to help you to make a healthy body and mind through the power of fitness</p>
            <button className="bg-[#FE1E2E] px-10 py-4 rounded-lg  ">Get Started</button>
            <div className="flex mt-16">
                <div className="w-48 h-20 flex items-center justify-center ">
                <Para members="10+" texts="Experts Trainers"/>
                </div>
                <div className="w-48 h-20 border-x-4 flex items-center justify-center">
                <Para members="970+" texts="Members Joined"/>                    
                </div>
                <div className="w-48 h-20 - flex items-center justify-center "><Para members="100+" texts="Fitness Program"/></div>
                
            </div>
            </div>
        </div>
        <div  className="w-full h-full hidden   xl:flex justify-center items-end">
            <img src={main} alt="" />
        </div>
    </div>
  )
}
interface paraProps{
    members: string,
    texts: string
}
function Para({members, texts}:paraProps){
    return <div className="text-white">
        <h1 className="text-4xl font-bold" >{members}</h1>
        <p className="text-lg ">{texts}</p>
    </div>
}

export default Home