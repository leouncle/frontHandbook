# http

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
