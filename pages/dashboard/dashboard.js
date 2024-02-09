var ctx = document.getElementById('lineChart').getContext('2d');

var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], 
        datasets: [{
            label: 'Homiylar',
            data: [100, 500, 1000, 5000, 10000, 50000], 
            borderColor: '#4C6FFF',
            fill: false,
        }, {
            label: 'Talabalar',
            data: [150, 600, 1100, 5200, 10200, 52000], 
            borderColor: '#FF92AE',
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 10000 
                }
            }]
        }
    }
});