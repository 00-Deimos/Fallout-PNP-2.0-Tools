import { NavLink } from "react-router-dom";

export default function HomeButton ({props}) {

    return (
        <NavLink to={props.url}>
            <div className="homeButtonIcon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="homeButtonName">
                <h4>{props.name}</h4>
            </div>
        </NavLink>
    );
}