## api调用

### 背景

后端是不可信赖的，我们需要预测api返回的各种情况

### 准备

- 使用`axios`发出api请求
- 使用`json-server`模拟restful api返回

### 测试范围

- 接口调用成功-内容正常展示
- 接口调用失败-展示错误

### 测试步骤

1. 模拟api调用
2. 等待promise执行resolve
3. 检查调用发生了一次
4. 检查组件展示出了内容

### 工具

- jest.mock()用于代理api请求
- [mockResolvedValueOnce()](https://jestjs.io/docs/en/mock-function-api.html#mockfnmockresolvedvalueoncevalue)
- [flush-promises](https://www.npmjs.com/package/flush-promises)用于解决组件在created生命周期请求api
- beforeEach作为jest内置钩子配合其他api使用
- jest.clearAllMocks()多个测试用例请求次数会累加，以此清除避免干扰