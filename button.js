// Login Logic
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

// Placeholder Media Player Logic
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playIcon.name = isPlaying ? "pause" : "play";
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
