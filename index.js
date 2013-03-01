module.exports = {
    rpApply: rpApply,
    lpApply: lpApply
};

/**
 * Left partial application
 *
 * @return {Function}
 */
function lpApply () {
    var partialApplied = [].slice.call(arguments),
        fn = partialApplied.shift();
    return function () {
        var i, args = partialApplied.slice();
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return fn.apply(this, args);
    };
}

/**
 * Right partial application
 *
 * @return {Function}
 */
function rpApply () {
    var partialApplied = [].slice.call(arguments),
        fn = partialApplied.shift();
    return function () {
        var i, args = [].slice.call(arguments);
        for (i = 0; i < partialApplied.length; i++) {
            args.push(partialApplied[i]);
        }
        return fn.apply(this, args);
    };
}
