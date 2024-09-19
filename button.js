
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

   
    loginFormContainer.style.transition = "opacity 1s ease-in-out";
    loginVideo.style.transition = "opacity 1s ease-in-out";
    loginFormContainer.style.opacity = 0;
    loginVideo.style.opacity = 0;

    setTimeout(() => {
        loginFormContainer.classList.add("hidden");
        loginVideo.classList.add("hidden");


        loggedInVideo.classList.remove("hidden");
        loggedInVideo.style.transition = "opacity 2s ease-in-out";
        loggedInVideo.style.opacity = 1; 
    }, 1000); 
}

// Display the cards
function displayCards() {
    const cardsData = [
        { title: 'Open When You Feel Discouraged', content: 'So this is something I have already talked about a lot. Yk being down and stuff. I would say this again though. Discouragment comes from and for a lot of things. I never really had any passion of coding, its just something I chose for myself to do to make money through a viable career. And thats all. I could just not do this all and move on to something else. But for me my encouragement comes from my desire to be better and bring value to myself and the time and money my parents invested. Before I one day get up and decide to chase something else, I want to accomplish something I chose to do and see if the efforts were worth it. Regardless of whether I make a career out of this is...unsure but I will definately work till I hit my best. I wanna be those IT guys, not the ones fixing wifi router no. But someone who has the entire computer knowledge at the finger tips. This pushes me to do Leet code for 1200 hours, send out 1000 of applications and only expecting 1 interview out of it. It just expectation I Wish to breakthrough. When I started gym, I realized how much humble and patient people could be with themselves, I never really had six packs or a lean body. But I was better than I have ever been. That required a lot of giving up and starting again until I just fell in love with gym culture. So, just take whetever you are going through as a setback, and push again even harder and achieve what you are supposed to.' },
        { title: 'Open When You Miss Me', content: 'Now slow down there with those soading wet panties. Ik my effects on my girl huehue. I miss you too a lot as well, I have your images everywhere in my phone, snapchat, whatsapp laptop, that folder of yours, which btw contains the files to this website, in my laptop. Everything reminds me of you. Morning starts with you and night ends with you. You are on my left. My heart and love. I mean honestly there isnt much that I can write you to here. Its ok to miss each other. I miss you too. I wanna kiss you right now hehe. Love you baby. Muah' },
        { title: 'Open When You Need a Laugh', content: "So this is during my IELTS days in CHD. I told you how my mamu is right? I am the youngest so I am the first person in the family he is the most frank with. I mean monu bhaiya and muskan didi have always been scared shitless of my mamu the way they have been grown up. So anyway, I was came back from IELTS and muskan didi monu bhaiya were home along with nani, We didnt know mamu would be calling a short day and arrive just around 3pm. So I got a call from Simran, one of my ielts classmate and she wanted to ask about that day's work since she was absent. Monu bhaiya saw the phone ringing and began teasing. Simran was just an acquaintance but bhaiya began saying 'oh simran ka phone aya h...bs yhi kam krio wha jakr' and began laughing. The AC was on to that room so the door was closed. And wham mamu comes in and immediatles goes 'ladoo or simran?? Veeeeena ladoo hath se gya. Mene kha tha kisi se bhaiyan (bihari) se shadi kradete h ab bhukto anjam.' meanwhile I was yet to pick up her call. Later that night during dinner table time, everyone was there and I had video called my mumma and mamu said 'deepu tere ghne chudia sb chor ja yha tera beta gya hath se or ye simran se bhag ke shadi krega'. Stuff like this is the least of it and I have been listening to it since my birth. So last year in november, I was talking about one of my group project member who was contributing nothing. Her name Asha. Family was on video call and mamu went 'deepu mene terko kha tha shadi krade iski jb mere pas aya tha ye pichle sal ab tu dekh kaise terko tedi medi rotia bnake khilaegi teri bahu. Jaatni leke aega ye or terko ghr se bhar nikalegi wo. Dono Budha Budhi bhugto dekhna ab'. I swear its so funny when you hear him all this. When it comes to teasing me, monu bhaiya has inherited 1:1 genes from his father. My mamu on one hand is the scariest person to all my siblings in the family. and then to me hes like this. gotta love it" },
        { title: 'Open When You’re sad', content: 'Keya baby having a bad day and is sad? Well the first thing you should do is call me and tell me what happened. You are cherished here, adored, admired alright. Its okay to feel that way but donot let that filling linger around for too long okay? It will hinder your progress baby. And always remember, I have your back.' },
        { title: 'Open When You’re Stressed', content: 'Take a deep breath baby. You are the best, what you are doing in this country on your own is commendable. Living on your own, doing odd jobs, regularly attending college. You are doing so great so dont feel stressed thinking this is too much for you. Well tbh it might just be haha but believe in yourself ok? Its just a moment. Think of it this way, you put in so much effort to do some good and glory and then you see the challenge to get there. You get stressed looking at those hurdles. Whats stopping you achieving your goals? Your capablities? Well stressing will only hold that back my love. It might be tough. But you can do it. Your mom, dad believe in you, they always will and they are so proud of you. Me? I am just happy to have you. I am growing with you.' },
        { title: 'Open When You Can’t Sleep', content: 'Close your eyes and imagine us cuddling under a blanket. Well tbh thats hot. I mean temperature hot cuz that suffocates me very quickly (playing games in my phone when I was supposed to sleep was tough). But just think of us. One day, we wont even care if we would be getting enough sleep or not cuz we will always have each other next to us and thats reassuring in so many different ways. Tho sleep is necessary so dont pull that on me everytime ok, I will ignore your shenanigans and go to sleep. Lol just kidding I will hold you in my arms and then sleep unless you prefer fucking you to sleep. haha. Dont worry baby. Dont feel restless at nights. Sleep worryfree. You have a guy who will never let any harm get in your way. Love you.' },
        { title: 'Open When You feel confused', content: 'Just call me no? I will help you make a decision. Jk, trust yourself enough to make a sound decision. The worst that could happen is you learning a lesson from it which at our age isnt the worst thing haha. Just think what I would suggest you to do if I am not there to suggest you an answer. You can do it.'},

        
    ];

    const cardsContainer = document.getElementById("cardsContainer");

    // Create and append cards
    cardsData.forEach((cardData) => {
        const card = document.createElement("li");
        card.className = "card";
        const previewContent = cardData.content.split(" ").slice(0, 20).join(" ");

        const cardContent = `
            <div>
                <h3 class="card-title">${cardData.title}</h3>
                <div class="card-content">
                    <p class="card-text">${previewContent}...</p> <!-- Display only the first few lines -->
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="#" class="card-link">Read More</a>
            </div>
        `;

        card.innerHTML = cardContent;


        card.querySelector('.card-link').addEventListener('click', function(e) {
            e.preventDefault();
            openCardModal(cardData.title, cardData.content);
        });

        cardsContainer.appendChild(card);
    });

  
    cardsContainer.addEventListener("scroll", function() {

    });


    cardsContainer.scrollLeft = 0;
}


function openCardModal(title, content) {
    const modal = document.getElementById("cardModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    modalTitle.textContent = title;
    modalContent.textContent = content;

    modal.classList.add("visible");


    document.querySelector("#cardModal .close").addEventListener("click", function() {
        modal.classList.remove("visible");
    });
}


window.addEventListener("click", function(event) {
    const modal = document.getElementById("cardModal");
    if (event.target === modal) {
        modal.classList.remove("visible");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    displayCards();
});
function onLoginSuccess() {
    const content = document.querySelector('.content-container');
    content.classList.add('visible');
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('visible');
  
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); 
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex'; 
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10); 
}
