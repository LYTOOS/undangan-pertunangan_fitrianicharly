// =============================
// GUEST NAME FROM URL
// =============================
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to")
  ? decodeURIComponent(params.get("to").replace(/\+/g," "))
  : "Tamu Undangan";

const guestEl = document.getElementById("guestName");
if (guestEl) guestEl.innerText = guestName;


// =============================
// MUSIC CONTROL
// =============================
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

function toggleMusic(){
  if(!music) return;

  if(music.paused){
    music.play();
    if(musicIcon) musicIcon.innerHTML="❚❚";
  }else{
    music.pause();
    if(musicIcon) musicIcon.innerHTML="▶";
  }
}


// =============================
// OPEN INVITE (FIXED)
// =============================
function openInvite(){

  document.body.classList.remove("locked");

  const cover  = document.getElementById("cover");
  const invite = document.querySelector(".invite");

  cover.classList.add("hide");

  setTimeout(()=>{
    cover.style.display="none";
    invite.style.display="block";
    invite.classList.add("show");

    // aktifkan semua animasi reveal
    document.querySelectorAll('.reveal').forEach(el=>{
      el.classList.add('show');
    });

  },800);

  if(music){
    music.volume = 0.7;
    music.play().catch(()=>{});
  }

  if(musicBtn){
    musicBtn.classList.add("show","active");
  }
}

  if(typeof AOS !== "undefined"){
    AOS.refresh();
  }
}

// =============================
// RSVP WHATSAPP
// =============================
const rsvpBtn = document.getElementById("rsvpBtn");
if(rsvpBtn){
  rsvpBtn.onclick = ()=>{
    const phone = "6282261467360";
    const text = `
Assalamu’alaikum Warahmatullahi Wabarakatuh

Saya *${guestName}* menyatakan
bersedia menghadiri acara tunangan:

Fitriani & Charly Handani
🗓 Minggu, 15 Februari 2026

Terima kasih 🙏
`.trim();

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };
}

// =============================
// COUNTDOWN 15 FEBRUARI 2026
// =============================
document.addEventListener("DOMContentLoaded",()=>{

  const target = new Date("2026-02-15T00:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const gap = target - now;

  if(gap < 0) return;

  document.getElementById("d").innerText =
    Math.floor(gap / (1000*60*60*24));
  document.getElementById("h").innerText =
    Math.floor((gap / (1000*60*60)) % 24);
  document.getElementById("m").innerText =
    Math.floor((gap / (1000*60)) % 60);
  document.getElementById("s").innerText =
    Math.floor((gap / 1000) % 60);
},1000);
});
