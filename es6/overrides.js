describe("overrides", function () {

    it("can override methods", function () {

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

            doWork() {
                return "free";
            }

            toString() {
                return this.name;
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
                return "paid";
            }
        };

        let e1 = new Employee("Developer", "Scott");
        let p1 = new Person("Alex");

        expect(p1.doWork()).toBe("free");
        expect(e1.doWork()).toBe("paid");
        expect(p1.toString()).toBe("Alex");
        expect(e1.toString()).toBe("Scott");

        let makeEveryoneWork = function (...people) {
            var results = [];

            for (var i = 0; i < people.length; i++) {
                if (people[i] instanceof Person) {
                    results.push(people[i].doWork());
                }
            };

            return results;
        }

        expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "paid"]);
    });
});