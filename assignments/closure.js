// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


console.log('Closure Challenge 1 below:')
function hungrymouse() {
  const mouse1 = 'he is gonna ask for a glass of milk'
  console.log('If you give a mouse a cookie, ' + mouse1)
  function thirsty () {
    const mouse2 = 'he is gonna ask for a straw'
    console.log('And if ' + mouse1 + ' then ' + mouse2)
    function drinky () {
      const mouse3 = 'he will then feel entitled to ask for a lot of other stuff too'
      console.log('So, moral of the story is if ' + mouse2 + ', ' + mouse3)
    }
    drinky ()
  }
  thirsty ()
}

hungrymouse ();




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
