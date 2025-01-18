 // Example functions for handling button clicks
 document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', (e) => {
        alert('You clicked: ' + e.target.innerText);
    });
});