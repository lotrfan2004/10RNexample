document.addEventListener("DOMContentLoaded", function() {
    let colors = ["#84C1FF", "#C984FF", "#FFC184", "#84FFC1"];
    let current = 0;

    function changeColor() {
        let nextColor = colors[current];
        document.body.style.transition = 'background-color 2s ease-in-out';
        document.body.style.backgroundColor = nextColor;
        current = (current + 1) % colors.length;
    }

    changeColor(); // Initial color set
    setInterval(changeColor, 10000); // Change color every 10 seconds with 2s transition
});
