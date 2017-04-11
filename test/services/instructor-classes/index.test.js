'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('instructor-classes service', function() {
  it('registered the instructor-classes service', () => {
    assert.ok(app.service('instructor-classes'));
  });
});
