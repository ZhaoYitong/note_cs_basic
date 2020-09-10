CORS

1. 修改 响应头

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>

    <script>
        fetch("http://localhost:998/").then(res => res.text()).then(data => {alert(data)})
    </script>
</body>
</html>
```



```javascript
var express = require("express");

var app = express();

app.use(express.static(__dirname))

app.listen(90);


var app2 = express();

// 1. 修改响应头
 app2.get("/", function(req, res) {

     res.header("Access-Control-Allow-Origin", "*"); //
     res.send('hello')
 })

app2.listen(998);
```



2.  jsonp

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>

   <script>
        fetch("http://localhost:998/").then(res => res.text()).then(data => {alert(data)})
    </script>
</body>
</html>
```

```javascript

var express = require("express");

var app = express();

app.use(express.static(__dirname))

app.listen(90);


var app2 = express();

// 2. jsonp
app2.get("/", function(req, res) {
    var funcname = req.query.callback;
    console.log(req);
    res.send(funcname + "('你好')")
})
app2.listen(998);

```

