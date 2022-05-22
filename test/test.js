const assert = require('chai').assert;
// refrencing the multiply.js file and importing it.
const multiply = require('../multiply');

// we use descibe to creat a block of unit tests that we are inporting from the multiply.js.
// we use it to test part of the logic in the function

describe('the multiply function', () => {
// should go green when you return 1
  it('should multiply 1 and 1 to get 1', () => {
    assert.equal(multiply(1, 1), 1);
  });

  // should fail if you return 1 (red)
  // should pass if we return a*b (green)
  it('should multiply 2 and 2 to get 4', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('should multiply 3 and 3 to get 9', () => {
    assert.equal(multiply(3, 3), 9);
  });

  it('should multiply 4 and 4 to get 16', () => {
    assert.equal(multiply(4, 4), 16);
  });

  it('should multiply 23 and 45 to get 1035', () => {
    assert.equal(multiply(23, 45), 1035);
  });
});
