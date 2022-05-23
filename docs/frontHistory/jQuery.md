# jQuery 时期（2009 - 2016）

2006年，jQuery发布，它当时的竞争对手很多：Dojo、Prototype、ExtJS、MooTools。

所以那时jQuery的宣传口号仅能说是它的性能上升了100%、200%、300%。直到2009年，Sizzle选择器引擎研发成功，jQuery才取得压倒性的优势。

当时前端界首要面对的是浏览器兼容性问题，jQuery在处理DOM兼容上真是知微见著, 发掘出大量的DOM/BOM兼容方案（例如Dean Edwrad的addEvent()， IE的px转换方案，domReady的doScroll方案，globalEval的兼容方案等）

jQuery也打破了前端开发者的编程思维，之前是按照后端的开发思路来的：做一个业务就先封装一个类，有了这个类后，再想办法传入一个DOM，然后再通过类方法操作DOM。而jQuery是DOM为中心，开发者可以选一个或多个DOM，变成jQuery对象，然后进行链式操作。当时为了改变用户的思维，国内的高手写了不少文章来引导大家。

其次，开发者们已开始注重前后端分离，并要求不能污染Object原型对象，不能污染window全局变量。这样，jQuery只占用两个全局变量。

再次，jQuery非常轻量级，采用Dean Edwards编写的Packer压缩后， 大小不到30KB。并且里面实现得非常精妙，以令人瞠目的手段解决各种兼容痼疾。

为了学习这些技巧，高手们翻了一遍遍jQuery的源码，所以网上有大量关于其源码详解的书藉。甚至前端工程师在面试时也会被考到jQuery的源码实现，这样，jQuery在国内更加流行。

jQuery的流行间接带来以下的发展

- 促使人们对CSS1~CSS3选择器的学习
- 促进了浏览器原生选择器引擎document.querySelectorAll、Element.matches的诞生
- 提高人们对domReady（DOMContentLoaded事件）的认识
- 促进了Promise与requestAnimateFrame 的诞生
- 最重要的是降低前端门槛，让更多人进入这行业，前端工程师的队伍越来越壮大

这样的话，不断涌现出优秀的工程师，他们创造了大量jQuery插件与UI库。为后jQuery时代，人们研发前端模块加载、统一异步机制、 打造大型MVC框架， 甚至伸向后端，接管打包脚本而发明Node.js，来腾出大量时间。

这个时期涌现了大量jQuery-like的库，其中最著名的是Zepto.js。Zepto的出现也标志着我们进入移动互联网时代。那时配套出的著名库还有iScroll、fastclick、Lazy Load、Modernizr、fullPage。

jQuery的链式操作风麾一时，也带来许多问题，当Ajax出现依赖时，就不可避免就出现回调地狱。因此针对这方面的讨论，诞生Deffered与Promise。有关回调地狱的讨论，在后来讲Node.js异步处理时，将会再一次热烈地讨论。因此太阳下没有新事，我们总是遇到相似的问题。

jQuery如此多的选择器也法维护，随着越来越多人涌现这行业，页面的交互也越来越复杂，从Web Page向Web App进化，新的趋势带来新的开发方式。