function move() {
    var elem = document.getElementById("nbsa-progress-bar");

    // Fill in current EC here!
    var ecPoints = 0;

    var width = ecPoints / 0.6;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        elem.style.width = width + '%';
        var num = ecPoints;
        num = num.toFixed(0)
        document.getElementById("ec-count").innerHTML = num;
      }
      if (width >= 75) {
        document.getElementById("progress-bar-text").className = "success-text";
      }
    }
  }