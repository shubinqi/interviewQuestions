<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-31 20:16:09
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-31 21:42:07
 * @Description: 合并行演示页面
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端项目\前端项目封装\封装Element项目\合并行.vue
-->
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="Name"
      ></el-table-column>
      <el-table-column
        prop="age"
        label="Age"
      ></el-table-column>
      <el-table-column
        prop="gender"
        label="Gender"
      ></el-table-column>
    </el-table>
    <el-table
      :data="tableDatas"
      :span-method="objectSpanMethods"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="Name"
      ></el-table-column>
      <el-table-column
        prop="age"
        label="Age"
      ></el-table-column>
      <el-table-column
        prop="gender"
        label="Gender"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 1, name: 'John', age: 18, gender: 'Male' },
        { id: 1, name: 'John', age: 18, gender: 'Male' },
        { id: 2, name: 'Bob', age: 25, gender: 'Male' },
        { id: 3, name: 'Alice', age: 19, gender: 'Female' },
        { id: 3, name: 'Alice', age: 19, gender: 'Female' },
        { id: 4, name: '4Alice', age: 19, gender: 'Female' },
        { id: 4, name: '4Alice', age: 19, gender: 'Female' },
        { id: 4, name: '4Alice', age: 19, gender: 'Female' },
        { id: 5, name: '5Alice', age: 19, gender: 'Female' },
        { id: 6, name: '6Alice', age: 19, gender: 'Female' },
        { id: 6, name: '6Alice', age: 19, gender: 'Female' },
        { id: 6, name: '6Alice', age: 19, gender: 'Female' }
      ],
      tableDatas: [
        { id: 1, name: '1John', age: 18, gender: 'Male' },
        { id: 2, name: '2John', age: 18, gender: 'Male' },
        { id: 2, name: '2Bob', age: 25, gender: 'Male' },
        { id: 3, name: '3Alice', age: 19, gender: 'Female' },
        { id: 3, name: '2Alice', age: 19, gender: 'Female' },
        { id: 4, name: '4Alice', age: 19, gender: 'Female' },
        { id: 4, name: '2Alice', age: 19, gender: 'Female' },
        { id: 5, name: '4Alice', age: 19, gender: 'Female' },
        { id: 5, name: '5Alice', age: 19, gender: 'Female' },
        { id: 6, name: '6Alice', age: 19, gender: 'Female' },
        { id: 6, name: '6Alice', age: 19, gender: 'Female' },
        { id: 7, name: '6Alice', age: 19, gender: 'Female' }
      ],
      spanArrOrd: null, // 第一组数据
      spanArrRus: null // 第二组数据
    }
  },
  created () {
    this.getSpanArr(this.tableData, 'id', 'spanArrOrd')
    this.getSpanArr(this.tableDatas, 'id', 'spanArrRus')
  },
  methods: {
    /**
     * @description: 获取需要合并的行数
     * @param {Array} data 表格数据
     * @param {String} columeName 字段名
     * @param {Array} list 保存合并行数的数组
     * @return {*}
     */
    getSpanArr (data, columeName, list) {
      // 存放合并行的数据
      this[list] = []
      data.forEach((element, index) => {
        // 第一个
        if (index === 0) {
          this.listIndex = 0
          this[list].push(1)
          return
        }
        // 根据某个 id 进行判断，与前一个比较
        if (element[columeName] === data[index - 1][columeName]) {
          this[list][this.listIndex] += 1
          this[list].push(0)
          return
        }
        // 中断视为新数据
        this.listIndex = index
        this[list].push(1)
      })
    },
    /**
     * @description: 合并行
     * @param {Number} rowIndex 行号
     * @param {Number} columnIndex 列号
     * @return {*}
     */
    objectSpanMethod ({ rowIndex, columnIndex }) {
      // 使用多个if可以给不同区域进行合并
      if (columnIndex === 0) {
        const _row = this.spanArrOrd[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    /**
     * @description: 合并行2
     * @param {*} rowIndex
     * @param {*} columnIndex
     * @return {*}
     */
    objectSpanMethods ({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArrRus[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
