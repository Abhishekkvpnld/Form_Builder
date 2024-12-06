import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import userContext from "../context/UserContext";
import { backend_url } from "../utils/backend_url";


const Navbar = () => {

    const navigate = useNavigate();
    const { user, setUser, fetchUserDetails } = useContext(userContext);


    const handleLogout = async () => {
        const res = await axios.get(`${backend_url}/user/logout`, { withCredentials: true });
        if (res?.data?.success) {
            setUser(null);
            fetchUserDetails();
            navigate("/login")
            toast.success(res?.data?.message)
        }
    }


    return (
        <div className="py-1 border-b-2 px-4">
            <div className=" mx-auto flex justify-between items-center">
                <Link
                    to={"/"}
                    className="text-xl font-semibold tracking-tight text-blue-600 flex items-center justify-center"
                >
                    <span><img className="rounded-full w-12 h-12 object-cover" title="home" src="/form.png" alt="img" /></span>
                </Link>


                <div className="flex gap-5 items-center">
                    {
                        user?.id && (
                            <div className="flex items-center justify-center">
                                <h3 className="font-bold hidden md:block text-slate-700">{user?.username}</h3>
                            </div>

                        )
                    }

                    {
                        user?.id ? (
                            <button className="border-red-800 border h-8 px-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white" onClick={handleLogout}>Logout</button>
                        ) : (
                            <button onClick={() => navigate("/login")} className="border-black border h-8 px-4 rounded-lg font-semibold hover:text-white hover:bg-blue-500">Login</button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
export default Navbar;