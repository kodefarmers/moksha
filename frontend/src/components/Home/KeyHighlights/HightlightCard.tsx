import React from 'react'

export const HightlightCard = (props: {}) => {
  return (
    <div className='flex w-full'>
      <div className='grow flex justify-center'>
        <div className='flex flex-col'>
          <div className='text-moksha-black'>
            GIS-Based Municipal Data Management
            <br />
            And Mapping For Disaster Preparedness
          </div>
          <div>
            <span className='text-xs'>
              A GIS and mapping initiative to prepare ward level integrated Geo-database for
              <br />
              all project locations. Data collection method includes: training and mobilizing
              <br />
              local youths, integration of data from multiple existing sources from multiple exi..
            </span>
          </div>
          <div className='flex'>
            <div>
              <div>
                <span>
                  Client
                </span>
              </div>
              <div>
                <span>
                  CDF Dolakha for Bhimeshwor Municipality
                </span>
              </div>
            </div>

            <div>
              <div>
                <span>
                  Time Duration
                </span>
              </div>
              <div>
                <span>
                  2020-06-13 to 2022-19-02
                </span>
              </div>
            </div>
          </div>
          {/*arrow section*/}
          <div className='flex w-full justify-end'>
            <div>
              <div>
                <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-down-right" opacity="0.6">
                    <path id="Vector" d="M18.375 18.6667L44.625 45.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path id="Vector_2" d="M44.625 18.6667V45.3334H18.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </div>
              <img src='./src/assets/arrow-down-right.svg' />
            </div>
          </div>
        </div>
      </div>

      {/*image part*/}
      <div className='grow'>
        <img src='./src/assets/hillside.png' />
      </div>

    </div>
  )
}