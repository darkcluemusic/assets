var myUrl = "https://darkcluemusic.github.io";
var cpr = document.getElementById("myCopyright");
if(!cpr){
    window.location.href = myUrl;
}

function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace(myUrl);
        return false;
    }
}

document.onkeydown = redirectCU;

function redirectKK(e) {
    if (e.which == 3) {
        alert("Eits mau ngapain?!?");
        return false;
    }
}

document.oncontextmenu = redirectKK;

document.addEventListener("keyup", (e) => {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Tidak bole maling gambar ya!");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "p") {
        alert("Bagian ini tidak diperbolehkan untuk mencetak atau mengekspor ke PDF");
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

var unique = "darkcluemusic.github.io";
if (window.location.hostname == unique) {
    // alert("Sukses");
} else {
    alert("Hayo maling skrip ya? Hati-hati ke scam :p");
    window.location.href = myUrl;
}
