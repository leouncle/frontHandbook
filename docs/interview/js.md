# js

## 实现一个深拷贝

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
