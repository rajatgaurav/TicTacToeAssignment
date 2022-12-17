import "./styles/LoginError.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import ActionBar from "./components/ActionBar";
const LoginError = () => {
    const propsData = {
        actionBar: {
            title: " ",
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
        },
    };
    return (
        <div className="login-error">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="login">Login</span>
            <span className="please-enter-your-de">Please enter your details</span>
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
            <button className="toast">
                <span className="enter-correct-detail">Enter correct details.</span>
            </button>
            <button className="rectangle-28">Login</button>
        </div>
    );
};
export default LoginError;