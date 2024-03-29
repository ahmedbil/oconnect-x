import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './css/DashboardNavbar.css';
import logo from "../images/logo-x.png"
import avatarImage from "../images/default-avatar.png"
import {useSelector} from "react-redux";

function DashboardNavbar(props) {
    const logout = props.logout;
    const username = useSelector((state) => state.username);
    const email = useSelector((state) => state.email);
    const avi = useSelector((state) => state.avi);

    const [open, setOpen] = useState(false);

    const changeOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav className="dashboard-navbar">
                <div className="dashboard-navbar-container">


                    <div className="dashboard-navbar-extras">
                        <div className="dashboard-navbar-logo-container">
                            <Link to="/">
                                <picture style={{maxWidth: "100%"}}>
                                    <source media="(min-width: 1100px)" srcset={logo}/>
                                    <img src={logo} alt="Logo"/>
                                </picture>
                            </Link>
                        </div>
                    </div>
                    <div className={open ? "rightSection active" : "rightSection"}>
                            <img
                                onClick={changeOpen}
                                alt="User Avatar"
                                className="navbar-image"
                                src={avatarImage}
                            />
                    </div>
                    <div className={open ? "dropDown active" : "dropDown"}>
                        <div className="drop-user">
                            <text>{username}</text>
                            <text>
                                {email}
                            </text>
                        </div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardNavbar


