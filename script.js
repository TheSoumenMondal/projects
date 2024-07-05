let makeBubble = () => {
    let clutter = "";
    for (let i = 0; i < 192; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="elements">${rn}</div>`;
    }
    document.querySelector("#pannelDown").innerHTML = clutter;
}

let timer = 60;
let timerInterval;

function runtimer() {
    timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerVal").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#pannelDown").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

let newhit = 0;
function getHitVal() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = newhit;
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector(".score").textContent = score;
}

document.querySelector("#pannelDown").addEventListener("click", function (dets) {
    let clickednum = Number(dets.target.textContent);
    if (clickednum === newhit) {
        increaseScore();
        makeBubble();
        getHitVal();
    }
});

document.querySelector("#resetButton").addEventListener("click", function () {
    clearInterval(timerInterval);
    timer = 60;
    score = 0;
    document.querySelector(".timerVal").textContent = timer;
    document.querySelector(".score").textContent = score;
    makeBubble();
    getHitVal();
    runtimer();
});

document.querySelector("#readyButton").addEventListener("click", function () {
    document.querySelector("#popup").style.display = "none";
    document.querySelector("#pannel").classList.remove("hidden");
    makeBubble();
    getHitVal();
    runtimer();
});
