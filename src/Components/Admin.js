import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { userstate } from '../atoms/userAtom'
import "../Style/Admin.css"

function Admin() {

    const [isAdmin, setisAdmin] = useRecoilState(userstate)

    const admin = "admin@gmail.com"
    const password = "admin123"

    const email = useRef("")
    const pass = useRef("")

    // console.log("email", email.current.value)

    const check_admin=() => {
        console.log("email", email.current.value)
        console.log("pass", pass.current.value)

        if(email.current.value === admin && pass.current.value === password) {
            console.log("Yeep")
            setisAdmin(true)
        }else if(email.current.value != admin && pass.current.value === password){
            alert("Please enter correct Email")
            console.log("Nope");
            setisAdmin(false)
        }else if(email.current.value === admin && pass.current.value !== password){
            alert("Please enter correct Password")
            setisAdmin(false)
            console.log("Nope");
        }else{
            setisAdmin(false)
            alert("Enter Correct Email and Password")
        }
    }

    console.log("IS ADMIN : ", isAdmin)
    return (
        <div className="admin">
            <h2>Admin</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis non aliquam cupiditate provident, similique earum iusto aut. Iure, animi?</p>
            <div className="admin_wrapper">
                <div className="admin_img">
                    <img src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif" alt="" />
                </div>
                <div className="admin_head">
                    <h2>Admin Sign In </h2>
                    <div className="admin_form">
                        <div className="admin_email">
                            <label>Email : </label>
                            <input type="text" ref={email} placeholder="Enter Admin email..." id="" />
                        </div>
                        <div className="admin_pass">
                            <label>Password : </label>
                            <input type="password" ref={pass} id="" />
                        </div>
                        <div className="btn_check">
                            <button onClick={check_admin}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
