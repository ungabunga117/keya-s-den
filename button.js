const predefinedCredentials = {
    email: "keyaamin07@gmail.com",
    password: "shittypieceofbonelessmeat"
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value.trim().toLowerCase();
    const passwordInput = document.getElementById("password").value.trim();

    if (emailInput === predefinedCredentials.email && passwordInput === predefinedCredentials.password) {
        fadeOutLoginForm();
        setTimeout(() => {
            document.getElementById("contentContainer").classList.add("visible");
            displayCards();
        }, 1000);
    } else {
        alert("Invalid email or password.");
    }
});

function fadeOutLoginForm() {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const loginVideo = document.getElementById("loginVideo");
    const loggedInVideo = document.getElementById("loggedInVideo");

    loginFormContainer.style.opacity = 0;
    loginVideo.style.opacity = 0;

    setTimeout(() => {
        loginFormContainer.classList.add("hidden");
        loginVideo.classList.add("hidden");
        loggedInVideo.classList.remove("hidden");
        loggedInVideo.style.opacity = 1;
    }, 1000);
}

function displayCards() {
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
        const card = document.createElement("li");
        card.className = "card";
        const previewContent = cardData.content.split(" ").slice(0, 20).join(" ");

        card.innerHTML = `
            <div>
                <h3 class="card-title">${cardData.title}</h3>
                <p class="card-text">${previewContent}...</p>
            </div>
            <a href="#" class="card-link">Read More</a>
        `;

        card.querySelector('.card-link').addEventListener('click', (e) => {
            e.preventDefault();
            openCardModal(cardData.title, cardData.content);
        });

        cardsContainer.appendChild(card);
    });
}

function openCardModal(title, content) {
    const modal = document.getElementById("cardModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.classList.add("visible");

    document.querySelector("#cardModal .close").addEventListener("click", () => {
        modal.classList.remove("visible");
    });
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("cardModal");
    if (event.target === modal) {
        modal.classList.remove("visible");
    }
});
