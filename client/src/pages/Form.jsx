import { useContext, useState } from "react";
import userContext from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Categorize from "../components/Categorize";
import Cloze from "../components/Cloze";
import Comprehension from "../components/Comprehension";
import axios from "axios";
import { backend_url } from "../utils/backend_url"
import toast from "react-hot-toast";


const Form = () => {

  const navigate = useNavigate();

  const { user } = useContext(userContext);

  const [title, setTitle] = useState("");

  const [allCategorizeData, setAllCategorizeData] = useState({
    question: "",
    categories: [],
    options: []
  })


  const [allClozeData, setAllClozeData] = useState({
    paragraph: "",
    options: [],
    questionLine: ""
  })


  const [allComphrehensionData, setAllComphrehensionData] = useState({
    passage: "",
    subQuestions: []
  })


  const handleSubmit = async () => {
    try {
      console.log(allCategorizeData, allClozeData, allComphrehensionData)
      const res = await axios.post(`${backend_url}/form/create`, { title, allCategorizeData, allClozeData, allComphrehensionData }, { withCredentials: true });
      if (res?.data?.success) {
        navigate("/")
        toast.success(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }




  // if (!user.id) {
  //   return <Navigate to={"/login"} />
  // }

  return (

    <div>

      <div className="flex items-center justify-between">
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" placeholder="Add title..." className="text-xl border px-4 py-1 rounded-md font-semibold text-slate-700 mt-3" />
        <button onClick={handleSubmit} className="border border-slate-500 px-6 rounded-lg py-1 bg-blue-500 text-white hover:bg-blue-700 mt-4">Save</button>
      </div>

      <div className="flex flex-col gap-5">
        <Categorize setAllCategorizeData={setAllCategorizeData} />
        <Cloze setAllClozeData={setAllClozeData} />
        <Comprehension setAllComphrehensionData={setAllComphrehensionData} />
      </div>
    </div>
  )
}

export default Form;