import { useEffect, useState } from "react";
import TableBody from "../UI/TableBody";
import TableHead from "../UI/TableHead";

export default function Books () {

    const [books, setBooks] = useState([]);
    const localTableHeaders = ["Cover", "Name", "Type", "Publish"];

    useEffect (() => {
        fetch("/data/pages_data/books.json")
            .then(response => response.json () )
            .then( books => {
                setBooks(books);
            });
    }, []);

    return (
        <main>
           <h2>Books</h2>
           <p>Fallout Pen and Paper 2.0, also know as "Fallout PnP 2.0", is a tabletop role-playing game (RPG) based on the Fallout video game series. This version is a fan-made project that aims to adapt the world and mechanics of Fallout into a tabletop RPG format, similar to traditional games like Dungeons & Dragons. As such all you need to play is a free copy of the "Fallout PnP 2.0" pdf.</p>
           <p>Additionally Chirs Avellone, the game designer who contributed to Fallout 2, Van Buren, and Fallout: New Vegas, published The Fallout Bible, a collection of statements containing background material for the first Fallout games, that can be really helpfull to get the older lore of the game and use it on your ttrpg secion.</p>
           <table>
                <thead>
                    <tr>
                        { localTableHeaders.map( (title,index) => <TableHead key={index} props={title} /> )}
                    </tr>
                </thead>
                <tbody>
                    { books.map( book => (
                        <tr key={book.id}>
                            <TableBody props={book}/>
                        </tr>
                    )) } 
                </tbody>
           </table>
        </main>
    );
}