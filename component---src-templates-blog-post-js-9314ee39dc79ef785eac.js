(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),a=r("Bnag");e.exports=function(e){return n(e)||o(e)||c(e)||a()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp"),f=p.useMDXComponents,s=p.mdx,b=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,c=e.children,i=a(e,["scope","components","children"]),p=f(r),y=b(t),m=u.useMemo((function(){if(!c)return null;var e=l({React:u,mdx:s},y),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+c])).apply(void 0,[{}].concat(o(r)))}),[c,t]);return u.createElement(m,l({components:p},i))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function c(t,r,a){return o()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}e.exports=c},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return y}));var n=r("rePB"),o=r("q1tI"),c=r.n(o),a=r("Wbzz"),i=r("A2+M"),l=r("6Gk8"),u=r("Bl7J"),p=r("vrFN"),f=r("p3AD");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.data,r=e.pageContext,n=e.location,o=t.mdx,s=t.site.siteMetadata.title,y=r.previous,m=r.next;return c.a.createElement(u.a,{location:n,title:s},c.a.createElement(p.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),c.a.createElement("article",null,c.a.createElement("header",null,c.a.createElement("h1",{style:{marginTop:Object(f.a)(1),marginBottom:0}},o.frontmatter.title),c.a.createElement("p",{style:b(b({},Object(f.b)(-.2)),{},{display:"block",marginBottom:Object(f.a)(1)})},o.frontmatter.date)),c.a.createElement(i.MDXRenderer,null,o.body),c.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),c.a.createElement("footer",null,c.a.createElement(l.a,null))),c.a.createElement("nav",null,c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,y&&c.a.createElement(a.Link,{to:y.fields.slug,rel:"prev"},"← ",y.frontmatter.title)),c.a.createElement("li",null,m&&c.a.createElement(a.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))};var y="892987174"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9314ee39dc79ef785eac.js.map