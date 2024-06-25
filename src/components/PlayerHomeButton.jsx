export default function PlayerHomeButton ({props}) {

    return (

        <div className="homeButton">
            <div className="homeButtonIcon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="homeButtonName">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
}