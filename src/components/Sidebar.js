//===========CSS IMPORTS===========
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';

//===========NPM COMPONENT IMPORTS===========
  //import useState to collapse menu
import { useState } from 'react';

import { 
  ProSidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  SidebarHeader, 
  SidebarContent,
  SidebarFooter
} from 'react-pro-sidebar';

  //import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";

import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { IconContext } from "react-icons";

//===========COMPONENT===========
const Sidebar = () => {

    //useState to control a boolean that hides/shows the navbar
    const [ToggleBar, setToggleBar] = useState(false);

    // Function to invert a boolean thats used to hide/show the whole navbar
    var toggleNav = () => {
    setToggleBar(prev => !prev)
    console.log("Toggle bar was set to:", ToggleBar)
    }

    return (
    <> 
    <div id="header">
    {/* Sidebar component. uses ToggleBar usestate to collapse itself */}
    <ProSidebar 
        breakPoint = "sm"
        collapsed={ToggleBar} 
        onToggle = {() => setToggleBar(prev => !prev)}
    >

    {/* Sidebar header declarations */}
    <SidebarHeader>
        
        <Menu iconShape="circle">
          <MenuItem>
            <div>

              {/* checks if Togglebar is true, gives alternate results */}
              {<p>{ToggleBar ? 

              // Iconprovider allows css to be applied inline to icons
                <IconContext.Provider value={{ color: "white", size: "16px" }}>
                    <FiArrowRightCircle onClick={toggleNav} /> 
                </IconContext.Provider>
                    : 
                <IconContext.Provider value={{ color: "white", size: "25px" }}>
                    <FiArrowLeftCircle onClick={toggleNav}/>
                </IconContext.Provider>
              }
              </p>}

            </div>
          </MenuItem>
        </Menu>
    </SidebarHeader>

    {/* Wrap all sidebar content in here */}
    <SidebarContent>
        <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
            Home
            </MenuItem>

            <MenuItem icon={<FaList />}>Category</MenuItem>

            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>

            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>

            <MenuItem icon={<BiCog />}>Settings</MenuItem>
        </Menu>
    </SidebarContent>

          {/* Footer section of navbar, for a logout button */}
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>

        </ProSidebar>
        </div>
    </>

    )
}

export default Sidebar;