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
    let ep = 0;
    let s = getRandomInt(7);
    season.innerHTML = 'Season ' + s;
    
    if(s == 2) {
      ep = getRandomInt(22);
      episode.innerHTML = 'Episode ' + ep;
    } else {
      ep = getRandomInt(26);
      episode.innerHTML = 'Episode ' + ep;
    }

    fetch('http://stapi.co/api/v1/rest/season?uid=SAMA000000163'+(s+2).toString())
      .then(response => response.json())
      .then(data => {
	let epTitle = '';
	let allEpisodes = data.season.episodes;
	for(let i = 0; i < allEpisodes.length; i++) {
	  if(allEpisodes[i].episodeNumber == ep) {
	    epTitle = allEpisodes[i].title;
	  }
	}
	titleResult.innerHTML = 'Episode title: ' + epTitle;
        }
      );
}, false);

