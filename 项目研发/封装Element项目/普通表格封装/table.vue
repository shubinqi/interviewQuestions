<template>
  <div>
    <el-table
      size="medium"
      :data="tableData"
      :stripe="false"
      :border="false"
      :fit="true"
      :show-header="true"
      :highlight-current-row="true"
      v-loading="columObj.loading"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
    >
      <!-- 选择框是否开启，selectable控制是否单行禁用 -->
      <el-table-column
        v-if="columObj.selection"
        type="selection"
        :selectable="columObj.selectable"
      >
      </el-table-column>
      <!-- 普通列 -->
      <el-table-column
        v-for="(column,columIndex) in columObj.columnData"
        :key="columIndex"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :fixed="column.fixed"
        :align="column.align || 'center'"
        :sortable="column.sortable"
        :index="columIndex"
        show-overflow-tooltip
      >
        <template slot-scope="{row,$index}">
          <!-- 默认展示 -->
          <span v-if="column.text && column.editRow != $index">{{row[column.prop]}}</span>
          <!-- 状态对象展示 -->
          <span v-if="column.status && row[column.prop]">{{row[column.prop].msg}}</span>
          <!-- 自定义内容 -->
          <span v-if="column.ownDefined">{{column.ownDefinedReturn(row,$index)}}</span>
          <!-- switch开关 -->
          <el-switch
            v-if="column.switch"
            v-model="row[column.prop]"
            :inactive-text="row[column.prop] ? column.openText:column.closeText"
            @change="switchChange(row,$index,column.prop)"
          ></el-switch>
          <!-- 图片展示 -->
          <el-popover
            trigger="hover"
            placement="top"
            popper-class="popper"
          >
            <img
              v-if="column.image"
              :src="viewUrl + row[column.prop]"
            />
            <el-image
              slot="reference"
              v-if="column.image"
              :src="viewUrl + row[column.prop]"
            ></el-image>
          </el-popover>
          <!-- 可编辑input，仅在text默认展示类型才可编辑-->
          <el-input
            v-focus
            v-if="column.editRow == $index && column.text"
            v-model="row[column.prop]"
            @blur="editInputBlur(row,$index,column.prop,columIndex)"
          ></el-input>
          <!-- 操作按钮 -->
          <span
            v-if="column.isOperation"
            v-for="(operations, index) in column.operation"
            :key="index"
          >
            <el-button
              v-if="operations.isShow(row,$index)"
              :icon="operations.icon"
              :type="operations.type"
              @click="rowOperation(row,$index,operations.operation)"
              :style="{color:operations.color}"
              size="small"
            >{{operations.label}}</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div
      class="page_div"
      :style="{textAlign: pageObj.position || 'center'}"
    >
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :hide-on-single-page="false"
        :current-page="pageObj.pageData.page"
        :pager-count="7"
        :page-sizes="[10, 15, 20, 30,50]"
        :page-size="pageObj.pageData.size"
        background
        layout="total,sizes,prev, pager, next"
        :total="pageObj.total"
      >
      </el-pagination>
    </div>
  </div>
</template>
 
<script>
export default {
  directives: {
    // 自定义指令,用于可编辑input自动获取焦点
    focus: {
      inserted: function (e) {
        e.querySelector('input').focus()
      }
    }
  },
  props: {
    tableData: {
      type: Array,
      required: true
    },
    columObj: {
      type: Object,
      required: true
    },
    //columObj.type(如果为""空，就不会加载多选框，或者index编号),lazy(是否支持懒加载)
    //columnData.columType(列类型,可选text(默认为普通文字模式),input(input可编辑框),switch(switch开关),image(图片),operation(操作按钮))
    //prop(参数),label(列名),width(宽度),align(对齐方式),sortable(是否支持排序)
    //如果为操作列,则需要填写需要的操作按钮,类型为Object。operation(操作类型,可选edit,delete,see),type(按钮样式,参考el—botton类型),label(按钮文字)icon(参考el-icon),color(字体颜色)
    pageObj: {
      type: Object,
      required: true
    }
  },
  data () {
    let readUploadFileUrl = this.$store.state.user.readUploadFileUrl;
    return {
      viewUrl: readUploadFileUrl,
    }
  },
  methods: {
    // 行操作
    rowOperation (row, $index, now) {
      this.$emit("rowOperation", row, $index, now)
    },
    // switchChange调用
    switchChange (row, $index, prop) {
      this.$emit("switchChange", row, $index, prop);
    },
    // 帮助点击行，获取点击的下标
    tableRowClassName ({
      row,
      rowIndex
    }) {
      row.rowIndex = rowIndex;
    },
    // 点击行
    rowClick (row, column, event) {
      this.$emit("rowClick", row, column, event);
    },
    // 可编辑input失去焦点
    editInputBlur (row, $index, prop, columIndex) {
      this.$emit('editInputBlur', row, $index, prop, columIndex);
    },
    // 条数变化
    handleSizeChange (e) {
      this.$emit('handleSizeChange', e);
    },
    // 页码变化
    handleCurrentChange (e) {
      this.$emit('handleCurrentChange', e);
    }
  }
}
</script>
<style lang="less" scoped>
.el-button {
  margin: 0 6px;
}

/deep/.el-input__inner {
  border: none;
}

/deep/.el-image__inner {
  height: 50px;
}

// switch左边文字颜色
/deep/.el-switch__label--left {
  color: #606266;
}

img {
  height: 400px;
}

.page_div {
  padding: 15px 0;
}
</style>