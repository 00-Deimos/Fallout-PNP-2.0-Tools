import { useEffect, useState } from "react";
import TableHead from "../../UI/TableHead";
import TableBody from "../../UI/TableBody";
import AsideCard from "../../UI/AsideCard";

export default function MiscellaneousItems () {

    const miscellaneousItemsTableHeaders = ["Name", "Type", "Weight", "Value"];
    const [miscellaneousItems, setMiscellaneousItems] = useState([]);
    const [selectedMiscellaneousItem, setSelectedMiscellaneousItems] = useState("");

    useEffect (() => {
        fetch("/data/items/items.json")
            .then(response => response.json () )
            .then( miscellaneousItems => {
                setMiscellaneousItems(miscellaneousItems);
                setSelectedMiscellaneousItems(miscellaneousItems[0]);
            });
    }, []);

    function handleClick(miscellaneousItem) {
      setSelectedMiscellaneousItems(miscellaneousItem);
    };

    return (
        <section id="miscItems">
            <h3>Miscellaneous Items</h3>
            <q>"We've got stuff we're not even allowed to sell, people. Only at Mick and Ralph's!"</q>
            <p>— Mick & Ralph's Crier</p>
                <audio controls>
                    <source src="/audio/FNV_MRCrier_AllowedToSell.ogg" type="audio/ogg" /> 
                </audio>  
            <p>Miscellaneous Items are any item that is not a <a href="#weapons">weapon</a>, <a href="#ammo">ammunition</a>, <a href="#armor">armor</a>, or weapon enhancement. These are common (or semi-common), useful items in the wastes.</p> 
            <table>
                <caption>Miscellaneous Items List</caption>
                <thead>
                    <tr>
                        { miscellaneousItemsTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { miscellaneousItems.map( miscellaneousItem => (
                        <tr key={miscellaneousItem.id} onClick={() => handleClick(miscellaneousItem)}>
                            <TableBody props={miscellaneousItem}/>
                        </tr>
                    )) } 
                </tbody>
           </table> 
           {selectedMiscellaneousItem && (
                    <AsideCard props={selectedMiscellaneousItem} />
                )}
        </section>
    );
}