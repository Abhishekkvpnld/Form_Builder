import QuestionCard from "../components/QuestionCard";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();


  return (
    <div className="mt-3 container flex flex-col">

      <div className="flex items-center justify-between">
        <h1 className="font-bold m-2 text-xl">All Tasks</h1>

        <div className="flex items-center justify-between gap-2">
          <FaRegClone />
          <CiEdit size={25}/>
          <IoShareSocialOutline size={20}/>
          <button onClick={()=>navigate("/form")} className="border rounded-lg border-slate-500 px-2 py-1 text-sm hover:scale-110 hover:bg-green-600 hover:text-white hover:transition hover:border-green-600 flex items-center gap-1">create <span><MdOutlineCreateNewFolder /></span></button>
        </div>
      </div>

      <div className=" border-black w-[80vw] p-5 grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center rounded-md ">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  )
}

export default Home;