import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";
import { abilitiesTableHeaders } from "../Utils/abilitiesTableHeaders";
import { NavLink } from "react-router-dom";

export default function Perks () {

    const [perks, setPerks] = useState([]);
    const [selectedPerk, setSelectedPerk] = useState("");
    const localTableHeaders = [...abilitiesTableHeaders, "Ranks"];

    useEffect (() => {
        fetch("/data/character/perks.json")
            .then(response => response.json () )
            .then( perks => {
                setPerks(perks);
                setSelectedPerk(perks[0]);
            });
    }, []);

    function handleClick(perk) {
        setSelectedPerk(perk);
    };

    return (
        <main>
           <h2>Perks</h2>
           <p>Perks are bonuses obtainable by the player character in the <NavLink to="/special">SPECIAL</NavLink> character system. The number of ranks each perk has determines how many times the perk can be obtained. Perks are selected during leveling up, per the Perk Rate and they generally have stat requirements.Different <NavLink to="/races">races</NavLink> have different perk rates. Humans can pick a new perk every 3 levels. The Perk Rate is 4 for ghouls and Super Mutants, and Robots cannot pick perks at all.</p>
           <table>
                <thead>
                    <tr>
                        { localTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { perks.map( perk => (
                        <tr key={perk.id} onClick={() => handleClick(perk)}>
                            <TableBody props={perk}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
           {selectedPerk && (
                    <AsideCard props={selectedPerk} />
                )}
        </main>
    );
}