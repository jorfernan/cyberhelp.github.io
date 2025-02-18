document.addEventListener("DOMContentLoaded", function() {
    const text = "ACCESS GRANTED...\nWelcome to CYBERHELP.";
    let index = 0;
    const speed = 50; // typing speed in ms
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
