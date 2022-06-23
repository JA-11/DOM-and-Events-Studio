// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(event) {
    const takeoffButton = document.getElementById("takeoff");
    const paragraph = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    let currentHeight = 0;

    const downButton = document.getElementById("down");
    const upButton = document.getElementById("up");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    takeoffButton.addEventListener("click", function(event) {
        const ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(ready) {
            paragraph.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            currentHeight += 10000;
            shuttleHeight.innerHTML = currentHeight;
        }
    });

    landingButton.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    missionAbortButton.addEventListener("click", function(event) {
        confirm("Confirm that you want to abort the mission.");
        paragraph.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "red";
        shuttleHeight.innerHTML = 0;
    });

    downButton.addEventListener("click", function(event) {
        currentHeight -= 10000;
        shuttleHeight.innerHTML = currentHeight;
        rocket.style.top = `${rocket.offsetTop + 10}px`;
    });

    upButton.addEventListener("click", function(event) {
        currentHeight += 10000;
        shuttleHeight.innerHTML = currentHeight;
        rocket.style.top = `${rocket.offsetTop - 10}px`;
    });

    leftButton.addEventListener("click", function(event) {
        rocket.style.left = `${rocket.offsetLeft - 10}px`;
    });

    rightButton.addEventListener("click", function(event) {
        rocket.style.left = `${rocket.offsetLeft + 10}px`;
    });
}