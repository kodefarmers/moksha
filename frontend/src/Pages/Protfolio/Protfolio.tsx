import { KeyHighlight } from '../../components/Home/KeyHighlights'
import useScrollPosition from '../../components/helpers/hooks/useScrollPosition'
import { Link } from 'react-router-dom'

export const Protfolio = () => {
  useScrollPosition("protfolio")
  return (
    <div className='py-20 bg-white'>
      <div className="w-full flex justify-center">
        <div>
          <div className="mb-10 text-center text-sm text-orange-500 font-medium">
            PROTFOLIO
          </div>
          <div className="mb-14">
            <div className="text-center mb-2 text-2xl leading-16 font-semibold text-moksha-dark-blue">
              <span>
                You can't be what you can't see. Check out
                <br />
                the works we are proud of.
              </span>
            </div>
            <div className="text-center text-sm text-white">
              Explore a comprehensive array of geomatics services, meticulously tailored to <br />
              meet the evolving needs of our clients.
            </div>
          </div>
        </div>
      </div>

      {/*section for the links*/}
      <div className='flex grid-cols-5 items-center justify-center gap-2 mb-2 cursor-pointer'>
        <Link to={'/protfolio/view/landplanning'}>
          <div className='border border-moksha-blue p-2'>
            <span className="text-moksha-blue">
              Land Use Planning
            </span>
          </div>
        </Link>


        <Link to={'/protfolio/view/waterproject'}>
          <div className='border border-moksha-blue p-2 cursor-pointer'>
            <span className="text-moksha-blue">
              Water Project Design
            </span>
          </div>
        </Link>
      </div>
      <div>
        <KeyHighlight />
      </div>
    </div >
  )
}
