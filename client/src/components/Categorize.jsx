import { RxDragHandleDots1 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdAddCircleOutline, MdOutlineDelete } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";


const Categorize = () => {

    const [question, setQuestion] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [optionValue, setOptionValue] = useState("")
    const [selectValue,setSelectValue] = useState("")
    const [categories, setCategories] = useState([]);
    const [options, setOption] = useState([]);




    const handleCategory = () => {
        setCategories((prev) => [...prev, categoryValue])
    }

    const handleOption = () => {
        setOption((prev) => [...prev, optionValue])
    }

    const handleRemoveOpt = (index) => {
        setOption((prev) => prev.filter((_, i) => i !== index));
    };

    const handleRemoveCategory = (index) => {
        setCategories((prev) => prev.filter((_, i) => i !== index));
    };


    const handleSelectChange = (event) => {
        setSelectValue(event.target.value); 
      };

    return (

        <div className="flex items-start justify-center gap-2  ">
            <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">

                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold"><RxDragHandleDots1 /> Question 1 </div>
                    <CiMenuKebab />
                </div>


                <div className="flex items-start justify-between mt-4 gap-5">
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className="h-8 rounded-md border border-slate-400 p-2 w-full" placeholder="Description (Optional)" />

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

                    {
                        categories?.map((item, index) => (
                            <div key={`category-${index}`} className="flex items-start flex-col ">
                                <div className="flex items-center">
                                    <RxDragHandleDots1 />
                                    <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{item}</div>
                                    <IoCloseOutline onClick={() => handleRemoveCategory(index)} className="ml-2 cursor-pointer hover:scale-110 transition hover:text-red-700" size={20} />
                                </div>
                            </div>
                        ))
                    }

                    <div className="flex items-center gap-1 ml-4">
                        <input type="text" onChange={(e) => setCategoryValue(e.target.value)} placeholder="Category (Optional)" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
                        <IoIosCheckmarkCircleOutline onClick={() => handleCategory()} color="green" size={30} className="cursor-pointer hover:scale-110 transition" />
                    </div>
                </div>


                <div className="flex items-center justify-center gap-10">
                    <div className="flex items-start justify-between flex-col gap-2 mt-5 ">

                        <div className="flex items-center justify-between w-full">
                            <label htmlFor="categories" className="font-semibold text-slate-600">Options</label>
                            <label htmlFor="categories" className="font-semibold text-slate-600">Belongs To</label>
                        </div>


                        {
                            options?.map((opt, index) => (
                                <div className="flex items-center justify-between" key={`opt-${index}`}>

                                    <div className="flex items-start flex-col " >
                                        <div className="flex items-center">
                                            <RxDragHandleDots1 />
                                            <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{opt}</div>
                                            <IoCloseOutline onClick={() => handleRemoveOpt(index)} className="ml-2 cursor-pointer hover:scale-110 transition hover:text-red-700" size={20} />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 ml-4">
                                        <select onChange={(e)=>handleSelectChange(e)} name="selectOpt" value={selectValue} id="select" className="h-8 w-40 p-3 border border-slate-400 rounded-md">
                                            <option value="">Select</option>
                                            {
                                                categories?.map((item, index) => (
                                                    <option key={`category-${index}`} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                </div>
                            ))
                        }


                        <div className="flex items-center justify-between ">

                            <div className="flex items-center gap-2 ml-4">
                                <input type="text" onChange={(e) => setOptionValue(e.target.value)} placeholder="Category (Optional)" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
                                <IoMdAddCircle onClick={() => handleOption()} size={20} className="hover:scale-110 transition cursor-pointer" title="add" />
                            </div>

                            <select name="select" id="select" className="h-8 w-40 p-3 border ml-4 border-slate-400 rounded-md">
                            </select>
                        </div>

                    </div>

                </div>

            </div>

            <div className="flex items-start flex-col gap-5 justify-center mt-5">
                <MdAddCircleOutline size={22} className="cursor-pointer hover:scale-110 transition" title="add" />
                <FaRegClone size={19} />
                <MdOutlineDelete size={25} />
            </div>
        </div>
    )
}

export default Categorize