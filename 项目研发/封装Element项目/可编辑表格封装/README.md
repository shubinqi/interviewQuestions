<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-04 23:03:43
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-04 23:23:53
 * @Description: 可编辑表格介绍
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\封装Element项目\可编辑表格封装\README.md
-->

参考文章：https://www.codercto.com/a/54085.html

Github：https://github.com/xuliangzhan/vue-element-extends

#### 使用组件

注册组件

```
import Editable from '@/components/Editable.vue'
import EditableColumn from '@/components/EditableColumn.vue'

Vue.component(Editable.name, Editable)
Vue.component(EditableColumn.name, EditableColumn)
```

使用组件：查看 EditDemo.vue 示例

```
<el-editable ref="editable" edit-config="{trigger: 'click', mode: 'cell'}">
  <el-editable-column prop="name" label="名字" edit-render="{name: 'ElInput'}"></el-editable-column>
  <el-editable-column prop="age" label="年龄" edit-render="{name: 'ElInput'}"></el-editable-column>
</el-editable>
```

#### 实现功能

1. 支持单列编辑
1. 支持整行编辑
1. 支持单击、双击编辑模式
1. 支持渲染任意组件
1. 支持动态列
1. 支持显示编辑状态
1. 支持增删改查数据获取
1. 支持还原更改数据
1. 支持 ElTable 所有功能

#### 表格属性介绍

属性 描述 类型 可选值 默认值
trigger 触发方式 String manual（手动方式） / click（点击触发编辑） / dblclick（双击触发编辑） click
mode 编辑方式 String cell（列编辑模式） / row（行编辑模式） cell
showIcon 是否显示列头编辑图标 Boolean — true
showStatus 是否显示列的编辑状态 Boolean — true

#### 表格方法介绍

方法名 描述 参数
reload(datas) 初始化加载数据 datas
revert() 还原修改之前数据
insert(record) 新增一行新数据 record
insertAt(record, rowIndex) 指定位置新增一行新数据，如果是-1 则从底部新增新数据 record, rowIndex
remove(record) 根据数据删除一行数据 record
removes(records) 根据数据删除多行数据 records
removeRow(rowIndex) 根据行号删除一行数据 rowIndex
removeRows(rowIndexs) 根据行号删除多行数据 rowIndexs
removeSelecteds() 删除选中行数据
clear() 清空所有数据
clearActive() 清除所有活动行列为不可编辑状态
setActiveRow(rowIndex) 设置活动行为可编辑状态（只对 mode='row'有效） rowIndex
updateStatus(scope) 更新列状态（当使用自定义组件时，值发生改变时需要调用来更新列状态），如果不传参数则更新整个表格 scope
getRecords() 获取表格数据集
getAllRecords() 获取表格所有数据
getInsertRecords() 获取新增数据
getRemoveRecords() 获取已删除数据
getUpdateRecords() 获取已修改数据

#### 列属性介绍

```
<el-editable-column prop="name" label="名字" edit-render="{name: 'ElInput', type: 'default'}"></el-editable-column>
```

属性 描述 类型 可选值 默认值
name 渲染的组件名称 String ElInput / ElSelect / ElCascader / ElDatePicker / ElInputNumber / ElSwitch ElInput
type 渲染类型 String default（组件激活后才可视） / visible（组件一直可视） default
attrs 渲染组件附加属性 Object — {}
optionAttrs 下拉组件选项附加属性（只对 name='ElSelect'有效） Object — {}
options 下拉组件选项列表（只对 name='ElSelect'有效） Array — []

#### 插槽

name 说明
— 自定义渲染显示内容，参数为 { row, column, $index }
type 自定义渲染组件，参数为 { row, column, $index }
head 自定义表头的内容，参数为 { column, $index }
