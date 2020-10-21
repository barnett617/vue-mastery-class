## suspense

### 背景

1. 在 vue 应用中我们使用大量的`api调用`获取后端数据
2. 当等待后端接口数据返回时给用户一个`数据加载中`的交互样式是一种良好的用户体验实践
3. 尤其是用户在弱网环境下使用

### 传统解决

1. 传统解决方案是使用大量的v-if和v-else片段或者vuex中维护多个加载中状态以显示不同的加载情况
2. 当多个组件都存在api请求的情况下，loading处理会变得更加复杂
3. 我们期望所有组件的api数据请求都完成后再显示页面

### 灵感

vue3受React16.6 Suspense灵感启发，增加该功能用于等待异步行为（例如api调用）完成前的组件展示

### 使用

Suspense是一个内建组件，可用于包裹两个不同的模板

```js
<template>
  <Suspense>
    <template #default>
      <!-- 放置存在异步调用的组件于此 -->
    </template>
    <template #fallback>
      <!-- 数据加载中时显示的内容 -->
    </template>
  </Suspense>
</template>
```

### 原理

1. 当Suspense加载时，它会首先尝试渲染在<template #default>内找到的内容
2. 即是有多层嵌套，只要包裹在Suspense内的组件内有异步调用，就会等待其返回再显示

### 错误处理

既然有异步加载，就会有失败的情况，还好vue3中中的Suspense组件支持老的v-if/v-else使用，另外结合新增的onErrorCaptured生命周期函数可以作为兜底的错误处理显示

```js
<template>
  <div v-if="error">Uh oh .. {{ error }}</div>
  <Suspense v-else>
    <template #default>
      <Event />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
<script>
import Event from "@/components/Event.vue";
import { ref, onErrorCaptured } from "vue";
export default {
  components: { Event },
  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { error };
  },
};
</script>
```

> onErrorCaptured中的return true是为了阻止错误冒泡，以避免错误显示在用户浏览器的控制台中

### 最佳实践

Suspense可结合骨架屏使用，在#fallback中显示骨架屏即可