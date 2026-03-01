/*
=====================PART ONE===============================
 (Incorrect Way) asynchronous behave of js
====================================================
Problem: wait() does NOT return a Promise.
So await has nothing to wait for.
*/

function waitWrong(ms) {
  setTimeout(() => {
    console.log("Waited " + ms + " ms");
  }, ms);

  return ms; //  Immediately returns value
}

async function testWrong() {
  console.log("Wait wrong Start");

  const first = await waitWrong(1000);
  console.log("Returned:", first);

  const second = await waitWrong(2000);
  console.log("Returned:", second);

  console.log("Wait wrong End");
}

testWrong();

/*
Expected Output Order:
Start
Returned: 1000
Returned: 2000
End
Waited 1000 ms
Waited 2000 ms

Explanation:
- setTimeout is asynchronous
- waitWrong() returns immediately
- await only waits for Promises
- Since no Promise is returned, await does nothing
*/




/* --------------------PART TWO-----------------------------



//___________Correct Way Using Promise)_______
// __________LETS MAKE IT SYNCHRONOUS________
        Now wait() returns a Promise.
        await will properly pause execution.
*/


// FUNCTION RESPONSIBLE FOR DELAY 
function wait(ms) {
  return new Promise((resolve) => { // a promise returns  
    setTimeout(() => {
      resolve("Waited " + ms + " ms");
    }, ms);
  });
}


async function test() {
  console.log("Start"); // start printed
  const first = await wait(1000); // await is working for promise to be fulfilled or reject
  console.log(first); // prints the wait func stored in variable first
  const second = await wait(2000);
  console.log(second);
  console.log("End");
}

test();

/*
Expected Output Order:
Start
Waited 1000 ms
Waited 2000 ms
End

Explanation:
- wait() now returns a Promise
- await pauses execution
- Code runs sequentially
*/

//__________________________---------PART TWO END----------______________________



// Introduceing .then() and catch()
// test().then(() => {
//   console.log("hy there class");
// });



// if the test function is not async check the test2 approach
function test2() {
  console.log(" then catch Start");

  wait(10000)
    .then(function(first) {
      console.log(first);
      return wait(20000);
    })
    .then(function(second) {
      console.log(second);
      console.log("then catch End");
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
}

test2();


/*
====================================================
STEP 3 Error Handling with try/catch
====================================================
*/

function waitWithError(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms > 1500) {
        reject("Time too long!");
      } else {
        resolve("Waited " + ms + " ms");
      }
    }, ms);
  });
}

async function testError() {
  try {
    console.log("Start");

    const first = await waitWithError(1000);
    console.log(first);

    const second = await waitWithError(2000); // will reject
    console.log(second);

    console.log("End");
  } catch (error) {
    console.log("Caught Error:", error);
  }
}


/*
====================================================
IMPORTANT CONCEPTS
====================================================

1️What is Asynchronous?
   - Code that runs later (not immediately)
   - Example: setTimeout(), API calls

2️What is Promise?
   - An object representing future result
   - States:
        - pending
        - fulfilled
        - rejected

3️ What does await do?
   - Waits only for Promises
   - Makes async code look synchronous

4️ Why Step 1 Failed?
   - No Promise returned
   - await cannot pause normal value
*/
