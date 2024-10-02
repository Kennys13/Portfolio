const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Function to create an animated pie chart
// Function to create an animated pie chart with percentage label
function createAnimatedPieChart(elementId, label, percentage, color) {
    const ctx = document.getElementById(elementId).getContext('2d');
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [label, ''],
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: [color, '#e0e0e0'],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                },
                legend: {
                    display: false
                },
                // Add this new plugin to display percentage
                doughnutLabel: {
                    labels: [
                        {
                            text: `${percentage}%`,
                            font: {
                                size: '24',
                                weight: 'bold'
                            },
                            color: color
                        }
                    ]
                }
            }
        },
        plugins: [{
            // Custom plugin to render the percentage label
            id: 'doughnutLabel',
            afterDraw: (chart, args, options) => {
                const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
                ctx.save();
                const text = options.labels[0].text;
                const textColor = options.labels[0].color;
                const font = options.labels[0].font;
                ctx.font = `${font.weight} ${font.size}px sans-serif`;
                ctx.fillStyle = textColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, width / 2, height / 2 + top);
            }
        }]
    });
}

// Initialize the charts after the DOM is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    createAnimatedPieChart('htmlCssChart', 'HTML & CSS', 100, '#32d5ac');
    createAnimatedPieChart('jsChart', 'JavaScript', 80, '#6e44ff');
    createAnimatedPieChart('dsaChart', 'DSA', 70, '#2ecc71');
    createAnimatedPieChart('mernChart', 'MERN', 90, '#34495e');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        let headerOffset = 70; // Height of your fixed header
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.animation = 'fadeOut 1s ease';
        loader.addEventListener('animationend', () => {
            loader.style.display = 'none';
        });
    }, 500); // Loader will fade out after 6 seconds
});

document.getElementById('portfolio-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = window.location.pathname + '#home'; // Change the hash to '#home'
    window.location.reload(); // Refresh the page
});
