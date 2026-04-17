const speedInput = document.getElementById('speedInput');
const currentSpeedDisplay = document.getElementById('currentSpeed');
const limitDisplay = document.getElementById('limitDisplay');
const statusMessage = document.getElementById('statusMessage');

// Initial setup
let currentSpeed = 0;
let speedLimit = 50; // Default limit

function setSpeed() {
    const input = parseInt(speedInput.value);

    if (isNaN(input) || input < 0) {
        statusMessage.textContent = "Please enter a valid, non-negative number.";
        statusMessage.style.color = 'red';
        currentSpeedDisplay.textContent = 'Error';
        return;
    }

    currentSpeed = input;
    speedLimit = parseInt(limitDisplay.textContent); // Read the current limit display value

    if (currentSpeed > speedLimit) {
        statusMessage.textContent = `Warning: Speed (${currentSpeed} km/h) exceeds the limit of ${speedLimit} km/h!`;
        statusMessage.style.color = 'orange';
    } else if (currentSpeed === speedLimit) {
        statusMessage.textContent = `Speed is exactly at the limit: ${speedLimit} km/h.`;
        statusMessage.style.color = '#28a745';
    } else {
        statusMessage.textContent = `Current speed set to: ${currentSpeed} km/h. (Within limit)`;
        statusMessage.style.color = '#28a745';
    }

    currentSpeedDisplay.textContent = currentSpeed;
}

// Initialize the display on load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure initial state is correct when page loads (though HTML defaults handle most)
    setSpeed(); 
});