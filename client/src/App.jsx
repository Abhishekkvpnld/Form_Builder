import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import userContext from "./context/UserContext";
import { backend_url } from "./utils/BACKEND_URL";


const App = () => {

  const [user, setUser] = useState({});

  const fetchUserDetails = async () => {
    try {
      const current_user = await axios.get(`${backend_url}/user/current-user`, { withCredentials: true });
      if (current_user?.data?.success) {
        setUser(current_user?.data?.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);



  return (
    <Router>

      <userContext.Provider value={{user, setUser, fetchUserDetails}}>
        <Routes>
          <Route element={<Layout><Login /></Layout>} path="/login" />
          <Route element={<Layout><Signup /></Layout>} path="/signup" />
          <Route element={<Layout><Home /></Layout>} path="/" />
          <Route element={<Layout><Form /></Layout>} path="/:id" />
        </Routes>
      </userContext.Provider>

      <Toaster />
    </Router>
  )
}

export default App;