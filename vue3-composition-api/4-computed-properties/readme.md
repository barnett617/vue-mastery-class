## 计算属性

vue2中的computed使用[示例](./1-vue2-computed-properties.vue)

vue3中的computed使用[示例](./2-vue3-computed-properties.vue)

### 转换步骤

1. 引入computed函数
2. 创建计算属性常量，通过computed函数传入一个匿名箭头函数进行计算，将值返回
3. 注意在计算函数中使用ref包裹的变量进行计算时要访问其value属性获得其值