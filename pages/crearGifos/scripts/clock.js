const $timer = document.querySelector("#timer");

// Stopwatch + Loadingbar generator functions
const Stopwatch = (elem, options) => {
  let timer = elem,
    offset,
    clock,
    interval;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // initialize
  reset();

  // private functions
  function start() {
    if (!interval) {
      offset = Date.now();
      interval = setInterval(update, options.delay);
    }
  }
  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return clock;
  }
  function reset() {
    clock = 0;
    render();
  }
  function update() {
    clock += delta();
    render();
  }
  function delta() {
    let now = Date.now(),
      d = now - offset;
    offset = now;
    return d;
  }
  function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 10),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  function render() {
    
    document.getElementById('stopwatch').innerHTML = msToTime(clock);
  }
  // Exposed Functions
  return {
    start: start,
    stop: stop,
    reset: reset
  };
};

const myStopwatch = Stopwatch(timer, { delay: 10 });