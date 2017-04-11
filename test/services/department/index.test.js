'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('department service', function() {
  it('registered the departments service', () => {
    assert.ok(app.service('departments'));
  });
});
