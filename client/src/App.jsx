import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import userContext from "./context/UserContext";
import { backend_url } from "./utils/backend_url";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";
import ResponsePage from "./pages/ResponsePage";


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

      <userContext.Provider value={{ user, setUser, fetchUserDetails }}>
        <Routes>
          <Route element={<Layout><LoginPage /></Layout>} path="/login" />
          <Route element={<Layout><Signup /></Layout>} path="/signup" />
          <Route element={<Layout><Home /></Layout>} path="/" />
          <Route element={<Layout><Form /></Layout>} path="/create-form" />
          <Route element={<Layout><QuestionPage /></Layout>} path="/:id" />
          <Route element={<Layout><ResponsePage/></Layout>} path="/success"  />
        </Routes>
      </userContext.Provider>

      <Toaster />
    </Router>
  )
}

export default App;