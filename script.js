// Fake Virus Warning
function fakeVirus() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
}

// Valentine Response (Yes or No)
function valentineResponse(isYes) {
    if (isYes) {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeKapD8E1ILa4_VTd4LHN_ub3IT7NRzGc0Ka7U2SWvGM7svlA/viewform?usp=dialog"; // Replace with your actual Google Forms link
    } else {
        alert("ERROR: System Malfunction Detected! 😈");
        setTimeout(() => {
            alert("Critical Failure! Rebooting...");
            setTimeout(() => {
                alert("Just kidding 😆! Try again...");
            }, 1000);
        }, 1000);
    }
}
