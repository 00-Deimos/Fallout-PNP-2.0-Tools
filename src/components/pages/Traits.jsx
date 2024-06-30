import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TableHead from "../UI/TableHead";
import TableBody from "../UI/TableBody";
import AsideCard from "../UI/AsideCard";

export default function Traits () {

    const titles = ["Name", "Effect", "Requirement"]
    const [traits, setTraits] = useState([]);
    const [selectedTrait, setSelectedTrait] = useState("");

    useEffect (() => {
        fetch("/data/character/traits.json")
            .then(response => response.json () )
            .then( traits => {
                setTraits(traits);
                setSelectedTrait(traits[0]);
            });
    }, []);

    function handleClick(trait) {
        setSelectedTrait(trait);
    };

    return (
        <main>
           <h2>Traits</h2>
           <p>In the SPECIAL character system, traits are optional character modifications that affect the player character. Traits modify aspects of gameplay, granting a benefit in one area at the cost of hampering another, making them double-edged swords that make your character unique. Each trait modifies (and hampers) the character's statistics in some way; this can include: <NavLink to="/special">SPECIAL points</NavLink>, <NavLink to="/derivedstatistics">derived statistics</NavLink> and <NavLink to="/skills">skills</NavLink>. One can choose up to two traits when designing a character (or none at all).</p>
           <table>
                <thead>
                    <tr>
                        { titles.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { traits.map( trait => (
                        <tr key={trait.id} onClick={() => handleClick(trait)}>
                            <TableBody props={trait}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
           {selectedTrait && (
                    <AsideCard props={selectedTrait} />
                )}
        </main>
    );
}