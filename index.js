const newname = document.getElementById("name-input");
const newrole = document.getElementById("role-input");
const newava = document.getElementById("ava-input");
const newage = document.getElementById("age-input");
const newloc = document.getElementById("input-location");
const newyear = document.getElementById("year-exp");
const newemail = document.getElementById("mail-input");

const chgname = document.getElementById("new1");
const chgrole = document.getElementById("new2");
const chgava = document.getElementById("new3");
const chgage = document.getElementById("new4");
const chgloc = document.getElementById("new5");
const chgyear = document.getElementById("new6");
const chgemail = document.getElementById("new7");

const btnsubmit = document.getElementById("button3");

function newsubmitdata() {
    document.documentElement.scrollTop = 0;
    new1.innerHTML = newname.value;
    new2.innerHTML = newrole.value;
    new3.innerHTML = newava.value;
    new4.innerHTML = newage.value;
    new5.innerHTML = newloc.value;
    new6.innerHTML = newyear.value;
    new7.innerHTML = newemail.value;
}

document.getElementById("button3").addEventListener("click",newsubmitdata);