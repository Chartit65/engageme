const canvas = document.getElementById('chartCanvas');
const ctx = canvas.getContext('2d');

// Sample Data to test the "Empty Middle"
const data = [
    { o: 150, h: 155, l: 148, c: 152 },
    { o: 152, h: 158, l: 151, c: 157 },
    { o: 157, h: 159, l: 154, c: 155 },
    { o: 155, h: 160, l: 153, c: 158 }
];

function drawCandles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach((d, i) => {
        const x = 50 + (i * 40);
        const color = d.c > d.o ? '#0f0' : '#f00'; // Green if up, Red if down
        ctx.strokeStyle = color;
        ctx.strokeRect(x, 200 - d.h, 1, d.h - d.l); // Wick
        ctx.fillStyle = color;
        ctx.fillRect(x - 5, 200 - Math.max(d.o, d.c), 10, Math.abs(d.o - d.c)); // Body
    });
}

// Run the draw function
drawCandles();
