export default function OverseerHomeButton ({props}) {

    return (

        <div className="homeButton">
            <div className="homeButtonIcon">
                <img src={props.icon} />
            </div>
            <div className="homeButtonName">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
}