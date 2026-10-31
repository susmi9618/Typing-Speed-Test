
const sentences = [
    "Learning programming improves problem solving skills.",
    "Practice makes a person perfect in every field.",
    "Technology plays an important role in our daily life.",
    "Consistency and hard work lead to success."
];

const input = document.getElementById("input");
const sentenceElement = document.getElementById("sentence");

let target = "";
let timeLeft = 60;
let elapsed = 0;
let timer = null;
let running = false;

function chooseSentence() {
    target = sentences[
        Math.floor(Math.random() * sentences.length)
    ];

    sentenceElement.textContent = target;
}

function startTest() {
    clearInterval(timer);

    timeLeft = 60;
    elapsed = 0;
    running = false;

    document.getElementById("time").textContent = 60;
    document.getElementById("wpm").textContent = 0;
    document.getElementById("accuracy").textContent = "100%";

    document.getElementById("result").textContent = "";

    chooseSentence();

    input.value = "";
    input.disabled = false;
    input.focus();

    document.getElementById("start").disabled = true;
}

function updateStats() {
    const typed = input.value;

    const correct = countCorrectCharacters(target, typed);

    document.getElementById("wpm").textContent =
        calculateWPM(correct, elapsed);

    document.getElementById("accuracy").textContent =
        calculateAccuracy(correct, typed.length) + "%";
}

function finishTest() {
    clearInterval(timer);
    running = false;
    input.disabled = true;

    document.getElementById("result").textContent =
        "Test completed! Your speed is " +
        document.getElementById("wpm").textContent + " WPM.";

    document.getElementById("start").disabled = false;
}

function tick() {
    timeLeft--;
    elapsed++;

    document.getElementById("time").textContent = timeLeft;

    updateStats();

    if (timeLeft <= 0 || input.value === target) {
        finishTest();
    }
}

input.addEventListener("input", () => {
    if (!running && input.value.length > 0) {
        running = true;
        timer = setInterval(tick, 1000);
    }

    updateStats();
});

document.getElementById("start").addEventListener("click", startTest);

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);

    running = false;
    timeLeft = 60;
    elapsed = 0;

    input.value = "";
    input.disabled = true;

    document.getElementById("time").textContent = 60;
    document.getElementById("wpm").textContent = 0;
    document.getElementById("accuracy").textContent = "100%";
    document.getElementById("result").textContent = "";

    chooseSentence();

    document.getElementById("start").disabled = false;
});

chooseSentence();
