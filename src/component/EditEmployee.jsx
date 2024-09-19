//client/src/component/EditEmployee.jsx
import { useEffect, useState } from "react";
import { style } from "./style";
import styles from './styles.module.css'
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const navigate = useNavigate();
  // const [empDetails, setEmpDetails] = useState([]);
  const [empDetails, setEmpDetails] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Designation: "",
    Gender: "",
    Course: "",
    Image: "",
});
  const [dragging, setDragging] = useState(false);
  const params = window.location.pathname.split("/")[2];

  const getEmployeeByID = async (id) => {
    try{
      const response = await axios.get(`http://localhost:3000/api/v1/employee/get-employee/${id}`);
      setEmpDetails(response.data.employee);
      console.log("Fetched from the",response.data);
    }
    catch(e){
      toast.error("Error while fetching Employee: " + e.message);
    }
  }
  useEffect(() => {

    getEmployeeByID(params);
  }, []);//

  const handleRadioChange = (value) => {
    setEmpDetails({ ...empDetails, Gender: value });
  };

  //sending request to the BE from the FE. when user submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/employee/update-employee/${empDetails._id}`,
        empDetails
      ); //sending post request to the /signup endpoint of the BE and we will get response which is stored in a response amd passing postInput as a body
      const data = response.data; //getting jwt from the response
      toast.success("User Logged in successfully");
      navigate("/get-all-employee"); //navigating the user to blog endpoint
    } catch (e) {
      // here we need to alert the user that request got failed.
     toast.error("Error while Creating : " + e.message);
    }
  };

  //this function is for handling the file change
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setEmpDetails({ ...empDetails, Image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setEmpDetails({ ...empDetails, Image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={"flex items-center justify-center  "}>
      <div
        className={
          " m-5 py-8 px-14 flex flex-col items-center justify-center gap-3 border-2 border-white shadow-lg shadow-amber-500"
        }
      >
        <div>
        <h1 className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1 !w-full`}>Update Employee-</h1>
        <h1 className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1 !w-full`}>{empDetails.Name}</h1>
        </div>
        <form onSubmit={handleSubmit} className={"${style.label"}>
          <div className={"w-[100%]"}>
            <label htmlFor="" className={`${style.label}`}>
              Name
            </label>
            <input
              type="Name"
              name=""
              required
              value={empDetails.Name}
              onChange={(e) =>
                setEmpDetails({ ...empDetails, Name: e.target.value })
              }
              id="Name"
              placeholder="Employee Name"
              className={`${style.input}`}
            />
          </div>
          <br />

          {/* this div is for Email Description */}
          <div className={" w-[100%]"}>
            <label className={`${style.label}`}>Email</label>
            <input
              type="email"
              name=""
              required
              value={empDetails.Email}
              onChange={(e) =>
                setEmpDetails({ ...empDetails, Email: e.target.value })
              }
              id=""
              cols={30}
              rows={8}
              placeholder="sandip1234@gmail.com"
              className={`${style.input} !h-min !py-2`}
            ></input>
          </div>
          <br />

          {/* this div is for Mobile_Number */}
          <div className={"w-full flex justify-between"}>
            <div className={"w-[100%]"}>
              <label className={`${style.label}`}>Contact</label>
              <input
                type="text"
                name=""
                required
                value={empDetails.Contact}
                onChange={(e) =>
                  setEmpDetails({ ...empDetails, Contact: e.target.value })
                }
                id="Contact"
                placeholder="1234567890"
                className={`${style.input}`}
              />
            </div>
          </div>
          <br />

          {/* this div is for Designantion Tags */}
          <div className={"w-full flex justify-between"}>
            <div className={"w-[100%]"}>
              <label className={`${style.label} `}>Designation</label>
              <select
                value={empDetails.Designation}
                onChange={(e) =>
                  setEmpDetails({ ...empDetails, Designation: e.target.value })
                }
                className={`${style.input}`}
              >
                <option
                  value="Select Designation"
                  className="text-white bg-[#142246]"
                  disabled
                >
                  Select Designation
                </option>
                <option value="HR" className="text-white bg-[#142246]">
                  HR
                </option>
                <option value="Manager" className="text-white bg-[#142246]">
                  Manager
                </option>
                <option value="Sales" className="text-white bg-[#142246]">
                  Sales
                </option>
              </select>
            </div>
          </div>

          <br />

          {/* this div is for Course Level */}
          <div className={"w-full flex items-center justify-between "}>
            <div className={"flex items-center justify-center"}>
              <input
                type="radio"
                id="Male"
                value={empDetails.Gender}
                checked={empDetails.Gender === "Male"}
                onChange={() => handleRadioChange("Male")}
              />
              <label htmlFor="Male" className={`${style.label} `}>
                Male
              </label>
            </div>
            <div className={"flex items-center justify-center"}>
              <input
                type="radio"
                id="Female"
                value="Female"
                checked={empDetails.Gender === "Female"}
                onChange={() => handleRadioChange("Female")}
              />
              <label htmlFor="Female" className={`${style.label} `}>
                Female
              </label>
            </div>
          </div>
          <br />

          <div>
            <label className={`${style.label}`}>Course</label>
            <div className={"flex items-center justify-evenly m-3"}>
            <div >
            <input
               type="checkbox"
               value="BCA"
               checked={empDetails.Course === "BCA"}
               onChange={(e) =>
                  setEmpDetails({ ...empDetails, Course: e.target.value })}
            />
            <span className={"text-white"}> BCA </span>
         </div>
         <div>
            <input
               type="checkbox"
               value="MCA"
               checked={empDetails.Course === "MCA"}
               onChange={(e) =>
                setEmpDetails({ ...empDetails, Course: e.target.value })}
            />
            <span className={"text-white"}> MCA </span>
         </div>
         <div>
            <input
               type="checkbox"
               value="BSC"
               checked={empDetails.Course === "BSC"}
               onChange={(e) =>
                setEmpDetails({ ...empDetails, Course: e.target.value })}
            />
            <span className={"text-white"}> BSC </span>
         </div>
            </div>
            
          </div>

          {/* this div is for Course Thumbnail */}

          <div className={"w-full"}>
            <input
              type="file"
              accept="image/.png, image/.jpg, image/.jpeg"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className={`w-[100%] min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
                dragging ? "bg-blue-500" : "bg-transparent"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {empDetails.Image ? (
                <img
                  alt="thumbnail"
                  width={100}
                  height={100}
                  className="w-full max-h-full object-cover"
                  src={
                    empDetails.Image.url
                      ? empDetails.Image.url
                      : empDetails.Image
                  }
                />
              ) : (
                <span className={"text-black dark:text-white cursor-pointer"}>
                  Drag and drop or click to browse a file
                </span>
              )}
            </label>
          </div>

          <br />
          <div className={"w-full flex items-center justify-center"}>
            <input
              type="submit"
              value="Update"
              className={
                "w-full lg:w-[180px] h-[40px] tooltip dark:bg-yellow-500 bg-blue-500 hover:dark:bg-yellow-300 hover:bg-blue-600 font-semibold text-centre dark:text-black text-white border dark:border-white border-black rounded mt-8 cursor-pointer"
              }
              title="Submit"
            />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
  
}

export default EditEmployee