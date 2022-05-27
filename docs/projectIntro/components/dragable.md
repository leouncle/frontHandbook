# drag拖拽

**插件需要局部引入**

## examples

### Typical use

```vue
<template>  
<draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
</draggable>
</template>  

<script>
import draggable from 'vuedraggable'
...
export default {
    components: {
    draggable,
},
...
</script>
```

### With transition-group

```vue
<template>  
<draggable v-model="myArray">
    <transition-group>
        <div v-for="element in myArray" :key="element.id">
            {{element.name}}
        </div>
    </transition-group>
</draggable>
</template>  
```

### With footer slot

```vue
<template>  
<draggable v-model="myArray" draggable=".item">
    <div v-for="element in myArray" :key="element.id" class="item">
        {{element.name}}
    </div>
    <button slot="footer" @click="addPeople">Add</button>
</draggable>
</template>  
```

### With Vuex

```vue
<template>  
<draggable v-model='myList'>
</template>
<script>
computed: {
    myList: {
        get() {
            return this.$store.state.myList
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
}
</script>    
```

## props

|    Property    |    Description   |   type   | default |
| -----------------  | ---------------- | :--------: | :----------: |
| value       | Input array to draggable component. Typically same array as referenced by inner element v-for directive.This is the preferred way to use Vue.draggable as it is compatible with Vuex. It should not be used directly but only though the v-model directive: |Array| null |
| list       | Alternative to the value prop, list is an array to be synchronized with drag-and-drop.The main difference is that list prop is updated by draggable component using splice method, whereas value is immutable. **Do not use in conjunction with value prop.**|Array| null |
| tag       | Input array to draggable component. Typically same array as referenced by inner element v-for directive.This is the preferred way to use Vue.draggable as it is compatible with Vuex. It should not be used directly but only though the v-model directive: |String| div |
| clone       | Function called on the source component to clone element when clone option is true. The unique argument is the viewModel element to be cloned and the returned value is its cloned version.By default vue.draggable reuses the viewModel element, so you have to use this hook if you want to clone or deep clone it.|Function| (original) => { return original;} |
| move       | If not null this function will be called in a similar way as Sortable onMove callback. Returning false will cancel the drag operation. |Function| null |

## events

* Support for Sortable events:
  `start`, `add`, `remove`, `update`, `end`, `choose`, `unchoose`, `sort`, `filter`, `clone`<br>
  Events are called whenever onStart, onAdd, onRemove, onUpdate, onEnd, onChoose, onUnchoose, onSort, onClone are fired by Sortable.js with the same argument.<br>
  [See here for reference](https://github.com/RubaXa/Sortable#event-object-demo)
  Note that SortableJS OnMove callback is mapped with the [move prop](https://github.com/SortableJS/Vue.Draggable/blob/master/README.md#move)
HTML:

```HTML
<draggable :list="list" @end="onEnd">
```

* change event
  `change` event is triggered when list prop is not null and the corresponding array is altered due to drag-and-drop operation.<br>
  This event is called with one argument containing one of the following properties:
  * `added`:  contains information of an element added to the array
    * `newIndex`: the index of the added element
    * `element`: the added element
  * `removed`:  contains information of an element removed from to the array
    * `oldIndex`: the index of the element before remove
    * `element`: the removed element
  * `moved`:  contains information of an element moved within the array
    * `newIndex`: the current index of the moved element
    * `oldIndex`: the old index of the moved element
    * `element`: the moved element

### Slots

Limitation: neither header or footer slot works in conjunction with transition-group.

#### Header

Use the `header` slot to add none-draggable element inside the vuedraggable component.
Important: it should be used in conjunction with draggable option to tag draggable element.
Note that header slot will always be added before the default slot regardless its position in the template.
Ex:

``` html
<draggable v-model="myArray" draggable=".item">
    <div v-for="element in myArray" :key="element.id" class="item">
        {{element.name}}
    </div>
    <button slot="header" @click="addPeople">Add</button>
</draggable>
```

#### Footer

Use the `footer` slot to add none-draggable element inside the vuedraggable component.
Important: it should be used in conjunction with draggable option to tag draggable elements.
Note that footer slot will always be added after the default slot regardless its position in the template.
Ex:

``` html
<draggable v-model="myArray" draggable=".item">
    <div v-for="element in myArray" :key="element.id" class="item">
        {{element.name}}
    </div>
    <button slot="footer" @click="addPeople">Add</button>
</draggable>
```

### Gotchas

* Vue.draggable children should always map the list or value prop using a v-for directive
  * You may use [header](https://github.com/SortableJS/Vue.Draggable#header) and [footer](https://github.com/SortableJS/Vue.Draggable#footer) slot to by-pass this limitation.

* Children elements inside v-for should be keyed as any element in Vue.js. Be carefull to provide revelant key values in particular:
  * typically providing array index as keys won't work as key should be linked to the items content
  * cloned elements should provide updated keys, it is doable using the [clone props](#clone) for example

### Example

* [Clone](https://sortablejs.github.io/Vue.Draggable/#/custom-clone)
* [Handle](https://sortablejs.github.io/Vue.Draggable/#/handle)
* [Transition](https://sortablejs.github.io/Vue.Draggable/#/transition-example-2)
* [Nested](https://sortablejs.github.io/Vue.Draggable/#/nested-example)
* [Table](https://sortablejs.github.io/Vue.Draggable/#/table-example)

### Full demo example

[draggable-example](https://github.com/David-Desmaisons/draggable-example)
