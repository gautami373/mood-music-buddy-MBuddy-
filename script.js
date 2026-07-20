let currentMood="";

const songs={

energetic:{
kpop:[
"BTS - Fire",
"Stray Kids - God's Menu",
"BLACKPINK - Shut Down"
],

marathi:[
"Zingaat",
"bring it on",
"Wajle Ki Bara"
],

hindi:[
"chokra jawa re",
"Kala Chashma",
"me ladki beautiful kr gai chill"
]
},

love:{
kpop:[
"BTS - Butterfly",
"IU - Love Poem",
"EXO - Universe"
],

marathi:[
"Man Udhan Varyache",
"Yad Lagla",
"Sairat Zaala Ji"
],

hindi:[
"Kesariya",
"Raataan Lambiyan",
"Tum Hi Ho"
]
},

pink:{
kpop:[
"NewJeans - Hype Boy",
"TWICE - Feel Special",
"IVE - Love Dive"
],

marathi:[
"jara jara",
"Ybhijun gela wara",
"olya sanja veli"
],

hindi:[
"dhadak",
"jab se tere naina",
"Tera Hone Laga Hoon"
]
},

red:{
kpop:[
"bts- black swan",
"BTS - stay with me ",
"NCT 127 - Kick It"
],

marathi:[
"jiv rangala",
"maza hshil na",
"kadhi tu"
],

hindi:[
"deewana deewana",
"tuzhe bhula diya",
"jhol"
]
}

};

function selectMood(mood){

currentMood=mood;

const colors={

energetic:"#d9de43",

love:"#ad84c4",

pink:"#FA91A4",

red:"#941313"

};

document.body.style.background=colors[mood];

document.getElementById("languageBox").innerHTML=`

<h3>Select Language</h3>

<button class="langBtn" onclick="showSongs('kpop')">K-Pop</button>

<button class="langBtn" onclick="showSongs('marathi')">Marathi</button>

<button class="langBtn" onclick="showSongs('hindi')">Hindi</button>

`;

document.getElementById("songs").innerHTML="";

}

function showSongs(language){

let html="<h3 style='margin-top:30px;'>Recommended Songs</h3>";

songs[currentMood][language].forEach(song=>{

html+=`<div class="song">${song}</div>`;

});

document.getElementById("songs").innerHTML=html;

}
