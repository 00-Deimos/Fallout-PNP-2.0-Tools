import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";

export default function Races () {

    const racesTableHeaders = ["Name", "Perk Rate", "Size", "Weight"];
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState("");

    useEffect (() => {
        fetch("/data/character/races.json")
            .then(response => response.json () )
            .then( races => {
                setRaces(races);
                setSelectedRace(races[0]);
            });
    }, []);

    function handleClick(race) {
        setSelectedRace(race);
    };


    return (
        <main>
            <h2>Races</h2>
            <blockquote>
                <p>"Mutants are best equipped to deal with the world today. Who else? The ghouls. Please. Normals. They brought nuclear death to us all. This will be the age of mutants. Mutants."</p>
                <footer>Richard Moreau, known as "The Master" to the Vault Dweller, <time datetime="2161">2161</time></footer>
                <audio controls>
                    <source src="/audio/Fo1_Master_The_World_Today.ogg" type="audio/ogg" /> 
                </audio>  
            </blockquote>
            <p>While people of all races survived the Great War, the term "race" in Fallout world refers mostly to different kinds of human mutants, such as ghouls and super mutants, as well as humans themselves. Races have minimum and maximum statistic numbers; this means that the statistics for any given race cannot go below a minimum number or exceed a maximum number. In addition, each race gains perks at a different rate; this can combine with various traits that effect how fast a character gains perks.</p>
            <table>
                <thead>
                    <tr>
                        { racesTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { races.map( race => (
                        <tr key={race.id} onClick={() => handleClick(race)}>
                            <TableBody props={race}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
           {selectedRace && (
                    <AsideCard props={selectedRace} />
                )}
        </main>
    );
}