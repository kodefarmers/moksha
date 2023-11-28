
export const FocusCard = ({ card: { icon, detail } }: any) => {
  return (
    <div className="bg-white px-10 py-2.5 mb-4 ">
      <span className="text-lg font-medium leading-5">
        <img src={icon} className="inline mr-4" />
        {detail}
      </span>
    </div>
  )
}
