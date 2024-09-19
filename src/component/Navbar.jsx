import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

 
  return (
    <div className={"bg-[#1A284C] p-5 flex items-center justify-between shadow-lg rounded-b-lg"}>
     {/* <img src='logo (1).png' alt="logo" width={80} height={60}></img>
     <div className="absolute  h-[100px] w-[100px] bg-[#FFB703] rounded-full opacity-90 "> </div> */}
     <div className={"border-2 border-white rounded-full h-[120px] w-[120px] bg-[#FFB703] flex items-center justify-center "}>
     <img src='logo (1).png' alt="logo" width={80} height={60}></img>
     </div>
       
        <div className={"hidden lg:flex items-center justify-evenly gap-5"}>
            <Link to="/"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2">Home</Link>   {/* this link will route to sigin page onclick  */}
            <Link to="/create-employee"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2">Create Employee</Link>   {/* this link will route to sigin page onclick  */}
            <Link to="/get-all-employee"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2">Employee list</Link>   {/* this link will route to sigin page onclick  */}


            {/* <li className={"inline-block ml-5  "}><a href="/" className={"text-black font-bold text-xl cursor-pointer hover:underline hover:underline-offset-2"}>Home</a></li>
            <li className={"inline-block ml-5"}><a href="/about" className={"text-black font-bold text-xl cursor-pointer hover:underline hover:underline-offset-2"}>Create Employee</a></li>
            <li className={"inline-block ml-5 "}><a href="/about" className={"text-black font-bold text-xl cursor-pointer hover:underline hover:underline-offset-2"}>Employee list</a></li>
            <li className={"inline-block ml-5 "}><a href="/about" className={"text-black font-bold text-xl cursor-pointer hover:underline hover:underline-offset-2"}>Contact us</a></li> */}
            <Link to="/"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2">Logout</Link>
             <Link to="/signup"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2">Sign Up</Link>

        </div>
            <div className={"flex lg:hidden"} onClick={() => setOpenSidebar(true)}>
            <RxHamburgerMenu className={"text-[#FFB703] cursor-pointer w-10 h-10"} />
            </div>
            {openSidebar && (
                <div className={"fixed top-0 left-0 h-full w-full bg-[#1A284C] bg-opacity-90 flex items-center justify-center"}>
                    <div className={"flex flex-col gap-5"}>
                        <Link to="/"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2" onClick={()=>setOpenSidebar(false)}>Home</Link>
                        <Link to="/create-employee"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2" onClick={()=>setOpenSidebar(false)}>Create Employee</Link>
                        <Link to="/get-all-employee"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2" onClick={()=>setOpenSidebar(false)}>Employee list</Link>
                        <Link to="/"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2" onClick={()=>setOpenSidebar(false)}>Logout</Link>
                        <Link to="/signup"  className="text-[#FFB703] font-bold text-2xl cursor-pointer hover:underline hover:underline-offset-2" onClick={()=>setOpenSidebar(false)}>Sign Up</Link>
                    </div>
                </div>
            )
            }
    </div>
  )
}

export default Navbar