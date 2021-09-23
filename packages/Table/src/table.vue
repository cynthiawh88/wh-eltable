<template>
    <div class="data-table">
        <div class="table-wrapper">
            <el-table :data="tableData" :max-height="maxHeight" height="100%" ref="whTable" style="width: 100%" :border="isBorder" v-loading="loading" :row-key="rowKey"
            :tree-props="treeProps" :highlight-current-row="highlightCurrentRow" :default-expand-all="defaultExpandAll" 
            @cell-click="cellClick" @row-click="rowClick" @cell-mouse-enter="cellMouseEnter" @cell-mouse-leave="cellMouseLeave" @selection-change="selectionChange" @select="select" :show-header="showHeader">
                <div slot="empty" v-if="customEmpty">
                    <slot name="custopmEmpty"></slot>
                </div>
                <el-table-column label="序号" type="index" width="50" align="center" v-if="showIndex" :fixed="columns && columns[0].fixed">
                    <template slot-scope="scope">
                        <!-- 有分页时，序号显示 -->
                        <span v-if="pageObj">{{(pageObj.pageNo - 1)*pageObj.pageSize + scope.$index + 1}}</span>
                        <!-- 无分页时，序号显示 -->
                        <span v-else>{{scope.$index + 1}}</span>
                    </template>
                </el-table-column>
                <template v-for="(col, index) in columns">
                    <!-- 操作列 -->
                    <slot v-if="col.slot" :name="col.slot"></slot>
                    <!-- 普通列 -->
                    <el-table-column :fixed="col.fixed" v-else :key="index" :prop="col.prop" :label="col.label" :width="col.width"
                        :formatter="col.formatter" align="left"></el-table-column>
                </template>
            </el-table>
        </div>
        
        <!-- 是否调用分页 -->
        <div class="wrapper-footer">
            <el-pagination v-if="pageObj" :layout="pageObj.sizes && pageObj.sizes.length === 0 ? 'total, prev, pager, next' : 'total, prev, pager, next'"
                :page-size="pageObj.pageSize" :total="pageObj.total" :current-page="pageObj.pageNo"
                @current-change="pageObj.pageFunc" :page-sizes="pageObj.sizes" @size-change="pageObj.sizeFunc">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Table, TableColumn, Pagination, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Loading.directive)
export default {
    name: "WhTable",
    components: {
        ElTable: Table,
        ElTableColumn: TableColumn,
        ElPagination: Pagination
    },
    props: {
        tableData: Array,
        columns: Array,
        loading: {
            type: Boolean,
            default: false
        },
        isBorder: {
            type: Boolean,
            default: true
        },
        defaultExpandAll: {
            type: Boolean,
            default: false
        },
        showIndex: {
            type: Boolean,
            default: true
        },
        pageObj: {
            type: [Object, Boolean],
            default() {
                return {
                    pageNo: 1,
                    pageSize: 10,
                    total: 0,
                    sizes: [10, 15],
                    pageFunc() {},
                    sizeFunc() {}
                };
            }
        },
        rowKey: null,
        treeProps: null,
        highlightCurrentRow: {
            type: Boolean,
            default: false
        },
        cellClick: {
            type: Function,
            default () {}
        },
        rowClick: {
            type: Function,
            default () {}
        },
        cellMouseEnter: {
            type: Function,
            default () {}
        },
        cellMouseLeave: {
            type: Function,
            default () {}
        },
        selectionChange: {
            type: Function,
            default () {}
        },
        select: {
            type: Function,
            default () {}
        },
        customEmpty: {
            type: Boolean,
            default: false
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        maxHeight: {
            type: [Number, String],
            default: null
        }
    },
    methods: {

    }
};
</script>

<style lang="scss">
.data-table{
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .table-wrapper {
        flex: 1;
        overflow: hidden;
    }

    .wrapper-footer {
        flex-shrink: 0;
        padding-top: 15px;
        text-align: right;
    }
}
.data-table ::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.data-table ::-webkit-scrollbar{
	width: 5px;
    height: 5px;
	background-color: #F5F5F5;
}

.data-table ::-webkit-scrollbar-thumb{
	background-color: rgba(0,0,0,.2);
    border-radius: 5px;
}
.el-tooltip__popper {
    max-width: 80%;
    line-height: 150% !important;
}
</style>
