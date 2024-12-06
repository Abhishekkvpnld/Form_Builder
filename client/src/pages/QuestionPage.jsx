import { useParams } from "react-router-dom"
import PrevCategorize from "../components/PrevCategorize";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { backend_url } from "../utils/backend_url";


const QuestionPage = () => {

    const formId = useParams();

    const [data, setData] = useState([])

    const fetchdata = async () => {
        try {
            const res = await axios.get(`${backend_url}/form/single/${formId.id}`, { withCredentials: true })
            setData(res?.data?.data)

        } catch (error) {
            console.log(error);
            toast.error("Couldn't find data...❌")
        }
    }

    useEffect(() => {
        fetchdata()
    }, []);


    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-blue-700">{data?.title}</h1>
            <div>
                <PrevCategorize data={data?.categorize} />
            </div>
        </div>
    )
}

export default QuestionPage