"use strict";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// import { tieT, pocketsquareT, appendProfile } from './content-variables';

// google analytics 
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-MH5M3CN6WQ');
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdEcafmWt0TPFWqbN714rwZp7v_IXFfJc",
    authDomain: "style-rules-for-men.firebaseapp.com",
    projectId: "style-rules-for-men",
    storageBucket: "style-rules-for-men.appspot.com",
    messagingSenderId: "593080027609",
    appId: "1:593080027609:web:193ac26d9f603be9cdf1c8",
    measurementId: "G-W5Y6W84K2X"
};


// search functions by searchbar in firebase database 
document.querySelector(".search-input").addEventListener('keyup', (e) => {
    let srchValue = document.querySelector('.search-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    searchPrograms(srchValue)
})

let navBarList = document.querySelectorAll('.navAppended');
// console.log(navBarList.id);

function searchPrograms(value) {

    let filteredPrograms = []
    for (const item of database) {
        let title = item.monster.mname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        if (title.includes(value.toLowerCase())) {
            filteredPrograms.push(item);
        }
    }

    appendNav(filteredPrograms);
}

let clickListener = () => {

    let cbox = document.querySelectorAll(".navAppended");
    cbox.forEach(box => {
        box.addEventListener('click', (e) => {
            appendProfile(e.target.id)

        })
    }
    )
}
clickListener()

let tieT = `
<h1>the Tie</h1>
<h2>Tie types</h2>
<p>
    We can separate the ties into two main groups, the bowl and plain ties. The occasion and clothing will
    decide which one can we choose. The bowl tie exclusively match with tuxedo (every other clothe should be
    avoided). Wear a bow tie exclusively for tuxedos.
    For the blazers and suit jackets you should wear a normal, hand knotted tie.
    <br><br>
    For a men it is important to tie his own tie, newer wear a pre tied tie.

    <!-- két fő csoportra oszthatjuk a nyakkendőket, a csokor és a sima nyekkendőkre. alkalomtól és az öltözékünk
többi
részétől függ hogy melyiket kell válasszuk. Csokornyakkendőt kizárolag smokinghoz vegyünk fel.
Meg a sima nyakkendot zakokhoz blazerhez es vehetjuk fel. -->
</p>
<h2>How to tie a tie</h2>
<p>
    There are many ways to tie a tie, but like most, in this case a
    simplest solution is best. <i>Oriental Knot</i> is not only easy to tie but perfect for all occasions
    and like the real style marks it doesn't go out of style either.

    <!-- Sok féle módon lehet megkötni egy nyakkendőt, viszont mint legtöbbször, ebben az esetben is a
legegyszerubb megoldas a legjobb. Az Oriental Knot nem csak konnyen megkotheto de minden alkalomra
tokeletes es mint az igazi stilusjegyek ez sem megy ki a divatbol. -->

</p>


<div class="steps-container">

    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 1.jpg">
        <p>Start with the backside of the tie facing away from you, the wide end is on the right and the
            small end is on the left. The tip of the small end should rest slightly above your belly-button
            (this will vary depending on your height and the length & thickness of your tie). Move only the
            active (wide) end.</p>

    </div>
    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 2.jpg">
        <p>Wide end under the small end to the left.</p>
    </div>
    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 3.jpg">
        <p>Across the small end to the right.</p>
    </div>
    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 4.jpg">
        <p>Up into the neck loop from underneath.</p>
    </div>
    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 5.jpg">
        <p>Down through the loop you've just made in the front.</p>
    </div>
    <div class="step-card">
        <img alt="how to tie a tie" class="steps-img" src="img/tie/tie-knot 6.jpg">
        <p>Pull down on the wide end to tighten. Slide the knot up to adjust.</p>
    </div>

</div>


<h2>Tie knot types</h2>
<img class="img-wide" alt="tie knot types" src="img/tie/tie knot types.jpg">
<h2>Tie Rules</h2>
<ul>
    <li>The tie's width has to be the same as the shirt's collar.</li>
    <!-- <li>A nyakkendő ugyanolyan széles legyen, mint a gallér.</li> -->
    <li>The tie's width has to be just as long it touches the belt line.</li>
    <!-- <li>A nyakkendő pont az öv vonaláig érjen.</li> -->
    <li>The tie's color has to be darker than the shirt.</li>
    <!-- <li>A nyakendő mindig legyen sötétebb az ingnél </li> -->
    <li>The tie's pattern or colour can't be the same as the pocket square.</li>
    <!-- <li>a nyakkendő mintaja sohasem egyezik az ing vagy a zsebkendő mintájával- </li> -->
    <li>The tie's classic colours are black, navy blue and red.</li>
    <li>If you want to wear a patterned tie, choose one with a small, light coloured patterns.</li>
    <li>If you use a tiebar it should go between the third and fourth buttons of your dress shirt. </li>
    <li>Never wear a pre tied tie.</li>
    <li>Never wear a shiny tie.</li>
</ul>



`

let pocketsquareT = `
<h1>The pocket Square</h1>
<h2>pocket Square occasions</h2>
<p>
    Don’t be afraid to wear a suit pocket square everywhere! If you’re serious about style, consider wearing
    a pocket square for every social situation. Wear a square and tie to all formal affairs, and opt for a
    blazer and square (sans tie) for your more casual outings.
    <br><br>
    For a men it is important to wear the right folded pocket square based on occasion.


</p>
<h2>How to fold a pocket Square</h2>
<p>
    Pocket squares can be folded in different ways, but we can separate them into two main group:
    elegant and casual. The elegants are more strict and sharp while the casuals are more curly and free.
    <br> For offical event we can wear theone <i>TV folded</i> and for unrestricted event the <i>one
        point</i> is the best choice,

</p>

<h3>TV Fold Pocket Square</h3>
<div class="steps-container">


    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/pocket-s 1.jpg">
        <p>Lay pocket square flat.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/pocket-s 2.jpg">
        <p>Fold in half.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/pocket-s 3.jpg">
        <p>Again fold almost in half in the other direction to the width of the breast pocket.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/pocket-s 4.jpg">
        <p>Place square in breast pocket, allowing approximately ¼”-½” to show.</p>
    </div>


</div>
<h3>One Point Pocket Square</h3>
<div class="steps-container">


    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/point pocket 1.jpg">
        <p>Lay pocket square flat.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/point pocket 2.jpg">
        <p>Fold in half diagonally.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/point pocket 3.jpg">
        <p>Then, fold the left side of the triangle one-third of the way in.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/point pocket 4.jpg">
        <p>Fold right side of the triangle one-third of the way in. A point should now have formed at the
            top.</p>
    </div>
    <div class="step-card">
        <img alt="how to fold a pocket square" class="steps-img" src="img/pocket square/point pocket 5.jpg">
        <p>Place in pocket with point facing up. About an inch or so is sufficient.</p>
    </div>


</div>


<h2>pocket square folding types</h2>
<img class="img-wide" alt="pocket square types" src="img/pocket square/pocket square types.jpg">
<h2>Pocket Square Rules</h2>
<ul>

    <li>The pocket square's pattern or colour can't be the same as the tie.</li>
    <li>The folding style has to match with the clothing style.</li>
    <li>Dont use reversible pocket square.</li>



    <li>White goes with any colored suit. </li>


    <li>Match your fold to the occasion. For formal occasions stick to the flat fold or one or two point
        folds, for more casual occasions use some more flare with the classic puff fold or one of the more
        flamboyant fold as set out below.</li>


</ul>
`

let socksT = `

<h1>the Socks</h1>
<h2>The role of socks in clothing</h2>
<p>
    Nowadays wearing colorful socks are popular, but if you want to get
    dressed elegant, you have to avoid it. Socks are the less emphatic clothes,
    nonetheless, there are some rules in connection with them, that you need to be aware of. The
    most important part is the relation between socks and the tie. It can be so stylish, if they
    have the same colour, but you have to pay attention not to "overdo it". The tie is much more
    important than socks, because the tie takes the first impression. If you want to dress up in a
    funnier way and wear something more striking, bring something new in your look with a tie, not
    with your socks, which always have to be more restrained.
    <br><br>
</p>
<h2>Sock types</h2>
<img class="img-wide" alt="socks types" src="img/socks/socks types.jpg">
<h2>Sock Rules</h2>
<ul>
    <li>Never wear white socks.</li>
    <li>Always wear a solid colors.</li>
    <li>if you want to wear patterned socks choose solid patterns on black base.</li>
    <li>Black socks always a good decision.</li>
    <li>Always wear long sock which cover your leg even when you cross your legs.</li>
    <li>Dont wear thick socks.</li>
    <li>Your socks have to match with the pants/trousers, not your shoes!</li>

    <li>If you wear a bright coloured tie, wear a solid coloured socks.</li>
    <li>The socks' colour can be the same as the tie.</li>
</ul>

`

let watchT = `

<h1>the watch</h1>
<h2>Choose the right watch to match occasion</h2>
<p>

    <b>Black tie / White Tie </b> For formal events, simplicity is critical. Historically – it would be
    considered
    rude to refer to your watch at such an event. A simple dress watch in a classic style and black leather
    band will mute any objections from conservative observers.<br><br>
    <b>Business dress </b> – For business – go with a classic and straightforward styled gold or silver
    watch with a
    thin dial and limited or no complications. A dark conservative suit pairs best with a classic dress
    watch or a diver watch with a leather strap.<br><br>
    <b>Business Casual</b> A light-colored suit with no necktie complements a high-end Chrono, pilot, or
    field
    watch.<br><br>
    <b>Casual</b> – If a watch has a metal band, it is considered less formal. A metal band is generally
    suitable
    for casual wear, while a leather band is suitable for any purpose. You can wear any of the watch
    categories with a combination of jeans, a chambray shirt, and dress boots. You should only wear digital
    watches with casual clothes or workout attire.<br>
    <br><a class="src" href="https://www.realmenrealstyle.com/match-watch-to-outfit/">source</a>
</p>
<h2>Watch types</h2>
<img class="img-wide" alt="socks types" src="img/watch/watch types.jpg">
<h2>watch Rules</h2>
<ul>
    <li>The shape of the watch is round, not square or triangular.</li>
    <li>Take care about the colors. With light suit wear a light watch, with dark suit wear dark watch.</li>
    <li>Know your wrist size, and wear the right sized watch.</li>
    <li>If you wear leather belt watch, it can (and should) be the same colour as your belt and shoes.</li>
    <li>Wear a solid watch, it should't take the attention, avoid big bright gems.</li>
    <li>Wear Your Watch On The Non-Dominant Hand.</li>
    <li>Never wear your watch over your shirt</li>
    <li>Wear the right watch depends on occasion.</li>

    <li class="secondary-rule">Don't look at your watch every minute.</li>

</ul>

`
// SPA selected data page to the dom 
function appendProfile(chosenItemName) {
    console.log("lig");
    document.querySelector(".content-container").innerHTML = eval(chosenItemName)

    // scroll to top 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
















