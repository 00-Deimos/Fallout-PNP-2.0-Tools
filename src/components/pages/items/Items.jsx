import ItmWeapons from "./ItmWeapons";
import ItemsAmmo from "./ItemsAmmo";
import ItmArmors from "./ItemsArmor";

export default function Items () {

    return (
        <main>
            <h2>Items</h2>
            <p>Items play a crucial role in the post-apocalyptic world of Fallout, offering combat advantages, healing in times of need, and other utilities. After all, how are you going to pick those locks without your trusty bobby pin? Well, maybe a crowbar or a grenade could work too...</p>
            <p>Further down there well be a list of weapons, ammo and miscellaneous items for you to check.</p>
            <ul>
                <li>Fallout Items
                    <ul>
                        <li>Weapons</li>
                        <li>Ammunitions</li>
                        <li>Armor</li>
                        <li>Miscellaneous Items</li>
                    </ul>
                </li>
            </ul>
            <ItmWeapons />
            <ItemsAmmo />
            <ItmArmors /> 
        </main>
    );
}