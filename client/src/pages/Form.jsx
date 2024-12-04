import { useContext } from "react";
import userContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Categorize from "../components/Categorize";
import Cloze from "../components/Cloze";
import Comprehension from "../components/Comprehension";


const Form = () => {

  const { user } = useContext(userContext);

  if (!user.id) {
    return <Navigate to={"/login"} />
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-700 mt-3">Untitled Quiz</h1>
      <div className="flex flex-col gap-5">
        <Categorize />
        <Cloze />
        <Comprehension/>
      </div>
    </div>
  )
}

export default Form;