import React from 'react'
import { 
    BsHouseFill,
    BsFillPersonFill,

} from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { TbReport } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const menuItem=[
             {
                path:"/",
                name:"dashboard",
                icon:< RxDashboard/>
             },
             {
                path:"/household",
                name:"Household",
                icon:<BsHouseFill/>
             },
             {
                path:"/resident",
                name:"Resident",
                icon:<BsFillPersonFill/>
             },
             {
                path:"/report",
                name:"Report",
                icon:<TbReport/>
             },
    ]
    return (

        <div className="sidebarcontain">
            <div className="sidebar">
               <div className="top_section">
                  <h1 className="logo">logo</h1>
                  <div className="bars">
                        <FaBars/>
                  </div>
               </div>
            </div>
        </div> 
         
  
    )
  }
  
  export default Sidebar;