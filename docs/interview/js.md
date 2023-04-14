# js

## 实现一个深拷贝

### `Object.assign`

`Object.assign`默认是对对象进行深拷贝的，但是我们需要注意的是，它只对最外层的进行深拷贝，也就是当对象内嵌套有对象的时候，被嵌套的对象进行的还是浅拷贝；

```js
function cloneDeepAssign(obj) {
  return Object.assign({}, obj);
  //Object.assign({},obj)
}
```

（温馨提示：数组拷贝方法当中，使用 `...`、`slice`、`concat`等进行拷贝也是一样的效果，只深拷贝最外层）

同时，我们知道 `Object.assign`针对的是对象自身可枚举的属性，对于不可枚举的没有效果；

所以，当我们对于一个层次单一对象的时候，可以考虑这种方法，简单快捷。（试过了，也不支持 `undefined`）

### `JSON`实现的深拷贝

这是我们最最最常提到的一种深拷贝的方式，一般大部分的深拷贝都可以用 `JSON`的方式进行解决，本质是因为 `JSON`会自己去构建新的内存来存放新对象。

```js
function cloneDeepJson(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

但是我们要注意的是：

- 会忽略 `undefined`和 `symbol`；
- 不可以对 `Function`进行拷贝，因为 `JSON`格式字符串不支持 `Function`，在序列化的时候会自动删除；
- 诸如 `Map`, `Set`, `RegExp`, `Date`, `ArrayBuffer `和其他内置类型在进行序列化时会丢失；
- 不支持循环引用对象的拷贝;（循环引用的可以大概地理解为一个对象里面的某一个属性的值是它自己）

### `jQuery`的 `extend`

```js
var array = [1, 2, 3, 4];
var newArray = $.extend(true, [], array);
```

显而易见，最大的缺点就是我们还需要引入 `jQuery`库了，所以也不太常用；感兴趣的友友，可以为您指路->[$.extend([d],tgt,obj1,[objN]) | jQuery API 3.2 中文文档 | jQuery API 在线手册 (cuishifeng.cn)](https://link.juejin.cn?target=https%3A%2F%2Fjquery.cuishifeng.cn%2FjQuery.extend.html 'https://jquery.cuishifeng.cn/jQuery.extend.html')

### `MessageChannel`

```js
function deepCopy(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = (ev) => resolve(ev.data);
    port1.postMessage(obj);
  });
}

