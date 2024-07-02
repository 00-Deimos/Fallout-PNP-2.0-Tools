export default function Map () {

    function handleClick() {
        window.print();
    }

    return (
        <main>
            <h2>The World of Fallout</h2>
            <p>The following map displays most of the known world of fallout and the communities that emerged after the Great War. As you can se most of the known Fallout universe is in the California - Nevada area, however this is merely a visual guide and you should feel free to alter the history of your setting in any way you wish.</p>
            <figure> 
					<img src="/images/map/Map_Image_Fallout.png" alt="A map that englobes most of the west coast of the United States, namely the California Nevada area." />
					<figcaption>The Map of the Great Wastland</figcaption>
				</figure>
                <div>
                    <button type="button" name="print" onClick={handleClick}>Print the Wastland Map</button>
                </div>  
        </main>
    );
}