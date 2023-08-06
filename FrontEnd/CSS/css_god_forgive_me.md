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


#### 实现从左到右(左上到右下)滚动展开盒子

```html
<style>
    .parent {
        width: 200px;
        height: 200px;
        overflow: hidden;
        position: absolute;
        z-index: 2;
    }

    .child {
        position: absolute;
        display: inline-flex;
        z-index: 1;
    }
</style>

<!-- change parent width from 0 to 200px, the child box when show gradually -->
<div class="parent">
    <div class="child">
        This is child box, as parent's width change, box open
    </div>
</div>

```


#### css动画设置提前进入播放状态

```style
// 指定transition-delay 为负值x
// 这时0s表示上一个动画循环刚结束，负值x的状态，即从动画循环刚结束的时刻倒放，类似倒带播放的模式，倒带x时间段对应的状态为对应页面元素的初始挂载状态

.test-animation-delay {
    transition-delay: -2s;
}

// 本例中将会从上一个动画循环的最后2s开始，如果一个动画循环周期小于2s,则
```

[css-transition-delay-with-a-negative-value](https://stackoverflow.com/questions/41432527/css-transition-delay-with-a-negative-value)

[animation-delay negative value](https://codepen.io/zhaoyitong/pen/GRwLKJL)
