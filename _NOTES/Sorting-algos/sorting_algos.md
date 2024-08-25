# Sorting Algorithms

## Bubble Sort

### Pseudo Code un-optimized version

1. Loop through i = 0 to n.length-1
   1. In every pass loop through j=0 to n.length-1
      1. Compare arr[j] and arr[j+1], if (arr[j] > arr[j+1])
         Swap arr[j] and arr[j+1]
         Point j = j+1

Note - with every pass the larger element bubbles up and the comparison reduces by 1.

### Pseudo Code optimized version
