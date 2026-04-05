function initChart() {
    if (typeof Chart === 'undefined') {
        setTimeout(initChart, 500);
        return;
    }

    const ctx = document.getElementById('oilChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Thursday', 'Friday Close', 'Saturday (Phantom)', 'Sunday (Today)'],
            datasets: [{
                label: 'Market Price',
                data: [111.54, 112.08, null, null], // Real market data
                borderColor: '#00FF00',
                borderWidth: 3,
                pointRadius: 5,
                tension: 0.2
            },
            {
                label: 'Phantom Prints',
                data: [111.54, 112.08, 112.15, 112.40], // Your weekend tracking
                borderColor: '#f0f', 
                borderDash: [5, 5],
                borderWidth: 2,
                pointBackgroundColor: '#f0f',
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: { color: '#222' },
                    ticks: { color: '#00FF00', font: { size: 14 } },
                    title: { display: true, text: 'WTI PRICE (USD)', color: '#00FF00' },
                    min: 110, // Focusing the scale on the current action
                    max: 115
                },
                x: {
                    grid: { color: '#222' },
                    ticks: { color: '#00FF00' }
                }
            },
            plugins: {
                legend: { labels: { color: '#00FF00' } }
            }
        }
    });
}

initChart();
