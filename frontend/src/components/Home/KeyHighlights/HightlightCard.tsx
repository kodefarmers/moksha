import { Link } from "react-router-dom";
export const HightlightCard = ({ card: { title, description, client, time, link } }: any) => {
  return (
    <div className='flex w-full gap-20 bg-white flex-wrap shadow-lg rounded-md pl-2 '>
      <div className='grow flex justify-center items-center' >
        <div className='flex flex-col gap-6 p-2 max-w-[600px]'>
          <div className='text-moksha-black text-2xl font-semibold leading-7'>
            {title}
          </div>
          <div>
            <span className='text-sm'>
              {description}

            </span>
          </div>
          <div className='flex gap-14 text-sm'>
            <div>
              <div className='mb-1'>
                <span className="text-moksha-blue font-semibold">
                  Client
                </span>
              </div>
              <div>
                <span className="text-moksha-black font-semibold leading-4">
                  {client}
                </span>
              </div>
            </div>

            <div>
              <div>
                <span className="text-moksha-blue font-semibold">
                  Time Duration
                </span>
              </div>
              <div>
                <span className="text-moksha-black font-semibold leading-4">
                  {time}
                </span>
              </div>
            </div>
          </div>
          {/*arrow section*/}
          <div className='flex justify-end m-w-fit cursor-pointer group'>
            <div className="h-40 w-40 flex justify-center items-center ">
              <div className="relative  w-full h-full group">
                <div className="relative h-full w-full items-center z-20 ">
                  <Link to={link}>
                    <div className="flex justify-center items-center h-full w-full">
                      <svg viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[70px] w-[64px]">
                        <g id="arrow-down-right" opacity="0.6">
                          <path id="Vector" d="M18.375 18.6667L44.625 45.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path id="Vector_2" d="M44.625 18.6667V45.3334H18.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="absolute bg-blue-100 rounded-tl-full h-0 w-0 transition-[width]
                  ease-in-out duration-150
                  group-hover:w-40 group-hover:h-40  bottom-0 right-0 z-10">
                </div>
              </div>
              {/*<Link to={link}>
                  <svg viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[70px] w-[64px]">
                    <g id="arrow-down-right" opacity="0.6">
                      <path id="Vector" d="M18.375 18.6667L44.625 45.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path id="Vector_2" d="M44.625 18.6667V45.3334H18.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </Link>
               */}
            </div>
          </div>
        </div>
      </div>

      {/*image part*/}
      <div className='grow flex justify-center'>
        <div>
          <img src='/assets/hillside.png' />
        </div>
      </div>

    </div >
  )
}
