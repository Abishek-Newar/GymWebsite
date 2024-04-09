import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
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
                
                    <Link to=""><h2>
                        Home
                        </h2></Link>
                    <Link to=""><h2>
                        About Us
                        </h2></Link>
                    <Link to=""><h2>
                        Program
                        </h2></Link>
                    <Link to=""><h2>
                        Membership
                        </h2></Link>
                    <Link to=""><h2>
                        Testimonial
                        </h2></Link>

            </div>
        </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar