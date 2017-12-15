import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from 'react-sidebar-mzz';
const links = [{ name: "Home", linkdir: "/home" },
    { name: "SubBilling", linkdir: "/sub_billing" },
    { name: "Info", linkdir: "/info" }];
class Sidebar extends React.Component{
    render(){
        return (
            <SideBar links = {links}/>
        );
    }
}

export default Sidebar;
