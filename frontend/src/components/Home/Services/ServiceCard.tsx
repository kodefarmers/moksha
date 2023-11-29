import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
export const ServiceCard = ({ card: { title, detail, link } }: any) => {
  return (
    <div className='bg-moksha-dark-blue max-w-fit p-4 pt-10 cursor-pointer transition-colors hover:bg-moksha-blue-mutant'>
      <div className="flex-col">
        <div>
          <FontAwesomeIcon icon={faCloud} className="h-16 w-16" color="gray" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-moksha-blue  text-xl font-semibold leading-6  m-4 mb-9">
          {title}
        </div>
        <div className="text-white text-sm mb-5">
          <div className="pl-4 max-w-[295px]">
            <span>
              {detail}
            </span>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Link to={link}>
            <div>
              <img src="/assets/arrow-down-right.svg" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
