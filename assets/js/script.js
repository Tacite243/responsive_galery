
function animation() {
    const galerys = document.querySelectorAll(".galery > div");
  
    galerys.forEach((galery) => {
      const img = galery.querySelector("img");
      const imageInfo = galery.querySelector(".description");
      const link = galery.querySelector("a");
  
      // Add event listeners for hover effect
      galery.addEventListener("mouseenter", function () {
        imageInfo.style.top = "calc(100vh - 140px)";
        img.style.transform = "scale(1.1)";
        img.style.filter = "blur(6px) grayscale(100%)";
        img.style.opacity = "0.5";
        link.style.visibility = "unset";
      });
  
      galery.addEventListener("mouseleave", function () {
        imageInfo.style.top = "calc(100vh - 100px)";
        img.style.transform = "scale(1)";
        img.style.filter = "none";
        img.style.opacity = "1";
        link.style.visibility = "hidden";
      });
    });
  }
  
  // Call the function to listen all the time
  animation();