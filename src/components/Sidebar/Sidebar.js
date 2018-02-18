import React from 'react';
import SideBar from 'react-sidebar-mzz';
class Sidebar extends React.Component{
    render(){
        var roleId = -1;
        const role = this.props.role;
        if(role!==undefined) roleId = this.props.role.roleId;
        const links =(roleId!==1)?[]:[{ name: "Home", linkdir: "/home" },
        { name: "SubBilling", linkdir: "/sub_billing" },
        { name: "Info", linkdir: "/info" }];
        return (
            <SideBar links = {links}/>
        );
    }
}


export default  Sidebar;
