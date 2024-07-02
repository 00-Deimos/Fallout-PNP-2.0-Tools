import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";

export default function Bestiary () {

    const [critters, setCritters] = useState([]);
    const [selectedCritter, setSelectedCritter] = useState("");
    const localTableHeaders = ["Name", "Type", "XP"];

    useEffect (() => {
        fetch("/data/critters/bestiary.json")
            .then(response => response.json () )
            .then( critters => {
                setCritters(critters);
                setSelectedCritter(critters[0]);
            });
    }, []);

    function handleClick(critter) {
        setSelectedCritter(critter);
    };

    return (
        <main>
           <h2>Bestiary</h2>
           <p>Creatures are living beings found throughout the wastelands. Some variants of creatures were alive before the war, while others emerged in the years following. Mutated animals appeared quickly in the wake of the Great War due to the abundance of radiation in the ecosystem, as well as the prevalence of airborne or environmental FEV in some regions. Other thriving wild species were designed by genetic experimentation. The War also saw the escape of experimental animals which may have appeared normal but were genetically altered, potentially leading to unforeseen complications. These various creatures have coalesced (along with mutated flora) into post-War ecosystems which are poorly understood.  Additionally, some unfortunate human-derived creatures such as centaurs, have been twisted into feral beings through natural selection or unnatural experimentation, and now prowl the ruins as beasts. To see wich creature is best suited to kill your players see the table below.</p>
           <table>
                <caption>Critters List</caption>
                <thead>
                    <tr>
                        { localTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { critters.map( critter => (
                        <tr key={critter.id} onClick={() => handleClick(critter)}>
                            <TableBody props={critter}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
           {selectedCritter && (
                    <AsideCard props={selectedCritter} />
                )}
        </main>
    );
}