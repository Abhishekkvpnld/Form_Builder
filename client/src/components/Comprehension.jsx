import { RxDragHandleDots1 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { FaCircleCheck, FaRegClone } from "react-icons/fa6";
import { useRef, useState } from "react";
import SubQuestionPrev from "./SubQuestionPrev";
import { MdAddCircleOutline, MdOutlineDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import PrevCard from "./PrevCard";



const Comprehension = ({ setAllComphrehensionData }) => {

    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const [passage, setPassage] = useState("");
    const [subQuestion, setSubQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [allAnsOpt, setAllAnsOpt] = useState([])
    const [allQuestion, setAllQuestion] = useState([]);

    const [prev, setPrev] = useState(false);


    const handleAddOption = () => {
        setAllAnsOpt((prev) => [...prev, answer]);
        console.log(allAnsOpt)
        setAllComphrehensionData({
            passage: passage,
            subQuestions: allQuestion
        })
    };

    const handleCreateNewSubQuestion = () => {
        setAllQuestion(prev => [...prev, {
            question: subQuestion,
            options: allAnsOpt
        }])

        setAllComphrehensionData({
            passage: passage,
            subQuestions: allQuestion
        })

    };


    const handleRemoveQuestion = (i) => {
        setAllQuestion((prev) => prev.filter((_, index) => i !== index));
        setAllComphrehensionData({
            passage: passage,
            subQuestions: allQuestion
        })
    }

    return (

        <div className="flex items-start justify-center gap-2 mb-10">

            <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">

                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold"><RxDragHandleDots1 /> Question 3 </div>
                    <CiMenuKebab />
                </div>


                <div className="flex items-start justify-between mt-4 gap-5">
                    <textarea value={passage} ref={textareaRef} onChange={(e) => setPassage(e.target.value)} onInput={handleInput} type="text" className="min-h-16 border resize-y border-slate-400 p-2 w-full rounded-md" placeholder="Type passage here" />

                    {prev &&
                        <PrevCard url={"https://res.cloudinary.com/dwfi3oxyl/video/upload/v1733461893/video%20Form_Builder/comphrehensive_create_hbgtcj.mp4"} />
                    }

                    <div className="flex items-center gap-3 border border-slate-400 p-2 rounded-lg">
                        <CiImageOn size={30} />

                        <div className="flex items-start justify-between gap-1 flex-col">
                            <h3 className="flex items-center gap-2">Comphrehension <span onMouseLeave={() => setPrev(false)} onMouseEnter={() => setPrev(true)}><BsQuestionCircle color="blue" className="cursor-pointer" size={15} /></span></h3>
                            <div className="flex flex-col">
                                <label className="text-sm text-slate-500" htmlFor="points">Points</label>
                                <input type="number" name="points" id="points" className="h-8 pl-4 w-16 border border-slate-400 rounded-md" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex items-start flex-col w-full gap-2">
                    <div className="w-full flex flex-col">
                        <label className="text-xs" htmlFor="create">Create Question</label>
                        <input contentEditable={true} type="text" onChange={(e) => setSubQuestion(e.target.value)} id="create" className="h-10 border border-slate-400 p-2 w-full rounded-md pl-3" placeholder="Create new questions" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-xs" htmlFor="create">Add Options</label>
                        <div className="flex items-center gap-3">
                            <input onChange={(e) => setAnswer(e.target.value)} type="text" id="option" className="h-10 border border-slate-400 p-2 w-[50%] rounded-md pl-3" placeholder="Create options" />
                            <span><FaCircleCheck onClick={handleAddOption} color="green" className="hover:scale-110 transition cursor-pointer" size={25} /></span>
                        </div>

                        <div className="flex items-start flex-col mt-2 border p-3 rounded-md">
                            {
                                allAnsOpt?.map((i, index) => (
                                    <p key={index} className="flex items-center gap-2 text-sm font-semibold text-slate-500"><FaRegStar size={15} />{i} </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <SubQuestionPrev allQuestionAns={allQuestion} handleRemoveQuestion={handleRemoveQuestion} />
            </div>


            <div className="flex items-start flex-col gap-5 justify-center mt-5">
                <MdAddCircleOutline onClick={handleCreateNewSubQuestion} size={22} className="cursor-pointer hover:scale-110 transition" title="add" />
                <FaRegClone size={19} />
                <MdOutlineDelete size={25} />
            </div>
        </div>
    )
}

export default Comprehension