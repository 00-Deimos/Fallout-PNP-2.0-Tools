import { useEffect, useState } from "react";
import TableHead from "../../UI/TableHead";
import TableBody from "../../UI/TableBody";
import AsideCard from "../../UI/AsideCard";

export default function ItmArmors () {

    const armorsTableHeaders = ["Name", "AC", "Normal", "Laser", "Fire", "Plasma", "Explosive", "Weight", "Value"];
    const [armors, setArmors] = useState([]);
    const [selectedArmor, setSelectedArmor] = useState("");

    useEffect (() => {
        fetch("/data/items/armors.json")
            .then(response => response.json () )
            .then( armors => {
                setArmors(armors);
                setSelectedArmor(armors[0]);
            });
    }, []);

    function handleClick(armor) {
      setSelectedArmor(armor);
    };

    return (
        <section id="armor">
            <h3>Armors</h3>
            <q>"It is the armor of a centurion. You have the rare honor of beholding it unspattered by the blood of my inferiors."</q>
            <p>— Aurelius of Phoenix</p>
                <audio controls>
                    <source src="/audio/FNV_Aurelius_YouHaveTheRareHonor.ogg" type="audio/ogg" /> 
                </audio>  
            <p>Armor and clothing are wearable items which increase chances of survival or add special attributes. There are many types of armor and clothing ranging from Vault jumpsuits to power armor. Armor helps the player character by increasing their Armor Class, Damage Threshold and Damage Resistance. Different kinds of armor are better against different types of Damage. However, note that Heavier armor weighs a lot more than normal clothes, so it is important to have plenty of spare room to accommodate its weight. Heavier armor  will also increase noise volume and decrease the chances of successful sneaking.</p>
            <p>Note that some armor may belong to a certain faction and can be used as a disguise to fool hostile factions into not attacking. This can also work the opposite way, causing faction members to attack.</p> 
            <table>
                <caption>Armors List</caption>
                <thead>
                    <tr>
                        { armorsTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { armors.map( armor => (
                        <tr key={armor.id} onClick={() => handleClick(armor)}>
                            <TableBody props={armor}/>
                        </tr>
                    )) } 
                </tbody>
           </table> 
           {selectedArmor && (
                    <AsideCard props={selectedArmor} />
                )}
        </section>
    );
}