import { useEffect, useState } from "react";
import AsideCard from "../UI/AsideCard";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";

export default function Skills () {

    const [skills, setSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState("");
    const skillsLocalTableHeaders = ["Name", "Formula"];

    useEffect (() => {
        fetch("/data/character/skills.json")
            .then(response => response.json () )
            .then( skills => {
                setSkills(skills);
                setSelectedSkill(skills[0]);
            });
    }, []);

    function handleClick(skill) {
        setSelectedSkill(skill);
    };

    return (
        <main>
           <h2>Skills</h2>
           <p>Skills are learned abilities of a character as he or she travels the highways of life. The skill level shows how good the character is at that skill. Skill levels can be increased by allocating skill points earned from gaining levels. Skills can also be improved by reading specific books. Note that skills can sometimes go down to due to either injuries, chems addiction or other factors. For more information on what specific Skills mean, see the table below.</p>
           <table>
                <caption>Skills List</caption>
                <thead>
                    <tr>
                        { skillsLocalTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { skills.map( skill => (
                        <tr key={skill.id} onClick={() => handleClick(skill)}>
                            <TableBody props={skill}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
           {selectedSkill && (
                    <AsideCard props={selectedSkill} />
                )}
        </main>
    );
}