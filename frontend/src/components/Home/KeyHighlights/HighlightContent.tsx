import { HightlightCard } from './HightlightCard'
import { KeyHighlightConfig } from '../../../configs/Home/KeyHighlightConfig'

export const HighlightContent = () => {
  return (
    <div className='flex flex-col gap-8'>
      {KeyHighlightConfig.cards.map((card, index) => (
        <HightlightCard key={index} card={card} />
      ))}
    </div>
  )
}
