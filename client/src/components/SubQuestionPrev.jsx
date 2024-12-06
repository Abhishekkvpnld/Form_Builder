import { RxDragHandleDots1 } from "react-icons/rx";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";


const SubQuestionPrev = ({ allQuestionAns, handleRemoveQuestion }) => {
    return (
        <>

            {
                allQuestionAns?.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2  ">

                        <div className="w-[100%] border border-slate-200 p-4 shadow-sm mt-3 rounded-lg border-l-8 border-l-red-400">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center font-bold"><RxDragHandleDots1 /> Question 3.{index+1} </div>
                                <img className="h-12 w-12 " src="/mcq.png" alt="mcq" />
                            </div>


                            <div className="flex flex-col items-start p-3 justify-center">
                                <h3 className="font-normal">{item?.question}</h3>

                                {
                                    item?.options.map((opt, index) => (
                                        <div key={index} className="flex items-center gap-2 mt-2">
                                            <input type="radio" name="subAns" id="ans" />
                                            <label className="text-sm" htmlFor="ans">{opt}</label>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>


                        <div className="flex items-start flex-col gap-5 justify-center">
                            <MdAddCircleOutline size={22} className="cursor-pointer hover:scale-110 transition" title="add" />
                            <FaRegClone size={19} />
                            <MdOutlineDelete size={25} className="cursor-pointer hover:scale-110 transition" title="delete" onClick={()=>handleRemoveQuestion(index)} />
                        </div>

                    </div>
                ))
            }
        </>
    )
}

export default SubQuestionPrev