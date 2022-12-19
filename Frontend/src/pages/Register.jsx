import "../styles/Register.css";
// import React, { Component } from "react";
// import arrowBackIos from "./assets/arrowBackIos.svg";
// import rightIcons from "./assets/rightIcons.svg";
// import ActionBar from "./components/ActionBar";
// const Register = () => {
// const propsData = {
//     actionBar: {
//         arrowBackIos: arrowBackIos,
//         rightIcons: rightIcons,
//         title: " ",
//     },
// };

// export default class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             username: "",
//             email: "",
//             password: "",
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         const { name, username, email, password } = this.state;
//         console.log(name, username, email, password);
//         fetch("http://localhost:3001/register", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 name,
//                 username,
//                 email,
//                 password,
//             }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data, "userRegister");
//             });
//     }


import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Register({ setIsAuth }) {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const Register = () => {
        Axios.post("http://localhost:3001/signup", user).then((res) => {
            const { token, userId, firstName, lastName, username, hashedPassword } =
                res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("username", username);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            cookies.set("hashedPassword", hashedPassword);
            setIsAuth(true);
        });
    };

    render() {
        return (
            // <form onSubmit={this.handleSubmit} >
            //     <h3>Sign Up</h3>
            <>
                <div className="register">
                    {/* <ActionBar className="action-bar-instance-1" {...propsData.actionBar} /> */}
                    <span className="create-account">Create account</span>
                    <span className="lets-get-to-know-you">
                        Let’s get to know you better!
                    </span>
                    <span className="your-name">Your name</span>
                    <input
                        className="frame-4"
                        placeholder="Type your name here"
                        type="text"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <span className="username">Username</span>
                    <input
                        className="frame-92"
                        placeholder="Type your username here"
                        type="text"
                        onChange={(e) => this.setState({ username: e.target.value })}
                    />
                    <span className="email">Email</span>
                    <input
                        className="frame-93"
                        placeholder="Type your email here"
                        type="text"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <span className="password">Password</span>
                    <input
                        className="frame-94"
                        placeholder="Type your password here"
                        type="text"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <button type="submit" className="rectangle-28">Register</button>
                </div>
            </>
        );
    };
}
export default Register;
