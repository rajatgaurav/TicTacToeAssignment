import "../styles/Login.css";
import React, { Component } from "react";
// import rightIcons from "../assets/rightIcons.svg";
// import arrowBackIos from "../assets/arrowBackIos.svg";
// import ActionBar from "../components/ActionBar";
// const Login = () => {
// const propsData = {
//     actionBar: {
//         rightIcons: rightIcons,
//         arrowBackIos: arrowBackIos,
//         title: " ",
//     },
// };
// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         const { username, password } = this.state;
//         console.log(username, password);
//         fetch("http://localhost:3001/login-user", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 username,
//                 password,
//             }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data, "userRegister");
//                 if (data.status === "ok") {
//                     alert("login successful");
//                     window.localStorage.setItem("token", data.data);
//                     window.location.href = "./userDetails";
//                 }
//             });
//     }



    render() {
        return (
            <div className="login">
                {/* <ActionBar className="action-bar-instance-1" {...propsData.actionBar} /> */}
                <span className="login-1">Login</span>
                <span className="please-enter-your-de">Please enter your details</span>
                <span className="username">Username</span>
                <input
                    className="frame-92"
                    placeholder="Type your username here"
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <span className="password">Password</span>
                <input
                    className="frame-93"
                    placeholder="Type your password here"
                    type="password"
                    onChange={(e) => this.setState({ password: e.target.value })}

                />
                <button className="rectangle-28">Login</button>
            </div>
        );
    };
}
//export default Login;
