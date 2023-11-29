
export const ApproachCard = ({ card: { title, icon } }: any) => {
  return (
    <div>
      <div className='bg-white flex justify-center rounded shadow-lg min-w-[193px] min-h[106px] h-full p-1'>
        <div className='flex-col w-full items-center'>
          <div className=' flex justify-center mb-6'>
            <img src={icon} />
          </div>
          <div className='text-center text-moksha-black font-medium text-base max-w-[193px]' >
            <span>
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
