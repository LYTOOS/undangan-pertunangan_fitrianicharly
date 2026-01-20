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

function toggleMusic(){
  if(music.paused){
    music.play();
    musicBtn.classList.remove("paused");
  }else{
    music.pause();
    musicBtn.classList.add("paused");
  }
}

// =============================
// OPEN INVITE
// =============================
function openInvite(){
  const cover = document.getElementById("cover");
  const invite = document.querySelector(".invite");

  // tampilkan undangan
  invite.style.display = "block";

  // unlock scroll
  document.body.classList.remove("locked");

  // animasi tutup cover
  cover.classList.add("hide");

  // refresh AOS setelah DOM tampil
  setTimeout(()=>{
    AOS.refreshHard();
  },300);

  // hapus cover total
  setTimeout(()=>{
    cover.style.display = "none";
  },1400);

  // musik
  if(music){
    music.volume = 0.7;
    music.play().catch(()=>{});
  }

  if(musicBtn){
    musicBtn.classList.add("active");
  }
}

// =============================
// RSVP WHATSAPP
// =============================
const rsvpBtn = document.getElementById("rsvpBtn");
if(rsvpBtn){
  rsvpBtn.onclick = ()=>{
    const phone = "6282261467360"; // GANTI NOMOR
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
