# 新增页面

## 新增router

先在 `@/router/staticRoutes.js` 中增加你需要添加的路由。

**比如我们要新增一个主页页面**

```js
/**
 * 相关配置项
 * hidden: true                   当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
                                  只有一个时，会将那个子路由当做根路由显示在侧边栏
                                  若你想不管路由下面的 children 声明的个数都显示你的根路由
                                  你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  * redirect: 'noRedirect'        当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  * name:'router-name'            设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  * meta : {
    title: 'title'                设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'/'el-icon-x'  设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
    breadcrumb: false             如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    activeMenu: '/example/list'   当路由设置了该属性，则会高亮相对应的侧边栏。
                                  这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
                                  点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  }
*/
{
  path: '/home',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import(/* webpackChunkName: 'Home' */'@/views/home/index'),
      meta: { title: '主页', icon: 'el-icon-s-home' }
    }
  ]
}
```

**如何要在一个页面下新增一个类似详情页的页面，需要注意：详情页不能展示在侧边栏并且当前页侧边栏需要高亮，如下example：**

```js
{
  path: '/home',
  component: Layout,
  children: [
    {
      path: '',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: 'home' */ '@/views/home/index'),
      meta: { title: '主页', icon: 'el-icon-s-home' }
    },
    {
      path: 'modulemanage',
      name: 'modulemanage',
      hidden: true,
      component: () =>
        import(
          /* webpackChunkName: 'modulemanage' */ '@/views/home/modulemanage/index'
        ),
      meta: { title: '主页-看板管理', activeMenu: '/home' }
    }
  ]
}
```

:::tip
一般推荐如果这个详情页不是太复杂的话，我们可以使用dialog（弹框）的形式或者设置当前页和详情页切换v-show的形式去展示，
但如果我们的页面有点复杂，我们可以新增一个页面
:::

## 新增 view

新增完路由之后不要忘记在 @/views 文件下 创建对应的文件夹，一般一个路由对应一个文件，该模块下的功能组件或者方法就建议在本文件夹下创建一个utils或components文件夹，各个功能模块维护自己的utils或components组件。
