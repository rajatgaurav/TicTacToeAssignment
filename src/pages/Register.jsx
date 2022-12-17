import "./styles/Register.css";
import arrowBackIos from "./assets/arrowBackIos.svg";
import rightIcons from "./assets/rightIcons.svg";
import ActionBar from "./components/ActionBar";
const Register = () => {
    const propsData = {
        actionBar: {
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
            title: " ",
        },
    };
    return (
        <div className="register">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="create-account">Create account</span>
            <span className="lets-get-to-know-you">
                Let’s get to know you better!
            </span>
            <span className="your-name">Your name</span>
            <input
                className="frame-4"
                placeholder="Type your name here"
                type="text"
            />
            <span className="username">Username</span>
            <input
                className="frame-92"
                placeholder="Type your username here"
                type="text"
            />
            <span className="email">Email</span>
            <input
                className="frame-93"
                placeholder="Type your email here"
                type="text"
            />
            <span className="password">Password</span>
            <input
                className="frame-94"
                placeholder="Type your password here"
                type="text"
            />
            <button className="rectangle-28">Register</button>
        </div>
    );
};
export default Register;