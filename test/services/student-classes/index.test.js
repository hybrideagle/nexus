'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('student-classes service', function() {
  it('registered the student-classes service', () => {
    assert.ok(app.service('student-classes'));
  });
});
