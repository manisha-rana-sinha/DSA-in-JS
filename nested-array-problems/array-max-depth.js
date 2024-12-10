function maxDepth(arr) {
  let maxDepthSoFar = 0; // Track the maximum depth among child arrays
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      maxDepthSoFar = Math.max(maxDepthSoFar, maxDepth(item));
    }
  });
  return maxDepthSoFar + 1; // Add 1 to account for the current array level
}

console.log(maxDepth([1, [2, [3, [4], 5]], 6, [8, [8, 9]], 9]));

/**
 * function maxDepth(arr) {
    if (!Array.isArray(arr)) {
        return 0; // Base case: Non-array element has depth 0
    }

    let depth = 0;
    for (const item of arr) {
        depth = Math.max(depth, 1 + maxDepth(item)); // Add 1 here
    }

    return depth;
}

function maxDepth(arr) {
    if (!Array.isArray(arr)) {
        return 0; // Base case: Non-array element has depth 0
    }

    let depth = 0;
    for (const item of arr) {
        depth = Math.max(depth, maxDepth(item)); // Recursively calculate depth
    }

    return depth + 1; // Include the current array in the depth
}
 */
