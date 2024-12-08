# Incorrect Object Comparison with Circular References

This repository demonstrates a common bug in TypeScript related to comparing objects with circular references. The `compareObjects` function attempts to recursively compare objects but fails when encountering circular references, potentially leading to stack overflow errors or incorrect comparison results.

## Bug Description

The provided `compareObjects` function doesn't handle circular references effectively.  When it encounters an object that directly or indirectly references itself, it enters an infinite recursion, resulting in a stack overflow. Even without an explicit stack overflow, the comparison logic can produce incorrect results when dealing with cyclical structures.

## Solution

The solution involves using a `Set` to track visited objects during the comparison. This prevents infinite recursion by detecting and skipping already visited objects. The improved function uses this approach to correctly handle circular references, preventing stack overflows and ensuring accurate comparison.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Compile and run the TypeScript code using a suitable TypeScript compiler (e.g., tsc) and Node.js interpreter.   Observe the incorrect results with the original function and the correct results after the bug is fixed.
