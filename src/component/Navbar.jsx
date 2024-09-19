//src/components/ProtectedRoute.js;

import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logout } from "../redux/Slice/authSlice";
import styles from './styles.module.css'
import { useSelector } from "react-redux";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logout()); // Dispatch the logout action to clear the Redux state and localStorage
    navigate("/signin");
  };
  return (
    <div
      className={
        "bg-[#1A284C] p-5 flex items-center justify-between shadow-lg rounded-b-lg"
      }
    >
      <div
        className={
          "border-2 border-white rounded-full h-[120px] w-[120px] bg-[#FFB703] flex items-center justify-center "
        }
      >
        <img src="logo (1).png" alt="logo" width={80} height={60}></img>
      </div>
      {/* Display the user name */}
      {user && (
        <div className={`${styles.gradientSignin} !font-serif !text-3xl font-extrabold`}>
          Hello, {user.UserName}
        </div>
      )}
      <div className={"hidden lg:flex items-center justify-evenly gap-5"}>
        <Link
          to="/"
          className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
        >
          Home
        </Link>{" "}
        
        <Link
          to="/create-employee"
          className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
        >
          Create Employee
        </Link>{" "}
     
        <Link
          to="/get-all-employee"
          className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
        >
          Employee list
        </Link>{" "}
       
        <Link
          to="/signin"
          onClick={handleLogOut}
          className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
        >
          Logout
        </Link>
        <Link
          to="/signup"
          className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
        >
          Sign Up
        </Link>
      </div>
      <div className={"flex lg:hidden"} onClick={() => setOpenSidebar(true)}>
        <RxHamburgerMenu
          className={"text-[#FFB703] cursor-pointer w-10 h-10"}
        />
      </div>

      {/* SideBar for mobile device */}
      {openSidebar && (
        <div
          className={
            "fixed top-0 right-0 h-full w-full bg-[#0f1830] bg-opacity-90 flex items-center justify-center lg:hidden"
          }
        >
          {/* Display the user name */}
          <div className={"flex flex-col items-center justify-center gap-5"}>
          {user && (
            <div className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1 !w-full`}>
              Hello, {user.UserName}
            </div>
          )}
            <Link
              to="/"
              className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => setOpenSidebar(false)}
            >
              Home
            </Link>
            <Link
              to="/create-employee"
              className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => setOpenSidebar(false)}
            >
              Create Employee
            </Link>
            <Link
              to="/get-all-employee"
              className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => setOpenSidebar(false)}
            >
              Employee list
            </Link>
            <Link
              to="/signin"
              className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => setOpenSidebar(false)}
            >
              Logout
            </Link>
            <Link
              to="/signup"
              className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => setOpenSidebar(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
