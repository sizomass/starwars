let peopleZone = document.querySelector('.people-zone');
let planetsZone = document.querySelector('.planets-zone');
let starshipsZone = document.querySelector('.starships-zone');

//on essaie souvent de passer par le/les parent/s une fois la 
//slection à partir du document faite
let peopleScreen = peopleZone.querySelector('.screen');
let planetsScreen = peopleZone.querySelector('.screen');
let starshipsScreen = peopleZone.querySelector('.screen');

//on créer litéralement un nouvel élément hmlt à partir du js
 
let mySpan = document.createElement('span');
//je lui rajoute du texte
mySpan.innerHTML = 'Je suis un span element';
//je lui assigne une classe
mySpan.classList.add('new-class');

// l'équivalent serait <span classe="new-class"></span>
peopleScreen.appendChild(mySpan);