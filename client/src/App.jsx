import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout><Login/></Layout>} path="/login" />
        <Route element={<Layout><Signup /></Layout>} path="/signup" />
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><Form /></Layout>} path="/:id" />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App;