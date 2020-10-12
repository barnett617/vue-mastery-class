## 生命周期方法

### vue2中的生命周期方法

- beforeCreated（在实例初始化之后，组件选项诸如data/components/computed/watch/methods等处理前立即执行）
- created（实例创建完成后执行）
- beforeMount（恰好在开始挂载DOM节点开始时执行）
- mounted（在实例挂载完执行——浏览器更新）
- beforeUpdated（当响应式数据改变后，DOM重新渲染前执行）
- updated（在响应式数据变更后，并且DOM也重新渲染后执行）
- beforeDestroy（恰在实例销毁前执行）
- destroyed（在vue实例销毁后执行）

### vue2中新的生命周期方法

- activated（用于keep-alive动态组件，当keep-alive内部组件激活时执行）
- deactivated（用于keep-alive动态组件，当keep-alive内部组件关闭时执行）
- errorCaptured（当错误被后代组件捕获时执行）

### vue3中对生命周期的改动

- beforeDestroy等同于新加的 beforeUnmount
- destroyed等同于新加的 unmounted
- 以上两处改动目的在于命名更加语义化

### setup内部对于生命周期方法的使用

- 在setup内部使用生命周期钩子函数可以在其前面加上前缀on
- onBeforeMount
- onMounted
- onBeforeUpdated
- onUpdated
- onBeforeUnmount
- onUnmounted
- onActivated
- onDeactivated
- onErrorCaptured

### beforeCreated和created

beforeCreated 和 created 在composition api中不存在，因为beforeCreated在setup之前执行，created在 setup 之后执行

在vue2中beforeCreated或created中进行网络请求的操作可以放到setup内进行

### vue3新增生命周期方法

- onRenderTracked（当一个响应式依赖`第一次`在渲染函数中被访问时执行，有助于调试时观察哪些依赖被追踪到）
- onRenderTriggered（当一次新的渲染触发时执行，可用于观察是哪个依赖触发了重新渲染）
- 以上二者可用于性能观测使用