export const pageConfig = {
  // 页面结构
  list: [
    {
      type: 'row', // 组件类型：栅格-row
      align: '', // 对其方式：居中对齐-center、右对齐-end、两端对齐中间相等间距-space-between、相等间距-space-around、默认（空）
      gutter: '', // 栅格间距
      columnName: 'row_01',
      list: [{
        type: 'form', // 组件类型：表单组件-form
        columnName: 'searchForm',
        className: '',
        labelWidth: '',
        list: [{
          type: 'col', // 组件类型：col
          columnName: 'col_01',
          align: '',
          span: 6, // 栅格占比：24为占满
          list: [{
            columnName: 'input_01', // 组件标识
            type: 'input', // 组件类型：文本框-input，多行文本-textarea，单选框-radio、多选框-checkbox、下拉选择框-select、级联选择器-cascader、日期选择器-datepicker、日期时间选择器-datetimepicker
            size: '', // 尺寸
            className: '', // 类名
            value: 'name', // 绑定模型
            placeholder: '', // 提示文字
            suffixIcon: '', // 右侧icon
            prefixIcon: '', // 左侧icon
            minlength: '', // 最小长度
            maxlength: '', // 最大长度
            disabled: false, // 是否禁用
            clearable: false, // 是否可清空
            rows: 2 // 类型为 textarea 时增加此属性
          }]
        }, {
          type: 'col', // 组件类型：col
          columnName: 'col_02',
          align: '',
          span: 6, // 栅格占比：24为占满
          list: [{
            columnName: 'textarea_01', // 组件标识
            type: 'textarea', // 组件类型：文本框-input，多行文本-textarea，单选框-radio、多选框-checkbox、下拉选择框-select、级联选择器-cascader、日期选择器-datepicker、日期时间选择器-datetimepicker
            minlength: '5', // 最小长度
            maxlength: '10', // 最大长度
            clearable: true, // 是否可清空
            rows: 2 // 类型为 textarea 时增加此属性
          }]
        }, {
          type: 'col', // 组件类型：col
          columnName: 'col_03',
          span: 6, // 栅格占比：24为占满
          list: [{
            columnName: 'select_01', // 组件标识
            type: 'select', // 组件类型：文本框-input，多行文本-textarea，单选框-radio、多选框-checkbox、下拉选择框-select、级联选择器-cascader、日期选择器-datepicker、日期时间选择器-datetimepicker
            clearable: true, // 是否可清空
            options: [{
              label: '1',
              value: '1'
            }, {
              label: '2',
              value: '2'
            }] // 下拉框时增加此项配置
          }]
        }, {
          type: 'col', // 组件类型：col
          columnName: 'col_04',
          align: 'right',
          span: 6, // 栅格占比：24为占满
          list: [{
            columnName: 'resetBtn', // 组件标识
            label: '重置',
            type: 'button', // 组件类型：文本框-input，多行文本-textarea，单选框-radio、多选框-checkbox、下拉选择框-select、级联选择器-cascader、日期选择器-datepicker、日期时间选择器-datetimepicker
            btnType: '',
            showType: 'default',
            icon: ''
          }, {
            columnName: 'searchBtn', // 组件标识
            label: '查询',
            type: 'button', // 组件类型：文本框-input，多行文本-textarea，单选框-radio、多选框-checkbox、下拉选择框-select、级联选择器-cascader、日期选择器-datepicker、日期时间选择器-datetimepicker
            btnType: 'primary',
            showType: 'default',
            icon: ''
          }]
        }]
      }]
    },
    {
      type: 'row',
      align: '',
      gutter: '',
      columnName: 'row_02',
      list: [{
        type: 'buttonGroup', // 组件类型：表单组件-form
        columnName: 'topButtons',
        position: 'top',
        align: 'left',
        list: [{
          type: 'col', // 组件类型：col
          span: 12,
          align: 'left',
          className: '',
          list: [{
            type: 'button',
            btnType: 'primary',
            className: '',
            columnName: 'add',
            label: '按钮1',
            icon: ''
          }, {
            type: 'button',
            btnType: 'primary',
            columnName: 'btn2',
            label: '按钮2',
            icon: ''
          }, {
            type: 'button',
            btnType: 'primary',
            columnName: 'btn3',
            label: '按钮3',
            icon: ''
          }]
        }, {
          type: 'col', // 组件类型：col
          span: 12,
          align: 'right',
          className: '',
          list: [{
            type: 'button',
            btnType: 'text',
            className: '',
            columnName: 'add',
            label: '按钮11',
            icon: ''
          }, {
            type: 'button',
            btnType: 'text',
            columnName: 'btn2',
            label: '按钮22',
            icon: ''
          }]
        }]
      }, {
        type: 'col', // 组件类型：col
        span: 12,
        align: 'right',
        list: {
          type: 'buttons',
          position: 'right',
          align: 'right',
          buttons: [{
            type: 'button',
            showType: 'default',
            columnName: 'add',
            label: '按钮111',
            icon: ''
          },
          {
            type: 'button',
            showType: 'default',
            columnName: 'add',
            label: '按钮222',
            icon: ''
          }]
        }
      }]
    },
    {
      type: 'table',
      className: '',
      style: 'width: 100%',
      columnName: 'searchTable',
      // 列配置
      list: [{
        type: 'index',
        label: '序号',
        align: 'center',
        columnName: 'tableindex',
        width: 50,
        minWidth: 50,
        fixed: 'left'
      }, {
        type: 'selection',
        align: 'center',
        columnName: 'selection',
        width: 50,
        minWidth: 50,
        fixed: 'left'
      }, {
        prop: 'prop1', // prop
        label: '测试列1', // 表头标题
        columnName: 'prop1', // 标注：不使用
        align: 'center',
        className: '', // 自定义类名
        type: 'slot', // 列类型：操作列-operation、多选列-selection、序号列-index、插槽-slot（插槽增加 slotName 属性）、可编辑列-canEdit、默认列（空）
        slotName: 'slota', // 插槽名字
        width: '', // 宽度
        minWidth: 100, // 最小宽度
        fixed: false, // 浮动列
        icon: '' // 列图标
      }, {
        prop: 'prop2',
        label: '测试列2',
        columnName: 'prop2',
        align: 'center',
        showType: 'link', // 显示类型：链接-link、图片-image、开关-swith、标签-tag、默认（空）
        minWidth: 100
      }, {
        prop: 'prop3',
        label: '测试列3',
        columnName: 'prop3',
        type: 'canEdit',
        editConfig: {
          editType: 'input',
          placeholder: ''
        },
        minWidth: 120
      }, {
        prop: 'prop4',
        label: '操作',
        columnName: 'prop4',
        type: 'operation', // 显示类型：链接-link、图片-image、开关-swith、标签-tag、默认（空）
        align: 'right',
        minWidth: 100,
        // 操作列按钮组配置
        operation: [{
          type: 'primary', // 样式类型：蓝色-primary、绿色-success、信息-info、默认（空）
          columnName: 'create', // 按钮组件名，用于click事件
          label: '新增',
          icon: '' // 按钮图标
        }, {
          type: 'primary', // 样式类型：蓝色-primary、绿色-success、信息-info、默认（空）
          columnName: 'modify', // 按钮组件名，用于click事件
          label: '修改',
          icon: '' // 按钮图标
        }, {
          type: 'primary', // 样式类型：蓝色-primary、绿色-success、信息-info、默认（空）
          columnName: 'delete', // 按钮组件名，用于click事件
          label: '删除',
          icon: '' // 按钮图标
        }],
      }]
    }
  ],
  // 表格配置
  tableConfig: {
    showIndex: false, // 显示序号列
    indexFixed: false, // 序号列浮动
    showSelection: false, // 显示多选列
    selectionFixed: false, // 多选列浮动
    // 分页配置
    showPage: true, // 显示分页
    hideOnSinglePage: false, // 大于1页显示
    pagination: {
      pageSize: 10,
      pageSizes: [10, 20, 30],
      total: 1000,
      currentPage: 1
    },
    apiConfig: {
      apiName: '',
      apiUrl: '',
      apiParams: {}
    }
  },
  // 查询区域数据模型
  model: {
    name: ''
  }
}