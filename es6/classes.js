describe("the class keyword", function () {

    it("creating a class - pre es6", function () {
        
        var Employee = function () {

        };
        
        Employee.prototype = {
            doWork: function () {
                return "complete!";
            }
        };

        var e = new Employee();
        expect(e.doWork()).toBe("complete!");
    });

    it("creating a class - in es6", function () {

        class Employee {
            doWork() {
                return "complete!";
            }
        };

        var e = new Employee();
        expect(e.doWork()).toBe("complete!");
    });

    it("can create a class", function () {

        class Employee {
            doWork() {
                return "complete!";
            }

            getName() {
                return "Scott";
            }
        };

        var e = new Employee();
        expect(e.doWork()).toBe("complete!");
        expect(e.getName()).toBe("Scott");
        expect(Employee.prototype.doWork.call(e)).toBe("complete!");
    });

});