const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Function to create a circular chart
function createDoughnutChart(ctx, label, percentage, color) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [label],
            datasets: [{
                label: label,
                data: [percentage, 100 - percentage],
                backgroundColor: [color, '#e0e0e0'],
                hoverOffset: 4,
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
                datalabels: {
                    display: true,
                    formatter: (value, ctx) => {
                        return ctx.chart.data.datasets[0].data[0] + '%';
                    },
                    color: '#000',
                    font: {
                        size: '20',
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// Initialize the charts after the DOM is loaded
window.onload = function () {
    const htmlCssChart = document.getElementById('htmlCssChart').getContext('2d');
    const jsChart = document.getElementById('jsChart').getContext('2d');
    const dsaChart = document.getElementById('dsaChart').getContext('2d');
    const mernChart = document.getElementById('mernChart').getContext('2d');

    createDoughnutChart(htmlCssChart, 'HTML & CSS', 90, '#f7931e');
    createDoughnutChart(jsChart, 'JavaScript', 85, '#6e44ff');
    createDoughnutChart(dsaChart, 'DSA', 80, '#2ecc71');
    createDoughnutChart(mernChart, 'MERN', 70, '#34495e');
};

//  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
