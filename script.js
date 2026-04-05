const terminal = document.getElementById('terminal');
const input = document.getElementById('command-input');

const lines = [
    "INITIALIZING ENGAGEME.LIVE...",
    "ESTABLISHING SECURE CONNECTION...",
    "PHANTOM PRINCE PROTOCOL ACTIVE.",
    "--------------------------------",
    "Welcome to the terminal.",
    "Type 'help' to see available commands."
];

let lineIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        const p = document.createElement('p');
        p.textContent = lines[lineIndex];
        terminal.appendChild(p);
        lineIndex++;
        setTimeout(typeLine, 500);
    }
}

// Start the sequence
window.onload = typeLine;
