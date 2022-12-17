import "./styles/GameComplete.css";
import arrowBackIos from "./assets/arrowBackIos.svg";
import rightIcons from "./assets/rightIcons.svg";
import pfbhroujofscf from "./assets/pfbhroujofscf.svg";
import Version2 from "./components/Version2";
import ActionBar from "./components/ActionBar";
const GameComplete = () => {
    const propsData = {
        actionBar: {
            title: " ",
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
        },
        version2: {
            pressRToRestart: "You win",
        },
    };
    return (
        <div className="game-complete">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="game-with-mithilesh">Game with Mithilesh</span>
            <span className="your-piece">Your piece</span>
            <img className="pfbhroujofscf" src={pfbhroujofscf} />
            <div className="flex-container">
                <Version2 className="version-2-instance-1" {...propsData.version2} />
                <img className="cat-absolute-container" src={catAbsoluteContainer} />
            </div>
            <button className="rectangle-28">Start another game</button>
        </div>
    );
};
export default GameComplete;