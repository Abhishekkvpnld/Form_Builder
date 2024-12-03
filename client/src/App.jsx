import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/SIgnup";
import Home from "../pages/Home";
import Form from "../pages/Form";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Home />} path="/" />
        <Route element={<Form/>} path="/:id" />
      </Routes>
    </Router>
  ) 
}

export default App;