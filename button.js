// Spotify Web Playback SDK Integration
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'YOUR_SPOTIFY_ACCESS_TOKEN'; // Replace with your Spotify access token
    const player = new Spotify.Player({
        name: 'Keya\'s Player',
        getOAuthToken: cb => { cb(token); },
        volume: 1
    });

    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        // Transfer playback to this device
        fetch(`https://api.spotify.com/v1/me/player`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ device_ids: [device_id] })
        });
    });

    player.addListener('player_state_changed', state => {
        console.log('Player State Changed', state);
    });

    player.connect();

    // Play/Pause Button
    document.getElementById('playPauseBtn').addEventListener('click', () => {
        player.togglePlay();
    });

    // Volume Slider
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        player.setVolume(e.target.value);
    });
};

// Login and Content Display Logic
const predefinedCredentials = {
    email: "keyaamin07@gmail.com",
    password: "shittypieceofbonelessmeat"
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value.trim().toLowerCase();
    const passwordInput = document.getElementById("password").value.trim();

    if (emailInput === predefinedCredentials.email && passwordInput === predefinedCredentials.password) {
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("contentSection").classList.remove("hidden");
    } else {
        alert("Invalid email or password.");
    }
});

// Card Display Logic
const cardsData = [
    { title: 'Open When You Feel Discouraged', content: '...' },
    { title: 'Open When You Miss Me', content: '...' },
    { title: 'Open When You Need a Laugh', content: '...' },
    { title: 'Open When You’re Sad', content: '...' },
    { title: 'Open When You’re Stressed', content: '...' },
    { title: 'Open When You Can’t Sleep', content: '...' },
    { title: 'Open When You Feel Confused', content: '...' }
];

const cardsContainer = document.getElementById("cardsContainer");

cardsData.forEach((cardData) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${cardData.title}</h3>
        <p>${cardData.content.split(" ").slice(0, 20).join(" ")}...</p>
    `;
    card.addEventListener("click", () => {
        document.getElementById("modalTitle").textContent = cardData.title;
        document.getElementById("modalContent").textContent = cardData.content;
        document.getElementById("cardModal").classList.add("visible");
    });
    cardsContainer.appendChild(card);
});

// Close Modal
document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("cardModal").classList.remove("visible");
});
