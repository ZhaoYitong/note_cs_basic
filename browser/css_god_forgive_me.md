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