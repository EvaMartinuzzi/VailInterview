# VailInterview
Array Integer Rotation Problem

## The Problem
The problem we would like you to solve deals with an array of integers. We want to rotate these integers
to a specified number of positions to the left.
If for example you have an array of integers [1,2,3,4,5,6,7] and we would like to rotate 2 positions to the
left, the solution expected would be [3,4,5,6,7,1,2].
Note: the solution should be able to handle a position value greater than the number of integers in the
array. If, for example, we would like to rotate [1,2,3,4,5,6,7] 8 positions to left, it would produce the
result [2,3,4,5,6,7,1]. 
Negative values for the positions to rotate will throw an error which the code
example should handle gracefully.

## The Setup

1. Optional: download an IDE (Like VS Code) to easily edit the code
2. Ensure you have [Node.JS](https://nodejs.org/en/download0) installed
3. Ensure you have a CLI tool (like GitBash)
4. Ensure you have an SSH connection on your current computer that links it to GitHub
5. Clone this repo ```git clone git@github.com:EvaMartinuzzi/VailInterview.git```
6. To run the function via command line, run ```node VailInterview/rotateArray.js [array to rotate] [how many positions to rotate]```, which would look something like ```node VailInterview/rotateArray.js 1,2,3 2```
7. To run the unit tests, install Jest ```npm install --save-dev jest```, and run the tests ```npx jest rotateArray.test.js```

## The Solution
I chose to use a reverse algorithm to shift the elements left. The solution is in the rotateArray.js file, but I have also set this repo up to be usable through the console.
