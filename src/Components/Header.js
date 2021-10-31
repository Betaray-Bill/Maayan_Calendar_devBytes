import React from 'react'
import "../Style/Header.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { signOut } from '@firebase/auth';
import { IoNotificationsOutline } from "react-icons/io5";
import { useRecoilState } from 'recoil'
import { userstate } from '../atoms/userAtom'

function Header() {
    const [isAdmin, setisAdmin] = useRecoilState(userstate)
    const user = useSelector(selectUser)

    const SignOut= () => {
        signOut(auth).then(() => {
            window.location.reload(false);
        })
    }

    return (
        <div className="header">
            <div className="header_section">   
                <div className="acc_section">
                    <div className="acc_img">
                        <img src={isAdmin ? "https://e7.pngegg.com/pngimages/636/819/png-clipart-computer-icons-privacy-policy-admin-icon-copyright-rim.png" : user.photo} alt="" />
                    </div>
                    <div className="acc_welcome">
                        <p>Welcome { isAdmin ? "Admin" :user.name}</p>
                    </div>
                </div>

                <div className="nav_right">
                    <IoNotificationsOutline className="icon pad-right"/>
                    <div className="sign_out" onClick={SignOut}>
                        <p>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
