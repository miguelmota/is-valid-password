var test = require('tape');
var isValidPassword = require('../is-valid-password');

test('is valid password', function (t) {
  t.plan(8);

  t.equal(isValidPassword('dfE3kds#$%'), true);
  t.equal(isValidPassword('dfE3kds4dD'), true);
  t.equal(isValidPassword('345dsasdff'), false);
  t.equal(isValidPassword('34543455'), false);
  t.equal(isValidPassword('ahjklDDf'), false);
  t.equal(isValidPassword('d#3dA@'), false);
  t.equal(isValidPassword('#$$%%$%$$'), false);
  t.equal(isValidPassword({}), false);
});
