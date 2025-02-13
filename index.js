let centisecondsRemaining;
    let intervalHandle;

    function tick() {
      const timeDisplay = document.getElementById("time");
      let mins = Math.floor(centisecondsRemaining / 6000);
      let secs = Math.floor((centisecondsRemaining - (mins * 6000)) / 100);
      let centisecs = centisecondsRemaining % 100;
      if (mins < 10) mins = "0" + mins;
      if (secs < 10) secs = "0" + secs;
      if (centisecs < 10) centisecs = "0" + centisecs;
      const message = mins + ":" + secs + "." + centisecs;
      timeDisplay.innerHTML = message;
      if (centisecondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
      }
      centisecondsRemaining--;
    }

    function startCountdown() {
      centisecondsRemaining = 300 * 100; // 300 seconds = 5 minutes
      intervalHandle = setInterval(tick, 10); // updating every 10 milliseconds
    }

    function resetPage() {
      document.getElementById("time").style.display = "none";
    }