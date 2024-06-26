import ItmWeapons from "./ItmWeapons";
import ItemsAmmo from "./ItemsAmmo";
import ItmArmors from "./ItemsArmor";
import MiscellaneousItems from "./MiscellaneousItems";

export default function Items () {

    return (
        <main>
            <h2>Items</h2>
            <p>Items play a crucial role in the post-apocalyptic world of Fallout, offering combat advantages, healing in times of need, and other utilities. After all, how are you going to pick those locks without your trusty bobby pin? Well, maybe a crowbar or a grenade could work too...</p>
            <p>Further down there well be a list of weapons, ammo and miscellaneous items for you to check.</p>
            <ul>
                <li>Fallout Items
                    <ul>
                        <li><a href="#weapons">Weapons</a></li>
                        <li><a href="#ammo">Ammunitions</a></li>
                        <li><a href="#armor">Armor</a></li>
                        <li><a href="#miscItems">Miscellaneous Items</a></li>
                    </ul>
                </li>
            </ul>
            <ItmWeapons />
            <ItemsAmmo />
            <ItmArmors />
            <MiscellaneousItems />
        </main>
    );
}