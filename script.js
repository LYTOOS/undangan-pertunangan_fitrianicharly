// === AMBIL NAMA TAMU ===
const params = new URLSearchParams(window.location.search);
const guest =
params.get("to") || params.get("tamu") || "Tamu Undangan";

document.getElementById("guestName").innerText =
decodeURIComponent(guest.replace(/\+/g," "));

// === OPEN INVITATION ===
function openInvite(){
document.getElementById("cover").style.display="none";
document.getElementById("music").play();
}

// === RSVP WHATSAPP ===
document.getElementById("rsvpBtn").onclick=()=>{
saveRSVP(guest);
window.open("https://wa.me/6282261467360","_blank");
};

AOS.init({
once:true,
offset:120,
easing:'ease-out-cubic'
});

