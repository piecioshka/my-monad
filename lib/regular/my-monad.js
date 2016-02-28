'use strict';

function Monad(value) {
    this.value = value;
}

Monad.prototype.bind = function (f) {
    return f(this.value);
};
