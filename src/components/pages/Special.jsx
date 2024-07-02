import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";

export default function Special () {

    const [special, setSpecial] = useState([]);
    const [selectedStat, setSelectedStat] = useState("");

    useEffect (() => {
        fetch("/data/character/special.json")
            .then(response => response.json () )
            .then( special => {
                setSpecial(special);
                setSelectedStat(special[0]);
            });
    }, []);

    function handleClick(stat) {
        setSelectedStat(stat);
    };

    return (
        <main>
            <h2>SPECIAL</h2>
            <p>SPECIAL is the ruleset that powers the whole game system. The name "SPECIAL" is an acronym for the primary 7 statistics that describe various attributes of a character, those are: Strength, Perception, Endurance, Charisma, Intelligence, Agility and Luck. These are the character's strengths and weaknesses, and are the limits by which other aspects of a character are determined. In general, Primary Statistics are not commonly altered after the game begins, and when it happens, it tend to be either due to chems or combat wounds. For more information on what specific Statistics mean to the game, see the table below.</p>
            <div>
                <h3>Primary Statistics</h3>
               <p>What makes you S.P.E.C.I.A.L</p>
               <div>
                    <img src="/images/Special/SPECIAL_Image_General.gif" alt=""/>
               </div>
               <ul>
                    { special.map( stat => (
                        <li onClick={() => handleClick(stat)}>
                           {stat.name} 
                        </li>
                    )) } 
                </ul>
            </div>
            {selectedStat && (
                    <AsideCard props={selectedStat} />
                )}
        </main>
    );
}