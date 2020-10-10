## reactive语法

### ref对比reactive

ref写法[示例](./1-ref.js)

reactive写法[示例](./2-reactive.js)

### reactive解读

1. reactive方法返回一个对象
2. 访问其内部的属性值时不需要再访问对应的value属性
3. template再访问setup内的属性时需要访问reactive返回对象下的对应属性，类似event.capacity
4. 但如果不想在template中每个地方都通过reactive所返回的对象内部访问属性要怎么做
   1. 尝试在setup返回reactive对象时通过...解构其内部属性是不好使的（return {...event}）
   2. 分别导出reactive对象的每个内部属性也是不好使的（return { event.capacity }）
   3. 正确的方式是使用vue3提供的toRefs函数✅（return { ...toRefs(event) }）见[示例](./3-reactive-toRefs.vue)

### toRefs解读

toRefs函数将一个响应式对象转换为一个普通对象，其每个属性都是一个响应式引用，分别指向原响应式对象中的对应属性

如果在setup返回时没有其他方法，可以直接返回toRefs函数的返回结果（return toRefs(event)）