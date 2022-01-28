"use strict";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";


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

// google analytics initialize 
// window.dataLayer = window.dataLayer || [];
// function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());

// gtag('config', 'G-LV81HRN89M');



// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const rulesRef = db.collection("rules");

// let database = [];
// rulesRef.onSnapshot(function (snapshotData) {

//   snapshotData.forEach(doc => {
//     let dt = doc.data();
//     dt.id = doc.id;
//     database.push(dt);

//   }
//   );
//   // appendNav(database)
// });

// search functions by searchbar in firebase database 
document.querySelector(".search-input").addEventListener('keyup', (e) => {
  let srchValue = document.querySelector('.search-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  searchPrograms(srchValue)
})

let navBarList = document.querySelectorAll('.navAppended').value;
console.log(navBarList);

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
// // append the creatures name list on the list bar  
// function appendNav(items) {
//   let temlplete = ""

//   for (let item of items) {
//     temlplete += `<label for="mobileicon"><p class="navAppended">${item.title}</p></label> `

//   }

//   document.querySelector(".item-title-container").innerHTML = temlplete
//   clickListener()

// }

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
    We can separate the ties into two main groups, the bowl and plain ties. The Occasion and clothing will
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
        <img class="steps-img" src="img/tie-knot 1.jpg">
        <p>Start with the backside of the tie facing away from you, the wide end is on the right and the
            small end is on the left. The tip of the small end should rest slightly above your belly-button
            (this will vary depending on your height and the length & thickness of your tie). Move only the
            active (wide) end.</p>
    </div>
    <div class="step-card">
        <img class="steps-img" src="img/tie-knot 2.jpg">
        <p>Wide end under the small end to the left.</p>
    </div>
    <div class="step-card">
        <img class="steps-img" src="img/tie-knot 3.jpg">
        <p>Across the small end to the right.</p>
    </div>
    <div class="step-card">
        <img class="steps-img" src="img/tie-knot 4.jpg">
        <p>Up into the neck loop from underneath.</p>
    </div>
    <div class="step-card">
        <img class="steps-img" src="img/tie-knot 5.jpg">
        <p>Down through the loop you've just made in the front.</p>
    </div>
    <div class="step-card">
        <img class="steps-img" src="img/tie-knot 6.jpg">
        <p>Pull down on the wide end to tighten. Slide the knot up to adjust.</p>
    </div>

</div>


<h2>Tie knot types</h2>
<img class="img-med" src="img/Tie-Knots.jpg">
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

// SPA selected data page to the dom 
function appendProfile(chosenItemName) {

  document.querySelector(".content-container").innerHTML = eval(chosenItemName)


}














