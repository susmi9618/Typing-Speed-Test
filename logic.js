
function countCorrectCharacters(target, typed) {
    let correct = 0;

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) {
            correct++;
        }
    }

    return correct;
}

function calculateWPM(correct, seconds) {
    if (seconds <= 0) return 0;

    return Math.round((correct / 5) / (seconds / 60));
}

function calculateAccuracy(correct, total) {
    if (total === 0) return 100;

    return Math.round((correct / total) * 100);
}

if (typeof module !== "undefined") {
    module.exports = {
        countCorrectCharacters,
        calculateWPM,
        calculateAccuracy
    };
}
