document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.projectContainer').forEach(container => {
        const text = container.getAttribute('data-text');
        const formattedText = text.replace(/<br>/g, '\n'); // Use \n for line breaks
        container.setAttribute('data-text', formattedText);
    });
});

// const box = document.getElementById("HOME");

// box.addEventListener("mouseenter" ,() => {
//     gsap.to(".box", { rotation: 90+45,duration: 0.5, ease:"power1.inout", scale:1.5});
// });

// box.addEventListener("mouseleave" ,() => {
//     gsap.to(".box", { rotation: 0,duration: 0.5, ease:"power1.inout",scale:1});
// });

