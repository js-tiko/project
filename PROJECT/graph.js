
// Variables to keep track of charts and data
let chart;
let divergentBarChart;
let pieChart;
let isCharging = false;

// Function to initialize the bar chart
function initChart() {
    const ctx = document.getElementById('inventoryChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Input Voltage Data'],
            datasets: [{
                label: 'Input Voltage (in Volts)',
                data: [],
                backgroundColor: 'aqua',
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 300
                }
            }
        }
    });
}

// Function to initialize the divergent bar chart,
function initDivergentBarChart() {
    const ctx = document.getElementById('divergentBarChart').getContext('2d');

    divergentBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Remaining voltage Data'],
            datasets: [{
                label: 'Remaining voltage (in Volts)',
                data: [],
                backgroundColor: ['blue', 'green'],
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 240
                }
            }
        }
    });
}

// Function to initialize the pie chart
function initPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');

    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Used Voltage', 'Remaining Voltage'],
            datasets: [{
                data: [],
                backgroundColor: ['blue', 'aqua'],
                borderWidth: 2,
            }]
        },
    });
}

// Function to handle space bar key press for bar chart
function handleKeyPressBarChart(event) {
    if (event.code === 'Space') {
        const dataValue = isCharging ? 0 : getRandomVoltage();
        
        // Update the bar chart data
        chart.data.datasets[0].data = [dataValue];
        chart.update();

        isCharging = !isCharging;
    }
}

// Function to handle space bar key press for divergent bar chart
function handleKeyPressDivergentBar(event) {
    if (event.code === 'Space') {
        const dataValue = isCharging ? 0 : getRandomVoltage();
        
        // Update the divergent bar chart data
        divergentBarChart.data.datasets[0].data = [dataValue, 50 - dataValue];
        divergentBarChart.update();

        isCharging = !isCharging;
    }
}

// Function to handle space bar key press for pie chart
function handleKeyPressPieChart(event) {
    if (event.code === 'Space') {
        const dataValue = isCharging ? 0 : getRandomVoltage();
        const remainingVoltage = 200 - dataValue;

        // Update the pie chart data
        pieChart.data.datasets[0].data = [dataValue, remainingVoltage];
        pieChart.update();

        isCharging = !isCharging;
    }
}

// Function to get a random voltage between 3 and 50
function getRandomVoltage() {
    return (Math.random() * (300 - 50) + 3).toFixed(2);
}

// Event listener for space bar key press for bar chart
document.addEventListener('keydown', handleKeyPressBarChart);

// Event listener for space bar key press for divergent bar chart,
document.addEventListener('keydown', handleKeyPressDivergentBar);

// Event listener for space bar key press for pie chart
document.addEventListener('keydown', handleKeyPressPieChart);

// Initialize the charts when the script is loaded
document.addEventListener('DOMContentLoaded', function () {
    initChart();
    initDivergentBarChart();
    initPieChart();
});
