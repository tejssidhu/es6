describe('async generators', function () {

    xit('should be difficult to read with regular async code', function() {
        console.log("start");
        oldPause(500, function () {
            console.log("middle");
            oldPause(500, function () {
                console.log("end");
            });
        });
    });

    xit('should be easier to read with generators', function(done) {
        function* main() {
            console.log("start");
            yield pause(500);
            console.log("middle");
            yield pause(500);
            console.log("end");
            done();
        }

        async.run(main);
    });

    xit('should be easier to read with generators', function(done) {
        function* main() {
            var price = yield getStockPrice();
            if (price > 45) {
                yield executeTrade();
            } else {
                console.log('trade not made');
            }

            done();
        }

        async.run(main);
    });

    xit('should work with errors', function(done) {
        function* main() {
            var price = yield getStockPrice();
            if (price > 45) {
                yield executeTrade();
            } else {
                console.log('trade not made');
            }

            done();
        }

        async.run(main);
    });
});