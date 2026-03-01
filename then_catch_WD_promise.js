/*
====================================================
        PROMISE - .then() and .catch() 

        FOLLOW THE STEPS . Try it with ur own vs code code editor
====================================================
*/


/*
====================================================
STEP 1: Promise Based wait Function
====================================================
*/

function wait(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (ms > 2500) {
        reject("Delay too long!");
      } else {
        resolve("Waited " + ms + " ms");
      }
    }, ms);
  });
}


/*
====================================================
STEP 2: Basic .then() Example
====================================================
*/

console.log("---------- BASIC .then() ----------");

wait(1000).then(function (message) {
  console.log(message);
});


/*
====================================================
STEP 3: Promise Chaining
====================================================
*/

console.log("---------- PROMISE CHAINING ----------");

function test2() {
  console.log("Start");

  wait(1000)
    .then(function (first) {
      console.log(first);

      // IMPORTANT:
      // Returning a Promise makes the next .then() wait
      return wait(2000);
    })
    .then(function (second) {
      console.log(second);
      console.log("End");
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

test2();


/*
Expected Output:
Start
Waited 1000 ms
Waited 2000 ms
End
*/


/*
====================================================
STEP 4: Error Handling Example
====================================================
*/

setTimeout(function () {
  console.log("\n---------- ERROR HANDLING ----------");

  wait(3000) // this will reject
    .then(function (message) {
      console.log(message);
    })
    .catch(function (error) {
      console.log("Caught Error:", error);
    });

}, 4000);



/*
====================================================
STEP 5: Cleaner Version Using Arrow Functions
====================================================
*/

setTimeout(function () {
  console.log("\n---------- CLEANER VERSION ----------");

  wait(1000)
    .then(first => {
      console.log(first);
      return wait(1500);
    })
    .then(second => {
      console.log(second);
      console.log("Finished");
    })
    .catch(error => {
      console.log("Error:", error);
    });

}, 7000);
