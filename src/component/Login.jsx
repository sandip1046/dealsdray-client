/* eslint-disable no-unused-vars */
// src/components/Login.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './styles.module.css';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../redux/Slice/authSlice";


export const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // infering the  zod type variable to the state variable.
  //like this we can figure what the BE need
  const [postInputs, setPostInput] = useState({
    UserName: "",
    password: "",
  });

  //sending request to the BE from the FE.
  // async function sendRequest() {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/v1/user/signin",
  //       postInputs
  //     ); 
      
  //     const jwt = response.data.token;
  //     const userId = response.data.user._id;  // Extract user ID from response
      
  //     localStorage.setItem("token", jwt);

  //     // Fetch user details from the backend using the userId
  //     const userResponse = await axios.get("http://localhost:3000/api/v1/get-user", {
  //       params: { _id: userId },
  //       headers: {
  //         Authorization: `Bearer ${jwt}` // Pass JWT for authentication
  //       }
  //     });

  //     const userData = userResponse.data;
  //     dispatch(login({ username: userData.name, ...userData })); // Store user data in Redux
     
  //     toast.success("User Logged in successfully");
  //     navigate("/"); 
  //   } catch (e) {
  //     if (e.response && e.response.status === 401) {
  //       alert("Invalid credentials, please try again.");
  //     } else {
  //       alert("Error while signing in: " + e.message);
  //     }
  //   }
  // }
  async function sendRequest() {
    try {
      const response = await axios.post(
        "https://dealsdray-server-xi.vercel.app/api/v1/user/signin",
        postInputs
      );
  
      const jwt = response.data.token;
      const userId = response.data.user._id;  // Extract user ID from response
      
      localStorage.setItem("token", jwt);
  
      // Fetch user details from the backend using the userId
      const userResponse = await axios.get("https://dealsdray-server-xi.vercel.app/api/v1/get-user", {
        params: { _id: userId },
        headers: {
          Authorization: `Bearer ${jwt}` // Pass JWT for authentication
        }
      });
  
      const userData = userResponse.data[0];  // Assuming the response is an array of users
      dispatch(login({ UserName: userData.UserName, ...userData })); // Store user data in Redux
  
      toast.success("User Logged in successfully");
      navigate("/"); 
    } catch (e) {
      if (e.response && e.response.status === 401) {
        alert("Invalid credentials, please try again.");
      } else {
        alert("Error while signing in: " + e.message);
      }
    }
  }
  
  return (
    <>
   
   <div className={"flex items-center justify-center p-10 h-8/12"}>
      <div className="flex flex-col items-center  justify-center shadow-lg shadow-amber-500 rounded-md border-gray-300  bg-gray-100 border-2 m-0 p-7 w-fit  ">
        {/* heading div */}
        <div className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1 !w-full`}>
          {" "}
          Login into account
        </div>
        {/* if account already present then this should have the link to route to the sigin page*/}
        <div className="flex flex-row">
          <div className="font-sans text-sm font-base text-slate-800 p-2">
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
          </div>
          <Link
            to="/signup"
            className="underline underline-offset-4 text-blue-500  font-sans text-md font-semibold cursor-pointer p-1"
          >
            Sign up
          </Link>{" "}
          {/* this link will route to sigin page onclick  */}
        </div>


        <LabelledInput
          label="Username"
          placeholder="Enter your name.."
          onChange={(e) => {
            setPostInput({
              ...postInputs, //take all the existing keys and value
              UserName: e.target.value, //overwrite the name  in that existing key
            });
          }}
        />

        <LabelledInput
          label="Password"
          type={"password"}
          placeholder="XXXXXXXXXX"
          onChange={(e) => {
            setPostInput((postInputs) => ({
              ...postInputs, //take all the existing keys and value
              password: e.target.value, //overwrite the name  in that existing key
            }));
          }}
        />

        <button
          onClick={sendRequest}
          className="rounded-md border-black bg-black border-1 text-white	mt-5 p-2 h-full	w-full hover:bg-gray-800"
        >
          Sign in
        </button>
      </div>
    </div>
  
    </>
  );
};

export default Login;

// eslint-disable-next-line react/prop-types
function LabelledInput({ label, placeholder, onChange, type }) {
  return (
    <div className="m-0 w-full">
      <div>
        <label className="p-1">{label}</label>
      </div>
      <div>
        <input
          onChange={onChange}
          type={type || "text"}
          className="rounded-md border-stone-500  border-2 p-1 w-full focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          required
        ></input>
      </div>
    </div>
  );
}
