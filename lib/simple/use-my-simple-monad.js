'use strict';

var simpleMonad = wrap('cookie');

bind(simpleMonad, function (value) {
    console.info(value);
    return wrap(value);
});

simpleMonad = bind(simpleMonad, function (value) {
    return wrap({ type: value });
});

bind(simpleMonad, function (value) {
    console.log(value);
});
