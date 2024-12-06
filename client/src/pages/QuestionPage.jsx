import { useNavigate, useParams } from "react-router-dom"
import PrevCategorize from "../components/PrevCategorize";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { backend_url } from "../utils/backend_url";
import PrevComphrehension from "../components/PrevComphrehension";
import PrevCloze from "../components/PrevCloze";


const QuestionPage = () => {

    const formId = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const [comphrehensionRes, setComphrehensionRes] = useState({
        passage: "",
        answers: []
    });


    const [clozeRes, setClozeRes] = useState({
        questionLine: "",
        correctedLine: ""
    });

    const [categorizeRes, setCategorizeRes] = useState({
        question: "",
        answers: []
    })

    const fetchdata = async () => {
        try {
            const res = await axios.get(`${backend_url}/form/single/${formId.id}`, { withCredentials: true })
            setData(res?.data?.data)

        } catch (error) {
            console.log(error);
            toast.error("Couldn't find data...❌")
        }
    }


    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${backend_url}/form/submit`, { questionId: data?._id, categorizeRes, clozeRes, comphrehensionRes }, { withCredentials: true });
            if (res?.data?.success) {
                navigate("/success");
                toast.success(res?.data?.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }



    useEffect(() => {
        fetchdata()
    }, []);


    return (
        <div className="flex flex-col gap-2 mb-5">
            <h1 className="font-semibold text-2xl mt-3 text-blue-700">{data?.title}</h1>
            <div>

                <PrevCategorize data={data?.categorize} setCategorizeRes={setCategorizeRes} />
                <PrevCloze data={data?.cloze} setClozeRes={setClozeRes} />
                <PrevComphrehension setComphrehensionRes={setComphrehensionRes} data={data?.comphrehension} />
            </div>

            <button onClick={handleSubmit} className="border max-w-[200px] py-1 rounded-md px-3 bg-blue-700 hover:bg-blue-800 text-white">Submit</button>
        </div>
    )
}

export default QuestionPage