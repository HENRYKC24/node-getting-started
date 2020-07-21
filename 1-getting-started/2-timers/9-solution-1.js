const greeting = delay =>
  setTimeout(() => {
    console.log('Hello World. ' + delay);
    greeting(delay + 1);
  }, delay * 1000);

greeting(1);

// My solution 
const sayHello = delay => {
  const i = setInterval( () => {
    console.log('Hello World. ' + delay );
    clearInterval(i);
    sayHello((i._repeat / 1000) + 1)
  }, delay * 1000)
};
sayHello(1);




