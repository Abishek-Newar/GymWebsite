import logo from "../assets/logo.png"
import { Link } from "react-scroll"
const Navbar = () => {
  return (
    <div className="fixed w-full z-30">
        <div >
        <nav className="flex items-center justify-between px-10 lg:px-32 py-5  transparent shadow-lg">
        <div>
            <img src={logo} alt="" className="w-[50px] h-[50px]  lg:w-[100px] lg:h-[100px]" />
        </div>
        <div className="hidden lg:block">
            <div className="flex gap-6 font-bold text-white text-xl">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-red-400 transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="aboutus"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-red-400 transition-all cursor-pointer"
            >
              About
            </Link><Link
              to="program"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-red-400 transition-all cursor-pointer"
            >
              Programs
            </Link><Link
              to="membership"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-red-400 transition-all cursor-pointer"
            >
              Membership
            </Link><Link
              to="testimonial"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-red-400 transition-all cursor-pointer"
            >
              Testimonial
            </Link>

            </div>
        </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar