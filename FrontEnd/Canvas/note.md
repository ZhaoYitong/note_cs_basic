#### init
```html

<html>
<head>
  <style>
    .box {
      border: 1px solid black;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  </style>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);
      }
    }
  </script>
</head>

<body onload="draw();">
  <div class="box">
    <canvas id="canvas" width="150" height="150" style="border: 1px solid black;"></canvas>
  </div>

</body>

</html>

```


#### 绘制路径

[路径](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

```javascript
// beginPath()


// moveTo(x, y)
```