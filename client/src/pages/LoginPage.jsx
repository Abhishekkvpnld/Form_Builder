import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast"
import {backend_url} from "../utils/backend_url"
import userContext from "../context/UserContext";


const LoginPage = () => {


  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "user@gmail.com", password: "User@123" });

  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(userContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backend_url}/user/login`, data, { withCredentials: true });

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        navigate("/");
        fetchUserDetails();
      }

    } catch (error) {
      toast.error(error?.response?.data?.message || error)
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  };

  return (
    <section id='login' className='w-[100vw] h-full min-h-[calc(100vh-100px)] flex items-center justify-center flex-col'>

      <h1 className="font-bold text-3xl text-slate-500">Login Page</h1>


      <div className='mx-auto container p-5 '>
        <div className='bg-gray-300 w-full py-2 max-w-md mx-auto rounded-md p-4 border border-slate-400 '>
          <form onSubmit={handleLogin} className='flex flex-col gap-2'>

            <div className='grid'>
              <label className="font-semibold">Email</label>
              <div className='bg-slate-100 p-2 rounded'>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  id="email"
                  placeholder='enter email'
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div >
              <label className="font-semibold">Password</label>
              <div className='bg-slate-100 p-2 rounded flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  name="password"
                  id="password"
                  placeholder='enter password'
                  className='w-full h-full outline-none bg-transparent' />

                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {
                      showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </span>
                </div>

              </div>
              <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-400'>Forgot password</Link>
            </div>

            <button className='bg-green-600 hover:bg-green-700 w-full max-w-[150px] rounded text-white p-2 px-6 hover:scale-105 transition-all mt-4'>Login</button>
          </form>

          <p className='p-2'> Don't have account ?<Link to={"/signup"} className='m-1 text-red-500 hover:text-blue-600 hover:underline'>Sign up</Link></p>
        </div>

      </div>
    </section>
  )
}


export default LoginPage;