# Project Euler Javascript

Javascript solutions to the [Project Euler](https://projecteuler.net) challenges.

Each solution is designed to run under 10 seconds execution time on my local machine.

## About

Problem solutions are located in the [solution](/project_euler/solution) directory. Problems are named after their problem number, problem 1 for example would be `p1.js`.

Each problem has a test located in the [test](/project_euler/test) directory. Tests are named after the file they are testing, `p1.js`'s test would be `p1.test.js`.

Each problem may have multiple solutions. Each solution is named by its number, for example `s0` is the first solution. The first solution is often less efficient, but very direct. The most efficient solution is always exported as `efficient`. So `p1`'s most efficient solution would be `p1.efficient`.

Helper code is located in the [src](/project_euler/src) directory.


## Getting Started

To install all dependencies:

```bash
npm install
```

To run all tests:

```bash
npm test
```

To run a specific test supply the test name as an argument to the command, for example to run the tests for problem 1:

```bash
npm test test/p1.test.js
```

## License

All code is licensed under an MIT license, for further details see [LICENSE](/LICENSE).
