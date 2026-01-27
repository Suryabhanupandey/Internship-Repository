const apiKey = "ZvChwPG3UIgX6eIrDkhG2iWnaE9pk1110L1qZhsb";
const apiURL = `https://api.watchmode.com/v1/sources/?apiKey=${apiKey}`;
const sourcesContainer = document.getElementById('sources');
const searchInput = document.getElementById('search');

// Fetch data from API
async function fetchSources() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displaySources(data);
    } catch (error) {
        sourcesContainer.innerHTML = `<p style="color:red;">Failed to load sources</p>`;
        console.error("Error fetching API:", error);
    }
}

// Display sources in grid
function displaySources(sources) {
    sourcesContainer.innerHTML = sources.map(source => `
        <div class="card">
            <img src="${source.logo}" alt="${source.name} Logo">
            <h3>${source.name}</h3>
        </div>
    `).join('');
}

// Filter sources by search
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(filter) ? 'block' : 'none';
    });
});

fetchSources();
