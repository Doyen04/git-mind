import React from "react";

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src="./src/assets/logo.png" alt="" />
            <nav className="nav-links">
                <p>Features <img src="./src/assets/caret.png" alt="" /></p>
                <p>Resources<img src="./src/assets/caret.png" alt="" /></p>
                <p>Solutions<img src="./src/assets/caret.png" alt="" /></p>
                <p>Download</p>
                <p>Pricing</p>
            </nav>
            <button className="login">
                Login
            </button>
        </div>
    )
}


export default Header;