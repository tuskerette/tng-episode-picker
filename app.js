'use strict';
const requestButton = document.getElementById('request-btn');
const season = document.getElementById('season');
const episode = document.getElementById('episode');
const titleResult = document.getElementById('title-result');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1; 
  // plus one cause season and episode start at index 1
}

requestButton.addEventListener('click', function (event) {
    titleResult.removeAttribute('hidden');
    event.preventDefault();
    let ep;
    let s = getRandomInt(7);
    season.innerHTML = 'Season ' + s;
    
    if(s == 2) {
      // season 2 is the only one that has 22 episodes instead of 26	    
      ep = getRandomInt(22);
      episode.innerHTML = 'Episode ' + ep;
    } else {
      ep = getRandomInt(26);
      episode.innerHTML = 'Episode ' + ep;
    }

    fetch('http://stapi.co/api/v1/rest/season?uid=SAMA000000163'+(s+2).toString())
      // (s+2).toString() is because the API works by querying by uid, sequential, I looked it up on their API docs
      // the scenario is easy enough to allow for these assumptions
      .then(response => response.json())
      .then(data => {
	let allEpisodes = data.season.episodes;
	const episodeResult = allEpisodes.find( ({ episodeNumber }) => episodeNumber === ep );
	titleResult.innerHTML = 'Episode title: ' + episodeResult.title;
	}
      );
}, false);

