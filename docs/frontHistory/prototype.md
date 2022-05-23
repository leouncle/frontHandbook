# Prototype时期（2005 - 2009年）

Prototype是Sam Stephenson写的一个非常优雅的JavaScript基础类库。他是Ruby的大牛，因此Prototype的许多方法名都是来自Ruby界。

Sam Stephenson最大的贡献是发掘了Prototype与创造了Function.prototype.bind，在数组上也写了一大堆方法，其中许多被标准化了。

同期的MooTools也是Prototype挂方法，当时，大家还在前端论坛为这个争吵。还有前端工程师喜欢在当时很出名的前端聚集地——蓝色理想（现沦为设计师网站）上，讨论如何扒脚本、分享弹层、日历等小组件的技术，这在当时已经是非常了不起的事。

Prototype当时还解决两大问题：动画特效与Ajax请求。动画特效是由Scriptaculous提供，我们现在所熟知的各种缓动函数，各种特效的命名与大致的运行形态，都是由Scriptaculous确定下来的。

在早期，谷歌就开始使用iframe实现页面刷新。

2005 年2月，杰西·詹姆士·贾瑞特（Jesse James Garrett）发表了一篇名为《Ajax：一种Web应用程序开发的新方法》的文章后，Ajax被挖掘出，大家才开始重视起这技术的应用。

例如IE下的ActiveXObject("Microsoft.XMLHTTP")，这是IE创建Ajax引擎的。假如当时有工程师开发出一个核心库，如果不包含Ajax的封装，便不好意思发布出来。

当时前端开发模式是选择一个核心库，找一些组件，或者扒别人的脚本进行开发。

Prototype的源码挺好理解的，代码量也少，只有5000多行，里面的每个方法也很易扒出来，因此一些大公司总有高手能创造自己的Prototype。
