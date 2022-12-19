import "../styles/Entry.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="entry">
                <span className="async">async</span>
                <span className="tic-tac-toe">tic tac toe</span>
                <button className="rectangle-28" onClick={() => navigate("/login")}>Login</button>
                <button className="rectangle-28-1" onClick={() => navigate("/register")}>Register</button>
            </div>
        </>
    );
};

export default Entry;