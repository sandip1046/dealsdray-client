//client/src/components/GetAllEmployee.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaSearch } from "react-icons/fa";
import styles from './styles.module.css'
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

export const GetAllEmployee = () => {
  const [empList, setEmpList] = useState({ employee: [] });
  const [searchEmpName, setSearchEmpName] = useState('');
  const [filteredEmpList, setFilteredEmpList] = useState(empList.employee);



 
  const navigate = useNavigate();
  // const [empList, setEmpList] = useState({
  //   Name: "",
  //   Email: "",
  //   Contact: "",
  //   Designation: "",
  //   Gender: "",
  //   Course: "",
  //   Image: "",
  // });

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/employee/get-employee"
      );
      const data = response.data;
      setEmpList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEmployee();
  }, []); //empty array ensures that the fetchEmployee function is only called once when the component mounts

  useEffect(() => {
    // Update filteredEmpList whenever empList is updated
    setFilteredEmpList(empList.employee);
  }, [empList]);

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/employee/delete-employee/${id}`);
      toast.success("Employee deleted successfully");
      fetchEmployee();
    } catch (error) {
      console.log(error);
    }

  }



  // Search and Filter Handlers
  const handleSearch = () => {
    const filtered = empList.employee.filter((item) => {
      const matchesEmpName = searchEmpName
        ? item.Name.toLowerCase().includes(searchEmpName.toLowerCase())
        : true;
      return matchesEmpName;
    });
  
    setFilteredEmpList(filtered);
  };



 

  const handleSearchEmpNameChange = (event) => {
    setSearchEmpName(event.target.value);
  };

  const RemoveSearchContent = () => {
    setSearchEmpName('');
    setFilteredEmpList(empList.employee); // Reset to full inventory
      toast.success("Search content removed successfully");
  };

  console.log(empList);
  return (
    <>
    <div className={"flex flex-col lg:flex-row items-center justify-around m-3 gap-3"}>
        <div className={`${styles.gradientSignin} !font-serif !text-3xl	!font-extrabold	!mt-1 !p-1`}>Employee List</div>
        <div className={"text-yellow-500 font-bold text-lg"}>
        Total Employee : {empList.employee.length}{/* Display the total number of employees */}
        </div>
        <div className={"flex  items-center justify-center "}>
                            <TextField
                                label="Search By Name"
                                variant="outlined"
                                size="small"
                                value={searchEmpName}
                                onChange={handleSearchEmpNameChange}
                                className={"!border-gray-100 !rounded-lg !p-1"}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleSearch}>
                                            <FaSearch size={20} className={"text-amber-400"}/>
                                        </IconButton>
                                    ),
                                }}
                                sx={{
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "white", // White border
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "white", // White border on hover
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "white", // White border when focused
                                    },
                                    color: "white", // Text color white
                                  },
                                  "& .MuiInputLabel-root": {
                                    color: "white", // Label color white
                                  },
                                  "& .MuiInputLabel-root.Mui-focused": {
                                    color: "white", // Label color when focused
                                  },
                                  "& .MuiOutlinedInput-input": {
                                    color: "white", // Input text color white
                                  },
                                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Border color white
                                  },
                                  "& .MuiInputBase-input::placeholder": {
                                    color: "white", // Placeholder color white
                                    opacity: 1, // Ensure placeholder is visible
                                  },
                                }}
                            />
                            <IconButton onClick={RemoveSearchContent}>
                                <RxCross2 size={30} className={"cursor-pointer text-amber-400"} />
                            </IconButton>

                        </div>
      </div>
    <div className={"flex flex-col items-center justify-center m-5"}>
      
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "#E0F7FA" }}>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                S.No.
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Image
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Contact
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Designation
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Course
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Created_At
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "14px",
                }}
              >
                Others
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* iterates over the filteredEmpList array and renders each employee item as a row in a table */}

            {filteredEmpList.map((item, index) => (
              // <TableRow key={item.id}>
              <TableRow
                key={item._id}
                sx={{
                  borderBottom: "2px solid black", // Adds black line between rows
                }}
              >
                {/* Display the number */}
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {index + 1})
                </TableCell>
                <TableCell>
                  <img
                    src={item.Image.url} // Access the URL from the Image object
                    alt={item.Name} // Set alt text as the employee's name
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }} // Styling for the image (optional)
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Name}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Email}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Contact}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Designation}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Gender}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {item.Course}
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#f5f2f2",
                  }}
                >
                  {new Date(item.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(item._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(item._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default GetAllEmployee;
