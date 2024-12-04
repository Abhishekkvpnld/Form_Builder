import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // if (data.password === data.confirmPassword) {
    // try {
    //   const response = await axios.post(endPoints.singUp.url, data);

    //   if (response.data.success) {
    //     toast.success(response.data.message);
    //     navigate("/login")
    //   };

    //   if (response.data.error) {
    //     console.log('error', response.data.message);
    //     toast.error(response.data.message);
    //   };

    // } catch (error) {
    //   toast.error(error.response.data.message);
    // };

    // } else {
    //   toast.error("Please check the password and confirm passwor");
    // };

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
    <section id='signup' className='w-[100vw] h-full  min-h-[calc(100vh-100px)] flex flex-col items-center justify-center'>

      <h1 className="font-bold text-3xl text-slate-600">Register User</h1>


      <div className='mx-auto container p-5 '>

        <div className='bg-gray-300 w-full py-2 max-w-md mx-auto rounded-md            p-5 '>
          <form onSubmit={handleSignup} className='flex flex-col gap-2'>

            <div className='grid'>
              <label className="font-semibold">Username</label>
              <div className='bg-slate-100 p-2 rounded'>
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleOnChange}
                  required
                  id=""
                  placeholder='enter username'
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div className='grid'>
              <label className="font-semibold">Email</label>
              <div className='bg-slate-100 p-2 rounded'>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleOnChange}
                  id=""
                  placeholder='enter email'
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div className='grid'>
              <label className="font-semibold">Phone Number</label>
              <div className='bg-slate-100 p-2 rounded'>
                <input
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={handleOnChange}
                  required
                  id="phone"
                  placeholder='enter phone number'
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
                  name="password"
                  id=""
                  required
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

            </div>

            <div >
              <label className="font-semibold">Confirm Password</label>
              <div className='bg-slate-100 p-2 rounded flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  name="confirmPassword"
                  id=""
                  required
                  placeholder='confirm password'
                  className='w-full h-full outline-none bg-transparent' />

                <div className='cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  <span>
                    {
                      showConfirmPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </span>
                </div>

              </div>

            </div>

            <button className='bg-green-600 hover:bg-green-700 w-full max-w-[150px] rounded text-white p-2 px-6 hover:scale-105 transition-all mt-4'>
              Sign Up
            </button>


          </form>

          <p className='p-2'>
            Already have account ?
            <Link to={"/login"} className='m-1 text-red-500 hover:text-blue-600 hover:underline'>
              Login
            </Link>
          </p>

        </div>

      </div>
    </section>
  )
}


export default Signup;