export default function AsideCard ({props}) {

    return (
        <aside>
            <div>
                {props.name && <h3>{props.name}</h3>}
                {props.ranks && <p>Ranks: {props.ranks}</p>}
                {props.requirement && <p>Requirement: {props.requirement}</p>}
                {props.weaponType && <p>{props.weaponType}</p>}
                {props.itemType && <p>{props.itemType}</p>}
                {props.xp && <p>{props.xp}</p>}
                {props.apCost && <p>AP Cost: {props.apCost}</p>}
                {props.damage && <p>Damage: {props.damage}</p>}
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
            {props.formula &&
                <div>
                    <p>Formula: {props.formula}</p>
                </div>
            }
            {props.sq &&
                <div>
                    <ol>
                        <li>SQ: { props.sq}</li>
                        <li>AC: { props.critterAc}</li>
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
            {props.minStats && props.maxStats &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>STR</th>
                                <th>PE</th>
                                <th>EN</th>
                                <th>CH</th>
                                <th>IN</th>
                                <th>AG</th>
                                <th>LK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minimum</td>
                                {props.minStats.map((minStat, index) => (
                                    <td key={index}>
                                        {minStat}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td>Maximum</td>
                                {props.maxStats.map((maxStat, index) => (
                                    <td key={index}>
                                        {maxStat}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </aside>
    );
}