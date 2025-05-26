function changeImage() {
    let background = document.querySelector('#background');
    let images = [
        "url('../src/images/background/firelights-hideout.jpg')",
        "url('../src/images/background/hextech-discovery.jpg')",
        "url('../src/images/background/jinx.jpg')", 
        "url('../src/images/background/progress-day.jpg')",
        "url('../src/images/background/the-hexgate.jpg')",
        "url('../src/images/background/zaun.jpg')"
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
