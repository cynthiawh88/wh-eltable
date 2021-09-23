<template>
	<div class="hello">
		<wh-test />
		<wh-table :tableData="tableData" :columns="columns" :loading="loading" />
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
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