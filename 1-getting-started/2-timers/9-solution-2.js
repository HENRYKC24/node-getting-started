let lastIntervalId, counter = 5;

const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ' + delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }

  counter += 1;
};

greeting(100);

//my solution
function sayHello( delay ) {
  let counter = 1;
  const i = setInterval( () => {
    console.log('Hello World. ' + delay);
    if (counter === 5) {
      clearInterval(i);
      sayHello(i._repeat * 2);
      counter = 1;
    }
    counter++;
    }, delay)};
    sayHello(100);
