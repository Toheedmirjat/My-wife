const intro=document.getElementById("intro");
document.getElementById("startBtn").onclick=()=>{
  intro.style.animation="appear .7s reverse forwards";
  setTimeout(()=>{intro.remove();document.getElementById("main").classList.remove("hidden");burst(18)},600);
};

function nextBirthday(){
 const n=new Date(); let y=n.getFullYear();
 let t=new Date(y,9,20,0,0,0);
 if(n>new Date(y,9,20,23,59,59))t=new Date(y+1,9,20,0,0,0);
 return t;
}
function clock(){
 const n=new Date(), t=nextBirthday();
 if(n.getMonth()===9&&n.getDate()===20){
  document.getElementById("countdown").innerHTML="<div style='grid-column:1/-1'><b>🎉 TODAY IS YOUR DAY! 🎉</b><small>Happy Birthday Mishu ❤️</small></div>";return;
 }
 let x=t-n,d=Math.floor(x/86400000),h=Math.floor(x/3600000)%24,m=Math.floor(x/60000)%60,s=Math.floor(x/1000)%60;
 document.getElementById("countdown").innerHTML=
 `<div><b>${String(d).padStart(2,"0")}</b><small>Days</small></div><div><b>${String(h).padStart(2,"0")}</b><small>Hours</small></div><div><b>${String(m).padStart(2,"0")}</b><small>Minutes</small></div><div><b>${String(s).padStart(2,"0")}</b><small>Seconds</small></div>`;
}
clock();setInterval(clock,1000);

const gift=document.getElementById("gift"),giftMessage=document.getElementById("giftMessage");
document.getElementById("giftBtn").onclick=()=>{
 gift.classList.add("open"); gift.textContent="🎁✨";
 setTimeout(()=>giftMessage.classList.add("show"),350);
 burst(25);
};

document.getElementById("letterBtn").onclick=()=>{
 document.getElementById("letter").classList.toggle("hidden");
 if(!document.getElementById("letter").classList.contains("hidden")){
  document.getElementById("letter").scrollIntoView({behavior:"smooth",block:"center"});burst(12);
 }
};

const music=document.getElementById("music"), musicBtn=document.getElementById("musicBtn");
musicBtn.onclick=async()=>{
 try{
  if(music.paused){await music.play();musicBtn.textContent="⏸ Pause Birthday Music"}
  else{music.pause();musicBtn.textContent="▶ Play Birthday Music"}
 }catch(e){musicBtn.textContent="🎵 Add music.mp3 first"}
};

document.getElementById("heartBtn").onclick=()=>{
 document.getElementById("finalText").classList.remove("hidden");
 burst(80);confetti(80);
 document.getElementById("finalText").scrollIntoView({behavior:"smooth",block:"center"});
};

function heart(){
 const e=document.createElement("div");e.className="floating";
 e.textContent=["❤️","💗","💕","✨","🌸"][Math.floor(Math.random()*5)];
 e.style.left=Math.random()*100+"vw";e.style.fontSize=14+Math.random()*22+"px";
 e.style.animationDuration=5+Math.random()*5+"s";document.body.appendChild(e);
 setTimeout(()=>e.remove(),11000);
}
setInterval(heart,1000);

function burst(n){
 for(let i=0;i<n;i++)setTimeout(heart,i*35);
}
function confetti(n){
 for(let i=0;i<n;i++){
  const e=document.createElement("div");e.className="confetti";
  e.textContent=["💖","✨","🌸","🎉","💕"][Math.floor(Math.random()*5)];
  e.style.left=Math.random()*100+"vw";e.style.fontSize=12+Math.random()*20+"px";
  e.style.animationDuration=2+Math.random()*3+"s";document.body.appendChild(e);
  setTimeout(()=>e.remove(),6000);
 }
}