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
      if (width < 768) {
          console.log("Mobile view");
          link.href = "css/mobile.css"; // Apply mobile styles
      } else if (width >= 768 && width < 992) {
          console.log("Tablet view");
          link.href = "css/tablet.css"; // Apply tablet styles
      } else {
          console.log("Desktop view");
          link.href = "css/desktop.css"; // Apply desktop styles
      }
  }

  // Initial check on page load
  handleResize();

  // Event listener for window resize
  window.addEventListener("resize", handleResize);
});
