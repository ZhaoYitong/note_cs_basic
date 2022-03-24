- 技术面

  - 网络

    - 涉及 nginx 部分, 待应用并理解
    - 跨域 CORS
      - Domain, scheme, port
      - 请求的对应服务端是否开放对应白名单从而匹配 origin
        - Allow-Same-Origin
    - https, http/2, http/3
    - 请求头, 协议, 标签
      - http头
        - Server-sent events `服务器可以偶尔推送消息到浏览器`
          ```javascript

          const evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } );

          evtSource.onmessage = function(event) {
          const newElement = document.createElement("li");
          const eventList = document.getElementById("list");

          newElement.textContent = "message: " + event.data;
          eventList.appendChild(newElement);

          evtSource.addEventListener("ping", function(event) {
          const newElement = document.createElement("li");
          const eventList = document.getElementById("list");
          const time = JSON.parse(event.data).time;
          newElement.textContent = "ping at " + time;
          eventList.appendChild(newElement);
          });
          }
          ```

        - WebSocket `通过升级现有HTTP协议来建立`

        - HTTP/2 vs HTTP/1.x
          - HTTP/2基于二级制协议。不再可读。vs HTTP/1.X 文本协议
          - 
        - ajax
          - 局部刷新, 早期是直接返回html
          - 做一个请求

            ```javascript
              if (window.XMLHttpRequest) {
                httpRequest = new XMLHttpRequest();
              } else if (window.ActiveXObject) {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
              }

              httpRequest.onreadystatechange = () => {
                // do sth when res
              }

              httpRequest.open('GET', 'http://www.example.org/some', true)


              httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

              if (httpRequest.readyState === XMLHttpRequest.DONE) {
                  // Everything is good, the response was received.
              } else {
                  // Not ready yet.
              }

              if (httpRequest.status === 200) {
                  // Perfect!
              } else {
                  // There was a problem with the request.
                  // For example, the response may have a 404 (Not Found)
                  // or 500 (Internal Server Error) response code.
              }

            ```

          - Server-sent 事件

          - Fetch
            - fetch vs ajax

              当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 ok 属性为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。

              fetch 不会发送跨域 cookies，除非你使用了 credentials 的初始化选项。（自2018 年 8 月以后，默认的 credentials 政策变更为 same-origin

              fetch 返回 promise
          - cookie

          - cache
            ```javascript
              http://foo.com/bar.html -> http://foo.com/bar.html?12345
              http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345

            ```


    - 文件上传?
     - 断点续传 ?
  - 安全

    - http 证书
       - https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/
    - 加密
    - 鉴权
    - 拦截
    - 免密登录问题
    - 输入防注入

  - 算法

    - leetcode 刷题

  - 前端

    - 技术框架(理解原理、优点、缺陷)

      - react

        - 类组件 和 函数组件差异
        - useCallback, useEffect, useMemo 等 react hooks 相关原理, 是如何做性能优化的
        - 生命周期的理解 类组件 和 函数组件
        - 性能优化, 如何分析

      - antd

        - 复杂组件的部分实现原理

          - Form

          - Table

        - 遇到的坑，待优化的地方

      - Umi

        - request 层的处理
          - 洋葱模型实现原理以及细节
        - .umi 内容的生成

        - 如何处理鉴权

      - Qiankun

        - 实现不同前端框架统一到一个项目代码 ~ 原理
        - 优势

        - 缺陷, 弊端

      - Dva

    - 基础

      - JavaScript
        - 你不了解的javascript

        - 原型链
          - 引用
            - 对象引用 ?
          - const let
        - bind, apply, call 基本实现

        - Promise 手写

        - fetch, ajax

        - 防抖 节流

        - yield 生成器?

      - TypeScript

        - 如何配置 tsconfig.json, 父文件夹下配置 对 子文件夹的作用

      - HTML

        - HTML5 新特性
          - 标签理解, 参考 MDN
            - DOCTYPE
            - meta
            - link
            - script
        - canvas 的运用, 理解

        - svg 的绘制, 对比 canvas
          - svg 绘制如何控制大小尺寸

      - CSS

        - flex
          - 布局实现原理, 以及相关属性控制
        - grid
          - 原理, 如何控制
        - 垂直居中, 水平居中
          - 不同实现方案下的原理, 差异以及应用
        - line-height height 是如何影响盒子的高度的

        - 多边形的绘制

          - 三角形
          - 待查看

        - 适配

          - 显示器不同分辨率下 px 的影响，原理
          - 1px 问题, 原理理解
          - img 实际宽高的控制

        - 拖拽组件的实现
          - 原理
          - 性能

    - 浏览器

      - 运行时
        - 宏任务 微任务
      - 调用栈 如何 debug 调试, 如鼠标点击触发到某个方法

      - 浏览器对跨域的限制

      - 浏览器对 iframe 加载的限制
        - 跨域限制?

      - 静态文件获取, 配置代理, 原理解析

      - index.html 执行顺序

      - 渲染，重绘，重排

      - 性能分析
        - performance
        - network

      <!-- -  -->

      - 一个 js 文件内部的执行顺序

        - 立即执行函数
          - 编译时执行
        - setTimeout
        - setInterval
        - 闭包, 变量销毁
        - Promise
        - 一段代码对应的 console.log 的输出顺序

      - debug 调试
        - Performance 性能分析
        - 浏览器 Cookie Session 的处理
        - React 浏览器插件为例
          - Redux
          - Component
      - 功能实现

        - 免密登录的原理

      - websocket 的原理, 坑

        - 结合网络部分

      - web worker

        - 原理
        - 应用

      - html 语义化处理
      - css 语义化处理
      - set get
        - 原理
        - 应用

      - 路由
        - hash
        - history
        - pushState (结合umi理解)
        - ./xxx/abc VS xxx/abc

    - 打包

      - 打包原理

      - webpack

      - babel

      - yarn build

      - package.json 配置

    - UT

      - JEST
        - jest.config.js

    - 开发规范

      - 编辑器
        - .editorconfig
      - 代码

        - typescript

          - tsconfig.json
          - typings.d.ts
          - external.d.ts

        - eslint
          - eslintrc.js
        - stylelint
          - stylelintrc.js

      - git
        - .husky
          - commit-msg
          - pre-commit

    - 私有/独立依赖

      - npm
        - 独立依赖配置
          - .npmrc

    - 版本管理

      - yarn.lock
      - yarn vs npm
        - 差异

    - 前端浏览器项目升级需要清缓存, 如何避免, 当前解决方案

    - 新特性
      - WebGL
      - WebGPU
      - WebRTC

  - CICD

    - 配置
      - Docker
        - .devcontainer
          - [devcontainerjson-reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
    - Jenkins
    - Node
      - 基本api
        - fs
      - mock
        - express
        - mockjs
      - SSR 的理解

  - 项目

    - 参与 projects

      - cloudchef
        - cmp-ui
          - 技术栈
            - 框架
              - angularjs
              - angular
            - UI 组件
              - nz-zorro
              - angular material
              - Json Schema
                - ngx-schema-form
      - zstack

        - cmp-ui

          - 技术栈
            - 框架
              - React
              - ant-design(3.x)
              - umi(2.x & 3.x)
              - qiankun(1.x & 2.x)
              - dva
              - redux
              - hooks
                - react hook
                - react-use
              - Json Schema
                - react-jsonschema-form

        - edge
          - ant-design(4.x)
          - umi(3.x)
          - qiankun(2.x)
          - apollo-client
          - graphql
        
    - 前端架构
      - Qiankun
      - Umi
      - react
      - dva
      - hooks
      - apollo
    - 组件开发
      - 基于ant-design 二次封装
    - 开发流程
      - Agile敏捷开发(Sprint迭代)
        - 前期产品收集需求, 整理, 设计原型
        - 和研发讨论
        - UI设计稿
        - 和研发确认
        - 任务评估，拆分，子任务派发
        - 开发
          - 后端先行(api讨论，确认)
          - 前端开发
          - 自测
          - 单测(任务强度限制)
          - 打包构建
        - 测试
        - bug修复
        - 回归



    - 负责工作
      - 日常开发
      - 带新人(实习生)
      - 代码review
      - 组件完善
      - 功能拆分


  - 后端部分技术文章阅读, 理解
