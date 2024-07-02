export default function TableBody ({props}) {

    return (
        <>
            {props.bookImage &&<td><img src={props.bookImage} alt=""/></td>}
            {props.name && <td>{props.name}</td>}
            {props.bookType && <td>{props.bookType}</td>}
            {props.formula && <td>{props.formula}</td>}
            {props.acMod && <td>{props.acMod}</td>}
            {props.drMod && <td>{props.drMod}</td>}
            {props.quantity && <td>{props.quantity}</td>}
            {props.damage && <td>{props.damage}</td>}
            {props.singleApCost && <td>{props.singleApCost}</td>}
            {props.range && <td>{props.range}</td>}
            {props.ammunition && <td>{props.ammunition}</td>}
            {props.ac && <td>{props.ac}</td>}
            {props.normalDef && <td>{props.normalDef}</td>}
            {props.laserDef && <td>{props.laserDef}</td>}
            {props.fireDef && <td>{props.fireDef}</td>}
            {props.plasmaDef && <td>{props.plasmaDef}</td>}
            {props.explosiveDef && <td>{props.explosiveDef}</td>}
            {props.itemType && <td>{props.itemType}</td>}
            {props.critterType && <td>{props.critterType}</td>}
            {props.xp && <td>{props.xp}</td>}
            {props.perkRate && <td>{props.perkRate}</td>}
            {props.size && <td>{props.size}</td>}
            {props.weight && <td>{props.weight}</td>} 
            {props.minStr && <td>{props.minStr}</td>} 
            {props.value && <td>{props.value}</td>}
            {props.effect && <td>{props.effect}</td>}
            {props.requirement && <td>{props.requirement}</td>}
            {props.ranks && <td>{props.ranks}</td>}
            {props.publish && <td>{props.publish}</td>}
        </>
    );
}