'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('instructors service', function() {
  it('registered the instructors service', () => {
    assert.ok(app.service('instructors'));
  });
});
