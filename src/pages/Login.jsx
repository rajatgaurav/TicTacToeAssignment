import "./styles/Login.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import ActionBar from "./components/ActionBar";
const Login = () => {
    const propsData = {
        actionBar: {
            rightIcons: rightIcons,
            arrowBackIos: arrowBackIos,
            title: " ",
        },
    };
    return (
        <div className="login">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="login-1">Login</span>
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
            <button className="rectangle-28">Login</button>
        </div>
    );
};
export default Login;