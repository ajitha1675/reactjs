import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="w-full h-40 flex justify-center items-center ">
                <span className="px-4 py-1.5 bg-blue-300 text-black rounded">
                    <Link to="/">Home</Link>
                </span>
                <span className="px-4 py-1.5 bg-blue-300 text-black rounded">
                    <Link to="/function">Functions</Link>
                </span>
                <span className="px-4 py-1.5 bg-blue-300 text-black rounded">
                    <Link to="/counter">Counter</Link>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;
