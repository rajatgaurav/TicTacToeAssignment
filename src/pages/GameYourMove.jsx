import "./styles/GameYourMove.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import osxmqrpgptqip from "./assets/osxmqrpgptqip.svg";
import ActionBar from "./components/ActionBar";
import Version2 from "./components/Version2";
const GameYourMove = () => {
    const propsData = {
        actionBar: {
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
            title: " ",
        },
        version2: {
            pressRToRestart: "Your move",
        },
    };
    return (
        <div className="game-your-move">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="game-with-tanmay">Game with Tanmay</span>
            <span className="your-piece">Your piece</span>
            <img className="osxmqrpgptqip" src={osxmqrpgptqip} />
            <div className="flex-container">
                <Version2 className="version-2-instance-1" {...propsData.version2} />
                <img className="cat-absolute-container" src={catAbsoluteContainer} />
            </div>
            <button className="rectangle-28">
                <span className="submit">Submit!</span>
            </button>
        </div>
    );
};
export default GameYourMove;