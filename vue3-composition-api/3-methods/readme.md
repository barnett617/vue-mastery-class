## 如何为组件添加方法

vue2写法[示例](./1-vue2-methods.vue)

vue3组合api写法[示例](./2-vue3-methods.vue)

### 步骤

1. 先创建一个普通函数
2. 在setup中返回这个函数，继而template中可以访问到它

### 注意

1. 我们无法像vue2中直接对变量进行递增，因为经过ref包裹的基础类型变量在被包裹后已经是一个引用类型对象，而不是基础数据类型了。
2. 如果我们在控制台直接打印出被ref包裹的变量，可以看到它是一个引用类型，有value属性和get、set方法。
3. 我们可以通过value属性访问其属于基础数据类型的值，这是访问响应式引用变量值的正确方式✅

### 疑惑

为什么template中对ref包裹后的响应式引用类型变量进行取值不需要访问其value属性如下呢

```js
<template>
  <div>
    <p>Capacity: {{ capacity.value }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
```

原因是当template识别到值是经过ref包裹的变量，会自动取出其内部的value值