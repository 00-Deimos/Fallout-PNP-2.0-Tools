import { useEffect, useState } from "react";
import PlayerHomeButton from "./PlayerHomeButton";
import OverseerHomeButton from "./OverseerHomeButton";

export default function HomeMain () {

    const [homeButtons, setHomeButtons] = useState ([]);

    useEffect (() => {

        fetch("data/homeButtons.json")
        .then(response => response.json () )
        .then( homeButtons => setHomeButtons(homeButtons));

    }, []);

    const playerHomeButtons = homeButtons.slice(0, 8)
    const overseerHomeButtons = homeButtons.slice(8, 16)

    return (
        <main>
            <div className="playerHomeButtons">
                {
                    playerHomeButtons.map( playerHomeButton => ( 

                        <PlayerHomeButton 
                            key={playerHomeButton.id}
                            props={playerHomeButton}
                        />
                    ))
                }
            </div>
            <div className="overseerHomeButtons">
                {
                    overseerHomeButtons.map( overseerHomeButton => ( 

                        <OverseerHomeButton 
                                key={overseerHomeButton.id}
                                props={overseerHomeButton}
                        />
                    ))
                }
            </div>
            <h3>What is Fallout PNP 2.0?</h3>
            <blockquote>
                <p>"In 2077, the storm of nuclear war reduced most of the planet to cinders. From the ashes of nuclear devastation, a new civilization would struggle to arise. A civilization you will shape. How will you re-shape the world?"</p>
            </blockquote>
            <p>Fallout PNP 2.0 is a tabletop role-playing game created by Jason Mical's using a d100 system  designed to be flexible in its rule structure. The system of character creation and combat are drawn directly from Fallout’s SPECIAL system. Fallout PnP was created for two groups of gamers: those who enjoyed the Fallout computer games and wanted to have a tabletop version for their Saturday night role-playing sessions, and those people who had not played the computer game but were interested or curious in the post-Nuclear role-playing environment.</p>
            <h3>What do I need to play?</h3>
            <p>Each player needs a set of percentile-dice (two ten-sided dice, with one die representing the "ones" column and the other representing the "tens" column of a two-digit number). The Gamemaster needs a set of normal RPG dice as well (d4, d6, d8, d10, d12, d20). The group might want to have a pool of extra 10-sided dice for ease of play and rolling burst attacks all at once, as well. Each player also needs a character sheet (provided in a separate file), a pencil, and a bit of imagination. The Gamemaster needs this book and a little more imagination. A single hex-sheet is helpful, although not absolutely necessary. Every character can provide their own miniature figure to use on the hex sheet, and the Gamemaster may want to think about getting a few generic critter figures and some scenery (trees and ruined buildings, walls, etc), although these are not necessary either. It’s sometimes helpful to have a calculator for the mathematically-challenged, especially when firing guns in burst mode.</p>
            <h3>Disclaimer</h3>
            <p>Fallout PNP 2.0 Tools is intended as an easily-accessible digital reference for the Jason Mical' Fallout PNP 2.0. Unless otherwise stated, the content of this page is licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 License</a></p>
        </main>
    );
}