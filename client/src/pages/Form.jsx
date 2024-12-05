import { useContext, useState } from "react";
import userContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Categorize from "../components/Categorize";
import Cloze from "../components/Cloze";
import Comprehension from "../components/Comprehension";


const Form = () => {

  const { user } = useContext(userContext);

  const [title, setTitle] = useState("");


  const handleCategorizeQuestion = () => { }
  const handleClozQuestion = () => { }
  const handleComphrehensionQuestion = () => { }


  // if (!user.id) {
  //   return <Navigate to={"/login"} />
  // }

  return (



    <div>

      <div className="flex items-center justify-between">
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" placeholder="Add title..." className="text-xl border px-4 py-1 rounded-md font-semibold text-slate-700 mt-3" />
        <button className="border border-slate-500 px-6 rounded-lg py-1 bg-blue-500 text-white hover:bg-blue-700 mt-4">Save</button>
      </div>

      <div className="flex flex-col gap-5">
        <Categorize />
        <Cloze />
        <Comprehension />
      </div>
    </div>
  )
}

export default Form;