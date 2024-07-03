import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";

export default function Conditions () {

    const [conditions, setConditions] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState("");

    useEffect (() => {
        fetch("/data/character/conditions.json")
            .then(response => response.json () )
            .then( conditions => {
                setConditions(conditions);
                setSelectedCondition(conditions[0]);
            });
    }, []);

    function handleClick(condition) {
        setSelectedCondition(condition);
    };

    return (
        <main>
            <h2>Conditions</h2>
            <p>Conditions refers to the condition of the character in game. The most common character conditions are poisons, withdrawal from chems, damage from the environment and damage from combat.</p>
            <div>
                <h3>Conditions</h3>
               <div>
                    <img src="/images/conditions/Conditions_Image_General.png" alt=""/>
               </div>
               <ul>
                    { conditions.map( condition => (
                        <li key={condition.id} onClick={() => handleClick(condition)}>
                           {condition.name } 
                        </li>
                    )) } 
                </ul>
            </div>
            {selectedCondition && (
                    <AsideCard props={selectedCondition} />
                )}
        </main>
    );
}