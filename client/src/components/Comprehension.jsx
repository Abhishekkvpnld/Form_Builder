import { RxDragHandleDots1 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";



const Comprehension = () => {
    return (

        <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">

            <div className="flex items-center justify-between">
                <div className="flex items-center font-bold"><RxDragHandleDots1 /> Question 1 </div>
                <CiMenuKebab />
            </div>


            <div className="flex items-start justify-between mt-4 gap-5">
                <input type="text" className="h-8 border border-slate-400 p-2 w-full rounded-md" placeholder="Type passage here" />

                <div className="flex items-center gap-3 border border-slate-400 p-2 rounded-lg">
                    <CiImageOn size={30} />

                    <div className="flex items-start justify-between gap-1 flex-col">
                        <h3 className="flex items-center gap-2">Categorize <span><BsQuestionCircle color="blue" className="cursor-pointer" size={15} /></span></h3>
                        <div className="flrx flex-col">
                            <label className="text-sm text-slate-500" htmlFor="points">Points</label>
                            <input type="number" name="points" id="points" className="h-8 pl-4 w-16 border border-slate-400 rounded-md" />
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex items-start flex-col gap-2">
                <label htmlFor="categories" className="font-semibold text-slate-600">Categories</label>

                <div className="flex items-start flex-col ">
                    <div className="flex items-center">
                        <RxDragHandleDots1 />
                        <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{"cate 1"}</div>
                        <IoCloseOutline className="ml-2 cursor-pointer hover:scale-110 transition hover:text-red-700" size={20} />
                    </div>
                </div>

                <div className="flex items-center gap-1 ml-4">
                    <input type="text" placeholder="Category (Optional)" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
                    <IoIosCheckmarkCircleOutline color="green" size={30} className="cursor-pointer hover:scale-110 transition" />
                </div>
            </div>


            <div className="flex items-center justify-center gap-10">
                <div className="flex items-start flex-col gap-2 mt-5">
                    <label htmlFor="categories" className="font-semibold text-slate-600">Options</label>

                    <div className="flex items-start flex-col ">
                        <div className="flex items-center">
                            <RxDragHandleDots1 />
                            <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{"cate 1"}</div>
                            <IoCloseOutline className="ml-2 cursor-pointer hover:scale-110 transition hover:text-red-700" size={20} />
                        </div>
                    </div>

                    <div className="flex items-center gap-1 ml-4">
                        <input type="text" placeholder="Category (Optional)" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
                        <IoIosCheckmarkCircleOutline color="green" size={30} className="cursor-pointer hover:scale-110 transition" />
                    </div>

                </div>

                <div className="flex items-start flex-col gap-2 mt-5">
                    <label htmlFor="categories" className="font-semibold text-slate-600">Belongs To</label>

                    <div className="flex items-center gap-1 ml-4">
                        <select name="select" id="select" className="h-8 w-40 p-3 border border-slate-400 rounded-md">
                            <option value="">Cate 1</option>
                            <option value="">Cate 2</option>
                        </select>
                    </div>

                    <select name="select" id="select" className="h-8 w-40 p-3 border ml-4 border-slate-400 rounded-md">
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Comprehension