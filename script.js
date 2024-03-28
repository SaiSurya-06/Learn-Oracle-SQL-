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
  