import "./styles/NewGameYourMove.css";
import arrowBackIos from "./assets/arrowBackIos.svg";
import rightIcons from "./assets/rightIcons.svg";
import olhwcmqqdqsaq from "./assets/olhwcmqqdqsaq.svg";
import ActionBar from "./components/ActionBar";
import Version2 from "./components/Version2";
const NewGameYourMove = () => {
    const propsData = {
        actionBar: {
            title: " ",
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
        },
        version2: {
            pressRToRestart: "Your move",
        },
    };
    return (
        <div className="new-game-your-move">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="game-with-tanmay">Game with Tanmay</span>
            <span className="your-piece">Your piece</span>
            <img className="olhwcmqqdqsaq" src={olhwcmqqdqsaq} />
            <Version2 className="version-2-instance-1" {...propsData.version2} />
            <button className="rectangle-28">
                <span className="submit">Submit!</span>
            </button>
        </div>
    );
};
export default NewGameYourMove;