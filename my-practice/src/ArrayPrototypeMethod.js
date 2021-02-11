// Create a Function
function map(arr, mapCb) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof mapCb !== "function") {
    return [];
  } else {
    let result = [];
    // We're making a results array every time we call this function
    for (let i = 0, len = arr.length; i < len; i++) {
      // push the result of the mapCallback in the 'result' array
      result.push(mapCb(arr[i], i, arr));
    }
    // return the result array
    return result;
  }
}
