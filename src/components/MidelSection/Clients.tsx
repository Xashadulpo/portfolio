import { testimonials } from '@/config'
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const Clients = () => {
  return (
    <div className='py-20 relative z-10'>
          <h1 className="text-white text-[48px] font-extrabold text-center">
       Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="h-[50vh] rounded-md flex flex-col w-full  antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Clients
