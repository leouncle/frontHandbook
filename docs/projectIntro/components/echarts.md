# vue-echarts图表

> Apache ECharts 的 Vue.js 组件。
使用 [Apache ECharts](http://127.0.0.1:8086/echarts-doc/public/zh/index.html) 5，同时支持 [Vue.js](https://vuejs.org/) 2/3。

## 安装 & 使用

### npm

```bash
npm install echarts vue-echarts
```

要在 *Vue 2* 下使用 `vue-echarts`，需要确保 `@vue/composition-api` 已经安装：

```sh
npm i -D @vue/composition-api
```

### 组件注册

```js
// main.js
import Vue from 'vue'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);
// 全局注册组件
Vue.component('v-chart', ECharts)
new Vue(...)
```

为了更小的打包体积，我们手动从 ECharts 引入单个图表和组件。请参考所有支持的图表/组件:

```js
//图表
import {
    LineChart,
    BarChart,
    PieChart,
    ScatterChart,
    RadarChart,
    MapChart,
    TreeChart,
    TreemapChart,
    GraphChart,
    GaugeChart,
    FunnelChart,
    ParallelChart,
    SankeyChart,
    BoxplotChart,
    CandlestickChart,
    EffectScatterChart,
    LinesChart,
    HeatmapChart,
    PictorialBarChart,
    ThemeRiverChart,
    SunburstChart,
    CustomChart
} from 'echarts/charts'
//组件
import {
    GridComponent,
    PolarComponent,
    GeoComponent,
    SingleAxisComponent,
    ParallelComponent,
    CalendarComponent,
    GraphicComponent,
    ToolboxComponent,
    TooltipComponent,
    AxisPointerComponent,
    BrushComponent,
    TitleComponent,
    TimelineComponent,
    MarkPointComponent,
    MarkLineComponent,
    MarkAreaComponent,
    LegendComponent,
    DataZoomComponent,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
    VisualMapComponent,
    VisualMapContinuousComponent,
    VisualMapPiecewiseComponent,
    AriaComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components'
```

### Prop

* `init-options: object`

  初始化附加参数。请参考 `echarts.init` 的 `opts` 参数。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echarts.init)

  Inject 键名：`INIT_OPTIONS_KEY`。

* `theme: string | object`

  要应用的主题。请参考 `echarts.init` 的 `theme` 参数。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echarts.init)

  Inject 键名：`THEME_KEY`。

* `option: object`

  ECharts 的万能接口。修改这个 prop 会触发 ECharts 实例的 `setOption` 方法。查看[详情 →](http://127.0.0.1:8086/echarts-doc/public/zh/option.html)

  > 💡 在没有指定 `update-options` 时，如果直接修改 `option` 对象而引用保持不变，`setOption` 方法调用时将默认指定 `notMerge: false`；否则，如果为 `option` 绑定一个新的引用，将指定 `notMerge: true`。
* `update-options: object`

  图表更新的配置项。请参考 `echartsInstance.setOption` 的 `opts` 参数。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.setOption)

  Inject 键名：`UPDATE_OPTIONS_KEY`。

* `group: string`

  图表的分组，用于[联动](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echarts.connect)。请参考 `echartsInstance.group`。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.group)

* `autoresize: boolean`（默认值`false`）

  图表在组件根元素尺寸变化时是否需要自动进行重绘。

* `loading: boolean`（默认值：`false`）

  图表是否处于加载状态。

* `loading-options: object`

  加载动画配置项。请参考 `echartsInstance.showLoading` 的 `opts` 参数。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.showLoading)

  Inject 键名：`LOADING_OPTIONS_KEY`。

* `manual-update: boolean`（默认值`false`）

  在性能敏感（数据量很大）的场景下，我们最好对于 `option` prop 绕过 Vue 的响应式系统。当将 `manual-update` prop 指定为 `true` 且不传入 `option` prop 时，数据将不会被监听。然后，需要用 `ref` 获取组件实例以后手动调用 `setOption` 方法来更新图表。

### 方法

* `setOption` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.setOption)
* `getWidth` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getWidth)
* `getHeight` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getHeight)
* `getDom` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getDom)
* `getOption` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getOption)
* `resize` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.resize)
* `dispatchAction` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.dispatchAction)
* `convertToPixel` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.convertToPixel)
* `convertFromPixel` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.convertFromPixel)
* `containPixel` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.containPixel)
* `getDataURL` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getDataURL)
* `getConnectedDataURL` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.getConnectedDataURL)
* `clear` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.clear)
* `dispose` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echartsInstance.dispose)

### 静态方法

静态方法请直接通过 [`echarts` 本身](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#echarts)进行调用。

### 事件

Vue-ECharts 支持如下事件：

* `highlight` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.highlight)
* `downplay` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.downplay)
* `selectchanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.selectchanged)
* `legendselectchanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendselectchanged)
* `legendselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendselected)
* `legendunselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendunselected)
* `legendselectall` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendselectall)
* `legendinverseselect` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendinverseselect)
* `legendscroll` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.legendscroll)
* `datazoom` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.datazoom)
* `datarangeselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.datarangeselected)
* `timelinechanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.timelinechanged)
* `timelineplaychanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.timelineplaychanged)
* `restore` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.restore)
* `dataviewchanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.dataviewchanged)
* `magictypechanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.magictypechanged)
* `geoselectchanged` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.geoselectchanged)
* `geoselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.geoselected)
* `geounselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.geounselected)
* `axisareaselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.axisareaselected)
* `brush` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.brush)
* `brushEnd` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.brushEnd)
* `brushselected` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.brushselected)
* `globalcursortaken` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.globalcursortaken)
* `rendered` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.rendered)
* `finished` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.finished)
* 鼠标事件
  * `click` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.click)
  * `dblclick` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.dblclick)
  * `mouseover` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.mouseover)
  * `mouseout` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.mouseout)
  * `mousemove` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.mousemove)
  * `mousedown` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.mousedown)
  * `mouseup` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.mouseup)
  * `globalout` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.globalout)
  * `contextmenu` [→](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events.Mouse%20events.contextmenu)
* ZRender 事件
  * `zr:click`
  * `zr:mousedown`
  * `zr:mouseup`
  * `zr:mousewheel`
  * `zr:dblclick`
  * `zr:contextmenu`

请参考支持的事件列表。[前往 →](http://127.0.0.1:8086/echarts-doc/public/zh/api.html#events)
