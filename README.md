# el-eltable

ElementUI's el-table combined with el-tree.

## Usage

### Install

```
npm install --save el-eltable
```

### Require element-ui

If your project does not use element-ui,
you need to introduce a separate element-ui package, like this:

```js
import 'el-select-tree/lib/element-ui';
```

### Global registration

```js
import Vue from 'vue';
import WhEltable from 'el-eltable';

Vue.use(WhEltable);
```

### In-component registration

```js
import WhEltable from 'el-eltable';

export default {
  components: {
    WhEltable
  }
};
```

### Complete example

```vue
<template>
<div class="table">
  <wh-table :tableData="tableData" :columns="columns" :loading="loading" />
</div>
</template>

<script>
export default {
	name: 'component',
	data() {
		return {
			tableData: [
				{
				  id: 1
				}
			],
			columns: [
				{
					prop: 'id',
					label: '姓名'
				}
			],
			loading: false
		}
	}
}
</script>
<style lang="scss" scoped></style>
```