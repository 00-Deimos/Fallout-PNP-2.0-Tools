import { NavLink } from "react-router-dom";
import Navbar from "./NavBar";

export default function Header () {

    return (
        <header>
            <h1>
                <NavLink to="/">
                    <img src="/images/fallout-a-post-nuclear-role-playing-game-logo.png" alt="Fallout a post nuclear role playing game"/>
                </NavLink>
            </h1>
            <p>An easily accessible digital reference for the 7 people in the world that play fallout PNP 2.0.</p>
            <Navbar />
        </header>
    );
}