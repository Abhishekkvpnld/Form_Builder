import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosRefresh } from "react-icons/io";
import { RxDragHandleDots1 } from "react-icons/rx";

const PrevComphrehension = ({ data, setComphrehensionRes }) => {
    const [answers, setAnswers] = useState([]);

    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers((prev) => {
            const updatedAnswers = prev.filter((item) => item.index !== questionIndex);

            return [
                ...updatedAnswers,
                {
                    index: questionIndex,
                    question: data?.subQuestions[questionIndex]?.question,
                    selectedAns: answer,
                },
            ];
        });

    };

    useEffect(() => {
        setComphrehensionRes({
            passage: data?.passage,
            answers: answers, // Only send the updated answers here
        });
    }, [answers, data?.passage, setComphrehensionRes]);


    return (
        <div className="flex items-start justify-center gap-2">
            <div className="w-[90vw] border border-slate-200 p-4 shadow-md mt-3 rounded-lg border-l-8 border-l-blue-400">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold">
                        <RxDragHandleDots1 /> Question 3
                    </div>
                    <div className="flex items-center gap-2">
                        <IoIosRefresh />
                        <CiMenuKebab />
                    </div>
                </div>

                {/* Passage */}
                <h1 className="mt-4">{data?.passage}</h1>

                {/* Sub-Questions */}
                {data?.subQuestions?.map((sub, questionIndex) => (
                    <div key={questionIndex} className="flex justify-start flex-col mt-3">

                        <h1 className="font-semibold">
                            3.{questionIndex + 1}. {sub?.question}
                        </h1>


                        <div className="flex ml-3 items-start flex-col gap-2 mt-1">
                            {sub?.options?.map((opt, optionIndex) => (
                                <div key={optionIndex} className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        name={`ans-${questionIndex}`}
                                        id={`ans-${questionIndex}-${optionIndex}`}
                                        // checked={answers[questionIndex] === opt}
                                        onChange={() => handleAnswerChange(questionIndex, opt)}
                                    />
                                    <label
                                        htmlFor={`ans-${questionIndex}-${optionIndex}`}
                                        className="text-sm"
                                    >
                                        {opt}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrevComphrehension;
