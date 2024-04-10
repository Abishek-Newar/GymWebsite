import logo from "../assets/logo.png"
import { Link } from "react-scroll"
const Navbar = () => {
  return (
    <div className="fixed w-full">
        <div >
        <nav className="flex items-center justify-between px-32 py-5  transparent shadow-lg">
        <div>
            <img src={logo} alt="" width={100} height={100} />
        </div>
        <div>
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