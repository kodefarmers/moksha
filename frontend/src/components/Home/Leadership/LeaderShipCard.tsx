export const LeaderShipCard = ({ card: { name, position, image } }: any) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-6'>
      <div className='relative leadership-img'>
        <div className='relative w-80 h-96'>
          <div className='absolute overflow-hidden rounded-full border bg-gray-200 border-blue-50 w-80 h-[310px] bottom-0 z-0'>
            <img src={image} className='h-96 w-80' />
          </div>
          <div className='absolute bottom-0'>
          </div>
        </div>
      </div>
      <div className='text-center text-moksha-black'>
        <span className='font-medium'>
          {name}
          <br />
        </span>
        <span className='text-sm'>
          {position}
        </span>
      </div>

    </div>
  )
}
