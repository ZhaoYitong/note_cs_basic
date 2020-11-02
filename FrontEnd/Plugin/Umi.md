Umi 应用在SPA上


- 路由配置支持严格匹配

```javascript
export default {
  routes: [
    // url 为 /one/two 时匹配失败
    { path: '/one', exact: true },
    
    // url 为 /one/two 时匹配成功
    { path: '/one' },
    { path: '/one', exact: false },
  ],
}

```