// Track current state
let isLightOn = true;

function toggleLights() {

    // Toggle background and text classes
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
    document.body.classList.toggle("bg-slate-900");
    document.body.classList.toggle("text-white");

    // Change button text based on state
    let button = document.getElementById("toggleBtn");

    if (isLightOn) {
        button.innerText = "Turn On Lights";
        isLightOn = false;
    } else {
        button.innerText = "Turn Off Lights";
        isLightOn = true;
    }
}