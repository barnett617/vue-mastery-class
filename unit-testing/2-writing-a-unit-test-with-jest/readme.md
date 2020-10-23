## 使用jest编写单元测试

### 创建项目

使用`vue-cli`创建项目

```
vue create unit-testing-vue
```

在提示过程中勾选`Unit Test`并选用`jest`作为测试框架

### 查看项目结构

确认项目的`devDependences`中有`@vue/cli-plugin-unit-jest`和`@vue/test-utils`

#### jest

jest是一款JavaScript测试框架，聚焦于简化单元测试，会运行测试用例并给出测试用例通过或失败

#### vue test utils

vue test utils是vue官方提供的测试工具库，提供了渲染组件以及在已渲染的组件上施加各种操作的能力

#### package script

```js
"scripts": {
  ...
  "test:unit": "vue-cli-service test:unit"
},
```

运行以上命令会寻找`tests/unit`目录并运行xxx.spec.js文件

### 实例

1. 创建一个新组件
2. 在tests/unit下创建组件同名的spec.js文件
3. spec意指specification，因为我们可以指定组件的行为并测试其行为

#### describe

describe块用于组织相关测试用例，如果只有一个测试用例，可以不用describe包裹，当有多个测试用例时，describe可帮助组织相关的测试用例

#### test

test函数用于定义一个测试用例，第一个参数用于描述所测试的内容，第二个参数为实际测试所运行的逻辑

> it是对于test函数的简写

#### 断言期望

expect函数传入测试结果本身，然后该函数返回一个匹配器，决定测试结果是否符合我们的期望。常用的匹配器有toBe，用于表示我们期望结果是真或假

当编写测试用例时，比较好的一种方式是先给expect函数传入true，并期望结果是true（如：expect(true).toBe(true)）。

如果按这样写测试用例还运行不通过的话，就说明测试代码中存在其他错误，这样可以减少我们调试测试用例代码的时间

[jest匹配器api文档](https://jestjs.io/docs/en/expect)

### vue测试工具库

如果需要测试用户登录后，登出按钮是否显示，需要组件挂载完成（组件存在于DOM中）

vue测试工具库提供`mount`方法使得组件完成挂载

> vue测试工具库中还有shallowMount方法，用于仅仅挂载组件，而不考虑其子组件。因为单元测试的重点在于隔离不同组件分别进行测试，而不应该包含其子组件

[@vue/test-utils文档](https://vue-test-utils.vuejs.org/guides/#testing-key-mouse-and-other-dom-events)

### 单元测试步骤总结

1. 创建测试套件——一系列测试用例（describe）
2. 启动测试（test）
3. 使用vue测试工具库挂载组件（mount）
4. 修改Data值，如果需要（setData）
5. 断言结果（expect）