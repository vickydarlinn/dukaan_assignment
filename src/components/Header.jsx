import { CiCircleQuestion } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import icon_img from "../assets/Message.png";
import { RiMenu2Fill } from "react-icons/ri";
// import HamburgerData from "./HamburgerData";

function Header({ showMenu, setShowMenu }) {
  return (
    <div className="sm:py-3  px-2 py-2 flex items-center justify-between border-b-[2px] shadow-sm fixed top-0 left-0 md:left-52 right-0 bg-white ">
      <div className="flex md:gap-4 gap-2 items-center">
        <RiMenu2Fill
          onClick={() => setShowMenu(true)}
          className="md:hidden text-[#146EB4] text-2xl cursor-pointer"
        />
        <h4 className="text-xl font-semibold">Payouts</h4>
        <span className="lg:flex hidden items-center text-xs text-gray-700 gap-1">
          <CiCircleQuestion className="text-[14px]" />
          How it works
        </span>
      </div>
      <div className="flex lg:w-[400px] max-[475px]:hidden items-center w-[300px] px-[16px] py-[9px]  bg-[#F2F2F2] gap-4 rounded-md">
        <IoSearchOutline className="text-[#808080] md:text-[20px] text-base" />
        <input
          type="text"
          className="outline-none bg-transparent w-full text-[10px] md:text-[16px]"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex items-center sm:gap-4 gap-2">
        <div className="md:h-10 md:w-10 w-7 h-7 rounded-full bg-[#E6E6E6] flex items-center justify-center">
          <img src={icon_img} className="md:w-auto w-3" />
        </div>
        <div className="md:h-10 md:w-10 md:text-3xl w-7 h-7 text-xl rounded-full bg-[#E6E6E6] flex items-center justify-center ">
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;
