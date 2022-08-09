import{_ as n,o as s,c as a,d as e}from"./app.8bcddba4.js";const p={},t=e(`<h1 id="mock-data" tabindex="-1"><a class="header-anchor" href="#mock-data" aria-hidden="true">#</a> Mock Data</h1><p>Mock \u6570\u636E\u662F\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u73AF\uFF0C\u662F\u5206\u79BB\u524D\u540E\u7AEF\u5F00\u53D1\u7684\u5173\u952E\u94FE\u8DEF\u3002\u901A\u8FC7\u9884\u5148\u8DDF\u670D\u52A1\u5668\u7AEF\u7EA6\u5B9A\u597D\u7684\u63A5\u53E3\uFF0C\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\u751A\u81F3\u903B\u8F91\uFF0C\u80FD\u591F\u8BA9\u524D\u7AEF\u5F00\u53D1\u66F4\u52A0\u72EC\u7ACB\u81EA\u4E3B\uFF0C\u4E0D\u4F1A\u88AB\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u6240\u963B\u585E\u3002</p><h2 id="\u8DDF\u540E\u7AEF\u8BF7\u6C42\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u540E\u7AEF\u8BF7\u6C42\u6570\u636E" aria-hidden="true">#</a> \u8DDF\u540E\u7AEF\u8BF7\u6C42\u6570\u636E</h2><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u540E\u7AEF\u5199\u597Dapi\u7684\u8BDD\uFF0C\u8DDF\u540E\u7AEF\u6B63\u5E38\u8C03\u7528\u6570\u636E\uFF0C\u5728<code>vue.config.js</code>\u4E0B\u7684<code>devServer</code>, target\u6839\u636E\u5177\u4F53\u60C5\u51B5\u4FEE\u6539\u540E\u7AEF\u540C\u5B66\u7684\u5730\u5740</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// detail: https://cli.vuejs.org/config/#devserver-proxy</span>
  <span class="token punctuation">[</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://22.188.15.205:9010/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token comment">//\u8981\u4EE3\u7406\u7684\u540E\u7AEF\u670D\u52A1\u5730\u5740</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">&#39;^&#39;</span> <span class="token operator">+</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mockjs" tabindex="-1"><a class="header-anchor" href="#mockjs" aria-hidden="true">#</a> Mockjs</h2><p>\u9002\u7528\u4E8E\u540E\u7AEF\u8FD8\u672A\u5199\u7684\u60C5\u51B5\u4E0B\u9700\u8981\u5047\u6570\u636E\u3002</p><p>\u9879\u76EE\u5728\u672C\u5730\u4F1A\u542F\u52A8\u4E00\u4E2A<code>mock-server</code>\u6765\u6A21\u62DF\u6570\u636E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mock/mock-server.js&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h2><p>mock\u62E6\u622A\u5668\u67D0\u4E9B\u65F6\u5019\u4F1A\u51FA\u95EE\u9898\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528<code>mock-server</code>\u7684\u8BDD\u53EA\u8981\u5728<code>vue.config.js</code>\u4E2D\u79FB\u9664<code>webpack-dev-server</code>\u4E2D<code>before</code>\u8FD9\u4E2A<code>Middleware</code>\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//before: require(&#39;./mock/mock-server.js&#39;) //\u628A\u8BE5\u6BB5\u6CE8\u91CA\u6389\u5C31\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u8BF7\u6CE8\u610F\uFF1A\u8BE5\u64CD\u4F5C\u9700\u8981\u91CD\u542F\u670D\u52A1</strong></p></div><h2 id="\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a> \u65B0\u589E</h2><p>\u5982\u679C\u4F60\u60F3\u6DFB\u52A0 mock \u6570\u636E\uFF0C\u53EA\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u627E\u5230<code>mock</code>\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u5BF9\u5176\u8FDB\u884C\u62E6\u622A\u548C\u6A21\u62DF\u6570\u636E\u5373\u53EF\u3002</p><p>\u6BD4\u5982\u6211\u73B0\u5728\u5728<code>src/api/table</code>(\u4E2D\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u67E5\u8BE2\u67D0\u4E2A\u9875\u9762table\u6570\u636E\u7684\u63A5\u53E3<code>getList</code>\uFF0C\u9996\u5148\u65B0\u5EFA\u63A5\u53E3\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_MOCK_API</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/table/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    params
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u58F0\u660E\u5B8C\u63A5\u53E3\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u5BF9\u5E94\u7684 mock \u6587\u4EF6\u5939[mock/table.js]\uFF0C\u5728\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A\u80FD\u62E6\u622A\u8DEF\u7531\u7684 mock \u63A5\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// fetchComments \u7684 mock</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/table/list&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u548C\u4F60\u63A5\u53E3\u5B9A\u4E49\u7684\u7C7B\u578B\u4E00\u6837</span>
  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD4\u56DE\u7684\u7ED3\u679C</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h2><p>\u6700\u5E38\u89C1\u7684\u64CD\u4F5C\u5C31\u662F\uFF1A\u4F60\u672C\u5730\u6A21\u62DF\u4E86\u4E86\u4E00\u4E9B\u6570\u636E\uFF0C\u5F85\u540E\u7AEF\u5B8C\u6210\u63A5\u53E3\u540E\uFF0C\u9010\u6B65\u66FF\u6362\u6389\u539F\u5148 mock \u7684\u63A5\u53E3\u3002</p><p>\u6211\u4EEC\u4EE5\u4E0A\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u627E\u5230\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u5E76\u6CE8\u91CA\u6216\u5220\u9664</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_MOCK_API</span><span class="token punctuation">,</span> <span class="token comment">//\u8BE5\u6BB5\u6CE8\u91CA\u6389\u6216\u5220\u6389</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/table/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    params
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[t];function c(i,r){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","mockApi.html.vue"]]);export{u as default};