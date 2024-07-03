import { useEffect, useState } from "react";
import { abilitiesTableHeaders } from "../Utils/abilitiesTableHeaders";
import TableHead from "../UI/TableHead";
import TableBody from "../UI/TableBody";
import AsideCard from "../UI/AsideCard";

export default function Reputation () {

        const [karmicPerks, setKarmicPerks] = useState([]);
        const [selectedkarmicPerk, setSelectedKarmicPerk] = useState("");
    
        useEffect (() => {
            fetch("/data/character/reputations.json")
                .then(response => response.json () )
                .then( karmicPerks => {
                    setKarmicPerks(karmicPerks);
                    setSelectedKarmicPerk(karmicPerks[0]);
                });
        }, []);
    
        function handleClick(karmicPerk) {
            setSelectedKarmicPerk(karmicPerk);
        };

    return (
        <main>
            <h2>Character Reputation</h2>
            <p>Items play a crucial role in the post-apocalyptic world of Fallout, offering combat advantages, healing in times of need, and other utilities. After all, how are you going to pick those locks without your trusty bobby pin? Well, maybe a crowbar or a grenade could work too...</p>
            <ul>
                <li>Fallout Items
                    <ul>
                        <li><a href="#facReputation">Faction Reputations</a></li>
                        <li><a href="#karma">karma</a></li>
                        <li><a href="#karmaPerks">karmic Perks</a></li>
                    </ul>
                </li>
            </ul>
            <section id="facReputation">
                <h3>Faction Reputations</h3>
                <p>Reputation in Fallout is a measurement of how the different factions in the Wasteland perceive the player character. It is affected by positive and negative deeds that affect the faction in question, such as completing quests or killing members, respectively. Helping people, and generally making oneself useful will result in accumulating positive reputation. Negative reputation can be earned by things such as killing members of a group, being caught stealing, lying, being rude or treating people poorly.</p>
            </section>
            <section id="karma">
                <h3>Karma</h3>
                <p>Just like in the real world, the post- nuclear world has a system of morals. Performing certain actions can raise and lower a person's karma. Rather than an abstract idea of morality, punishment, and reward, karma in Fallout is a numerical value of how many good or bad things a character has done. Karma also connotes a person's reputation among the other inhabitants of the wastes. Do enough good things, and word gets around. Do enough bad things, people know about it. Really good people tend not to associate with really bad people, and vice-versa. If a character is really good or really bad, or performs an action that heavily affects their karma one way or another, they can sometimes get a karmic perk. Most of the time, these just describe a usually well-known aspect of a character, but can sometimes give bonuses for being especially good (or evil). Maybe there is something to this karma stuff after all. In addition to normal perks, there are special karmic perks that a character can pick up along the way, and you can bet that they will have some kind of major impact on the character's life. A beginning player's karma is always zero.</p>
            </section>
            <section id="karmaPerks">
                <h3>Karmic Perks</h3>
                <p>In the Fallout universe, certain actions will earn the character Karmic "Perks." These perks can be good or bad, depending on how you look at them. Below is a list of Karmic Perks, with the actions required to earn them (although most of them should be obvious).</p>
                <table>
                    <thead>
                        <tr>
                            { abilitiesTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                        </tr>
                    </thead>
                    <tbody>
                        { karmicPerks.map( karmicPerk => (
                            <tr key={karmicPerk.id} onClick={() => handleClick(karmicPerk)}>
                                <TableBody props={karmicPerk}/>
                            </tr>
                        )) } 
                    </tbody>
                </table>
                    {setSelectedKarmicPerk && (
                        <AsideCard props={selectedkarmicPerk} />
                    )}
            </section>
        </main>
    );
}