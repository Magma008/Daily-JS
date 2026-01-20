// ? assert.strictEqual(duckDuckGoose(players, 1), "a");
// ? assert.strictEqual(duckDuckGoose(players, 3), "c");
// ? assert.strictEqual(duckDuckGoose(players, 10), "z");
// ? assert.strictEqual(duckDuckGoose(players, 20), "z");
// ? assert.strictEqual(duckDuckGoose(players, 30), "z");
// ? assert.strictEqual(duckDuckGoose(players, 18), "g");
// ? assert.strictEqual(duckDuckGoose(players, 28), "g");
// ? assert.strictEqual(duckDuckGoose(players, 12), "b");
// ? assert.strictEqual(duckDuckGoose(players, 2), "b");
// ? assert.strictEqual(duckDuckGoose(players, 7), "f");


// & The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// & Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// & name is a property of Player objects, e.g Player.name

// ! duck_duck_goose([a, b, c, d], 1) should return a.name
// ! duck_duck_goose([a, b, c, d], 5) should return a.name
// ! duck_duck_goose([a, b, c, d], 4) should return d.name

const game = (list, number) => {
    return list[(number - 1) % list.length].name
};

game([{ name: "a" }, { name: "b" }, { name: "c" }], 5);




