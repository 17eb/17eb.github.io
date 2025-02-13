function hearts() {
    let e = document.createElement("div");
    e.setAttribute("class", "heart");
    document.body.appendChild(e);
    e.style.left = Math.random() * (window.innerWidth - e.offsetWidth) + "px";
  
    let size = Math.random() * 12;
    let duration = Math.random() * 3;
  
    e.style.fontSize = 12 + size + "px"; // Set size based on random value
    e.style.animationDuration = 2 + duration + "s"; // Randomize duration
    setTimeout(function () {
      document.body.removeChild(e);
    }, 5000);
  }
  
  setInterval(function () {
    hearts();
  }, 50);
  