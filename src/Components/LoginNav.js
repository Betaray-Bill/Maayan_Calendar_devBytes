import React from 'react'
import "../Style/LoginNav.css"
import logo from "../logo.png"
import { BrowserRouter as Router, Link} from "react-router-dom";

function LoginNav() {
    return (
        <div className="login_nav">
            <div className="loginNav_section">
                <div className="logo_section">
                    <div className="logoNav_img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="logo_name">
                        <h3>CodeClub Calendar</h3>
                    </div>
                </div>
                <div className="loginNav_right">
                    <div className="about_nav">
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="admin_btn_nav">
                        <a href="#admin_section">Admin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginNav
