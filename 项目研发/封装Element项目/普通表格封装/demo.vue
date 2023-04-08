<template>
  <div>
    <!-- 查询区域 -->
    <el-form
      :inline="true"
      :model="queryForm"
      class="query-form"
    >
      <!-- 查询条件表单项 -->
      <el-form-item label="关键字">
        <el-input v-model="queryForm.keyword"></el-input>
      </el-form-item>
      <!-- 查询按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="handleQuery"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 按钮区域 -->
    <div class="button-group">
      <el-button
        type="primary"
        @click="handleAdd"
      >添加</el-button>
      <el-button
        type="danger"
        @click="handleDelete"
      >删除</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 表格列定义 -->
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        prop="name"
        label="名称"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="描述"
      ></el-table-column>
      <el-table-column label="操作">
        <!-- 操作按钮 -->
        <template #default="{ row }">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(row)"
          >编辑</el-button>
          <el-button
            type="text"
            size="small"
            @click="handleDelete(row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <div class="pagination">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    // 表格数据
    tableData: {
      type: Array,
      required: true,
      default: () => []
    },
    // 总记录数
    total: {
      type: Number,
      required: true,
      default: 0
    },
    // 当前页码
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      required: true,
      default: 10
    }
  },
  data () {
    return {
      // 查询表单数据
      queryForm: {
        keyword: ''
      },
      // 表格选择项
      selection: []
    }
  },
  methods: {
    // 处理查询按钮点击事件
    handleQuery () {
      this.$emit('query', this.queryForm)
    },
    // 处理添加按钮点击事件
    handleAdd () {
      this.$emit('add')
    },
    // 处理编辑按钮点击事件
    handleEdit (row) {
      this.$emit('edit', row)
    },
    // 处理删除按钮点击事件
    handleDelete (row) {
      this.$emit('delete', row)
    },
    // 处理表格选择项变化事件
    handleSelectionChange (selection) {
      this.selection = selection
      this.$emit('selection-change', selection)
    },
    // 处理页码变化事件
    handleCurrentChange (currentPage) {
      this.$emit('current-change', currentPage)
    }
  }
}
</script>

<style scoped>
.query-form {
  margin-bottom: 20px;
}

.button-group {
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}
</style>

<!--
在上面的代码中，我们定义了一个名为 `MyTable` 的组件，它接受以下 props：

- `tableData`：表格数据，必传参数。
- `total`：总记录数，必传参数。
- `currentPage`：当前页码，必传参数。
- `pageSize`：每页显示条数，必传参数。

同时，该组件还定义了以下方法供其他组件调用：

- `handleQuery`：处理查询按钮点击事件。
- `handleAdd`：处理添加按钮点击事件。
- `handleEdit`：处理编辑按钮点击事件。
- `handleDelete`：处理删除按钮点击事件。
- `handleSelectionChange`：处理表格选择项变化事件。
- `handleCurrentChange`：处理页码变化事件。

在这些方法中，我们通过 `$emit` 方法将事件外露给父组件，让父组件可以监听并处理这些事件。

注意，在上面的代码中，我们还定义了一些样式，用来设置查询区域、按钮区域和分页区域的样式。这些样式可以根据实际需要进行调整。 -->