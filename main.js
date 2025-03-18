// Load confetti library from CDN for GitHub Pages compatibility
const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.1/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);

// Function to generate random sweet messages
function getRandomMessage() {
    const messages = [
        "My dearest Lakshuu, as the night wraps its arms around you, know that my love for you shines brighter than all the stars combined. Sweet dreams, my everything ❤️",
        "To my beloved Lakshuu, each night I thank the universe for bringing you into my life. Sleep peacefully, knowing you're the last thought in my mind 💖",
        "My precious Lakshuu, may your dreams be filled with the same joy and love you bring to my life every single day. Good night, my heart's keeper 💝",
        "Darling Lakshuu, as the moon watches over you tonight, remember that my heart beats in perfect harmony with yours. Sweet dreams, my eternal love 💕",
        "My sweetest Lakshuu, your love is the light that guides me through every day. Rest well, knowing you're cherished beyond measure 💗",
        "To my angel Lakshuu, may your sleep be as peaceful as the love we share. Dream of our tomorrow, for it holds endless possibilities 💘",
        "My beautiful Lakshuu, your love makes every moment magical. Close your eyes and feel my love embracing you through the night 💓",
        "Dearest Lakshuu, you're my first thought in the morning and my last prayer at night. Sleep well, my precious love ❤️",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Function to get random love quote
function getRandomQuote() {
    const quotes = [
        "In all the world, there is no heart for me like yours.",
        "Every love story is beautiful, but ours is my favorite.",
        "You are my today and all of my tomorrows.",
        "I love you more than yesterday, but less than tomorrow.",
        "You are the missing piece to my heart's puzzle.",
        "With you, every moment feels like a dream come true.",
        "Your love is the greatest gift I've ever received.",
        "You make my heart smile every single day.",
        "Our love story is my favorite fairytale.",
        "You're the reason I believe in magic and love.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to create twinkling stars
function createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.className = "stars";
  
    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.style.position = "absolute";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        star.style.borderRadius = "50%";
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
  
    document.body.appendChild(starsContainer);
}

// Function to create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.createElement("div");
    heartsContainer.className = "floating-hearts";
  
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `float ${Math.random() * 6 + 4}s infinite`;
        heartsContainer.appendChild(heart);
    }
  
    document.body.appendChild(heartsContainer);
}

// Function to create a heart burst effect on click
function createHeartBurst(x, y) {
    if (typeof confetti !== "function") return;
  
    const colors = ["#ff69b4", "#ff1493", "#ff69b4", "#ff1493"];
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        colors: colors,
        shapes: ["heart"],
        scalar: 2,
    });
}

// Function to update the clock
function updateClock() {
    const clockDiv = document.querySelector(".clock");
    if (!clockDiv) return;
  
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to update message and quote at midnight
function updateMessage() {
    const messageDiv = document.querySelector(".message");
    const quoteDiv = document.querySelector(".quote");
    if (!messageDiv || !quoteDiv) return;
  
    messageDiv.textContent = getRandomMessage();
    quoteDiv.textContent = getRandomQuote();
}

// Function to check if a new day has started
function checkForNewDay() {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateMessage();
    }
}

// Set up the UI
document.querySelector("#app").innerHTML = `
    <div class="container">
        <div class="moon"></div>
        <div class="clock">00:00:00</div>
        <h1>Good Night My Love <span class="heart">❤️</span> Lakshuu <span class="heart">❤️</span></h1>
        <div class="message">${getRandomMessage()}</div>
        <div class="love-meter">
            <div class="love-meter-fill"></div>
        </div>
        <div class="quote">${getRandomQuote()}</div>
        <div class="music-player">
            <button class="play-btn">🎵 Play Lullaby</button>
            <audio id="lullaby" loop>
                <source src="https://assets.mixkit.co/music/preview/mixkit-sweet-lullaby-2-122.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
`;

// Add background effects
createStars();
createFloatingHearts();

// Heart burst effect on click
document.addEventListener("click", (e) => {
    createHeartBurst(e.clientX, e.clientY);
});

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Set up music player
const playBtn = document.querySelector(".play-btn");
const lullaby = document.querySelector("#lullaby");

playBtn.addEventListener("click", () => {
    if (lullaby.paused) {
        lullaby.play();
        playBtn.textContent = "🎵 Pause Lullaby";
    } else {
        lullaby.pause();
        playBtn.textContent = "🎵 Play Lullaby";
    }
});

// Check for new day every minute
setInterval(checkForNewDay, 60000);
