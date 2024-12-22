# Node.js Unhandled Exception Crash

This repository demonstrates a common issue in Node.js applications: server crashes caused by unhandled exceptions during request processing.  The `bug.js` file shows a server that is vulnerable to crashing if it encounters an unexpected error during request handling. The `bugSolution.js` file provides a solution that uses error handling to prevent the server from crashing and provides better diagnostics.

## Bug

The `bug.js` file contains an HTTP server that lacks proper error handling.  If the request processing throws an exception (e.g., due to a database error or a resource exhaustion), the server will crash without providing informative error messages.

## Solution

The `bugSolution.js` file shows how to use `try...catch` blocks to gracefully handle exceptions that might occur during request processing. This prevents the server from crashing and provides more robust logging for debugging.