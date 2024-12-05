import { BsPatchQuestion } from "react-icons/bs";
import { Link } from "react-router-dom";

const QuestionCard = () => {
    return (
        <Link className="w-full bg-slate-50 border border-black min-w-[50%] h-[100px] rounded-md p-2">
            <div className="flex gap-3 items-center font-semibold text-slate-800">
                <img src="/profile.png" alt="img" className="w-10 h-10 rounded-full" />
                <p>abhishek kv</p>
            </div>

            <div className="w-full mt-1 border border-gray-300 flex items-center p-2 h-10 rounded-md overflow-y-scroll">
                <p className="line-clamp-1 flex items-center text-xs">
                    <span className="mr-2 ml-1">
                        <BsPatchQuestion className="bg-green-600 rounded-full text-white" size={20} />
                    </span>
                    How do you pass data from a parent component to a child component in React?
                </p>
            </div>


        </Link>
    )
}

export default QuestionCard