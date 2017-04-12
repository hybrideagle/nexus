'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('student_classes service', function() {
  it('registered the student_classes service', () => {
    assert.ok(app.service('student_classes'));
  });
});
