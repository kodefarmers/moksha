// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router-dom";
import { BarMenu } from "./BarMenu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const location = useLocation()
  const [blueNavbar, setBlueNavbar] = useState(false)
  useEffect(() => {
    if (location.pathname == "/services" || location.pathname == "/contact") {
      setBlueNavbar(true)
    }
    else {
      setBlueNavbar(false)
    }
  }, [location])
  return (
    <div className={`w-full min-h-full ${blueNavbar ? 'bg-moksha-dark-blue text-white' : 'bg-white text-black'}`}>
      <div className="flex w-full  shadow-md h-14 min-h-max">
        <div className="md:hidden flex justify-center items-center">
          <BarMenu />
        </div>

        <div className="m-2 ml-16 flex justify-center items-center md:grow-0 grow">
          <div className="font-[560] text-lg">
            <NavLink to="/">Moksha</NavLink>
          </div>
        </div>

        <div className="grow items-center justify-center gap-8 md:flex hidden">
          <div className="cursor-pointer">
            <NavLink to="/services" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-moksha-orange" : ""
            } >Services</NavLink>
          </div>
          <div>
            <NavLink to="/protfolio"
              preventScrollReset={false}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-moksha-orange" : ""
              } >Protfolio</NavLink>

            {/*<div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1 cursor-pointer">
                Protfolio&nbsp;
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white  w-48">
                <li><NavLink to="/protfolio">Item 1</NavLink></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            */}
          </div>



          <div className="cusor-pointer">
            About Us
          </div>
          {/* <div>
            < div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1">
            Company&nbsp;
            <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white  w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      <div >
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 cursor-pointer">
            Events and Media&nbsp;
            <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white w-52">
            <li><a className="hover:text-black">Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      <div className="cursor-pointer text-medium">
        Blogs
      </div>


    */ }
        </div>
        < div >

          <div className="mr-2">
            <Link to='/contact'>
              <div className="rounded m-2 mr-0 bg-moksha-red cursor-pointer hover:bg-moksha-orange">
                <div className="text-white p-2 ">
                  Let's talk
                </div>
              </div>
            </Link>
          </div>

        </div >
      </div >
    </div >
  )
}
