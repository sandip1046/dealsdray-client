import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Landing from "./component/Landing";
import CreateEmployee from "./component/CreateEmployee";
import EditEmployee from "./component/EditEmployee";
import GetAllEmployee from "./component/GetAllEmployee";
import Footer from "./component/Footer";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div className={"bg-[#1A284C]"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={ <Landing />} />} />
          <Route path="/create-employee" element={<ProtectedRoute element={  <CreateEmployee />} />} />
          <Route path="/edit-employee/:id" element={<ProtectedRoute element={  <EditEmployee />} />} />
          <Route path="/get-all-employee" element={<ProtectedRoute element={<GetAllEmployee />} />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
