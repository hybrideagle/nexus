'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('instructor service', function() {
  it('registered the instructors service', () => {
    assert.ok(app.service('instructors'));
  });
});
