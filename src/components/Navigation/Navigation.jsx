import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10  border-b-solid border-b-gray-300 border-b-2">
      <div className=" h-8 flex justify-between mx-2 my-4 md:mx-6 md:my-6 ">
        <form className="flex items-center bg-[#d9d9d9] px-1 py-1 rounded-2xl h-10 md:w-34 md:px-3 md:py-3">
          <img
            className="mr-1"
            src="/src/assets/search.png"
            alt="The search icon"
          />
          <input
            className="bg-[#d9d9d9] outline-none placeholder:inter placeholder:text-slate-400 w-32 text-sm  "
            type="search"
            name=""
            id=""
            placeholder="Search teachings"
          />
        </form>

        <nav className=" md:flex md:ml-auto md:space-x-3 hidden  ">
          <Link className="font-bold text-xl" to="">
            TEACHINGS
          </Link>
          <Link className="font-bold text-xl" to="">
            SONGS
          </Link>
          <Link className="font-bold text-xl" to="">
            EBOOKS
          </Link>
          <Link className="font-bold text-xl" to="">
            ABOUT US
          </Link>
          <Link className="font-bold text-xl" to="">
            CONTACT US
          </Link>
        </nav>
        <div
          className="flex justify-end me-5 cursor-pointer md:hidden "
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isOpen ? faCircleXmark : faBars}
            className={`text-blue-500 text-2xl`}
          />
        </div>
        {isOpen && (
          <nav className="md:hidden fixed inset-0 font-workSans fixed bg-[#9fcaff] text-[#3a4688] z-[9999] flex justify-center items-center ">
            <div className="text-center">
              <Link to="" className="block my-3 text-lg hover:text-[#29306f]">
                TEACHINGS
              </Link>
              <Link to="" className="block my-3 text-lg hover:text-[#29306f]">
                SONGS
              </Link>
              <Link to="" className="block my-3 text-lg hover:text-[#29306f]">
                EBOOKS
              </Link>
              <Link to="" className="block my-3 text-lg hover:text-[#29306f]">
                ABOUT US
              </Link>
              <Link to="" className="block my-3 text-lg hover:text-[#29306f]">
                CONTACT US
              </Link>
              <div
                className="flex justify-center cursor-pointer md:hidden "
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={isOpen ? faCircleXmark : faBars} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
