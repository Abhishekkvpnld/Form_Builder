import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RxDragHandleDots1 } from "react-icons/rx";
import { MdDragIndicator } from "react-icons/md";

const PrevCloze = ({ data, setClozeRes }) => {

    const [sentence, setSentence] = useState(data?.questionLine || "");
    const [options, setOptions] = useState(data?.options || []);
    const [draggedItem, setDraggedItem] = useState(null);


    const initialData = { sentence: data?.questionLine, options: data?.options };


    const handleDragStart = (event, option) => {
        event.dataTransfer.setData("text/plain", option);
        setDraggedItem(option);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const draggedOption = event.dataTransfer.getData("text/plain");

        setSentence((prev) => prev.replace("_____", draggedOption));
        const updatedSentence = sentence.replace("_____", draggedOption);

        setClozeRes({
            questionLine: data?.questionLine,
            correctedLine: updatedSentence
        })

        setOptions((prev) => prev.filter((opt) => opt !== draggedOption));
        setDraggedItem(null);
    };

    // Allow drop
    const allowDrop = (event) => {
        event.preventDefault();
    };

    // Reset to initial state
    const handleRefresh = () => {
        setSentence(initialData.sentence);
        setOptions(initialData.options);
    };


    return (
        <div className="flex items-start gap-2">
            <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">

                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold">
                        <RxDragHandleDots1 /> Question 2
                    </div>
                    <CiMenuKebab />
                </div>


                <div className="flex flex-col items-center gap-1">
                    <h1>Fill in the blanks</h1>
                    <div className="flex items-center justify-start gap-2 mt-3">
                        {options.map((item, index) => (
                            <div
                                key={index}
                                draggable
                                onDragStart={(event) => handleDragStart(event, item)}
                                className={`flex items-center gap-1 cursor-pointer`}
                            >
                                <MdDragIndicator className="text-slate-500" />
                                <p className="border px-3 py-1 rounded-md bg-violet-600 text-white">{item}</p>
                            </div>
                        ))}
                    </div>


                    <p
                        className="text-xl font-semibold mt-3 text-amber-800"
                        onDrop={handleDrop}
                        onDragOver={allowDrop}
                    >
                        {sentence}
                    </p>
                </div>

                <button
                    onClick={handleRefresh}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                    Refresh
                </button>

            </div>
        </div>
    );
};

export default PrevCloze;
