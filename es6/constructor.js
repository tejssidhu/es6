describe("the constructor keyword", function () {

    it("can have a constructor", function () {

        class Employee {

            constructor(name) {
                this._name = name;
            }

            doWork() {
                return "complete!";
            }

            getName() {
                return this._name;
            }
        };

        var e1 = new Employee("Scott");
        var e2 = new Employee("Alex");

        expect(e1.getName()).toBe("Scott");
        expect(e2.getName()).toBe("Alex");
    });

});