deepCopy(obj).then((copy) => {
  // 异步的
  let copyObj = copy;
  console.log(copyObj, obj);
  console.log(copyObj == obj);
});
```

（个人感觉这种方法还挺有意思的，如果面试的讲出来的话，应该会给面试官一个小惊喜 🙌）

缺点：最大的缺点就是异步的，同时也无法支持 `Function`

另外，如果对 `MessageChannel`感兴趣的友友，为您推荐一篇简单易懂的小文章->[MessageChannel 是什么，怎么使用？ - 简书 (jianshu.com)](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F4f07ef18b5d7 'https://www.jianshu.com/p/4f07ef18b5d7')

### 递归实现

```js
function cloneDeepDi(obj) {
  const newObj = {};
  let keys = Object.keys(obj);
  let key = null;
  let data = null;
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    data = obj[key];
    if (data && typeof data === 'object') {
      newObj[key] = cloneDeepDi(data);
    } else {
      newObj[key] = data;
    }
  }
  return newObj;
}
```

这也是我们最最最最常用的一种解决方案，面试必备，所以扪心自问，你把它写的滚瓜烂熟了嘛？

虽然但是，它也是有缺点的，就是不能解决循环引用的问题，一旦出现了循环引用，就死循环了！

### 解决循环引用的递归实现

```js
function deepCopy(obj, parent = null) {
  // 创建一个新对象
  let result = {};
  let keys = Object.keys(obj),
    key = null,
    temp = null,
    _parent = parent;
  // 该字段有父级则需要追溯该字段的父级
  while (_parent) {
    // 如果该字段引用了它的父级则为循环引用
    if (_parent.originalParent === obj) {
      // 循环引用直接返回同级的新对象
      return _parent.currentParent;
    }
    _parent = _parent.parent;
  }
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    temp = obj[key];
    // 如果字段的值也是一个对象
    if (temp && typeof temp === 'object') {
      // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
      result[key] = DeepCopy(temp, {
        originalParent: obj,
        currentParent: result,
        parent: parent,
      });
    } else {
      result[key] = temp;
    }
  }
  return result;
}
```

大致的思路是：判断一个对象的字段是否引用了这个对象或这个对象的任意父级，如果引用了父级，那么就直接返回同级的新对象，反之，进行递归的那套流程。

但其实，还有一种情况是没有解决的，就是子对象间的互相引用，不理解什么意思的友友，可以看->[Javascript 之深拷贝 - 知乎 (zhihu.com)](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F23251162 'https://zhuanlan.zhihu.com/p/23251162')的后半部分的内容，对应也写给出来解决方案；（鄙人懒，就不赘述了 🤶）

### [lodash](https://link.juejin.cn?target=https%3A%2F%2Flodash.com%2F 'https://lodash.com/')的 `_.cloneDeep()`

```js
var _ = require('lodash');
var obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3],
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f); // false
```

这是最最最最完美的深拷贝的方式，它已经将会出现问题的各种情况都考虑在内了，所以在日常项目开发当中，建议使用这种成熟的解决方案；关于原理分析，鄙人无能，只能为各位大佬指个路

## 发布者订阅模式

## 防抖节流

防抖和节流都是为了解决高频触发事件而产生的性能问题。

防抖是指在一定时间内，如果事件持续触发，则只执行最后一次事件，常用于输入框搜索或者页面 resize 等场景。

节流是指在一定时间内，事件只能触发一次，常用于滚动条滚动或者页面 resize 等场景。

下面分别介绍如何手写防抖和节流函数。

1. 手写防抖

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
```

使用示例：

```javascript
function search() {
  console.log('searching...');
}

const debounceSearch = debounce(search, 500);

input.addEventListener('input', debounceSearch);
```

2. 手写节流

```javascript
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    const context = this;
    const args = arguments;
    setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, delay);
  };
}
```

使用示例：

```javascript
function scroll() {
  console.log('scrolling...');
}

const throttleScroll = throttle(scroll, 500);

window.addEventListener('scroll', throttleScroll);
```

在实际应用中，防抖和节流函数可以帮助我们减少函数执行的次数，从而提高性能和用户体验。需要根据实际场景选择合适的函数来解决问题

## Lazyman 的实现

Lazyman 是一个模拟人的行为的小程序，可以让你在不同的时间执行不同的任务，类似于一个定时器。比如可以让它在某个时间点打印一段文字，或者在一定时间间隔内打印多段文字。

以下是一个简单的 Lazyman 的实现：

```javascript
class Lazyman {
  constructor(name) {
    this.tasks = [];
    this.name = name;
    console.log(`Hi I'm ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  sleep(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.tasks.push(task);
    return this;
  }

  sleepFirst(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.tasks.unshift(task);
    return this;
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  say(msg) {
    const task = () => {
      console.log(msg);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

function lazyman(name) {
  return new Lazyman(name);
}
```

使用示例：

```javascript
lazyman('Tom').eat('Lunch').sleep(3).eat('Dinner').sleepFirst(5).say('Good night');
```

输出结果：

```
Hi I'm Tom
Eat Lunch
Wake up after 3
Eat Dinner
Wake up after 5
Good night
```

在这个示例中，我们通过链式调用 Lazyman 的方法，模拟了一个人的一天生活，可以定时吃饭、睡觉、说话等。实现方式比较简单，就是将不同的任务（如吃饭、睡觉）封装成函数，然后按照一定的顺序依次执行。其中，通过 setTimeout 函数来模拟不同的时间间隔。
