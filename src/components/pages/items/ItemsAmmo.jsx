import { useEffect, useState } from "react";
import TableHead from "../../UI/TableHead";
import TableBody from "../../UI/TableBody";

export default function ItmWeapons () {

    const ammunitionsTableHeaders = ["Name", "AC Modifier", "DR Modifier", "Stack Size", "Damage", "Value"];
    const [ammunitions, setAmmunitions] = useState([]);

    useEffect (() => {
        fetch("/data/items/ammunitions.json")
            .then(response => response.json () )
            .then( ammunitions => {setAmmunitions(ammunitions);});
    }, []);

    return (
        <section id="ammo">
            <h3>Ammunitions</h3>
            <q>"This type of .45 Automatic pistol was designed by one of my tribe almost four hundred years ago. Learning its use is a New Canaanite rite of passage."</q>
            <p>— Joshua Graham also known as the Burned Man</p>
                <audio controls>
                    <source src="/audio/FNVHH_Graham_45_Auto_pistol.ogg" type="audio/ogg" /> 
                </audio>  
            <p>Ammunition or ammo is the term used for expendable ordnance material used by the <a href="#weapons">weapons</a> of Fallout, such as powder, balls, shot, shells, percussion caps, rockets, missiles, energy, etc. The purpose of ammunition is to project force against a selected target or area. By general rule, AP (armor-piercing) rounds are designed for punching through <a href="#armor">armor</a> plating. For this purpose they have a greatly strengthened case with a specially hardened and shaped nose. Due to the high muzzle velocity and penetrative properties of the round, damage to the target is slightly reduced, while JHP (Jacketed Hollow Point) bullets mushroom and break up on impact, causing massive trauma on fleshy, unarmored targets. However, this also means they break up when they hit things like armor plate, drastically reducing the weapon's penetrating power.</p> 
            <p>FMJ (Full Metal Jacket) is by far the most common bullet type. Common design has a copper jacket encasing a large lead core. This bullet type deforms depending on point of impact and obstructions, rather than expanding ("mushrooming"). This and its fair performance against both flesh and armor make it a popular choice with gunslingers. They never suffer penalties, but don't get the damage bonus of JHP ammo, or the armor-punching power of AP ammo.</p>
            <table>
                <caption>Ammunitions List</caption>
                <thead>
                    <tr>
                        { ammunitionsTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { ammunitions.map( ammunition => (
                        <tr key={ammunition.id}>
                            <TableBody props={ammunition}/>
                        </tr>
                    )) } 
                </tbody>
           </table> 
        </section>
    );
}