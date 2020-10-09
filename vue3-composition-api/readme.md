## 为什么需要composition api

**注：以下所有的composition翻译为“组合”**

### vue2的三点局限性

1. 当组件变得非常大的时候可读性变得很差
2. 当前的代码重用模式都存在缺点
3. Vue2提供了有限的TypeScript支持

#### 一、大组件难以阅读和维护

假设有一个`搜索组件` search.vue 如下

```js
<script>
export default {
  data() {
    return {
      // 搜索相关 start
      // ...
      // 搜索相关 end
    }
  },
  methods: {
    // 搜索相关 start
    // ...
    // 搜索相关 end
  }
}
</script>
```

当在此基础上我们又需要给搜索组件增加排序功能，则会分别在data和methods块中增加响应的代码，如下

```js
<script>
export default {
  data() {
    return {
      // 搜索相关 start
      // ...
      // 搜索相关 end

      // 排序相关 start
      // ...
      // 排序相关 end
    }
  },
  methods: {
    // 搜索相关 start
    // ...
    // 搜索相关 end

    // 排序相关 start
      // ...
      // 排序相关 end
  }
}
</script>
```

接着我们可能还需要增加分页功能，这样一来，整个组件的逻辑其实按照组件的选项（options）进行组织的。而一个vue组件的选项有很多，比如：

- components
- props
- data
- computed
- methods
- lifecycle methods

这也就意味着你的每一块功能代码都可能分布在以上6个区域中

而`组合api`可以把相关功能的代码放在一起，从而将组件内的代码按照功能区分进行重新组织，这样代码会变得可读性和可维护性更好一点

具体是通过`组合api`提供的一个新的setup方法组织如下：

```js
<script>
export default {
  setup() {
    // 搜索相关 start
    // ...
    // 搜索相关 end

    // 排序相关 start
    // ...
    // 排序相关 end
  }
}
</script>
```

`组合api`这个新语法是完全可选的，你完全可以继续使用vue2中的组件组织方式

> 疑惑解释：那是不是意味着当我的组件变得越来越大以后，我就会有一个超大的setup方法？并不是这样的，你可以将你不同部分的功能代码写到别的地方，比如组件文件内，或者写成单独的文件，如下

组合函数（composition functions）

```js
<script>
export default {
  setup() {
    return { ...useSearch(), ...useSorting() }
  }
}

function useSearch() {
  // 搜索相关 start
  // ...
  // 搜索相关 end
}
function useSorting() {
   // 排序相关 start
  // ...
  // 排序相关 end
}
</script>
```

由此，组件代码可以按照逻辑相关进行组织，但不意味着我们会减少组件的数量，`只是优化组件内部的代码组织方式，从而提高可读性和可维护性`

#### 二、vue2中没有组件间逻辑复用的完美方案

vue2中有3种代码复用手段

1. mixins
2. 创建mixin工厂
3. scope slots

##### mixins使用

```js
<script>
const productSearchMixin = {
  data() {
    return {

    }
  },
  methods: {

  }
}
const resultSortMixin = {
  data() {
    return {

    }
  },
  methods: {

  }
}
export default {
  mixins: [productSearchMixin, resultSortMixin]
}
</script>
```

mixins的优点是代码的确按照功能进行组织了，但是缺陷也很明显，比如：有命名冲突的风险、功能运作来源不清晰、可复用性差

##### 创建mixin工厂


```js
// mixins/factories/search.js

export default function searchMixinFactory({ ... }) {
  
}
```

```js
// mixins/factories/sorting.js

export default function sortingMixinFactory({ ... }) {

}
```

```js
// search.vue

import searchMixinFactory from '@mixins/factories/search.js'
import sortingMixinFactory from '@mixins/factories/sorting.js'

export default {
  mixins: [
    searchMixinFactory({
      namespace: 'productSearchMixin'
    }), 
    sortingMixinFactory({
      namespace: 'resultSortMixin'
    })
  ]
}
```

mixin工厂的优势在于可复用性变强、关系清晰，但是命名空间很难维护

##### scope slots

```js
// components/generic-search.vue
<script>
export default {
  props: ['getResults']
  // 搜索相关
}
</script>
<template>
  <div>
    <slot v-bind="{ query, results, run }" />
  </div>
</template>
```

```js
// components/generic-sorting.vue
<script>
export default {
  props: ['input', 'options']
  // 排序相关
}
</script>
<template>
  <div>
    <slot v-bind="{ options, index, output }" />
  </div>
</template>
```

```js
// search.vue
<template>
  <div>
    <GenericSearch :get-results="getResults" v-slot="productSearch">
      <GenericSorting
        :input="productSearch.results"
        :options="resultSortingOptions"
        v-slot="resultSorting"
      >
      </GenericSorting>
    </GenericSearch>
  </div>
</template>
```

作用域插槽的好处在于解决了mixin的问题，但是增加了代码缩进层级、有太多的配置项、缺少灵活性

而vue3就是增加了第4种代码复用手段

```js
// use/search.js
export default function useSearch(getResults) {

}
```

```js
// use/sorting.js
export default function useSorting({ input, options }) {

}
```

```js
// search.vue
import useSearch from '@use/search'
import useSorting from '@use/sorting'
export default {
  setup() {
    // 可通过传参进行配置
    const productSearch = useSearch('')
    const resultSorting = useSorting({})
    return { productSearch, resultSorting }
  }
}
```

这种方式的优势在于代码更少、接近函数写法、灵活性更强

课程地址：https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api

关于composition api的单独在线文档：https://composition-api.vuejs.org/#summary