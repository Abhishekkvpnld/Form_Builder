import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RxDragHandleDots1 } from "react-icons/rx";

const PrevCategorize = ({ data }) => {
    const [categories, setCategories] = useState(
        data?.categories?.map((category) => ({ name: category, items: [] })) || []
    );
    const [options, setOptions] = useState(data?.options || []);
    const [draggedOver, setDraggedOver] = useState(null);

    const handleDragStart = (event, option) => {
        event.dataTransfer.setData("text/plain", option);
    };

    const handleDrop = (event, categoryIndex) => {
        event.preventDefault();
        const draggedOption = event.dataTransfer.getData("text/plain");

        if (!categories[categoryIndex].items.includes(draggedOption)) {
            setCategories((prev) => {
                const updatedCategories = [...prev];
                updatedCategories[categoryIndex].items.push(draggedOption);
                return updatedCategories;
            });

            setOptions((prev) => prev.filter((opt) => opt !== draggedOption));
        }
        setDraggedOver(null); // Reset drag-over state
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const reset = () => {
        setCategories(data?.categories?.map((category) => ({ name: category, items: [] })) || []);
        setOptions(data?.options || []);
    };

    useEffect(() => {
        reset()
    }, []);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold">
                        <RxDragHandleDots1 /> Question 2
                    </div>
                    <CiMenuKebab />
                </div>

                {/* Question */}
                <div className="flex items-start justify-start flex-col gap-4 mt-6">
                    <h1>? question</h1>
                </div>

                {/* Options */}
                <div className="flex items-start justify-start flex-col gap-4 mt-3">
                    <div className="flex items-center gap-3">
                        {options.map((opt, index) => (
                            <div
                                key={index}
                                draggable
                                role="button"
                                aria-grabbed="true"
                                onDragStart={(event) => handleDragStart(event, opt)}
                                className="border px-3 py-1 bg-blue-100 rounded-lg font-bold text-slate-500 cursor-pointer"
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className={`grid grid-cols-5 gap-2 mt-3 rounded-md`}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            role="region"
                            aria-dropeffect="move"
                            className={`max-w-[200px] min-h-[100px] p-2 border rounded-md ${draggedOver === index ? "bg-gray-200 border-dashed" : "bg-red-100"
                                }`}
                            onDrop={(event) => handleDrop(event, index)}
                            onDragOver={(event) => {
                                allowDrop(event);
                                setDraggedOver(index);
                            }}
                            onDragLeave={() => setDraggedOver(null)}
                        >
                            <h2 className="border rounded bg-green-500 text-white border-slate-400 w-full flex items-center justify-center font-semibold">
                                {category.name}
                            </h2>
                            <div className="mt-2">
                                {category.items.map((item, i) => (
                                    <div key={i} className="border px-2 py-1 bg-blue-50 rounded text-sm mt-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                
            {/* Reset Button */}
            <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg mt-4"
                onClick={reset}
            >
                Reset
            </button>
            </div>

        </div>
    );
};

export default PrevCategorize;
