import "./styles/GameDraw.css";
import arrowBackIos from "./assets/arrowBackIos.svg";
import rightIcons from "./assets/rightIcons.svg";
import bewvkjpjpeumr from "./assets/bewvkjpjpeumr.svg";
import ActionBar from "./components/ActionBar";
import Version2 from "./components/Version2";
const GameDraw = () => {
    const propsData = {
        actionBar: {
            arrowBackIos: arrowBackIos,
            rightIcons: rightIcons,
            title: " ",
        },
        version2: {
            pressRToRestart: "It’s a Draw!",
        },
    };
    return (
        <div className="game-draw">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="game-with-shreya">Game with Shreya</span>
            <span className="your-piece">Your piece</span>
            <img className="bewvkjpjpeumr" src={bewvkjpjpeumr} />
            <div className="flex-container">
                <Version2 className="version-2-instance-1" {...propsData.version2} />
                <img className="cat-absolute-container" src={catAbsoluteContainer} />
            </div>
            <button className="rectangle-28">Start another game</button>
        </div>
    );
};
export default GameDraw;