# http

## 状态码分类

- 1xx 服务器收到请求
- 2xx 成功
- 3xx 重定向
- 4xx 客户端错误
- 5xx 服务器错误

## 常见状态码

- 200 成功
- 301 永久重定向（同时返回一个 location ，写明重定向的 url）。例如一个网站的网址永久性的切换了
- 302 临时重定向（同时返回一个 location ，写明重定向的 url）。例如短链跳转
- 304 资源未修改过
- 404 未找到资源
- 403 没有权限，例如需要登录之后才能请求
- 500 服务器内部错误，例如服务器代码异常
- 504 网关超时，例如上游服务器连接失败（服务器不是一台机器，可能会有很多台）

## 常用 methods

之前，常用的方法就是 get 和 post

- get 从服务端获取数据
- post 向服务端提交数据

现在，随着技术更新，以及 Restful API 设计（下文会讲）。有更多的 methods 被应用

- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

## Restful API

Restful API 是前后端接口的一种设计规范，经历了几年的发展，已经被全面应用。前端面试常考。

- 传统 API 设计：把每个 API 当做一个功能
- Restful API 设计：把每个 API 当做一个资源标识

需要用到的手段

- 不使用 url 参数
- 使用 method 表示操作类型

例如要获取一个列表

- （不使用 url 参数）
- 传统 API 设计：`/api/list?pageIndex=2` —— 一个功能
- Restful API 设计：`/api/list/2` —— 一个资源

再例如要操作一个数据

- 传统 API 设计（每个 API 都是功能）
  - `/api/create-blog` ，post 请求
  - `/api/udpate-blog?id=101`，post 请求
  - `/api/get-blog?id=101`， get 请求
- Restful API 设计（每个 API 都是资源）
  - `/api/blog` ，post 请求
  - `/api/blog/101` ，patch 请求
  - `/api/blog/101` ，get 请求

## http headers

headers 有很多，只讲一下最常用的，也是面试常考的。

### request headers

浏览器发送请求时，传递给服务端的信息

- Accept 浏览器可接收的数据类型
- Accept-Encoding 浏览器可接收的压缩算法，如 gzip
- Accept-Language 浏览器可接收的语言，如 zh-CN
- Connection: keep-alive 一次 TCP 连接重复使用
- cookie
- Host
- User-Agent 浏览器信息
- Content-type 发送数据的类型，常见的有 application/json，application/x-www-form-urlencoded，multipart/form-data，text/plain 等（用 postman 可演示）

### response headers

- Content-Type 返回的数据类型，对应 Accept
- Content-Length 数据大小
- Content-Encoding 压缩算法，如 gzip ，对应 Accept-Encoding
- Set-Cookie

### 自定义 header

有些接口需要前端调用时，加一个自定义的 header 。
如 axios 中自定义 headers http://www.axios-js.com/docs/#Request-Config

## 三次握手四次挥手

握手(建立连接)：

1. 客户端给服务端发送 syn 报文(seq = x)请求连接
2. 服务端给客户端发送 ack 报文(seq = x+1)，同时向客户端发送 syn 报文(seq=y)
3. 客户端收到确认 ack 报文(seq=y+1)

挥手(断开连接)：

1. 客户端发送一个 fin 报文(seq=u)
2. 服务端接收到 fin 报文，返回客户端 ack(seq=u+1)
3. 服务发送 fin 报文(seq=w)
4. 客户端接收到 fin,返回 ack(seq=w+1)

更详细的 [面试官，不要再问我三次握手和四次挥手 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/86426969)

## http 和 https

1. https 需要到 ca（Certificate Authority，证书颁发机构）申请证书
2. http 默认端口是 80，https 默认 443
3. http 是明文传输，https 有 ssl 加密传输协议
4. http 是无状态的，https 是有状态的

## http 缓存

### 哪些资源需要缓存

对于一个网页来说

- html 页面不能缓存
- 业务数据不能缓存（例如一个博客项目，里面的博客信息）
- 静态资源可以缓存，js css 图片等（所有的静态资源累加起来，体积是很大的）

PS：讲 webpack 时讲过 `contentHash` ，就是给静态资源加上一个唯一的 hash 值，便于缓存。

### 缓存策略 —— 强制缓存，客户端缓存

**Cache-Control** (response headers 中) 表示该资源，被再次请求时的缓存情况。

- `max-age:31536000` 单位是 s ，该资源被强制缓存 1 年
- `no-cache` 不使用强制缓存，但不妨碍使用协商缓存（下文会讲）
- `no-store` 禁用一起缓存，每次都从服务器获取最新的资源
- `private` 私有缓存（浏览器级缓存）
- `public` 共享缓存（代理级缓存）

关于 Expires

- http 1.0 ，设置缓存过期时间的
- 由于本地时间和服务器时间可能不一致，会导致问题
- 已被 Cache-Control 的 max-age 代替

### 缓存策略 —— 协商缓存（对比缓存），服务端缓存

当强制缓存失效，请求会被发送到服务端。此时，服务端也不一定每次都要返回资源，如果客户端资源还有效的话。

第一，**Last-Modified**（Response Headers）和 **If-Modified-Since**（Request Headers）

- Last-Modified 服务端返回资源的最后修改时间
- If-Modified-Since 再次请求时带着最后修改时间
- 服务器根据时间判断资源是否被修改（如未被修改则返回 304，失败则返回新资源和新的缓存规则）

第二，**Etag**（Response Headers）和 **If-None-Match**（Request Headers）

- Etag 服务端返回的资源唯一标识（类似人的指纹，唯一，生成规则由服务器端决定，结果就是一个字符串）
- If-None-Match 再次请求时带着这个标识
- 服务端根据资源和这个标识是否 match （成功则返回 304，失败则返回新资源和新的缓存规则）

如果两者一起使用，则**优先使用 Etag** 规则。因为 Last-Modified 只能精确到秒级别。

### 刷新操作对应不同的缓存策略

三种操作

- 正常操作：地址栏输入 url ，点击链接，前进后退等
- 手动刷新：F5 或者点击刷新按钮
- 强制刷新：ctrl + F5

对应的缓存策略

- 正常操作：强制缓存有效，协商缓存有效
- 手动刷新：强制缓存*失效*，协商缓存有效
- 强制刷新，强制缓存*失效*，协商缓存*失效*
