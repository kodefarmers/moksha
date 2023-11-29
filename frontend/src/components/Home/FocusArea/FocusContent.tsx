import { FocusAreaConfig } from '../../../configs/Home/FocusAreaConfig'
import { FocusCard } from './FocusCard'
export const FocusContent = () => {
  return (

    <div className="flex flex-wrap justify-center w-full gap-3 text-moksha-black ">
      <div className='grid md:grid-cols-2 gap-2 sm:grid-cols-1'>
        {FocusAreaConfig.cards.map((card, index) => (
          <FocusCard
            card={card}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
