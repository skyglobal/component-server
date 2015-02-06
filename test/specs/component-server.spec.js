document.body.innerHTML = __html__['_site/index.html'];

var component-server = skyComponents['component-server'];

//component-server.init(); //live events don't init for karma, so init them here if you need to

describe('component-server module can ', function () {

    it('sum an array of numbers', function () {

        expect(component-server.sum([1,2,3])).toBe(6);

    });

});