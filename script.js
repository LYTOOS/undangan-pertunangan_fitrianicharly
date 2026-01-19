// === AMBIL NAMA TAMU ===
const params = new URLSearchParams(window.location.search);
const guestName =
  params.get("to")
  ? decodeURIComponent(params.get("to").replace(/\+/g," "))
  : "Tamu Undangan";

const guestEl = document.getElementById("guestName");
if(guestEl) guestEl.innerText = guestName;

// === OPEN INVITATION ===
function openInvite(){
document.getElementById("cover").style.display="none";
document.getElementById("cover").classList.add("hide");
document.getElementById("music").play();
}

// RSVP WhatsApp
const rsvpBtn = document.getElementById("rsvpBtn");
if(rsvpBtn){
  rsvpBtn.onclick = () => {
    const phone = "6282261467360"; // GANTI nomor WA kamu
    const text = `
Assalamu’alaikum Warahmatullahi Wabarakatuh

Saya *${guestName}* menyatakan:

☑️ Akan menghadiri acara tunangan
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

AOS.init({
once:true,
offset:120,
easing:'ease-out-cubic'
});
