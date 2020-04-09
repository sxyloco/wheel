## 快速使用

本节将介绍如何在项目中使用 UI

### 在vue-cli中引入UI

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import UI from '@/index'
import App from './App.vue';

Vue.use(UI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 EcodeUI 的引入。