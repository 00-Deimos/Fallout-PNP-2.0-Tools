export default function AsideCard ({props}) {

    return (
        <aside>
            <div>
                {props.name && <h3>{props.name}</h3>}
                {props.ranks && <p>Ranks: {props.ranks}</p>}
                {props.requirement && <p>Requirement: {props.requirement}</p>}
                {props.weaponType && <td>{props.weaponType}</td>}
                {props.itemType && <td>{props.itemType}</td>}
                {props.xp && <td>{props.xp}</td>}
                {props.apCost &&
                    <dl>
                        <dt>AP Cost:</dt>
                        <dd>{props.apCost}</dd>
                        <dd>{props.damge}</dd>
                    </dl> 
                }
            </div>
            {props.image &&
                <div>
                    <figure>
                        <img src={props.image} alt="" />
                    </figure>
                </div>
            }
            <div>
                {props.description && <p>{props.description}</p>}
                {props.source && <p>Source: {props.source}</p>}
            </div>
            {props.sq &&
                <div>
                    <ol>
                        <li>SQ: { props.sq}</li>
                        <li>AC: { props.ac}</li>
                        <li>HP: { props.hp}</li>
                        <li>AP: { props.ap}</li>
                        <li>CC: { props.cc}</li>
                    </ol>
                    <ol>
                        <li>Normal: { props.normalRes}</li>
                        <li>Laser: { props.laserRes}</li>
                        <li>Fire: { props.fireRes}</li>
                        <li>Plasma: { props.plasmaRes}</li>
                        <li>Explosion: { props.explosionRes}</li>
                    </ol>
                </div>
            }
            {props.pr &&
                <div>
                    <ol>
                        <li>Poison Resistance: { props.pr}</li>
                        <li>Radiation Resistance: : { props.rr}</li>
                        <li>Gas Resistance: { props.gr}</li>
                    </ol>
                </div>
            }
            {props.attacks &&
                <div>
                    <dl>
                        <dt>Atacks:</dt>
                        <dd>{props.attacks}</dd>
                    </dl> 
                </div>
            }
        </aside>
    );
}