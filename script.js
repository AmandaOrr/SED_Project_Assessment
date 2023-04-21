

//panel animations
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () =>{
    removeActiveClasses();
    panel.classList.add("active");
  })
});

function removeActiveClasses() {
  panels.forEach(panel =>{
    panel.classList.remove("active");
  })
}

//isopen or closed
// Get the current time
var currentTime = new Date().getHours();

// Get the status element
var statusElement = document.getElementById("status");

// Set the default status
var storeHours = "closed";

// Check the time and update the status accordingly
if (currentTime >= 11 && currentTime < 19) {
    storeHours = "open";
}

// Update the status element
statusElement.innerHTML = storeHours;

