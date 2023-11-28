
export const AboutCard = ({ card: { icon, title } }: any) => {
  return (
    <div className="bg-moksha-blue p-6 rounded">
      <div className="mb-4">
        <img src="./src/assets/codesandbox.svg" className="bg-moksha-blue" />
      </div>
      <div className="text-center text-white">
        <span>
          {title}
        </span>
      </div>
    </div>
  )
}
