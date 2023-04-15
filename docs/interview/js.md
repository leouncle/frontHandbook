# js

## new 运算符做了什么

实现

```js
function myNew() {
  const [Con, ...args] = [].splice.call(arguments);
  //  创建一个空对象
  let obj = Object.create({});
  // 把当前对象的proto链接到构造器原型
  obj._proto_ = Con.prototype;
  // 绑定this，执行构造函数
  let result = obj.apply(Con, args);
  // return出这个对象，并确保它是个对象
  return typeof result === 'object' ? result : obj;
}
```

## 实现一个深拷贝

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
