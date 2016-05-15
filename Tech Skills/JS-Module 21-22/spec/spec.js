var app = require('../js/added21-22.js');


describe("testing DZ 21-22", function () {
    it("test imitateQuestions - 1", function () {
        // prepare
        var countTrueAnswers = 5;/*333*/
        // act
        var str = app.imitateQuestions();
        // assert
        expect(str.match(/"isTrue" : "true"/g).length).toBe(countTrueAnswers);
    });
    it("test imitateQuestions - 2", function () {
        // prepare
        var countAllQuestions = 9;/*8*/
        // act
        var str = app.imitateQuestions();
        // assert
        expect(str.match(/isTrue/g).length).toEqual(countAllQuestions);
    });
});

