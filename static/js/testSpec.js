describe("My howOldAmI function", function() {
    beforeEach(function() {
        age = new howOldAmI();
    });

    describe("Checks age", function() {

        it("should exist", function() {
            expect(howOldAmI).toBeDefined();
        });

        /*Testing Baby Statement*/

        it("I am a baby when called as howOldAmI(5)", function() {
            const result = howOldAmI(5);
            expect(result).toBe("I am a baby");
        });

        /*Testing Child Statement*/
        it("I am a child when called as howOldAmI(8)", function() {
            const result = howOldAmI(8);
            expect(result).toBe("I am a child");
        });

        /*Testing Teenager Statement*/

        it("I am a teenager when called as howOldAmI(17)", function() {
            const result = howOldAmI(17);
            expect(result).toBe("I am a teenager");
        });

        /*Testing Young Adult Statement*/

        it("I am a young adult when called as howOldAmI(22)", function() {
            const result = howOldAmI(22);
            expect(result).toBe("I am a young adult");
        });


        /*Testing Old Adult Statement*/

        it("I am a old adult when called as howOldAmI(90)", function() {
            const result = howOldAmI(90);
            expect(result).toBe("I am a old adult");
        });
        
        /*Testing Incorrect age statement*/
        
        it("I can’t tell what age I am because that age is incorrect! when called as howOldAmI(125)", function() {
            const result = howOldAmI(125);
            expect(result).toBe("I can’t tell what age I am because that age is incorrect!");
        });

    });
});
