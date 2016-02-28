'use strict';

var regularMonad = new Monad('cookie');

regularMonad.bind(function (value) {
    console.info(value);
    return new Monad(value);
});

regularMonad = regularMonad.bind(function (value) {
    return new Monad({ type: value });
});

regularMonad.bind(function (value) {
    console.log(value);
});
