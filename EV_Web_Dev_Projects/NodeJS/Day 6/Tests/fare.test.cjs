const mocha = require('mocha');
const chai = require('chai');

const fares = require('../fares'); // Ensure the path to `fares` is correct

const expect = chai.expect;

describe('Fares Calculation', function () {
    it('should return 50 for 0 km and 0 min', function () {
        let fare = fares.calcfare(0, 0); // Ensure `calcfare` is the correct method in `fares`
        expect(fare).to.equal(50);
    });

    it('should return 100 for 10 km and 0 min', function () {
        let fare = fares.calcfare(10, 0);
        expect(fare).to.equal(100);
    });

    it('should return 56 for 3 km and 18 min', function () {
        let fare = fares.calcfare(3, 18);
        expect(fare).to.equal(56);
    });
});
