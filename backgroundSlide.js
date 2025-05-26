function changeImage() {
    let background = document.querySelector('#background');
    let images = [
        "url('./images/background/firelights-hideout.jpg')",
        "url('./images/background/hextech-discovery.jpg')",
        "url('./images/background/jinx.jpg')", 
        "url('./images/background/progress-day.jpg')",
        "url('./images/background/the-hexgate.jpg')",
        "url('./images/background/zaun.jpg')"
    ];
    
    let random = (Math.floor(Math.random() * 7) - 1);
    let currentIndex = (random < 0) ? 0 : random;
    background.style.backgroundImage = images[currentIndex];
    background.style.transition = "all 0.5s";
}

addEventListener("DOMContentLoaded", (event) => {
    changeImage();
    setInterval(changeImage, 10000);
});
