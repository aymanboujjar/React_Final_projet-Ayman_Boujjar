import { CgProfile } from "react-icons/cg";
import { SlBag } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-around mt-5">
        <h1 className="text-4xl font-extrabold flex relative">
          Fashe
          <span className="text-red-600 absolute bottom-[0px] text-2xl right-[-20px]">
            <TbPointFilled />
          </span>
        </h1>
        <ul className="flex gap-x-8">
          <li className="hover:underline hover:text-black ">Home</li>
          <li className="hover:underline hover:text-black ">Shop</li>
          <li className="hover:underline hover:text-black ">Sale</li>
          <li className="hover:underline hover:text-black ">Blog</li>
          <li className="hover:underline hover:text-black ">About</li>
          <li className="hover:underline hover:text-black ">Contact</li>
        </ul>
        <div className="flex gap-x-6">
          <CgProfile className="text-2xl" />
          <SlBag className="text-2xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
