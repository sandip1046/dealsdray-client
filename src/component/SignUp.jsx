import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './styles.module.css'
import toast from "react-hot-toast";



export const SignUp = () => {
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
        "http://localhost:3000/api/v1/user/signup",
        postInputs
      ); //sending post request to the /signup endpoint of the BE and we will get response which is stored in a response amd passing postInput as a body
      const jwt = response.data; //getting jwt from the response
      localStorage.setItem("token", jwt); //storing the jwt token at the local storage
      toast.success("User created successfully");
      navigate("/signin"); //navigating the user to signin to do signin
    } catch (e) {
      toast.error("Error while signing up: " + e.message);
    }
  }
  return (
    <div className={"flex items-center justify-center p-10 h-8/12"}>
  
      
      <div className="flex flex-col items-center  justify-center shadow-lg shadow-amber-400 rounded-md border-gray-300  bg-gray-100 border-2 m-0 p-7 w-fit  ">
        {/* heading div */}
        <div className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1 !w-full`}>
          Create an account
        </div>
        {/* if account already present then this should have the link to route to the sigin page*/}
        <div className="flex flex-row">
          <div className="font-sans text-sm font-base text-slate-800 p-2">
            Already have an account?
          </div>
          <Link
            to="/signin"
            className="underline underline-offset-4 text-blue-500  font-sans text-md font-semibold cursor-pointer p-1"
          >
            Sign in
          </Link>{" "}
          {/* this link will route to sigin page onclick  */}
        </div>

        <LabelledInput
          label="UserName"
          placeholder="Enter your name.."
          onChange={(e) => {
            setPostInput({
              ...postInputs, //take all the existing keys and value
              UserName: e.target.value, //overwrite the name  in that existing key
            });
          }}
        />
{/* 
        <LabelledInput
          label="email"
          placeholder="email@gmail.com"
          onChange={(e) => {
            setPostInput({
              ...postInputs, //take all the existing keys and value
              email: e.target.value, //overwrite the name  in that existing key
            });
          }}
        /> */}
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
          Sign up
        </button>
      </div>

    </div>
  );
};

// type NewType = ChangeEvent<HTMLInputElement>;

// type NewType_1 = NewType;

export default SignUp;

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
