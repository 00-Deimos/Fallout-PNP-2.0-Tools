import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Glossary () {

    const [terms, setTerms] = useState([]);

    useEffect (() => {
        fetch("/data/pages_data/glossaryTerms.json")
            .then(response => response.json () )
            .then( terms => {
                setTerms(terms);
            });
    }, []);

    return (
        <main>
            <h2>Glossary of Terms and Abbreviations in the Fallout Universe</h2>
            <p>The following table will present you with all the terms and abbreviations that you need to know to better understand the game.</p>
            <h3>Terms and Abbreviations</h3>
            <dl>
                {terms.map(term => (
                    <span key={term.id}>
                        <dt>
                            {term.link !== '' ? (
                                <NavLink to={term.link}>{term.name}</NavLink>
                            ) :
                            (
                                <span>{term.name}</span>
                            )}  
                        </dt>
                        <dd>{term.definition}</dd>  
                    </span>
                ))}        
            </dl>
        </main>
    );
}