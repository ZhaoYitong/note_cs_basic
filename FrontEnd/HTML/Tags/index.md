- DOCTYPE
  - 防止浏览器在渲染文档时，切换到 "怪异模式(兼容模式)"的渲染模式，确保浏览器按照最佳的相关规范进行渲染
    - 浏览器排版引擎使用三种模式: 怪异模式 (Quirks mode)、接近标准模式(Almost standards mode)以及标准模式 (Standards mode)

- meta
  - 表示不能由其它HTML元相关元素(base, link, script, style 或 title) 之一的任何元数据信息

  - http-equiv
    - 定义了编译指示指令。所有允许的值都是特定HTTP头部的名称
      - content-security-policy
        允许页面制作者定义当前页面的内容策略，即允许的服务器和脚本端点，有助于防止跨站点脚本攻击
      - content-type
        - 若使用，值必须是"text/html; charset=utf-8"。
        - 只能用于MIME type 为 text/html的文档
      - x-ua-compatible
        - 若指定, 则 content 属性必须具有值 "IE=edge"
      - refresh
        - 若 content 只包含一个正整数，则为重新载入页面的时间间隔(second)
        - 若 content 包含一个正整数, 并且后存在字符串 ';url=' 和一个合法的URL, 则是重定向到指定链接的时间间隔(second)
  
  ```html
  <meta charset="utf-8">
  <!-- Redirect page after 3 seconds -->
  <meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
  ```

- link
  ```html
  <link href="main.css" rel="stylesheet">
  ```

  - href 外部资源路径
  - rel 关系(relationship)

  ```html
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-icon-114.png" type="images/png">
  ```

  - sizes 图标大小

  ```html
  <link href="print.css" rel="stylesheet" media="print">
  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
  ```

  - media 媒体类型, 在满足媒体条件时会被加载

  ```html
  <link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  ```
  
  - preload 和 prefetch 差异
    - 参考 [浏览器渲染优先级](../../Browser/render.md#浏览器页面资源加载过程与优化)

