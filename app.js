'use strict';
let requestButton = document.getElementById('request-btn');
let season = document.getElementById('season');
let episode = document.getElementById('episode');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

document.addEventListener('click', function (event) {
    event.preventDefault();
    let s = getRandomInt(7);
    season.innerHTML = 'Season ' + s;
    
    if(s == 2) {
      episode.innerHTML = 'Episode ' + getRandomInt(22);
    } else {
      episode.innerHTML = 'Episode ' + getRandomInt(26);
    }
}, false);

