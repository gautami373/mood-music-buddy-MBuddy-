const songs = {
  happy: [
    "Happy - Pharrell Williams",
    "Permission to Dance - BTS",
    "Shape of You - Ed Sheeran"
  ],

  sad: [
    "Someone Like You - Adele",
    "Let Her Go - Passenger",
    "Blue & Grey - BTS"
  ],

  relaxed: [
    "Spring Day - BTS",
    "Perfect - Ed Sheeran",
    "Night Changes - One Direction"
  ],

  energetic: [
    "Believer - Imagine Dragons",
    "Mic Drop - BTS",
    "Levitating - Dua Lipa"
  ]
};

function showSongs(mood){

  let result = document.getElementById("result");

  let songList = `<h2>${mood.toUpperCase()} Songs</h2><ul>`;

  songs[mood].forEach(song => {
    songList += `<li>${song}</li>`;
  });

  songList += "</ul>";

  result.innerHTML = songList;
}