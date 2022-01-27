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

// // search functions by searchbar in firebase database 
// document.querySelector(".search-input").addEventListener('keyup', (e) => {
//   let srchValue = document.querySelector('.search-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
//   searchPrograms(srchValue)
// })

// function searchPrograms(value) {

//   let filteredPrograms = []
//   for (const item of database) {
//     let title = item.monster.mname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

//     if (title.includes(value.toLowerCase())) {
//       filteredPrograms.push(item);
//     }
//   }

//   appendNav(filteredPrograms);
// }
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
<h3>izebigyo</h3>

`

// SPA selected data page to the dom 
function appendProfile(chosenItemName) {

  document.querySelector(".content-container").innerHTML = eval(chosenItemName)


}














