// Event listener for mouse enter
// h1.addEventListener('mouseenter', function() {
//   h1.style.color = 'darkgreen';
// });

// Event listener for mouse leave
// h1.addEventListener('mouseleave', function() {
//   h1.style.color = 'brown';
// });

document.querySelector("#heading").addEventListener("mouseenter", function() {
    document.getElementById("heading").style.color ="darkgreen";
})

document.querySelector("#heading").addEventListener("mouseleave", function() {
    document.getElementById("heading").style.color ="brown";
})