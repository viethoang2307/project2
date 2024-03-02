"use strict";
// Global function to create a filtering function
function makeMultiFilter(originalArray) {
  // Initialize currentArray to be identical to originalArray
  let currentArray = originalArray.slice();

  // Filtering function
  function arrayFilterer(filterCriteria, callback) {
    // Check if filterCriteria is a function
    if (typeof filterCriteria === "function") {
      // Filter currentArray based on filterCriteria
      currentArray = currentArray.filter(filterCriteria);
    }

    // Check if callback is a function
    if (typeof callback === "function") {
      // Call the callback with the value of originalArray

      callback.call(originalArray, currentArray);
    }
    if (filterCriteria === undefined) {
      return currentArray;
    }
    // Return the arrayFilterer function for chaining
    return arrayFilterer;
  }

  // Return the filtering function
  return arrayFilterer;
}
