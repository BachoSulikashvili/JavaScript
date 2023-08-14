window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendminutes = document.querySelector('#minutes');
    let appendtens = document.querySelector('#tens');
    let appendseconds = document.querySelector('#seconds');
    let startbtn = document.querySelector('#start');
    let stopbtn = document.querySelector('#stop');
    let resetbtn = document.querySelector('#reset');
    let Interval;

    const starTimer = () => {
      tens++;
      if (tens <= 9) {
        appendtens.innerHTML = '0' + tens;
      }
      if (tens > 9) {
        appendtens.innerHTML = tens;
      }

      if (tens > 99) {
        seconds++;
        appendseconds.innerHTML = '0' + seconds;
        tens = 0;
        appendtens.innerHTML = '0' + 0;
      }

      if (seconds > 9) {
        appendseconds.innerHTML = seconds;
      }

      if (seconds > 59) {
        minutes++;
        appendminutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendseconds.innerHTML = '0' + 0;
      }
    };

    startbtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(starTimer, 10);
    };

    stopbtn.onclick = () => {
      clearInterval(Interval);
    };

    resetbtn.onclick = () => {
      clearInterval(Interval);
      tens = '00';
      seconds = '00';
      minutes = '00';
      appendtens.innerHTML = tens;
      appendseconds.innerHTML = seconds;
      appendminutes.innerHMTL = minutes;
    };
  };