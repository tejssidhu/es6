describe("getter and setter", function () {

    it("can have getters and setters", function () {

        class Employee {

            constructor(name) {
                this.name = name;
            }

            doWork() {
                return "complete!";
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(value) {
                this._name = value;
            }
        };

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        expect(e1.name).toBe("SCOTT");
        expect(e2.name).toBe("ALEX");

        e1.name = "Chris";
        expect(e1.name).toBe("CHRIS");
    });


});