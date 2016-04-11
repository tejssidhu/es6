describe("Weak Sets", function () {

    it("should not have properties & methods that relate to the entire set", function () {
        var set = new WeakSet();
        expect(set.size).toBe(undefined);
        expect(set.entries).toBe(undefined);
        expect(set.values).toBe(undefined);
        expect(set.forEach).toBe(undefined);
    });

    it("should be able to find items with has", function () {
        var set = new WeakSet();
        var item = { name: 'Joe' };
        set.add(item);
        expect(set.has(item)).toBe(true);
    });

    it("should be able to remove items with delete", function () {
        var set = new WeakSet();
        var item = { name: 'Joe' };
        set.add(item);
        set.delete(item);
        expect(set.has(item)).toBe(false);
    });

    //clear not longer exists
    //it("should remove all items when clear is called", function () {
    //    var set = new WeakSet();
    //    var item = { name: 'Joe' };
    //    set.add(item);
    //    set.clear();
    //    expect(set.has(item)).toBe(false);
    //});
});

describe("Weak Maps", function () {

    it("should not have properties & methods that relate to the entire set", function () {
        var map = new WeakMap();
        expect(map.size).toBe(undefined);
        expect(map.entries).toBe(undefined);
        expect(map.keys).toBe(undefined);
        expect(map.values).toBe(undefined);
        expect(map.forEach).toBe(undefined);
    });


    it("should be able to determine existence of the an item with has", function () {
        var map = new WeakMap();
        var key = {};
        map.set(key, 'a');
        expect(map.has(key)).toBe(true);
    });

    it("should be able to get the correct value", function () {
        var map = new WeakMap();
        var key = {};
        map.set(key, 'a');
        expect(map.get(key)).toBe('a');
    });

    it("should be able to remove items with delete", function () {
        var map = new WeakMap();
        var key = {};
        map.set(key, 'a');
        map.delete(key);
        expect(map.has(key)).toBe(false);
    });

    //clear not longer exists
    //it("should be able to remove all items with clear", function () {
    //    var map = new WeakMap();
    //    var key1 = {};
    //    map.set(key1, 'a');
    //    var key2 = {};
    //    map.set(key2, 'b');
    //    expect(map.has(key1)).toBe(false);
    //    expect(map.has(key2)).toBe(false);
    //});
});