
#### 页面绘制和刷新
```javascript
    
elementA.className = "a-style";
var heightA = elementA.offsetHeight;  // layout is needed
elementB.className = "b-style";       // invalidates the layout
var heightB = elementB.offsetHeight;  // layout is needed again
```

`VS`

```javascript

elementA.className = "a-style";
elementB.className = "b-style";
var heightA = elementA.offsetHeight;   // layout is needed and calculated
var heightB = elementB.offsetHeight;   // layout is up-to-date (no work)

```


#### innerText && textContent
https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/

https://www.zhangxinxu.com/wordpress/2019/09/js-dom-innertext-textcontent/
