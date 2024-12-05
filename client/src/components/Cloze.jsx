import { RxDragHandleDots1 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdAddCircleOutline, MdOutlineDelete } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";

const Cloze = () => {
    return (

        <div className="flex items-start justify-center gap-2  ">

            <div>

                <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center font-bold"><RxDragHandleDots1 /> Question 2 </div>
                        <CiMenuKebab />
                    </div>


                    <div className="flex items-start justify-between mt-4 gap-5">
                        <div className="flex items-start flex-col w-full">
                            <label htmlFor="preview" className="text-xs">preview*</label>
                            <input type="text" id="preview" className="h-10 border border-slate-400 p-2 w-full rounded-md pl-3" placeholder="......................." />
                        </div>


                        <div className="flex items-center gap-3 border border-slate-400 p-2 rounded-lg">
                            <CiImageOn size={30} />

                            <div className="flex items-start justify-between gap-1 flex-col">
                                <h3 className="flex items-center gap-2">Cloze <span><BsQuestionCircle color="blue" className="cursor-pointer" size={15} /></span></h3>
                                <div className="flrx flex-col">
                                    <label className="text-sm text-slate-500" htmlFor="points">Points</label>
                                    <input type="number" name="points" id="points" className="h-8 pl-4 w-16 border border-slate-400 rounded-md" />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex items-start flex-col gap-2">
                        <div className="flex items-start flex-col w-full">
                            <label htmlFor="preview" className="text-xs">Sentence*</label>
                            <input contentEditable={true} type="text" id="preview" className="h-10 border border-slate-400 p-2 w-full rounded-md pl-3" placeholder="Underline the words to convert them into blanks" />
                        </div>
                    </div>

                    <div className="flex items-start flex-col gap-2 mt-5">
                        <label htmlFor="categories" className="font-semibold text-slate-600">Options</label>

                        <div className="flex items-start flex-col ">
                            <div className="flex items-center gap-1">
                                <RxDragHandleDots1 />
                                <IoIosCheckboxOutline className="bg-blue-500 text-white" />
                                <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{"cate 1"}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 ml-10">
                            <input type="text" placeholder="Option 1" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
                        </div>
                    </div>


                </div>

            </div>

            <div className="flex items-start flex-col gap-5 justify-center mt-5">
                <MdAddCircleOutline size={22} className="cursor-pointer hover:scale-110 transition" title="add"/>
                <FaRegClone size={19} />
                <MdOutlineDelete size={25} />
            </div>
        </div>

    )
}

export default Cloze