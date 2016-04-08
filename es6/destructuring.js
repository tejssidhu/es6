describe("destructuring", function () {

	it("can destructure arrays", function () {

		//let x = 2;
		//let y = 3;

		//descruturing assignment
		//left side is not an array - just a list of variables
		//right side is an array
		//[x, y] = [y, x];

		//let[x, y] = [3, 2];

		var doWork = function() {
			return [1, 3, 2];
		};

		let [, x, y, z] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();
	});

	it("can destructure objects", function() {

		let doWork = function() {
			return {
				firstName: "Scott",
				lastName: "Allen",
				handles: {
					twitter: "OdeToCode"
				}
			};
		};

		//let
		//{
		//	firstName: foreName, 
		//	handles:{twitter: twitterUsername}
		//} = doWork();

		let
		{
			firstName, 
			handles:{twitter}
		} = doWork();

		expect(firstName).toBe("Scott");
		expect(twitter).toBe("OdeToCode");
		
	});

	it("works with parameters", function() {
		//{data, cache, headers} is the destructuring syntax
		let doWork = function (url, {data, cache, headers})
		{
			return data;
		};
		
		//assigning values to the destructured parameters
		//{
		//	data: "test",
		//	cache: false
		//}
		let result = doWork(
			"api/test", {
				data: "test",
				cache: false
			}
		);

		expect(result).toBe("test");
	});

});