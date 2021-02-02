### Notes about CSS surprise !!!




#### Flex box
1. flex box parent height won't fit its content

```html
<div class="parent">
    <div class="child1">
        <input type="text" value="flex-box-height" />
    </div>
    
</div>

<style>
    .parent {
        display: flex;
    }
    
    .parent .child1 {
        height: 46px;
        line-height: 46px;
    }
</style>


```

Here, as parent box use `display: flex` , its height will correct with child's height



Question: the height of element in Chrome and Firefox is different???





#### Font-weight

The **`font-weight`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) that is currently set.

```ty
const headerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '24px',
    fontWeight: '500', // here 
    color: 'rgba(26, 39, 54, 1)'
}

```

- Fallback weights

  If the exact weight given is unavailable, then the following rule is used to determine the weight actually rendered [refs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)



#### Transform: translate

```css
.transform {
    transform: translate(50%, 50%); /* (0,0) is located at left top corner of box, 50% means half of box to right, half of box to bottom */
}

/* an interview at bytedance  */

.transform-origin {
    transform-origin: top left; /* The default origin for the rotation is `50% 50%`(i.e the center) */
}

/* skew() https://www.quackit.com/css/functions/css_skew_function.cfm */
.transform-with-skew {
    transform: skew(10deg, 0);
}


```

#### GET Browser Width && Height

[HTML 获取屏幕、浏览器、页面的高度宽度](https://www.cnblogs.com/chris-oil/p/6662894.html)


