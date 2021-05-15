var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

function getName(){
    var firstName = prompt("Adınızı giriniz:", "Adınız");
    document.getElementById("userFirstName").innerText = firstName;
}

function getTimeAndDay() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var day = now.getDay();

    var fullTime = fixedTime(hour) + ":" + fixedTime(minute) + ":" + fixedTime(second);

    document.getElementById("timeAndDay").innerText = fullTime + " - " + days[day];

    setTimeout(getTimeAndDay, 1000);
}

function fixedTime(s) {
    return s < 10 ? "0" + s : s;
}

getName();
getTimeAndDay();