function toggleVisibility(index) {
    var demo = document.getElementById("demo" + index);
    var button = document.querySelector('.toggleButton:nth-of-type(' + index + ')'); // Get the corresponding button element
    if (demo.style.display === "none") {
      demo.style.display = "block";
      button.textContent = 'SELECT'; // Change the text to 'Hide'
    } else {
      demo.style.display = "none";
      button.textContent = 'SELECT'; // Change the text back to 'SELECT'
    }
  }

  // JavaScript function to navigate to the specified page
  function navigate(page) {
    // Check if the page parameter is 'index.html' for home page
    if (page === 'index.html') {
        // Redirect to the home page
        window.location.href = "index.html";
    } 
    // Check if the page parameter is 'queries.html' for notes page
    else if (page === 'queries.html') {
        // Redirect to the notes page
        window.location.href = "queries.html";
    }
}