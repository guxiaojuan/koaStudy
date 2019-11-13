## npm模块介绍
#### is-genertor-function
> 判断一个函数是不是generator函数。    
  ES2015以后，Object.prototype.toString()方法返回的值是Symbol.toStringTag，用于创建对象描述
#### koa-convert
> 将koa1中的generator转化成koa2中的async。更准确就是将Generator函数转换成使用co包装成的Promise对象
#### koa-compose
> koa中间件实现洋葱模型的核心模块。    
  主要做了两件事：1）将context一路传递下去；2）将middleware中的下一个中间件fn作为当前中间件未来next返回值
#### co
> co库用来自动执行generator函数    
  co函数接受一个generator函数作为参数，返回一个promise对象,该generator函数自动执行
#### delegator
> 主要实现的是一个对象实例对其属性的代理，koa中主要为了context能够方便的访问其挂载的request，response中属性。    
  response.js和request.js都是用set，get代理的，而context.js用delegator原因是get和set可以加入自己的逻辑，但是delegator只是纯粹代理    
  koa主要用了三种模式：method代理方法，access代理getter和setter，getter仅代理getter    
  在delegator中，method代理利用Function.apply实现，getter和setter代理用object.__defineGetter__和object.__defineSetter__实现，这两个方法现在已经废弃
  
#### on-finished
> 当http请求关闭结束或者错误时执行的回调
#### only
> 获取对象中指定的几个属性

## 总结
#### 创建koa服务器
1. 调用constructor，初始化ctx/req/res/middleware等
2. 调用app.use操作只是向middleware数组push的过程
3. 调用app.listen启动http服务器
4. 对于每一个进来的请求，调用callback方法，这个方法主要做了三件事：    
   1. 调用koa-compose将中间件组合成一个洋葱模型
   2. 调用createContext方法，为请求创建ctx上下文，同时挂载res/req
   3. 调用handleRequest方法，按照洋葱圈模型的顺序执行中间件，并最终返回或者报错
   
   
#### js原型回顾
1. Object.getPrototypeOf()方法用来获得对象的直接原型
2. 检测一个对象的原型    
    1) isPrototypeOf：检测一个对象是否是另一个对象的原型
    2) obj.constructor.prototype：检测非Object.create()创建的原型对象
3. 每个对象(函数也是对象)都有一个__proto__属性，但是只有函数才有prototype属性(Object本身就是构造函数，所以有原型对象)    
4. 在构造函数的原型对象(prototype)中包含一个指向构造函数的指针(constructor),而构造函数的实例中包含一个指向该构造函数原型对象的指针(__proto__)    
5. 



