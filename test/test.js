var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Second two terms', function() {
  it('should return 1 and 2 for second two terms', function() {
      assert.strictEqual(main.fibonacci(2), 1);
      assert.strictEqual(main.fibonacci(3), 2);
    });
});