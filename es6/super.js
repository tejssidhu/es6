describe("super", function () {

    it("can invoke super methods", function () {

        class Person {
            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(value) {
                if (value) {
                    this._name = value;
                }
            }
        }

        class Employee extends Person {

            constructor(title, name) {
                super(name);
                this._title = title;
            }

            get title() {
                return this._title;
            }

            doWork() {
                return `${this._name} is working`;
            }


        };

        let e1 = new Employee("Developer", "Scott");

        expect(e1.name).toBe("Scott");
        expect(e1.title).toBe("Developer");
    });


});