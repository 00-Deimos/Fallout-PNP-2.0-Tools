export default function Factions () {

    return (
        <main>
            <h2>Factions</h2>
            <p>A faction is a grouping of like-minded individuals, united in a common goal or set of common goals. The individuals band together as a way of achieving these goals and advancing their agenda. </p>
            <ul>
                <li>Factions
                    <ul>
                        <li><a href="#cl">Caesar Legion</a></li>
                        <li><a href="#ncr">New California Republic</a></li>
                        <li><a href="#bos">Brotherhood of Steel</a></li>
                        <li><a href="#enclave">Enclave</a></li>
                    </ul>
                </li>
            </ul>
            <section id="cl">
                <h3>Caesar's Legion</h3>
                <blockquote>
                    <p>"My Legion obeys me, even unto death. Why? Because they live to serve the greater good, and they know of no alternatives."</p>
                    <footer>— Caesar</footer>
                    <audio controls>
                        <source src="/audio/FNV_Caesar_MyLegionObeysMe.ogg" type="audio/ogg" /> 
                    </audio>  
                </blockquote>
                <figure>
					<img src="images/factions/Caesar_Legion_Flag.png" alt="A red flag with a golden bull." />
					<figcaption>The Flag of Caesar's Legion</figcaption>
				</figure>
                <p>Caesar's Legion is a faction based on large scale slavery and tribal dominance. Founded in <time datetime="2247">2247</time> by Edward Sallow and Joshua Graham, the Legion models itself after the ancient Roman Empire to create a unifying identity. As of <time datetime="2281">2281</time>, the Legion operates east of the Colorado River and the Grand Canyon, primarily in what was once Arizona, New Mexico, Utah, and Colorado.</p>
            </section>
            <section id="ncr">
                <h3>New California Republic</h3>
                <blockquote>
                    <p>"Today, you are the waves of the Pacific, pushing ever eastward. You are the sequoias rising from the Sierra Nevadas, defiant and enduring."</p>
                    <footer>— President Kimball</footer>
                </blockquote>
                <figure>
					<img src="images/factions/NCR_Flag.png" alt="A white flag with a red strip at the end and a brown two-headed bear at the center." />
					<figcaption>The Flag of the NCR</figcaption>
				</figure>
                <p>The NCR is an entity spanning portions of the American southwest, dedicated to values of democracy and the rule of law. The flag of the New California Republic features a bear with two heads, based on a pre-War symbol. The nation was founded by individuals who emerged from a vault, starting a small settlement named Shady Sands. The leaders of Shady Sands, Tandi and her father Aradesh, first proposed the idea of the Republic, and three years after, five states were combined into the NCR by vote. The states include Shady, Los Angeles, Maxson, the Hub, and Dayglow, consisting of a population of 700,000.</p>
            </section>
            <section id="bos">
                <h3>Brotherhood of Steel</h3>
                <blockquote>
                    <p>"The only salvation this tortured planet and its people have. Without us, humanity is sure to perish."</p>
                    <footer>— Vree</footer> 
                </blockquote>
                <figure>
					<img src="images/factions/BOS_Flag.png" alt="A icon with a sword placed vertically at the center. Around the sword, there is several gears of machinery and a pair of wings." />
					<figcaption>The flag of the Brotherhood of Steel</figcaption>
				</figure>
                <p>The Brotherhood of Steel, abbreviated to BoS or BOS, is a paramilitary organization devoted to the preservation of technology and knowledge, the chapters of which operate across the post-War United States. Several chapters exist, utilizing similar logos to mark their equipment and territory. The logo is comprised of gears, representing their engineering knowledge, a sword representing their will to defend themselves, and wings representing uplifting hope.</p>
            </section>
            <section id="enclave">
                <h3>Enclave</h3>
                <blockquote>
                    <p>"So, as your President, I am the voice, I am the heart and soul of the Enclave. That is to say, I am the voice, heart, and soul... of America."</p>
                    <footer>— President John Henry Eden</footer>
                </blockquote>
                <figure>
					<img src="images/factions/Enclave_Flag.png" alt="A icon with a capital e at the center surrounded by a circle of starts." />
					<figcaption>The flag of the Enclave</figcaption>
				</figure>
                <p>The Enclave was comprised of presidents, members of the Joint Chiefs, and prize-winning scientists. Research initiatives of the entity included those centered on power armor, rocketry, and energy weapon prototypes. During the Resource Wars, members of the Enclave made contingency plans in case of nuclear war, included securing installations such as the presidential oil rig and congressional bunker. In <time datetime="2077-03">March 2077</time>, the president of the United States retreated to the oil rig, resulting in news outlets such as the Boston Bugle reporting the action "giving credence to the long-running rumors of a secret, militarized shadow government, known as the Enclave."</p>
            </section>
        </main>
    );
}