'use strict';

function wrap(value) {
    return function () {
        return value;
    }
}

function bind(monad, f) {
    return f(monad());
}
