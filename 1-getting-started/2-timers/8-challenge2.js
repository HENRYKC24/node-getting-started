// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let counter = 1;
const intervalID = setInterval(() => {
    console.log('Hello World');
    if( counter === 5 ) {
      clearInterval(intervalID);
    } else {
      counter++;
    }
  },1 * 1000);
