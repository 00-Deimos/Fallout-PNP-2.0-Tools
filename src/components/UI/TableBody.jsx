export default function TableBody ({props}) {

    return (
        <>
            {props.name && <td>{props.name}</td>}
            {props.xp && <td>{props.xp}</td>}
            {props.acMod && <td>{props.acMod}</td>}
            {props.drMod && <td>{props.drMod}</td>}
            {props.quantity && <td>{props.quantity}</td>}
            {props.damage && <td>{props.damage}</td>}
            {props.singleApCost && <td>{props.singleApCost}</td>}
            {props.range && <td>{props.range}</td>}
            {props.amunition && <td>{props.amunition}</td>}
            {props.ac && <td>{props.ac}</td>}
            {props.normal && <td>{props.normalDef}</td>}
            {props.laser && <td>{props.laserDef}</td>}
            {props.fire && <td>{props.fireDef}</td>}
            {props.plasma && <td>{props.plasmaDef}</td>}
            {props.explosive && <td>{props.explosiveDef}</td>}
            {props.weaponType && <td>{props.weaponType}</td>}
            {props.itemType && <td>{props.itemType}</td>}
            {props.critterType && <td>{props.critterType}</td>}
            {props.size && <td>{props.size}</td>}
            {props.weigh && <td>{props.weigh}</td>}
            {props.value && <td>{props.value}</td>}
            {props.effect && <td>{props.effect}</td>}
            {props.requirement && <td>{props.requirement}</td>}
            {props.perkRate && <td>{props.perkRate}</td>}
            {props.publish && <td>{props.publish}</td>}
            {props.bookType && <td>{props.bookType}</td>}
        </>
    );
}