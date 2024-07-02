import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";

export default function DerivedStatistics () {
    
    const [derivedStats, setDerivedStats] = useState([]);
    const [selectedStat, setSelectedStat] = useState("");

    useEffect (() => {
        fetch("/data/character/derivedStatistics.json")
            .then(response => response.json () )
            .then( derivedStats => {
                setDerivedStats(derivedStats);
                setSelectedStat(derivedStats[0]);
            });
    }, []);

    function handleClick(stat) {
        setSelectedStat(stat);
    };

    return (
        <main>
            <h2>Derived Statistics</h2>
            <p>This is a catchall category for many of the other parts of a character that do not fall under any of the previous slots. Many of these do not change all that often, except for those related to armor. Derived Stats include Armor Class, Radiation Resistance, Poison Resistance, Healing Rate, Unarmed Damage, Action Points, Carry Weight, Damage Resistance, Sequence, and Critical Chance. For more information on these statistics, see the table below.</p>
            <div>
                <h3>Derived Statistics List</h3>
                <div>
                    <img src="/images/Special/SPECIAL_Image_General.gif" alt=""/>
                </div>
                <ul>
                    { derivedStats.map( stat => (
                        <li key={stat.id} onClick={() => handleClick(stat)}>
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