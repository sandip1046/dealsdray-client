/* eslint-disable no-unused-vars */
import {  useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './styles.module.css'
import toast from "react-hot-toast";


export const Login = () => {
  
  const navigate = useNavigate();

  // infering the  zod type variable to the state variable.
  //like this we can figure what the BE need
  const [postInputs, setPostInput] = useState({
    UserName: "",
    password: "",
  });

  //sending request to the BE from the FE.
  async function sendRequest() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        postInputs
      ); //sending post request to the /signup endpoint of the BE and we will get response which is stored in a response amd passing postInput as a body
      const jwt = response.data; //getting jwt from the response
      localStorage.setItem("token", jwt); //storing the jwt token at the local storage
      toast.success("User Logged in successfully");
      navigate("/"); //navigating the user to blog endpoint
    } catch (e) {
      // here we need to alert the user that request got failed.
     toast.error("Error while signing in: " + e.message);
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
