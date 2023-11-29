import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Collabroration } from "../components/Home/Collabroration";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const Layout = () => {
  const location = useLocation()
  const [hideCollabroration, setHideCollabroration] = useState(false)
  useEffect(() => {
    if (location.pathname == '/contact') {
      setHideCollabroration(true)
    }
  }, [location])
  return (
    <>
      <div className='fixed w-full  min-h-[50px] z-10 bg-white'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0 z-0 bg-white'>
        <Outlet />
        {!hideCollabroration && <Collabroration />}
        <Footer />

      </div>
    </>
  )
}
