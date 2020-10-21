## teleport(原名为portal)

### 背景

vue组件架构提供了使用组件构建用户页面的能力，但有些时候组件内可能有一些html片段需要渲染在可选的位置上，比如

1. 使用`固定定位`或者`绝对定位`并且有`垂直轴距离`的元素，比如我们需要把`弹框`组件放在</body>前以确保它最终显示在页面所有元素之前
2. 当我们的vue应用只是网页内的一小块时，并且我们的组件内有需要显示在vue应用之外的页面DOM上的其他位置

### 解决方案

> 针对以上情况vue3的解决方案是提供teleport组件，这个组件之前叫做portal，但由于portal未来可能成为html标准的一部分，因此改名为teleport

teleport组件允许我们将指定的模板块转移到DOM中的另一个地方

[示例](./app.vue)

### 语法

teleport组件中的to属性需要传递有效的DOM选择器，可以是id选择器、类选择器、data选择器或变量，如下

```js
<teleport to="#end-of-body">

<teleport to=".someClass">

<teleport to="[data-modal]">

<teleport :to="reactiveProperty">
```

### 禁用状态

modal弹框和pop气泡提示一般一开始都是隐藏的，直到需要显示的时候才出现在页面内，所以teleport有disabled属性用于控制teleport组件的禁用状态，达到这一效果

如[示例](./teleport-disabled.vue)所见，当disabled属性为true时，teleport组件不会生效，于是其内部的元素会在所声明的模板位置显示，而不会脱离vue组件到目标位置

如果检查页面源代码，可以发现在声明teleport组件的位置会有teleport开始结束的注释，但其生效与否会决定声明在teleport内部的部分显示在指定DOM位置与否

### 自动保存状态

当teleport组件从禁用状态切换为可用状态时，其内部的DOM元素是可复用的，所以其完整状态也有所保留，这一特性可使用视频标签进行印证

[示例](./teleport-save-state.vue)

### 隐藏内容

通过v-if可以控制teleport组件内的部分显示/隐藏

[示例](./teleport-hide.vue)

### 同一个地方的多个teleport

[示例](./teleport-multi.vue)

### 总结

使用teleport可以将组件内的指定元素显示在组件外的DOM中