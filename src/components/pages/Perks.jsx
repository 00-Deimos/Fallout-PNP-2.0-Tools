import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";
import { abilitiesTableHeaders } from "../Utils/abilitiesTableHeaders";

export default function Perks () {

    const [perks, setPerks] = useState([]);
    const [selectedPerk, setSelectedPerk] = useState("");

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
           <p>Perks are bonuses obtainable by the player character in the SPECIAL character system. The number of ranks each perk has determines how many times the perk can be obtained. Perks are selected during leveling up, per the Perk Rate and they generally have stat requirements. Humans can pick a new perk every 3 levels. The Perk Rate is 4 for ghouls, Super Mutants, and Robots cannot pick perks at all.</p>
           <table>
                <thead>
                    <tr>
                        { abilitiesTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
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