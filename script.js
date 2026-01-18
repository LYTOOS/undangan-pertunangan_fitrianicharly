const params=new URLSearchParams(location.search);
const guest=params.get("tamu")||"Tamu Undangan";
document.getElementById("guestName").innerText=guest;

function openInvite(){
document.getElementById("cover").style.display="none";
document.getElementById("music").play();
}

document.getElementById("rsvpBtn").onclick=()=>{
saveRSVP(guest);
window.open("https://wa.me/6282261467360");
};
