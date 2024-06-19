// Clear email input after submitting
function clearEmailInput() {
    var emailInput = document.getElementById("email");
    emailInput.value = "";
}

// Counter values
let tours = 0;
let experiences = 0;
let destinations = 0;
let clients = 0;

// Target values
const targetTours = 52;
const targetExperiences = 23;
const targetDestinations = 76;
const targetClients = 2469;

// Calculate increment values
const incrementTours = targetTours / 135;
const incrementExperience = targetExperiences / 135;
const incrementDestinations = targetDestinations / 135;
const incrementClients = targetClients / 135;

// Update counters
function updateCounters() {
    // Check if the counters section is in the viewport
    const countersSection = document.getElementById('section5');
    const rect = countersSection.getBoundingClientRect();

    // Define an offset for when the counting should start
    const offset = 200;

    // Start incrementing once the counters are in the viewport
    if (rect.top - offset < window.innerHeight && rect.bottom >= 0) {
        tours = 0;
        experiences = 0;
        destinations = 0;
        clients = 0;

        // Increment counters
        function incrementCounters() {
            if (tours < targetTours) {
                tours += incrementTours;
                document.getElementById('toursCount').textContent = Math.round(tours);
            }

            if (experiences < targetExperiences) {
                experiences += incrementExperience;
                document.getElementById('experiencesCount').textContent = Math.round(experiences);
            }

            if (destinations < targetDestinations) {
                destinations += incrementDestinations;
                document.getElementById('destinationsCount').textContent = Math.round(destinations);
            }

            if (clients < targetClients) {
                clients += incrementClients;
                document.getElementById('clientsCount').textContent = Math.round(clients);
            }

            // Stop incrementing once the counters reach their respective targets
            if (tours >= targetTours && experiences >= targetExperiences && destinations >= targetDestinations && clients >= targetClients) {
                clearInterval(interval);
            }
        }

        // Start incrementing counters
        const interval = setInterval(incrementCounters, 10);

        // Remove the scroll event listener once counting starts
        window.removeEventListener('scroll', updateCounters);
    }
}

window.addEventListener('scroll', updateCounters);