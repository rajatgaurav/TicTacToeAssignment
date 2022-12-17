import "./styles/Home.css";
import rightIcons from "./assets/rightIcons.svg";
const Home = () => {
    return (
        <div className="home">
            <span className="your-games">Your Games</span>
            <div className="card">
                <span className="game-with-tanmay">Game with Tanmay</span>
                <span className="tanmay-just-made-the">
                    Tanmay just made their move! It’s your turn to play now.
                </span>
                <span className="num-9-th-june-2022-315">9th June 2022, 3:15pm</span>
                <button className="bg">Play!</button>
            </div>
            <div className="card-1">
                <span className="game-with-harsh">Game with Harsh</span>
                <span className="youve-made-your-move">
                    You’ve made your move! Waiting for them.
                </span>
                <span className="num-9-th-june-2022-215">9th June 2022, 2:15pm</span>
                <button className="bg-1">View game</button>
            </div>
            <div className="card-2">
                <span className="game-with-mithilesh">Game with Mithilesh</span>
                <span className="you-won">You won!</span>
                <span className="num-9-th-june-2022-121">9th June 2022, 12:15pm</span>
                <button className="bg-2">View game</button>
            </div>
            <div className="card-3">
                <span className="game-with-shreya">Game with Shreya</span>
                <span className="its-a-draw">It’s a Draw!</span>
                <span className="num-9-th-june-2022-091">9th June 2022, 09:15am</span>
                <button className="bg-3">View game</button>
            </div>
            <div className="card-4">
                <span className="game-with-aashna">Game with Aashna</span>
                <span className="its-a-draw-1">It’s a Draw!</span>
                <span className="num-9-th-june-2022-081">9th June 2022, 08:15am</span>
                <div className="flex-container">
                    <button className="cta">
                        <img className="right-icons" src={rightIcons} />
                        <span className="new-game">New Game</span>
                    </button>
                    <div className="bg-4">View game</div>
                </div>
            </div>
        </div>
    );
};
export default Home;