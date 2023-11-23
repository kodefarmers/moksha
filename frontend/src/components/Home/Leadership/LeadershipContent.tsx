import React from 'react'
import { LeaderShipCard } from './LeaderShipCard'

export const LeadershipContent = (props: {}) => {
  return (
    <div className='flex w-full justify-center gap-5 flex-wrap'>
      <LeaderShipCard />
      <LeaderShipCard />
      <LeaderShipCard />
      <LeaderShipCard />

    </div>
  )
}
