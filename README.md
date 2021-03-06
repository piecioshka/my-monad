# my-monad

> My own implementations of Monads

## The Monadic Laws

 * a monad is a wrapper around another type
 * all monads must have a function to wrap themselves around other data types
 * all monads must be able to feed the value or values that they wrap into another function, as long as that function eventually returns a monad

## Regular

Implementation:

```javascript
function Monad(value) {
    this.value = value;
}

Monad.prototype.bind = function (f) {
    return f(this.value);
};
```

Test:

```javascript
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
```

## Simple

Implementation:

```javascript
function wrap(value) {
    return function () {
        return value;
    }
}

function bind(monad, f) {
    return f(monad());
}
```

Test:

```javascript

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
```

---

On each we have the same results:

```
 > "cookie"
 > Object {type: "cookie"}
```
