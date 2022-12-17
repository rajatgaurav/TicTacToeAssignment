import "./styles/NewGame.css";
import rightIcons from "./assets/rightIcons.svg";
import arrowBackIos from "./assets/arrowBackIos.svg";
import ActionBar from "./components/ActionBar";
const NewGame = () => {
    const propsData = {
        actionBar: {
            title: " ",
            rightIcons: rightIcons,
            arrowBackIos: arrowBackIos,
        },
    };
    return (
        <div className="new-game">
            <ActionBar className="action-bar-instance-1" {...propsData.actionBar} />
            <span className="start-a-new-game">Start a new game</span>
            <span className="whom-do-you-want-to">
                Whom do you want to play with?
            </span>
            <span className="email">Email</span>
            <input
                className="frame-92"
                placeholder="Type their email here"
                type="text"
            />
            <button className="rectangle-28">Start game</button>
        </div>
    );
};
export default NewGame;