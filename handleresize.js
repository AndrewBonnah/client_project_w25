// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  function handleResize() {
      const width = window.innerWidth;
      let link = document.querySelector("#dynamic-style");

      // Create a new <link> element if it doesn't exist
      if (!link) {
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.id = "dynamic-style";
          document.head.appendChild(link);
      }

      // Apply different styles based on window width
      if (width < 768 && link.outerHTML !== '<link rel="stylesheet" id="dynamic-style" href="css/mobile.css">') {
        console.log("Mobile view");
        link.href = "css/mobile.css"; // Apply mobile styles
        document.getElementById("year").innerHTML = new Date().getFullYear();
    } else if (width >= 768 && width < 992 && link.outerHTML !== '<link rel="stylesheet" id="dynamic-style" href="css/tablet.css">') {
        console.log("Tablet view");
        link.href = "css/tablet.css"; // Apply tablet styles
        document.getElementById("year").innerHTML = new Date().getFullYear();
    } else if (width >= 992 && link.outerHTML !== '<link rel="stylesheet" id="dynamic-style" href="css/desktop.css">') {
        console.log("Desktop view");
        link.href = "css/desktop.css"; // Apply desktop styles
        document.getElementById("year").innerHTML = new Date().toLocaleDateString();
    }
  }

  // Initial check on page load
  handleResize();

  // Event listener for window resize
  window.addEventListener("resize", handleResize);
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById("headerText");
  const button = document.getElementById("toggleButton");

  if (header && button) {  // Check if the elements exist
      let isLarge = false;

      function toggleTextSize() {
          if (isLarge) {
              header.style.fontSize = "30px";
          } else {
              header.style.fontSize = "70px";
          }
          isLarge = !isLarge;
      }

      button.addEventListener("click", toggleTextSize);
  }
});

