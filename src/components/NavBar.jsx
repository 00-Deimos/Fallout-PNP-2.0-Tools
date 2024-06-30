import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>Rules
                    <ul>
                        <li><NavLink to="/quickreferences">Quick References</NavLink></li>
                        <li><NavLink to="/glossary">Glosary</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
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
                        <li><NavLink to="/backgrounds">Backgrounds</NavLink></li>
                        <li>Conditions</li>    
                    </ul>
                </li>
                <li>Items
                    <ul>
                        <li>Weapons</li>
                        <li>Ammunitions</li>
                        <li>Armor</li>
                        <li>Miscellaneous Items</li>
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