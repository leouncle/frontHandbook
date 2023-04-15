import{_ as o,r as p,o as l,c,a as n,e as t,F as i,d as e,b as a}from"./app.1d2f7275.js";const u={},r=e(`<h1 id="drag\u62D6\u62FD" tabindex="-1"><a class="header-anchor" href="#drag\u62D6\u62FD" aria-hidden="true">#</a> drag\u62D6\u62FD</h1><p><strong>\u63D2\u4EF6\u9700\u8981\u5C40\u90E8\u5F15\u5165</strong></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> examples</h2><h3 id="typical-use" tabindex="-1"><a class="header-anchor" href="#typical-use" aria-hidden="true">#</a> Typical use</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>people<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag=true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{element.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> draggable <span class="token keyword">from</span> <span class="token string">&#39;vuedraggable&#39;</span>
<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    draggable<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-transition-group" tabindex="-1"><a class="header-anchor" href="#with-transition-group" aria-hidden="true">#</a> With transition-group</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{element.name}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-footer-slot" tabindex="-1"><a class="header-anchor" href="#with-footer-slot" aria-hidden="true">#</a> With footer slot</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{element.name}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPeople<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-vuex" tabindex="-1"><a class="header-anchor" href="#with-vuex" aria-hidden="true">#</a> With Vuex</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>myList<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>myList
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateList&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><table><thead><tr><th>Property</th><th>Description</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th></tr></thead><tbody><tr><td>value</td><td>Input array to draggable component. Typically same array as referenced by inner element v-for directive.This is the preferred way to use Vue.draggable as it is compatible with Vuex. It should not be used directly but only though the v-model directive:</td><td style="text-align:center;">Array</td><td style="text-align:center;">null</td></tr><tr><td>list</td><td>Alternative to the value prop, list is an array to be synchronized with drag-and-drop.The main difference is that list prop is updated by draggable component using splice method, whereas value is immutable. <strong>Do not use in conjunction with value prop.</strong></td><td style="text-align:center;">Array</td><td style="text-align:center;">null</td></tr><tr><td>tag</td><td>Input array to draggable component. Typically same array as referenced by inner element v-for directive.This is the preferred way to use Vue.draggable as it is compatible with Vuex. It should not be used directly but only though the v-model directive:</td><td style="text-align:center;">String</td><td style="text-align:center;">div</td></tr><tr><td>clone</td><td>Function called on the source component to clone element when clone option is true. The unique argument is the viewModel element to be cloned and the returned value is its cloned version.By default vue.draggable reuses the viewModel element, so you have to use this hook if you want to clone or deep clone it.</td><td style="text-align:center;">Function</td><td style="text-align:center;">(original) =&gt; { return original;}</td></tr><tr><td>move</td><td>If not null this function will be called in a similar way as Sortable onMove callback. Returning false will cancel the drag operation.</td><td style="text-align:center;">Function</td><td style="text-align:center;">null</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> events</h2>`,14),d=e("Support for Sortable events: <code>start</code>, <code>add</code>, <code>remove</code>, <code>update</code>, <code>end</code>, <code>choose</code>, <code>unchoose</code>, <code>sort</code>, <code>filter</code>, <code>clone</code><br> Events are called whenever onStart, onAdd, onRemove, onUpdate, onEnd, onChoose, onUnchoose, onSort, onClone are fired by Sortable.js with the same argument.<br>",23),k={href:"https://github.com/RubaXa/Sortable#event-object-demo",target:"_blank",rel:"noopener noreferrer"},g=a("See here for reference"),m=a(" Note that SortableJS OnMove callback is mapped with the "),h={href:"https://github.com/SortableJS/Vue.Draggable/blob/master/README.md#move",target:"_blank",rel:"noopener noreferrer"},v=a("move prop"),b=a(" HTML:"),f=e(`<div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;draggable :list=&quot;list&quot; @end=&quot;onEnd&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>change event <code>change</code> event is triggered when list prop is not null and the corresponding array is altered due to drag-and-drop operation.<br> This event is called with one argument containing one of the following properties: <ul><li><code>added</code>: contains information of an element added to the array <ul><li><code>newIndex</code>: the index of the added element</li><li><code>element</code>: the added element</li></ul></li><li><code>removed</code>: contains information of an element removed from to the array <ul><li><code>oldIndex</code>: the index of the element before remove</li><li><code>element</code>: the removed element</li></ul></li><li><code>moved</code>: contains information of an element moved within the array <ul><li><code>newIndex</code>: the current index of the moved element</li><li><code>oldIndex</code>: the old index of the moved element</li><li><code>element</code>: the moved element</li></ul></li></ul></li></ul><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><p>Limitation: neither header or footer slot works in conjunction with transition-group.</p><h4 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h4><p>Use the <code>header</code> slot to add none-draggable element inside the vuedraggable component. Important: it should be used in conjunction with draggable option to tag draggable element. Note that header slot will always be added before the default slot regardless its position in the template. Ex:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{element.name}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPeople<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h4><p>Use the <code>footer</code> slot to add none-draggable element inside the vuedraggable component. Important: it should be used in conjunction with draggable option to tag draggable elements. Note that footer slot will always be added after the default slot regardless its position in the template. Ex:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element in myArray<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{element.name}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addPeople<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gotchas" tabindex="-1"><a class="header-anchor" href="#gotchas" aria-hidden="true">#</a> Gotchas</h3>`,11),y=n("p",null,"Vue.draggable children should always map the list or value prop using a v-for directive",-1),q=a("You may use "),_={href:"https://github.com/SortableJS/Vue.Draggable#header",target:"_blank",rel:"noopener noreferrer"},x=a("header"),w=a(" and "),S={href:"https://github.com/SortableJS/Vue.Draggable#footer",target:"_blank",rel:"noopener noreferrer"},V=a("footer"),A=a(" slot to by-pass this limitation."),T=n("li",null,[n("p",null,"Children elements inside v-for should be keyed as any element in Vue.js. Be carefull to provide revelant key values in particular:"),n("ul",null,[n("li",null,"typically providing array index as keys won't work as key should be linked to the items content"),n("li",null,[a("cloned elements should provide updated keys, it is doable using the "),n("a",{href:"#clone"},"clone props"),a(" for example")])])],-1),j=n("h3",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),a(" Example")],-1),D={href:"https://sortablejs.github.io/Vue.Draggable/#/custom-clone",target:"_blank",rel:"noopener noreferrer"},I=a("Clone"),E={href:"https://sortablejs.github.io/Vue.Draggable/#/handle",target:"_blank",rel:"noopener noreferrer"},L=a("Handle"),M={href:"https://sortablejs.github.io/Vue.Draggable/#/transition-example-2",target:"_blank",rel:"noopener noreferrer"},N=a("Transition"),F={href:"https://sortablejs.github.io/Vue.Draggable/#/nested-example",target:"_blank",rel:"noopener noreferrer"},H=a("Nested"),B={href:"https://sortablejs.github.io/Vue.Draggable/#/table-example",target:"_blank",rel:"noopener noreferrer"},C=a("Table"),J=n("h3",{id:"full-demo-example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#full-demo-example","aria-hidden":"true"},"#"),a(" Full demo example")],-1),P={href:"https://github.com/David-Desmaisons/draggable-example",target:"_blank",rel:"noopener noreferrer"},R=a("draggable-example");function U(W,$){const s=p("ExternalLinkIcon");return l(),c(i,null,[r,n("ul",null,[n("li",null,[d,n("a",k,[g,t(s)]),m,n("a",h,[v,t(s)]),b])]),f,n("ul",null,[n("li",null,[y,n("ul",null,[n("li",null,[q,n("a",_,[x,t(s)]),w,n("a",S,[V,t(s)]),A])])]),T]),j,n("ul",null,[n("li",null,[n("a",D,[I,t(s)])]),n("li",null,[n("a",E,[L,t(s)])]),n("li",null,[n("a",M,[N,t(s)])]),n("li",null,[n("a",F,[H,t(s)])]),n("li",null,[n("a",B,[C,t(s)])])]),J,n("p",null,[n("a",P,[R,t(s)])])],64)}var G=o(u,[["render",U],["__file","dragable.html.vue"]]);export{G as default};