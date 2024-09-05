// Select all drum buttons
var buttons = document.querySelectorAll(".drum");

// Play sound function with animation
function playSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("Unknown key:", key);
            return; // Exit if no valid key
    }
    audio.play();
    buttonAnimation(key); // Add animation
}

// Add event listeners to drum buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var btn = this.innerHTML;
        playSound(btn);
    });
}

// Key press event listener
document.addEventListener("keypress", function (event) {
    playSound(event.key);
});

// Button animation function
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100); // Animation duration
    }
}

// Drum roll button event listener
var drumRoll = document.querySelector(".drum-roll");
var keys = ["a", "s", "a", "s", "a", "s", "a", "s", "a", "s", "k"];
drumRoll.addEventListener("click", function () {
    for (var i = 0; i < keys.length; i++) {
        drumRollFunc(keys[i], i);
    }
});

// Drum roll function with incremental delay
function drumRollFunc(key, index) {
    setTimeout(function () {
        playSound(key);
    }, 50 * index); // Faster delay
}

// Simple rock beat button event listener
var simpleRock = document.querySelector(".simple-rock-beat");
simpleRock.addEventListener("click", function () {
    playSound('l'); // Kick
    setTimeout(() => playSound('j'), 300); // Snare
    setTimeout(() => playSound('l'), 600); // Kick
    setTimeout(() => playSound('j'), 900); // Snare
    setTimeout(() => playSound('w'), 1200); // Tom-1
    setTimeout(() => playSound('a'), 1450); // Tom-2
    setTimeout(() => playSound('s'), 1700); // Tom-3
    setTimeout(() => playSound('d'), 1950); // Tom-4
});

// Dance beat button event listener
var dance = document.querySelector(".dance");
dance.addEventListener("click", function () {
    playSound('l'); // Kick
    setTimeout(() => playSound('j'), 200); // Snare
    setTimeout(() => playSound('l'), 400); // Kick
    setTimeout(() => playSound('j'), 600); // Snare
    setTimeout(() => playSound('l'), 800); // Kick
    setTimeout(() => playSound('j'), 1000); // Snare
    setTimeout(() => playSound('l'), 1200); // Kick
    setTimeout(() => playSound('k'), 1400); // Crash
});

// Rock groove beat button event listener
var rockGroove = document.querySelector(".rock-groove");
rockGroove.addEventListener("click", function () {
    playSound('l'); // Kick
    setTimeout(() => playSound('j'), 200); // Snare
    setTimeout(() => playSound('l'), 400); // Kick
    setTimeout(() => playSound('l'), 600); // Kick
    setTimeout(() => playSound('j'), 800); // Snare
    setTimeout(() => playSound('w'), 1000); // Tom-1
    setTimeout(() => playSound('a'), 1200); // Tom-2
    setTimeout(() => playSound('s'), 1400); // Tom-3
    setTimeout(() => playSound('d'), 1600); // Tom-4
    setTimeout(() => playSound('l'), 1800); // Kick
    setTimeout(() => playSound('j'), 2000); // Snare
    setTimeout(() => playSound('l'), 2200); // Kick
    setTimeout(() => playSound('k'), 2400); // Crash
});

// Dramatic buildup beat button event listener
var dramatic = document.querySelector(".dramatic-buildup");
dramatic.addEventListener("click", function () {
    playSound('l'); // Kick
    setTimeout(() => playSound('j'), 300); // Snare
    setTimeout(() => playSound('l'), 600); // Kick
    setTimeout(() => playSound('w'), 900); // Tom-1
    setTimeout(() => playSound('a'), 1200); // Tom-2
    setTimeout(() => playSound('s'), 1500); // Tom-3
    setTimeout(() => playSound('d'), 1800); // Tom-4
    setTimeout(() => playSound('l'), 2000); // Kick
    setTimeout(() => playSound('j'), 2200); // Snare
    setTimeout(() => playSound('w'), 2400); // Tom-1
    setTimeout(() => playSound('a'), 2600); // Tom-2
    setTimeout(() => playSound('s'), 2800); // Tom-3
    setTimeout(() => playSound('d'), 3000); // Tom-4
    setTimeout(() => playSound('l'), 3100); // Kick
    setTimeout(() => playSound('j'), 3200); // Snare
    setTimeout(() => playSound('k'), 3300); // Crash
    setTimeout(() => playSound('j'), 3400); // Snare
    setTimeout(() => playSound('l'), 3500); // Kick
    setTimeout(() => playSound('l'), 3600); // Quick Kick
});
