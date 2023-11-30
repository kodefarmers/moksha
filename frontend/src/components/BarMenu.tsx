import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export const BarMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="p-2 " onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${open ? 'fixed' : 'hidden'} w-full   bg-moksha-blue-mutant text-white h-screen scroll-auto z-20`}>
        <div className='flex justify-end text-2xl'>
          <div className='p-2' onClick={() => { setOpen(!open) }}>
            <span className='text-2xl cursor-pointer'>
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
        </div>
        <div className='text-2xl'>
          <div className='flex'>
            <div onClick={() => setOpen(!open)}>
              <Link to={'/services'}>
                Services
              </Link>
            </div>
          </div>
          <div className='flex'>
            <div onClick={() => setOpen(!open)}>
              <Link to={'/protfolio'} >
                Protfolio
              </Link>
            </div>
          </div>
          <div>
            About
          </div>
        </div>
      </div>
    </div >
  )
}
