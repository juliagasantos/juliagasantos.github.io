const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

//sobre
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".imgContainer");

    container.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 10; // Movimenta de forma mais sutil no eixo X
        const y = ((e.clientY - top) / height - 0.5) * -10; // Movimenta de forma mais sutil no eixo Y

        container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; // Efeito mais suave
    });

    container.addEventListener("mouseleave", () => {
        container.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});



