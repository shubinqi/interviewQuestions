<template>
  <div>
    <template v-if="tableJson.list">
      <div
        v-for="list in tableJson.list"
        :key="list.columeName"
      >
        <el-table
          v-if="list.type === 'table'"
          :data="tableData"
          :span-method="objectSpanMethod"
          style="width: 100%"
        >
          <template v-if="list.tableColumns">
            <div
              v-for="column in list.tableColumns"
              :key="column.prop"
            >
              <el-table-column
                :label="column.label"
                :prop="column.columnName"
                :width="column.width"
                :formatter="column.formatter"
                :rowspan="column.rowspan"
                :colspan="column.list?.length"
                :align="column.align"
                :fixed="column.fixed"
              >
                <template v-if="column.list">
                  <div
                    v-for="subColumn in column.list"
                    :key="subColumn.prop"
                  >
                    <el-table-column
                      :label="subColumn.label"
                      :prop="column.columnName + '.' + subColumn.columnName"
                      :width="subColumn.width"
                      :formatter="subColumn.formatter"
                      :rowspan="subColumn.rowspan"
                      :align="subColumn.align"
                      :fixed="subColumn.fixed"
                    > </el-table-column>
                  </div>
                </template>
              </el-table-column>
            </div>
          </template>
        </el-table>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'test-demo',
  data () {
    return {
      status: 'detail', // 页面状态
      tableJson: null, // 页面结构配置
      model: null, // 页面响应式数据
      tableData: [
        {
          lender: {
            id: '11111',
            securitiesCode: '000001',
            securitiesShortName: '平安银行',
            term: '1D',
            intentionQuantity: 10000,
            intentionRate: 0.25,
            bargainMode: '私下协商'
          },
          borrower: {
            id: '11111',
            institution: '某机构',
            rate: 0.22,
            quantity: 10000
          },
          allocationResult: {
            securityAccount: '000001',
            tradeUnit: '某交易单元',
            quantity: 10000,
            operation: '通过'
          }
        },
        {
          lender: {
            id: '11111',
            securitiesCode: '000001',
            securitiesShortName: '平安银行',
            term: '1D',
            intentionQuantity: 10000,
            intentionRate: 0.25,
            bargainMode: '私下协商'
          },
          borrower: {
            id: '22222',
            institution: '某机构2',
            rate: 0.22,
            quantity: 10000
          },
          allocationResult: {
            securityAccount: '000001',
            tradeUnit: '某交易单元',
            quantity: 10000,
            operation: '通过'
          }
        },
        {
          lender: {
            id: '11111',
            securitiesCode: '000001',
            securitiesShortName: '平安银行',
            term: '1D',
            intentionQuantity: 10000,
            intentionRate: 0.25,
            bargainMode: '私下协商'
          },
          borrower: {
            id: '22222',
            institution: '某机构',
            rate: 0.22,
            quantity: 10000
          },
          allocationResult: {
            securityAccount: '000001',
            tradeUnit: '某交易单元',
            quantity: 10000,
            operation: '通过'
          }
        },
        {
          lender: {
            id: '11111',
            securitiesCode: '000001',
            securitiesShortName: '平安银行',
            term: '1D',
            intentionQuantity: 10000,
            intentionRate: 0.25,
            bargainMode: '私下协商'
          },
          borrower: {
            id: '33333',
            institution: '某机构',
            rate: 0.22,
            quantity: 10000
          },
          allocationResult: {
            securityAccount: '000001',
            tradeUnit: '某交易单元',
            quantity: 10000,
            operation: '通过'
          }
        },
        {
          lender: {
            id: '33333',
            securitiesCode: '000001',
            securitiesShortName: '平安银行',
            term: '1D',
            intentionQuantity: 10000,
            intentionRate: 0.25,
            bargainMode: '私下协商'
          },
          borrower: {
            id: '44444',
            institution: '某机构',
            rate: 0.22,
            quantity: 10000
          },
          allocationResult: {
            securityAccount: '000001',
            tradeUnit: '某交易单元',
            quantity: 10000,
            operation: '通过'
          }
        }
        // more data...
      ],
      spanArrLender: [], // 出借方合并行
      spanArrborrower: [] // 借入方合并行
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.getSpanArr(this.tableData, 'lender.id', 'spanArrLender')
    this.getSpanArr(this.tableData, 'borrower.id', 'spanArrborrower')
  },
  methods: {
    init () {
      this.tableJson = JSON.parse(JSON.stringify(require('./test-demo.json')))
      this.model = this.tableJson.model
    },
    /**
     * @description: 获取需要合并的行数
     * @param {*} data
     * @param {*} id
     * @param {*} list
     * @return {*}
     */
    getSpanArr (data, id, list) {
      // 存放合并行的数据
      this[list] = []
      data.forEach((element, index) => {
        if (index === 0) {
          // 第一个元素
          this.posOrd = 0
          this[list].push(1)
          return
        }

        let flag = false
        if (!id.includes('.')) {
          flag = element[id] === data[index - 1][id]
        } else {
          // 如果 id 是对象属性路径形式的字符串
          const props = id.split('.')
          flag = element[props[0]][props[1]] === data[index - 1][props[0]][props[1]]
        }

        if (flag) {
          // 与前一个元素的值相同
          this[list][this.posOrd] += 1
          this[list].push(0)
        } else {
          // 与前一个元素的值不同，需要新起一行
          this.posOrd = index
          this[list].push(1)
        }
      })
    },
    /**
     * @description: 合并行
     * @param {*} data { row, column, rowIndex, columnIndex }
     * @return {*}
     */
    objectSpanMethod (data) {
      const { rowIndex, columnIndex } = data
      if (columnIndex < 4) {
        const _row = this.spanArrLender[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
      if ((columnIndex >= 4) && (columnIndex <= 6)) {
        const _row = this.spanArrborrower[rowIndex]
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
