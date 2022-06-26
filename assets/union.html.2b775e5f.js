import{_ as s,o as n,c as a,b as e}from"./app.e8b9ffcc.js";const o={},l=e(`<p><strong>\u8BED\u6CD5</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> \u5B57\u6BB5\u5217\u8868 <span class="token keyword">from</span> \u8868a
<span class="token keyword">union</span> 
<span class="token keyword">select</span> \u5B57\u6BB5\u5217\u8868 <span class="token keyword">from</span> \u8868b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F8B\u5B50</p></blockquote><p><strong>\u5C06\u85AA\u8D44\u5C0F\u4E8E8000\u548C\u5E74\u9F84\u5927\u4E8E50\u5C81\u7684\u5458\u5DE5\u5168\u90E8\u67E5\u8BE2\u51FA\u6765</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>salary <span class="token keyword">from</span> emp <span class="token keyword">where</span> salary <span class="token operator">&lt;</span> <span class="token number">8000</span> <span class="token keyword">union</span> <span class="token keyword">all</span> <span class="token keyword">select</span> name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>salary <span class="token keyword">from</span> emp <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5982\u679C\u4E00\u4E2A\u5458\u5DE5\u85AA\u8D44\u5373\u5C0F\u4E8E8000\u5E76\u4E14\u5E74\u9F84\u5927\u4E8E50\u5C81,\u90A3\u4E48\u4F7F\u7528<code>union all</code>\u5C31\u4F1A\u51FA\u73B0\u4E24\u6761\u76F8\u540C\u7684\u6570\u636E</p><p>\u4F7F\u7528<code>union</code>\u53EF\u4EE5\u5C06\u76F8\u540C\u7684\u6570\u636E\u53BB\u9664\u4FDD\u7559\u4E00\u6761</p></div>`,6),t=[l];function c(p,r){return n(),a("div",null,t)}var d=s(o,[["render",c],["__file","union.html.vue"]]);export{d as default};
