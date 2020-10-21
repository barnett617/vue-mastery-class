## watch

### 示例一

[示例](./1-example.vue)

#### 结果分析

一、以上示例没有得到期望的效果：随着输入框内的值在变化，下方统计出输入内容的长度

二、原因是 eventApi 只会在setup运行时执行一次，而我们需要每次在searchInput改变时都执行 eventApi 的方法给出结果

三、我们需要使用watchEffect实现以上效果

### watchEffect

watchEffect 作为参数的`回调函数`会当响应式机制在追踪它的依赖时，在下一个运行周期（next tick）运行，并且在依赖改变时重新执行

当你想专门观察是什么触发了观察者执行，可以使用watch函数

### 观察多个响应式引用

```js
watch([firstName, lastName], () => {

})
```

```js
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  
})
```