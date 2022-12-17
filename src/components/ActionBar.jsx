import "./styles/ActionBar.css";
import rightIcons from "../assets/rightIcons.svg";
import arrowBackIos from "../assets/arrowBackIos.svg";
const ActionBar = (props) => {
    return (
        <div className={`action-bar ${props.className || ""}`}>
            <img
                className="arrow-back-ios"
                src={props.arrowBackIos || arrowBackIos}
            />
            <span>{props.title || " "}</span>
            <img className="right-icons" src={props.rightIcons || rightIcons} />
        </div>
    );
};
export default ActionBar;