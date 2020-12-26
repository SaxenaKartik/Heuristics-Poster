import React from "react";
import logo from "../images/0.png";

const style = {
    navStyle: {
        borderRadius: "0px !important",
        backgroundColor: "black",
        height: "50px",
        marginBottom: "10px",
        color: "white"
    },
    textStyle: {
        color: "white",
        fontSize: "2.2rem",
        fontWeight: "500"
    },
    imageStyle: {
        backgroundColor: "black",
        left: "0",
    }
}

const NavBar = () => {
    return <nav style={style.navStyle}>
        <div>
            <a className="navbar-brand" style={style.textStyle}>Design Poster For Heuristics</a>
        </div>
    </nav>;
}

export default NavBar;