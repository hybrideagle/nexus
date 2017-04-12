'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('instructor_classes service', function() {
  it('registered the instructor_classes service', () => {
    assert.ok(app.service('instructor_classes'));
  });
});
