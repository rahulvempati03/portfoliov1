import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-4 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center m-8 gap-4 text-2xl">
            <a target="_blank" href="https://www.linkedin.com/in/rahul-vempati-62a935213/"><FaLinkedin/></a>
            <a target="_blank" href="https://github.com/rahulvempati03"><FaGithub/></a>
            <a target="_blank" href=""><FaSquareXTwitter/></a>
            <a target="_blank" href=""><FaInstagram/></a>
            <a target="_blank" href="https://leetcode.com/u/vempatirahul03/"><SiLeetcode/></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
