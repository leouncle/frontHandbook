# 三大框架割据时代（2016 - ）

React是突然爆发的，虽然它是与Angular是同时期发布，但因为JSX怪异的语法让人们远离它。此时已经进入移动互联网的中期，大公司都有自己的App，或者基于原生，或者基于Hybird。

Hybird是用WebView加载一个网站或一个SPA。

由于原生成本太贵，需要招两套班子，一套安卓的，一套iOS的；而Hybird则一直存在性能问题。于是在2017年，Facebook推出了React Native（RN）。

RN的性能不比原生差多少，比Hybird能好些， 其次使用JSX开发界面比原生的快； RN 只需要低成本的前端开发人员就能上手了。中国国内经过电商、共享模式、P2P、区块链等全新商业模式的开发浪潮后，前端人员数量大增。现在，他们只要稍微培训就可以转型为App开发。

在开发RN的过程中，人们开始了解React一系列的优胜之处。比如JSX背后的虚拟DOM技术，虽然事实证明虚拟DOM不会带来性能的巨大优势，但保证了你怎么写其性能不会太差。

React为了引入JSX，必须需要引入编译，这又间接促成Babel与webpack的壮大。尤其是Babel， 让我们在很旧的浏览器中使用非常新的语法，甚至一些还没有定案的语法。React从14升级到React 15，强制使用class语法，让这个推了好久的语法糖终于大规模落地。

之前如果JavaScript想使用类，只能自己模拟类，由于没有官方的实现，只能任由各优秀工程师发挥。而普通人想用好类，需要了解很复杂的Prototype机制。

现在只用几个新关键字就可以得到这一切。

如果对比Python 2与Python 3间的升级，JavaScript实在太辛运了！针对CSS逻辑功能过弱的问题，我们也有了新的解决方案：Less、Sass、PostCSS与CSS Modules！

谷歌在发布Angular的同时，也发布了一个叫Polymer的框架，那时它想推广一种叫Web Components的浏览器自定义组件技术。这其实是微软在IE5就玩剩的HTC技术的升级版。虽然它没有火起来，但它将Script、Style、Template三种内容混在一个文件的设计，启发一个留美华人，再结合当时的Backbone.js、Angular等设计，Vue.js横空出世。目前，这是国人最成功的前端框架了。

除此之外，国人也弄了好几套迷你React框架与迷你Vue框架。这有点像jQuery时代，大家疯狂做迷你jQuery框架一样。

总的来说，最有创造力的是React团队，做出状态管理器、CSS-in-JS、Flow静态类型检查、devTool、Fetch、前后端同构、Fiber、suspend、并发渲染等名词层出不穷。其中，状态管理器拥有上百套， CSS-in-JS也拥有上百套，Flow则让前端尝鲜到接口编程的好处，间接推动发TypeScript发展。这三大框架无法比拼个一二出来：Vue.js有国人的拥趸，React与Angular有大公司光环。

三大框架的缠斗从PC领域扩展到移动端：React有RN， Vue.js有Weex，Angular有ionic。想当年我们为了兼容浏览器，攒了一大堆浏览器侦探的Hack，全部贬值为垃圾了。

在这时期，一种全新的后端渲染崛起，称之为前后同构，既拥有早期SEO的功效，又能复用大量的业务逻辑。随着国内移动互联网的发展，获客成本提高，各种有效的商业模式都进入红海，但只有头部用户能赚到钱，马太效应越来越严重，纯粹的技术解决方案已经无法满足商业诉求了。