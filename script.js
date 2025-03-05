// Add event listeners to all Learn More buttons
document.addEventListener("DOMContentLoaded", () => {
    // Get all learn more buttons
    const learnButtons = [
      document.querySelector(".learn-btn1"),
      document.querySelector(".learn-btn2"),
      document.querySelector(".learn-btn3"),
      document.querySelector(".learn-btn4"),
    ]
  
    // Get all feature boxes
    const featureBoxes = [
      document.querySelector(".box1"),
      document.querySelector(".box2"),
      document.querySelector(".box3"),
      document.querySelector(".box4"),
    ]
  
    // Declare showNotification function (or import it if it's in another module)
    function showNotification(message) {
      alert(message) // Replace with your actual notification implementation
    }
  
    // Add click event to each learn more button
    learnButtons.forEach((button, index) => {
      if (button) {
        button.addEventListener("click", (e) => {
          e.stopPropagation() // Prevent the box click event from triggering
          showNotification("Coming soon: Exciting new features in development!")
        })
      }
    })
  
    // Make each feature box clickable and link to internship.html
    featureBoxes.forEach((box) => {
      if (box) {
        box.style.cursor = "pointer"
        box.addEventListener("click", () => {
          window.location.href = "internship.html"
        })
      }
    })
  })
  
  