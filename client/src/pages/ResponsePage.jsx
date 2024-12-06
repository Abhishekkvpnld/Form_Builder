import { FaCheckCircle } from "react-icons/fa";

const ResponsePage = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center gap-4">
            <FaCheckCircle color="green" size={50} /> <h1 className="font-bold text-3xl">Your Response Uploaded Successfully...</h1>
        </div>
    )
}

export default ResponsePage;
