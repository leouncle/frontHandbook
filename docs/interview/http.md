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
