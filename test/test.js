if (typeof papply == 'undefined') {
    var papply  = require('..'),
        chai    = require('chai');
}
chai.should();

var lpApply = papply.lpApply,
    rpApply = papply.rpApply;

function concat (a, b, c) {
    return a + ' ' + b + ' ' + c;
}

describe('papply', function () {
    it('#lpApply', function () {
        lpApply(concat, '1', '2')('3').should.equal('1 2 3');
    });
    it('#rpApply', function () {
        rpApply(concat, '1', '2')('3').should.equal('3 1 2');
    });
});

