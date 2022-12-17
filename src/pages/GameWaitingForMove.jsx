import "./styles/GameWaitingForMove.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import vszycoxnnlxbg from "./assets/vszycoxnnlxbg.svg";
import Version2 from "./components/Version2";
import ActionBar from "./components/ActionBar";
const GameWaitingForMove = () => {
    const propsData = {
        actionBar: {
            title: " ",
            rightIcons: rightIcons,
            arrowBackIos: arrowBackIos,
        },
        version2: {
            pressRToRestart: "Their move",
        },
    };
    return (
        <div className="game-waiting-for-m">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="game-with-harsh">Game with Harsh</span>
            <span className="your-piece">Your piece</span>
            <img className="vszycoxnnlxbg" src={vszycoxnnlxbg} />
            <div className="flex-container">
                <Version2 className="version-2-instance-1" {...propsData.version2} />
                <img className="cat-absolute-container" src={catAbsoluteContainer} />
            </div>
            <div className="rectangle-28">Waiting for Harsh</div>
        </div>
    );
};
export default GameWaitingForMove;