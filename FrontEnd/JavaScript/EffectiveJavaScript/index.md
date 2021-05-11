#### Effective Javascript ~ David Herman

- Item 3: Beware of Implicit Coercions
  ```javascript
  var a = NaN;
  a !== a; // true

  function isRealNaN(x) {
    return x !== x;
  }
  ```

  ```javascript

  var obj = {
    toString: function() {
    return "[object MyObject]";
    },
    valueOf: function() {
    return 17;
    }
  };

  "object: " + obj; // "object: 17"
  ```