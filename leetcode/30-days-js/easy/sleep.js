// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, millis);
    })
    return result;
}

async function sleep(millis) {
    const result = new Promise(() => {
        setTimeout(() => {
            console.log('My World');
        }, millis);
    })
    return result;
}


 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
