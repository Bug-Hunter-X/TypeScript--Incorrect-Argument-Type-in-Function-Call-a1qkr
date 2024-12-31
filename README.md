# TypeScript: Incorrect Argument Type in Function Call

This repository demonstrates a common TypeScript error: passing an incorrect argument type to a function. The `greeter` function expects a single string, but an array is provided.  The solution shows how to address this by correctly handling the array input.

## Bug

The `bug.ts` file contains the erroneous code. The `greeter` function is called with an array, which leads to a runtime type error.

## Solution

The `bugSolution.ts` file shows the corrected code. This version iterates through the array and calls the `greeter` function for each element.  Alternatively, you could modify `greeter` to handle arrays directly if that is a suitable design.