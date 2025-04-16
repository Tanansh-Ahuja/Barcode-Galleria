const images = [
    "assets/images/barcode-labels.jpeg",
    "assets/images/barcode-scanner.jpeg",
    "assets/images/barcode-printer.jpeg",
    "assets/images/product-label.jpeg",
    "assets/images/resin-ribbon.jpeg",
    "assets/images/wax-ribbon.jpeg"
  ];
  
  let currentImage = 0;
  const imageElement = document.getElementById("carousel-image");
  
  setInterval(() => {
    // Fade out
    imageElement.classList.add("fade-out");
  
    // Wait for fade-out animation to finish (1s), then change image and fade in
    setTimeout(() => {
      currentImage = (currentImage + 1) % images.length;
      imageElement.src = images[currentImage];
  
      // Fade in
      imageElement.classList.remove("fade-out");
    }, 1000);
  }, 5000);
  