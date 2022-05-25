# Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

## 跟后端请求数据

正常情况下后端写好api的话，跟后端正常调用数据，在`vue.config.js`下的`devServer`, target根据具体情况修改后端同学的地址

```js
proxy: {
  // detail: https://cli.vuejs.org/config/#devserver-proxy
  [process.env.VUE_APP_BASE_API]: {
    target: `http://22.188.15.205:9010/`, //要代理的后端服务地址
    changeOrigin: true,
    pathRewrite: {
      ['^' + process.env.VUE_APP_BASE_API]: ''
    }
  }
}
```

## Mockjs

适用于后端还未写的情况下需要假数据。

项目在本地会启动一个`mock-server`来模拟数据。

```js
before: require('./mock/mock-server.js')
```

## 移除

mock拦截器某些时候会出问题，如果你不想使用`mock-server`的话只要在`vue.config.js`中移除`webpack-dev-server`中`before`这个`Middleware`就可以了。

```js
//before: require('./mock/mock-server.js') //把该段注释掉就行
```

:::tip
**请注意：该操作需要重启服务**
:::

## 新增

如果你想添加 mock 数据，只要在根目录下找到`mock`文件，添加对应的路由，对其进行拦截和模拟数据即可。

比如我现在在`src/api/table`(中需要添加一个查询某个页面table数据的接口`getList`，首先新建接口：

```js
export function getList(params) {
  return request({
    baseURL: process.env.VUE_APP_BASE_MOCK_API,
    url: '/table/list',
    method: 'get',
    params
  })
}
```

声明完接口之后，我们需要找到对应的 mock 文件夹[mock/table.js]，在下面创建一个能拦截路由的 mock 接口

```js
// fetchComments 的 mock
{
  url: '/table/list',
  type: 'get', // 必须和你接口定义的类型一样
  response: (req, res) => {
    // 返回的结果
    return {
      code: 0,
      data: {
        total: 1000,
        items: [list]
      }
    }
  }
}
```

## 修改

最常见的操作就是：你本地模拟了了一些数据，待后端完成接口后，逐步替换掉原先 mock 的接口。

我们以上面的例子：

```js
//找到对应的路由，并注释或删除
export function getList(params) {
  return request({
    baseURL: process.env.VUE_APP_BASE_MOCK_API, //该段注释掉或删掉
    url: '/table/list',
    method: 'get',
    params
  })
}
```
