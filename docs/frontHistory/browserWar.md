
# 浏览器战争（1995 - ）

浏览器战争一共打了三场，IE浏览器vs网景浏览器、IE浏览vs火狐浏览器、IE浏览器vs谷歌浏览器。

第一场浏览器之战打得尤其激烈。

微软的IE浏览器发布于1994年，但此时的网景已经占领绝对优势。微软在落后的情况，反编译Netscape的源码，推出IE与JScript。但是由于Bug非常多，大家不愿意为IE开发网站，因此发掘出UA，专门过滤掉IE浏览器。

UA即Navigator.userAgent ，是用一个字符串来记录用户当前运行在什么操作系统与浏览器中。当前IE3的UA是这样的：

```js
Mozilla/2.0 (compatible; MSIE 3.02; Windows 95)
```

程序判断UA信息，假如发现当前运行的环境是IE浏览器的话，就提示用户用网景浏览器打开。因此微软不得不让自己的UA尽量伪装成网景的UA，欺骗用于检测UA的脚本，达到IE浏览器可以跑这些网站的目的。

最终，第一次浏览器之战以微软胜利，Netscape被美国在线收购，而落下帷幕。

第一次浏览器战争带来了一个问题：尽管当时有ECMA-262（JavaScript规范文档）与W3C（HTML与CSS的规范文档），微软却没有照规范来实现JavaScript、HTML与CSS，导致前端兼容问题的诞生。所以CSS Hack、浏览器判定、特性侦测，这些技术就应运而生。

这个时代最著名的人物是Dean Edwrad，他是最早的近乎完美解决事件绑定的兼容性大神，其addEvent()内置于jQuery最早的版本中。jQuery的作者John Resig看到其超强的技艺，最后放弃推出大而全的框架，专攻选择器引擎。

Dean Edwrad的IE7.js、IE8.js是早期处理浏览器兼容的良药，可以说是一切Polyfill<sup>[1]</sup>的起源。他写了大量的Hack， 比如在IE如何测量元素的宽高，许多操作DOM的兼容。

::: tip
[1]Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
比如说 polyfill 可以让 IE7 使用 Silverlight 插件来模拟 HTML Canvas 元素的功能，或模拟 CSS 实现 rem 单位的支持，或 text-shadow，或其他任何你想要的功能。
:::