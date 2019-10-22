#### is-genertor-function
> 判断一个函数是不是generator函数。    
  Symbol.ToStringTag调用Object.prototype.toString()方法时使用的字符串，用于创建对象描述
#### koa-convert
> 将koa1中的中间件转化为promise
#### koa-compose
> koa中间件实现洋葱模型的核心模块。
#### co
> co库用来自动执行generator函数    
  co函数接受一个generator函数作为参数，返回一个promise对象
#### delegator
> 主要实现的是一个对象实例对其属性的代理，koa中主要为了context能够方便的访问其挂载的request，response中属性。    
  response.js和request.js都是用set，get代理的，而context.js用delegator原因是get和set可以加入自己的逻辑，但是delegator只是纯粹代理
#### on-finished
> 当http请求关闭结束或者错误时执行的回调
#### only
> 获取对象中指定的几个属性

a
