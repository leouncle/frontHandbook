# FormTable 表格组件

**插件已全局引入**

## EXAMPLES

### 简单例子

```vue
<template>
  <form-table
    :queryurl="/table/list"
    :if-mock="true"
    :fields="fields"
    :table-headers="tableHeaders"
  />
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
export default {
  setup() {
    const stateTable = reactive({
      fields: [
        { label: '输入框1', type: 'input', prop: 'input1' },
      ],
      tableHeaders: [
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '日期', prop: 'date' }
      ]
    })
    return {
      ...toRefs(stateTable)
    }
  }
}
</script>
```

### 复杂例子

```vue
<template>
  <form-table
    queryurl="/table/table2"
    if-mock
    :fields="fields2"
    :auto-query="false"
    :extra-fields="extraFields2"
    :table-columns="tableColumns2"
    checkbox
    row-single
    :handlebtns="handlebtns"
    :set-show-btn="setShowBtn"
    @handleSelectionChange="handleSelectionChange"
    @rowSingleChange="rowSingleChange"
    @handleData="handleData"
  >
    <template slot="extrabtn">
      <el-button plain>批量导入</el-button>
    </template>
    <template slot="tableExtrabtn">
      <el-button plain type="primary">批量删除</el-button>
    </template>
  </form-table>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
export default {
  setup() {
    const stateTable2 = reactive({
      fields2: [
        {
          label: '输入框1',
          type: 'input',
          prop: 'input1',
          rules: [{ required: true, message: '必输项' }]
        },
        {
          label: '下拉框',
          type: 'select',
          prop: 'select1',
          options: [
            { label: '选项一', value: 'option1' },
            { label: '选项二', value: 'option2' }
          ]
        },
        {
          label: '下拉多选+筛选框',
          type: 'select',
          prop: 'select2',
          multiple: true,
          filterable: true,
          options: [
            { label: '选项一', value: 'option1' },
            { label: '选项二', value: 'option2' },
            { label: '选项三', value: 'option3' },
            { label: '选项四', value: 'option4' },
            { label: '选项五', value: 'option5' }
          ]
        },
        {
          label: '级联选择',
          type: 'cascader',
          prop: 'cascader1',
          options: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            }
          ]
        },
        { label: '日期选择', type: 'date', prop: 'date1' },
        { label: '日期范围选择', type: 'dates', prop: 'dates1' },
        { label: '期数选择', type: 'month', prop: 'month1' },
        {
          label: '单选框',
          type: 'radio',
          prop: 'radio1',
          options: [
            { label: '选项一', value: 'option1' },
            { label: '选项二', value: 'option2' }
          ]
        }
      ],
      extraFields2: [
        { prop: 'extra1', defaultVal: 'extraval1' },
        { prop: 'extra2', defaultVal: 'extraval2' }
      ],
      tableColumns2: [
        { label: '姓名', prop: 'name' },
        {
          label: '地址',
          children: [
            { label: '区域', prop: 'city' },
            { label: '详细地址', prop: 'address', showOverflowTooltip: true }
          ]
        },
        { label: '日期', prop: 'date' },
        {
          label: '在职状态',
          prop: 'status',
          formatter(data, col, value) {
            return data.status === 0 ? '在职' : '离职'
          }
        }
      ],
      handlebtns: ['add', 'check', 'edit', 'delete', 'download', 'resetpwd'],
      selectionVal: []
    })
    function handleSelectionChange(val) {
      stateTable2.selectionVal = val
      console.log(stateTable2.selectionVal)
    }
    function rowSingleChange(val) {
      console.log(val)
    }
    function handleData(btn_type, data) {
      switch (btn_type) {
        case 'add':
          addFunc()
          break
        case 'check':
          checkFunc(data)
          break
      }
    }
    function addFunc() {}
    function checkFunc(data) {
      console.log(data)
    }
    function setShowBtn(btn, row) {
      if (row.status === 1 && ['edit', 'delete', 'resetpwd'].indexOf(btn.btn_type) > -1) {
        return false
      } else {
        return true
      }
    }

    return {
      ...toRefs(stateTable2),
      handleSelectionChange,
      rowSingleChange,
      handleData,
      setShowBtn
    }
  }
}
</script>
```

## 参数

### Options

|    Property    |    Description   |   type   | default |
| -----------------  | ---------------- | :--------: | :----------: |
| queryurl       | 请求地址 |String| '' |
| if-mock         | 启用mock |Boolean | false |
| fields  | form字段 | Array | [] |
| show-field  | 是否展示form字段 | Boolean | true |
| extra-fields     | 额外请求字段 | Array | [] |
| col     | 表单一行显示几个formitem | Number | 4 |
| inline     | form行内布局 | Boolean | false |
| btn-inline     | form按钮行内布局 | Boolean | false |
| auto-query     | 是否自动查询 | Boolean | true |
| table-columns     | table列字段 | Array | [] |
| checkbox     | table多选框 | Boolean | false |
| row-single     | table单选框 | Boolean | false |
| handlebtns     | table操作按钮 | Array | [] |
| before-queryPage   | query前的操作 | Function | null |
| set-show-btn   | 控制操作按钮权限 | Function | null |

### Events

| Function Name | Description   |
| :--------:   | -----  |
|    handleSelectionChange   |  table多选框changed |
|    rowSingleChange    |  table单选框changed |
|    tableDataChanged    |  表格数据changed  |
|    handleData    |  点击操作按钮  |

### 插槽

| slot Name | Description   |
| :--------:   | -----  |
|    extrabtn   | form栏摆放 |
|    tableExtrabtn    |  table右上方摆放 |