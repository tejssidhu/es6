function getOrder(orderId) {
    return Promise.resolve({ userId: 35 });
}

function getUser(userId) {
    return Promise.resolve({ companyId: 18 });
}

function getCompany(companyId) {
    return Promise.resolve({ name: 'Pluralsight' });
}

function getCourse(courseId) {
    var courses = {
        1: { name: "Introduction to Cobol" },
        2: { name: "Yet Another C# Course" },
        3: { name: "How to make billions by blogging" }
    }
    return Promise.resolve(courses[courseId]);
}

function oldPause(delay, cb) {
    setTimeout(function () {
        console.log("paused for " + delay + "ms");
        cb();
    }, delay);
}

(function () {
    var seq;
    var run = function (generator) {
        seq = generator();
        var next = seq.next();
    }

    var resume = function (value) {
        seq.next(value);
    }

    var fail = function (reason) {
        seq.throw(reason);
    }

    window.async = {
        run: run,
        resume: resume,
        fail: fail
    };
}());

function pause(delay) {
    setTimeout(function () {
        console.log("paused for " + delay + "ms");
        async.resume();
    }, delay);
}

function getStockPrice() {
    setTimeout(function () {
        try {
            throw Error('there was a problem!');
            async.resume(50);
        } catch (ex) {
            async.fail(ex);
        }
    }, 300);
}

function executeTrade() {
    setTimeout(function () {
        console.log('trade completed');
        async.resume();
    }, 300);
}