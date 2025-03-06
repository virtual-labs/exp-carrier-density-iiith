document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".v-collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            const content = collapsible.nextElementSibling;
            collapsible.classList.toggle("is-active");

            if (content.style.maxHeight) {
                // Close the collapsible
                content.style.maxHeight = null;
            } else {
                // Open the collapsible
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

const plot1 = document.getElementById('plot1').getContext('2d');
new Chart(plot1, {
    type: 'line',
    data: {
        labels: Array.from({ length: 601 }, (_, i) => i), // Temperature range from 0 to 600 K
        datasets: [{
            label: 'n/N_D',
            data: Array.from({ length: 601 }, (_, T) => {
                if (T < 100) return T / 100 * 1.5; // Freeze-out region
                if (T < 400) return 1.0; // Extrinsic region
                return 1 + 0.002 * Math.pow(T - 400, 2); // Intrinsic region
            }),
            borderColor: 'black',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                min: 0, // Minimum y-value
                max: 5, // Adjusted maximum y-value to fit the data
                title: {
                    display: true,
                    text: 'n/N_D (Ratio)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Temperature (K)'
                }
            }
        }
    }
});

// Function to validate the inputs
function validateInputs() {
    const input1 = document.getElementById('plot-input1').value.trim();
    const input2 = document.getElementById('plot-input2').value.trim();
    const input3 = document.getElementById('plot-input3').value.trim();
    const resultMessage = document.getElementById('result-message');

    // Check if the inputs match the desired values
    if (input1 === 'b' && input2 === 'a' && input3 === 'c') {
        resultMessage.style.display = 'block';
        resultMessage.textContent = 'Correct';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.style.display = 'block';
        resultMessage.textContent = 'Incorrect. Please refer to theory.';
        resultMessage.style.color = 'black';
    }
}

// Add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', validateInputs);