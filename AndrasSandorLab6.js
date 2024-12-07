function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Success: Operation completed successfully after 2 seconds.");
      }, 2000);
    });
  }
  
  function rejectAfter2Seconds() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Error: Operation failed after 2 seconds.");
      }, 2000);
    });
  }
  
  Promise.resolve(1)
    .then(value => {
      return value * 2; 
    })
    .then(value => {
      return value + 3; 
    })
    .then(value => {
      return value / 2; 
    })
    .then(finalValue => {
      console.log("Final result after promise chaining:", finalValue); 
    });
    
  function randomOperation() {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5; 
      setTimeout(() => {
        if (isSuccess) {
          resolve("Success: Random operation succeeded.");
        } else {
          reject("Error: Random operation failed.");
        }
      }, 2000);
    });
  }
  
  randomOperation()
    .then(successMessage => {
      console.log(successMessage);
    })
    .catch(errorMessage => {
      console.error(errorMessage);
    });
    
  async function asyncCall() {
    try {
      const result = await resolveAfter2Seconds();
      console.log("Async/Await Result:", result);
    } catch (error) {
      console.error(error);
    }
  }
  
  asyncCall();
  
  async function asyncErrorHandling() {
    try {
      const result = await rejectAfter2Seconds();
      console.log("Async/Await Result:", result);
    } catch (error) {
      console.error("Caught an error with try...catch:", error);
    }
  }
  
asyncErrorHandling();
  