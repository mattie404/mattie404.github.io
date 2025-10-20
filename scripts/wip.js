const isWip = true; // set this to activate or deactivate the wip message

let header = document.getElementById("wip-header");
let desc = document.getElementById("wip-desc");

function wipStatus() {
    const wipDiv = document.querySelector('.wip');
    if (!wipDiv) return; // Exit if div not found

    if (isWip) {
        wipDiv.style.display = 'block'; // Show the div

        header.textContent = "Work In Progress!";
        desc.textContent = "Guesbook and Projects pages aren't available!"
    } else {
        wipDiv.style.display = 'none';  // Hide the div
    }
}


window.addEventListener('DOMContentLoaded', wipStatus);