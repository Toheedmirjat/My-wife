/* =========================
   LOVE COUNTER
========================= */

const startDate =
new Date("2026-04-27T00:00:00");

function updateCounter(){

const now =
new Date();

let difference =
now - startDate;

if(difference < 0){
difference = 0;
}

const totalSeconds =
Math.floor(
difference / 1000
);

const days =
Math.floor(
totalSeconds / 86400
);

const hours =
Math.floor(
(totalSeconds % 86400) / 3600
);

const minutes =
Math.floor(
(totalSeconds % 3600) / 60
);

const seconds =
totalSeconds % 60;


document.getElementById("days")
.textContent =
days;

document.getElementById("hours")
.textContent =
hours;

document.getElementById("minutes")
.textContent =
minutes;

document.getElementById("seconds")
.textContent =
seconds;

}

setInterval(
updateCounter,
1000
);

updateCounter();



/* =========================
   SCROLL
========================= */

function scrollToSection(id){

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});

}



/* =========================
   MUSIC
========================= */

function toggleMusic(){

const music =
document.getElementById("music");

const button =
document.getElementById("musicBtn");


if(music.paused){

music.play()
.then(function(){

button.textContent =
"⏸️ Pause";

})
.catch(function(){

alert(
"music.mp3 file upload karo."
);

});

}else{

music.pause();

button.textContent =
"🎵 Music";

}

}



/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.className =
"floating-heart";

const hearts =
[
"❤️",
"💗",
"💕",
"💖",
"💘",
"💝"
];

heart.textContent =
hearts[
Math.floor(
Math.random()*hearts.length
)
];

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(
18+
Math.random()*30
)+"px";

document.body.appendChild(
heart
);

setTimeout(
function(){
heart.remove();
},
7000
);

}

setInterval(
createHeart,
700
);



/* =========================
   PHOTO LIGHTBOX
========================= */

function openPhoto(src){

document.getElementById(
"lightImg"
).src =
src;

document.getElementById(
"lightbox"
).style.display =
"flex";

}


function closePhoto(){

document.getElementById(
"lightbox"
).style.display =
"none";

}



/* =========================
   HEART GAME
========================= */

let score = 0;

let gameTime = 30;

let gameRunning = false;

let gameTimer;


function startGame(){

if(gameRunning)
return;

score = 0;

gameTime = 30;

gameRunning = true;


document.getElementById(
"score"
).textContent =
score;

document.getElementById(
"gameTime"
).textContent =
gameTime;

document.getElementById(
"gameMessage"
).textContent =
"Catch the hearts! ❤️";


const area =
document.getElementById(
"gameArea"
);

area.innerHTML = "";


gameTimer =
setInterval(function(){

gameTime--;

document.getElementById(
"gameTime"
).textContent =
gameTime;


spawnGameHeart();


if(gameTime <= 0){

clearInterval(
gameTimer
);

gameRunning = false;

area.innerHTML = "";

document.getElementById(
"gameMessage"
).textContent =
"Game Over! Your score: "
+
score
+
" ❤️";

}

},700);


spawnGameHeart();

}



function spawnGameHeart(){

if(!gameRunning)
return;


const heart =
document.createElement("div");

heart.className =
"game-heart";

heart.textContent =
"❤️";

heart.style.left =
Math.random()*90
+
"%";


heart.onclick =
function(){

score++;

document.getElementById(
"score"
).textContent =
score;

heart.remove();

};


document
.getElementById("gameArea")
.appendChild(heart);


setTimeout(
function(){

heart.remove();

},
3500
);

}



/* =========================
   QUIZ
========================= */

const questions = [

{
question:
"Tohi ko Mishu kis naam se pyar se bulati hai?",

answers:
[
"Tohi",
"Mishu",
"King",
"Hero"
],

correct:0
},

{
question:
"Hamari special date kya hai?",

answers:
[
"14 February 2026",
"27 April 2026",
"20 March 2026",
"1 May 2026"
],

correct:1
},

{
question:
"Yeh website kis ke liye hai?",

answers:
[
"Mishu ❤️",
"Everyone",
"Friends",
"Nobody"
],

correct:0
},

{
question:
"Tohi ki favourite person kaun hai?",

answers:
[
"Mishu",
"Batman",
"Nobody",
"Google"
],

correct:0
}

];


let currentQuestion = 0;


function showQuestion(){

const question =
questions[
currentQuestion
];


document.getElementById(
"question"
).textContent =
question.question;


document.getElementById(
"quizResult"
).textContent =
"";


const answers =
document.getElementById(
"answers"
);

answers.innerHTML = "";


question.answers.forEach(
function(answer,index){

const button =
document.createElement("button");

button.className =
"answer";

button.textContent =
answer;


button.onclick =
function(){

if(index === question.correct){

document.getElementById(
"quizResult"
).textContent =
"Correct! 🥹❤️";

}else{

document.getElementById(
"quizResult"
).textContent =
"Wrong answer 😄❤️";

}

};

answers.appendChild(
button
);

});

}


function nextQuestion(){

currentQuestion++;

if(
currentQuestion >=
questions.length
){

currentQuestion = 0;

}

showQuestion();

}


showQuestion();



/* =========================
   MYSTERY GIFTS
========================= */

function gift(number){

const result =
document.getElementById(
"giftResult"
);


if(number === 1){

result.textContent =
"🎁 You unlocked a lifetime supply of Tohi's love ❤️";

}

else if(number === 2){

result.textContent =
"🎀 You unlocked a giant virtual hug from Tohi 🫂";

}

else{

result.textContent =
"💝 You unlocked a promise to keep choosing you ♾️";

}


for(
let i=0;
i<20;
i++
){

setTimeout(
createHeart,
i*70
);

}

}



/* =========================
   SECRET
========================= */

function unlock(){

const password =
document.getElementById(
"password"
).value
.trim()
.toLowerCase();


const result =
document.getElementById(
"secret"
);


if(
password === "mishu" ||
password === "tohi"
){

result.innerHTML =
"🥹❤️ Secret unlocked!<br><br>" +

"Mishu, no matter how many times " +

"I get the chance to choose, " +

"my heart will still say YOU. ♾️";


for(
let i=0;
i<30;
i++
){

setTimeout(
createHeart,
i*60
);

}

}else{

result.textContent =
"Wrong password 👀 Hint: Mishu";

}

}



/* =========================
   WHATSAPP
========================= */

function messageTohi(){

const phone =
"923126718805";


const message =
"Tohi ❤️ I just saw my surprise website 🥹💗 It is so beautiful!";


const url =
"https://wa.me/"
+
phone
+
"?text="
+
encodeURIComponent(
message
);


window.open(
url,
"_blank"
);

}



/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise(){

for(
let i=0;
i<100;
i++
){

setTimeout(
createHeart,
i*40
);

}


document.getElementById(
"finalText"
).innerHTML =

"Mishu ❤️<br><br>" +

"If I had to choose again...<br><br>" +

"<b>" +

"I would still choose you. " +

"Every single time. ♾️"

+

"</b>";

}