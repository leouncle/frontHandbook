# 书写规范

## 工具

### Eslint

特性：ESLint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具,ESLint 能够帮你轻松写出高质量的 JavaScript 代码

#### 代码质量规则 (code-quality rules)

| 规则 | 释义 |
| --- | --- |
| no-unused-vars | 禁止出现未使用过的变量 |
| eqeqeq | 要求使用 === 和 !== |
| no-dupe-keys | 禁止对象字面量中出现重复的 key |
| ... | |

#### 代码风格规则 (code-formatting rules)

| 规则 | 释义 |
| --- | --- |
| no-multiple-empty-lines | 禁止出现多行空行 |
| no-mixed-spaces-and-tabs | 禁止空格和 tab 的混合缩进 |
| keyword-spacing | 强制在关键字前后使用一致的空格 |
| ... | |

### Prettier

#### 代码格式化工具

| 规则 | 释义 |
| --- | --- |
| printWidth: 120 | 单行长度
| tabWidth: 2 | 缩进长度 |
| useTabs: false | 使用空格代替tab缩进 |
| semi: false | 句末使用分号 |
| singleQuote: true | 使用单引号 |
| quoteProps: 'as-needed' | 仅在必需时为对象的key添加引号 |
| bracketSpacing: true | 在对象前后添加空格-eg: { foo: bar } |
| endOfLine: 'lf' | 结束行形式 |
| ... | |

## HTML

### 标签使用

- 尽量减少标签层级
- 双标签必须闭合，单标签用斜线闭合
- 标签格式统一小写
- class类小写，需要时用-作为连接符

### 注释

```html
<!-- 这是注释 -->
<div class="box">
    <p>内容</p>
</div> 
```

### vue模版中属性的书写顺序

| 排序,高->低 | 属性类别 | e.g. |
| --- | --- | --- |
| 1 | DEFINITION | 'is', 'v-is'|
| 2 | LIST_RENDERING |  'v-for item in items'|
| 3 | CONDITIONALS |  'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'|
| 4 | RENDER_MODIFIERS |  'v-once', 'v-pre'|
| 5 | GLOBAL |  'id'|
| 6 | UNIQUE |  'ref', 'key' |
| 7 | SLOT |  'v-slot', 'slot' |
| 8 | TWO_WAY_BINDING |  'v-model' |
| 9 | OTHER_DIRECTIVES |  'v-custom-directive' |
| 10 | OTHER_ATTR |  'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"' |
| 11 | EVENTS |  '@click="functionCall"', 'v-on="event"' |
| 12 | CONTENT |  'v-text', 'v-html |

## CSS

### 命名规范

- 文件&类命名,小写的英文单词
- 不缩写单词，除非一看就明白的单词
- 长名称或词组可以使用-作为连接符

### 命名参考

#### 文本命名规范

#### 页面结构命名

| 名称 | 含义 |
| --- | --- |
| page| 代表整个页面，用于最外层 |
| wrap | 将所有元素包在一起的一个外围包，用于最外层 |
| wrapper | 页面外围控制整体布局宽度，用于最外层 |
| container | 一个整体容器，用于最外层 |
| head，header | 页头区域，用于头部 |
| nav | 导航条 |
| content | 内容，网站中最重要的内容区域，用于网页中部主体 |
| main | 网站中的主要区域（表示最重要的一块位置），用于中部主体内容 |
| column | 栏目 |
| sidebar | 侧栏 |
| foot，footer | 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部 |

#### 功能命名

| 名称 | 含义 |
| --- | --- |
| logo | 标记网站logo标志 |
| banner | 标语、广告条、顶部广告条 |
| login | 登陆，（例如登录表单：form-login） |
| loginbar | 登录条 |
| register | 注册 |
| tool, toolbar | 工具条 |
| search | 搜索 |
| searchbar | 搜索条 |
| searchlnput | 搜索输入框 |
| shop | 功能区，表示现在的 |
| icon | 小图标 |
| label | 商标 |
| homepage | 首页 |
| subpage | 二级页面子页面 |
| hot | 热门热点 |
| list | 文章列表，（例如：新闻列表，list-news） |
| scroll | 滚动 |
| tab | 标签 |
| sitemap | 网站地图 |
| msg 或 message | 提示信息 |
| current | 当前的 |
| joinus | 加入 |
| status | 状态 |
| btn | 按钮，（例如：搜索按钮可写成 btn-search） |
| tips | 小技巧 |
| note | 注释 |
| guild | 指南 |
| arr, arrow | 标记箭头 |
| service | 服务 |
| breadcrumb | (即页面所处位置导航提示） |
| download | 下载 |
| vote | 投票 |
| siteinfo | 网站信息 |
| partner | 合作伙伴 |
| link, friendlink | 友情链接 |
| copyright | 版权信息 |
| siteinfoCredits | 信誉 |
| siteinfoLegal | 法律信息 |

### 书写顺序（高->低）

1. Positioning（定位，如position，top，z-index）
2. Box model（盒模型，如display，box-sizing，width，border）
3. Typographic（文字排版，如font，line-height，text-align）
4. Visual（视觉，如background，color,opacity,box-shadow,lieaner）
5. Other（其他，如animation, transition,cursor）

### sass
