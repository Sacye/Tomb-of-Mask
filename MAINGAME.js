const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the sprite image
const sprite = new Image();
sprite.src = "Character 1.png"; // Adjust path if needed

// Draw the sprite when loaded
sprite.onload = function() {
    ctx.drawImage(sprite, 100, 100, 64, 64); // X, Y, Width, Height
};