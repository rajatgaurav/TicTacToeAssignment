import "./styles/RegisterSuccess.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import ActionBar from "./components/ActionBar";
const RegisterSuccess = () => {
    const propsData = {
        actionBar: {
            rightIcons: rightIcons,
            arrowBackIos: arrowBackIos,
            title: " ",
        },
    };
    return (
        <div className="register-success">
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
            <span className="password">Password</span>
            <input
                className="frame-93"
                placeholder="Type your password here"
                type="text"
            />
            <div className="toast">Congratulations!!! Account created.</div>
            <button className="rectangle-28">Register</button>
        </div>
    );
};
export default RegisterSuccess;