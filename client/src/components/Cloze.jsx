import { RxDragHandleDots1 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdAddCircleOutline, MdOutlineDelete } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { useRef, useState } from "react";
import PrevCard from "./PrevCard";

const Cloze = ({ setAllClozeData }) => {

    const [underlinedWords, setUnderlinedWords] = useState([]);
    const [processedSentence, setProcessedSentence] = useState("");
    const [sentence, setSentence] = useState("");

    const [prev, setPrev] = useState(false);

    const editableRef = useRef(null);

    const handleUnderline = () => {
        document.execCommand("underline", false, null);
        updateUnderlinedWords()
        replaceUnderlinedWords()
        setAllClozeData({
            paragraph: sentence,
            options: underlinedWords,
            questionLine: processedSentence
        })
    };

    const replaceUnderlinedWords = () => {
        const editableElement = editableRef.current;
        let htmlContent = editableElement.innerHTML;


        const replacedContent = htmlContent.replace(/<u>(.*?)<\/u>/g, "_____");
        setProcessedSentence(replacedContent);

    };


    const updateUnderlinedWords = () => {
        const underlinedElements = editableRef.current.querySelectorAll("u");
        const words = Array.from(underlinedElements).map((el) => el.textContent);
        setUnderlinedWords(words);
    };

    const handleInput = () => {
        setSentence(editableRef.current.innerText);
    };


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
                            <input type="text" value={processedSentence && processedSentence} id="preview" className="h-10 border border-slate-400 p-2 w-full rounded-md pl-3" placeholder="......................." />
                        </div>


                        {prev &&
                            <PrevCard url={"https://res.cloudinary.com/dwfi3oxyl/video/upload/v1733461874/video%20Form_Builder/cloze_create_l4akcm.mp4"} />
                        }

                        <div className="flex items-center gap-3 border border-slate-400 p-2 rounded-lg">
                            <CiImageOn size={30} />

                            <div className="flex items-start justify-between gap-1 flex-col">
                                <h3 className="flex items-center gap-2">Cloze <span onMouseLeave={() => setPrev(false)} onMouseEnter={() => setPrev(true)}><BsQuestionCircle  color="blue" className="cursor-pointer" size={15} /></span></h3>
                                <div className="flrx flex-col">
                                    <label className="text-sm text-slate-500" htmlFor="points">Points</label>
                                    <input type="number" name="points" id="points" className="h-8 pl-4 w-16 border border-slate-400 rounded-md" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-start flex-col gap-2">
                        <div className="flex items-start flex-col w-full">
                            <label htmlFor="preview" className="text-xs">
                                Sentence*
                            </label>

                            {/* Editable Content */}
                            <div
                                onInput={handleInput}
                                ref={editableRef}
                                contentEditable={true}
                                id="preview"
                                className="h-20 border border-slate-400 p-2 w-full rounded-md pl-3 overflow-y-auto"
                                placeholder="Underline words to replace them with blanks"
                                suppressContentEditableWarning={true}
                            >
                                This is a sample sentence. You can underline words here.
                            </div>

                            {/* Underline Button */}
                            <button
                                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                                onClick={handleUnderline}
                            >
                                Underline Selected Text
                            </button>
                        </div>
                    </div>
                    <div className="flex items-start flex-col gap-2 mt-5">
                        <label htmlFor="categories" className="font-semibold text-slate-600">Options</label>

                        {
                            underlinedWords?.map((el, index) => (
                                <div key={index} className="flex items-start flex-col ">
                                    <div className="flex items-center gap-1">
                                        <RxDragHandleDots1 />
                                        <IoIosCheckboxOutline className="bg-blue-500 text-white" />
                                        <div className="border border-slate-500 px-1 w-40 py-1 rounded-md">{el}</div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="flex items-center gap-1 ml-10">
                            <input type="text" placeholder="Options" className="h-8 w-40 p-3 border border-slate-400 rounded-md" />
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

export default Cloze