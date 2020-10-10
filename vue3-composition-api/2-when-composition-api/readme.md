## 何时应该使用composition api(setup和响应式引用)

> 注：组合api只是另一种组件写法，是完全的附加新功能，旧的语法依旧可用

### 何时使用

- 特别在意对`typescript`的支持
- 组件变得特别臃肿，需要按功能进行重新组织
- 需要将`可复用`代码整理出以提供给其他组件使用
- 或者你和你的团队想要在常规语法之外尝试新的语法

### 示例

vue2写法见[代码](./1-vue2-composion-api.vue)

#### 将组件改写成vue3组合api的写法如下

##### setup函数特性

一、setup函数会执行在以下项之前

- components（引入的组件）
- props（外部传入的属性）
- data（数据模型）
- methods（组件方法）
- computed properties（计算属性）
- lifecycle methods（生命周期方法）

二、setup函数无法访问到vue2组件中的this

##### setup函数的参数

一、setup函数第一个可选参数是props，是响应式且可被watch监察的，示例见[代码](./2-setup-props.js)

二、setup第二个可选参数是context，用于访问在vue2中通过this访问的组件属性，例如

- attrs
- slots
- parent
- root
- emit

示例见[代码](./3-setup-context.js)

##### 使用ref函数创建响应式引用

一、使用ref函数可以创建一个响应式引用，ref会把基础类型变量包裹在一个对象内，从而可以使得开发者能够追踪它的变化

二、在vue2中其实是通过data函数将基本数据类型变量包裹在对象内部以供追踪变化

三、利用composition api，我们可以创建与组件没有关联的响应式对象，是一个强大的功能

四、ref函数可以通过返回一个对象，为组件提供所需的`变量`或`函数`，见[代码示例](./4-setup-return.js)

五、使用setup这样的写法可能看上去有些啰嗦，但是使我们的组件变得更易维护，我们可以控制对组件暴露什么（变量和函数），并且我们可以追踪到某个属性是在哪里定义的

##### ref提供vue2中单独使用

可以通过https://github.com/vuejs/composition-api进行安装，单独使用ref api，见[代码](./5-setup-ref.vue)