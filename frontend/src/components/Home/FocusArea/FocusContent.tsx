import { FocusAreaConfig } from '../../../configs/Home/FocusAreaConfig'
import { FocusCard } from './FocusCard'
export const FocusContent = () => {
  return (

    <div className="flex flex-wrap justify-center w-full  text-moksha-black ">
      <div className='grid md:grid-cols-2 gap-y-6 sm:grid-cols-1 gap-x-6 grid-cols-g gap-'>
        {FocusAreaConfig.cards.map((card, index) => (
          <FocusCard
            card={card}
            key={index}

          />
        ))}
      </div>
    </div>
  )
}
