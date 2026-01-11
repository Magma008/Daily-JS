assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');