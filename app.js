var birthdayCounter = document.querySelector("#bday-counter");

// Set the target date (November 15 of the current year)
const targetDate = new Date(new Date().getFullYear(), 11, 15); // Month is 0-based index (October is 9)

// Function to calculate and display the remaining time
function displayCountdown() {
    const now = new Date(); // Current date and time
    const difference = targetDate.getTime() - now.getTime(); // Calculate the difference in milliseconds

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        birthdayCounter.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        birthdayCounter.innerHTML = "It's my birthday!"; // In case the target date is in the past
    }
}

// Initial call to display the countdown immediately
displayCountdown();

// Update the countdown every second (1000 milliseconds)
setInterval(displayCountdown, 1000);

// Function to create and show the floating text
function showFloatingText(text, event) {
    // Create a new div element
    const floatingText = document.createElement("div");

    // Set the text content
    floatingText.textContent = text;

    // Set styles for the floating text
    floatingText.style.transition = "1s all";
    floatingText.style.position = "absolute";
    floatingText.style.pointerEvents = "none"; // Semi-transparent background
    floatingText.style.color = "#22222260"; // Text color
    floatingText.style.fontSize = "24px";
    floatingText.style.fontWeight = "bold";
    floatingText.style.padding = "5px 10px"; // Padding around the text
    floatingText.style.borderRadius = "50%"; // Rounded corners
    floatingText.style.zIndex = "1000"; // Ensure it's above other elements
    floatingText.style.className = "";

    // Position the floating text above the mouse cursor
    floatingText.style.left = event.clientX - 30 + "px"; // Offset to the right of the cursor
    floatingText.style.top = event.clientY + window.scrollY - 30 + "px"; // Offset above the cursor

    // Append the floating text to the document body
    document.body.appendChild(floatingText);

    // Set a timeout to remove the floating text after 2 seconds
    setTimeout(function () {
        floatingText.className += "hide";
        setTimeout(() => {
            floatingText.remove();
        }, 1000);
    }, 1000);
}

document.addEventListener("click", (event) => {
    showFloatingText("Clicked!", event);
});

var currentBirthday = document.querySelector("#current-bday");

currentBirthday.innerHTML = "November 15, " + new Date().getFullYear();