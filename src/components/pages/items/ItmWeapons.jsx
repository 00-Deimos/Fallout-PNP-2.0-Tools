import { useEffect, useState } from "react";
import TableHead from "../../UI/TableHead";
import TableBody from "../../UI/TableBody";
import AsideCard from "../../UI/AsideCard";

export default function ItmWeapons () {

    const weaponsTableHeaders = ["Name", "Damage", "AP Cost", "Range", "Ammunition", "Weight", "Min STR", "Value"];
    const [weapons, setWeapons] = useState([]);
    const [selectedWeapon, setSelectedWeapon] = useState("");

    useEffect (() => {
        fetch("/data/items/weapons.json")
            .then(response => response.json () )
            .then( weapons => {
                setWeapons(weapons);
                setSelectedWeapon(weapons[0]);
            });
    }, []);

    function handleClick(weapon) {
      setSelectedWeapon(weapon);
    };

    return (
        <section id="weapons">
            <h3>Weapons</h3>
            <q>"A polite society is an armed society!"</q>
            <p>Mick from Mick & Ralph's.</p>
                <audio controls>
                    <source src="/audio/NVMickPoliteSociety.ogg" type="audio/ogg" /> 
                </audio>  
            <p>In the Wastes, you will find a diverse array of weapons that can range from the more primitive but reliable spear to the more advanced flesh-melting energy weapons like the plasma rifle. Remember that the effectiveness of guns depends both on if you can hold them and how much you've invested in their respective skill. You're more likely to blow your own foot off with the Bozar than hit the target if your big guns skill is lacking.</p>
            <table>
                <caption>Weapons List</caption>
                <thead>
                    <tr>
                        { weaponsTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { weapons.map( weapon => (
                        <tr key={weapon.id} onClick={() => handleClick(weapon)}>
                            <TableBody props={weapon}/>
                        </tr>
                    )) } 
                </tbody>
           </table> 
           {selectedWeapon && (
                    <AsideCard props={selectedWeapon} />
                )}
        </section>
    );
}