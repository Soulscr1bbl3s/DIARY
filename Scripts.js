// JavaScript to handle the transition from intro to main content
window.onload = function() {
    setTimeout(function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("main-content").style.display = "block";

        // Load the content for today
        loadEntry('entries/day1.html');
    }, 7000); // Wait for the animations to complete
};

// Function to load content dynamically
function loadEntry(entryFile) {
    fetch(entryFile)
        .then(response => response.text())
        .then(data => document.getElementById('entry-content').innerHTML = data)
        .catch(error => console.error('Error loading entry:', error));
}
