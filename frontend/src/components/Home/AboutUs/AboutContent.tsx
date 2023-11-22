import React from 'react'
import { AboutCard } from './AboutCard'

export const AboutContent = (props: {}) => {
  return (
    <div className="flex justify-center w-full items-center gap-5">
      <AboutCard />
      <AboutCard />
      <AboutCard />
    </div>
  )
}