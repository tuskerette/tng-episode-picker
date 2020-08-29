'use strict';
const requestButton = document.getElementById('request-btn');
const season = document.getElementById('season');
const episode = document.getElementById('episode');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1; 
  // plus one cause season and episode start at index 1
}

requestButton.addEventListener('click', function (event) {
    event.preventDefault();
    let s = getRandomInt(7);
    season.innerHTML = 'Season ' + s;
    
    if(s == 2) {
      episode.innerHTML = 'Episode ' + getRandomInt(22);
    } else {
      episode.innerHTML = 'Episode ' + getRandomInt(26);
    }
}, false);

