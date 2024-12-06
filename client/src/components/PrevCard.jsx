

const PrevCard = ({url}) => {
  return (
    <div className="border  border-blue-700  w-[500px] h-[200px] bg-slate-300 flex items-center justify-center">
        <video className=" w-[300px] h-[150px]" autoPlay src={url} alt="prev" />
    </div>
  )
}

export default PrevCard