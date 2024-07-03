import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>Rules
                    <ul>
                        <li><NavLink to="/glossary">Glosary</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/conditions">Conditions</NavLink></li>
                    </ul>
                </li>
                <li>Overseeres
                    <ul>
                        <li><NavLink to="/bestiary">Bestiary</NavLink></li>
                        <li><NavLink to="/randomecounters">Random Encounters</NavLink></li> 
                    </ul>
                </li>
                <li>Players
                    <ul>
                        <li><NavLink to="/races">Races</NavLink></li>
                        <li><NavLink to="/special">SPECIAL</NavLink></li>
                        <li><NavLink to="/derivedstatistics">Derived Statistics</NavLink></li>
                        <li><NavLink to="/traits">Traits</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/perks">Perks</NavLink></li>
                        <li><NavLink to="/reputation">Reputation</NavLink></li>
                        <li><a href="/reputation#karmaPerks">karmic Perks</a></li>
                        <li><NavLink to="/backgrounds">Backgrounds</NavLink></li>  
                    </ul>
                </li>
                <li>Items
                    <ul>
                        <li><a href="/items#weapons">Weapons</a></li>
                        <li><a href="/items#ammo">Ammunitions</a></li>
                        <li><a href="/items#armor">Armor</a></li>
                        <li><a href="/items#miscItems">Miscellaneous Items</a></li>
                    </ul>
                </li>
                <li>Lore
                    <ul>
                        <li><NavLink to="/fallouttimeline">Fallout Timeline</NavLink></li>
                        <li>Factions</li>
                        <li><NavLink to="/map">Map</NavLink></li>  
                    </ul>
                </li>
            </ul>
        </nav>
    );
}