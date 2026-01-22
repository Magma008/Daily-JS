// ! it("test", () => {
// !     Test.expect(questions[0].usersAnswer === null);
// ! });

// + Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// ? var questions = [{
// ?     question: "What's the currency of the USA?",
// ?     choices: ["US dollar", "Ruble", "Horses", "Gold"],
// ?     corAnswer: 0
// ? }, {
// ?     question: "Where was the American Declaration of Independence signed?",
// ?     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
// ?     corAnswer: 0
// ? }];
// ?     ||
// ?     ||
// ?     \/
// ? var questions = [{
// ?     question: "What's the currency of the USA?",
// ?     choices: ["US dollar", "Ruble", "Horses", "Gold"],
// ?     corAnswer: 0,
// ?     usersAnswer: null
// ? }, {
// ?     question: "Where was the American Declaration of Independence signed?",
// ?     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
// ?     corAnswer: 0,
// ?     usersAnswer: null
// ? }];

const assigner = (array) => {
    return array.map((obj) => {
        return Object.assign(obj, { usersAnswer: null });
    })
};

assigner([{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}]);



