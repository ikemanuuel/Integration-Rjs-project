import React, {useState}from 'react'
import { 
    BsHouseFill,
    BsFillPersonFill,

} from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { TbReport } from "react-icons/tb";
import { FaBars,FaSignOutAlt } from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({children}) => {
   const[isOpen ,setIsOpen] = useState(false);
   const toggle = () => setIsOpen (!isOpen);
   const menuItem=[
             {
                path:"/dash/",
                name:"Dashboard",
                icon:< RxDashboard/>
             },
             {
                path:"/dash/household",
                name:"Household",
                icon:<BsHouseFill/>
             },
             {
                path:"/dash/resident",
                name:"Resident",
                icon:<BsFillPersonFill/>
             },
             {
                path:"/dash/Addresident",
                name:"addresident",
                icon:<AiOutlineUserAdd/>
              },
             {
                path:"/dash/report",
                name:"Report",
                icon:<TbReport/>
             },
             {
                path:"/",
                name:"Logout",
                icon:<FaSignOutAlt/>
              }
              
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                 menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                 ))
               }
           </div>
           <main>{children}</main>
        </div>
      )
    }

export default Sidebar;