document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    
    const lines = [
        "PHANTOM PRINCE PROTOCOL ACTIVE...",
        "ESTABLISHING SECURE CONNECTION...",
        "SCANNING WATCHLIST FOR DILUTION...",
        "--------------------------------",
        "WELCOME TO ENGAGEME.LIVE",
        "SYSTEM STATUS: ONLINE"
    ];

    let lineIndex = 0;
    terminal.innerHTML = ''; // Clears the "BOOTING" text

    function typeLine() {
        if (lineIndex < lines.length) {
            const div = document.createElement('div');
            div.textContent = "> " + lines[lineIndex];
            terminal.appendChild(div);
            lineIndex++;
            setTimeout(typeLine, 500);
        }
    }

    typeLine();
});
3:45 P
