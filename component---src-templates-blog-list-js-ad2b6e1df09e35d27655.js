(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(40),l=t(223),i=t(133),s=t.n(i);var o=function(e){var a,t;function r(){return e.apply(this,arguments)||this}t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var i=r.prototype;return i.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var a=e.dataset.target,t=document.getElementById(a);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})},i.render=function(){return n.a.createElement(c.b,{query:"3104594797",render:function(e){var a=e.allWordpressPage.edges;return n.a.createElement("section",{className:"hero is-primary is-medium"},n.a.createElement("div",{className:"hero-head"},n.a.createElement("nav",{className:"navbar is-primary"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(c.a,{to:"/",className:"navbar-item",title:"Gatsby Starter WordPress Community"},n.a.createElement("img",{src:s.a,alt:"Gatsby Starter WordPress Community",style:{width:"88px"}})),n.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenu"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"navMenu",className:"navbar-menu"},n.a.createElement("div",{className:"navbar-end has-text-centered"},a.map(function(e){return n.a.createElement(c.a,{className:"navbar-item",to:"/"+e.node.slug,key:e.node.wordpress_id},e.node.title)})))))))},data:l})},r}(r.Component),d=t(134),m=(t(146),function(e){var a=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,null),n.a.createElement("section",{className:"section"},n.a.createElement("main",{className:"container"},a)),n.a.createElement(d.a,null))}),u=t(211),p=(t(224),t(226)),g=function(e){return n.a.createElement(c.b,{query:"2016585944",render:function(a){var t={0:a.image1.childImageSharp.fluid.src,1:a.image2.childImageSharp.fluid.src,2:a.image3.childImageSharp.fluid.src,3:a.image4.childImageSharp.fluid.src,4:a.image5.childImageSharp.fluid.src}[e.index];return n.a.createElement("div",{className:"post-cover",style:{backgroundImage:"url("+t+")"}},e.children)},data:p})},f=function(e){return e.src?n.a.createElement("div",{className:"post-cover",style:{backgroundImage:"url("+e.src+")"}},e.children):n.a.createElement(g,{index:e.index},e.children)},v=function(e){var a=null;e.media&&e.media.localFile&&(a=e.media.localFile.childImageSharp.fixed.src);var t=e.index;return n.a.createElement("div",{className:"column post-card "+(0===t||4===t?"is-full":"is-one-third-desktop is-full-mobile")},n.a.createElement(f,{src:a,index:t},n.a.createElement(c.a,{to:"/"+e.slug})),n.a.createElement("div",{className:"post-excerpt"},n.a.createElement("p",{className:"title"},n.a.createElement(c.a,{dangerouslySetInnerHTML:{__html:e.title},to:"/"+e.slug})),n.a.createElement("div",{className:"excerpt"},n.a.createElement("div",{className:"content"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))))};t.d(a,"query",function(){return b});var b="2166183460";a.default=function(e){var a=e.data,t=a.site.siteMetadata.title,r=a.allWordpressPost.edges,l=e.pageContext,i=l.currentPage,s=l.numPages,o=function(e,a){for(var t,r=e-2,n=e+2+1,c=[],l=[],i=1;i<=a;i++)(1===i||i===a||i>=r&&i<n)&&c.push(i);for(var s=0,o=c;s<o.length;s++){var d=o[s];t&&d-t!=1&&l.push("..."),l.push(d),t=d}return l}(i,s);return n.a.createElement(m,null,n.a.createElement(u.a,{title:t,keywords:["gatsby","blog","wordpress"]}),n.a.createElement("div",{className:"columns is-multiline is-mobile blog-list"},r.map(function(e,a){return n.a.createElement(v,{key:e.node.wordpress_id,title:e.node.title,excerpt:e.node.excerpt,media:e.node.featured_media,slug:e.node.slug,index:a})})),n.a.createElement("section",{className:"section"},n.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},n.a.createElement("ul",{className:"pagination-list"},o.map(function(e){return n.a.createElement("li",{key:e},"..."===e?n.a.createElement("span",{className:"pagination-ellipsis"},"…"):n.a.createElement(c.a,{className:"pagination-link "+(i===e?"is-current":""),to:"/"+(1===e?"":e),"aria-label":"Goto page "+e},e))})))))}},223:function(e){e.exports=JSON.parse('{"data":{"allWordpressPage":{"edges":[{"node":{"title":"A propos","wordpress_id":12,"slug":"a-propos"}},{"node":{"title":"Page d’exemple","wordpress_id":2,"slug":"page-d-exemple"}}]}}}')},224:function(e,a,t){"use strict";t(225)("fixed",function(e){return function(){return e(this,"tt","","")}})},225:function(e,a,t){var r=t(1),n=t(9),c=t(38),l=/"/g,i=function(e,a,t,r){var n=String(c(e)),i="<"+a;return""!==t&&(i+=" "+t+'="'+String(r).replace(l,"&quot;")+'"'),i+">"+n+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(i),r(r.P+r.F*n(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},226:function(e){e.exports=JSON.parse('{"data":{"image1":{"childImageSharp":{"fluid":{"src":"/balance-ton-quoi-wp/static/46aa782224f818644454bf8d564407a5/ca4e2/stock-blogger-1.jpg"}}},"image2":{"childImageSharp":{"fluid":{"src":"/balance-ton-quoi-wp/static/1e3e6526dea414c24f60cc80c49eb740/ca4e2/stock-blogger-2.jpg"}}},"image3":{"childImageSharp":{"fluid":{"src":"/balance-ton-quoi-wp/static/c72a943c3464930eecd13747de93b6ea/ca4e2/stock-blogger-3.jpg"}}},"image4":{"childImageSharp":{"fluid":{"src":"/balance-ton-quoi-wp/static/bc3ac3be73dcc2866b263a391067d6a1/ca4e2/stock-blogger-4.jpg"}}},"image5":{"childImageSharp":{"fluid":{"src":"/balance-ton-quoi-wp/static/09b90a79d33091ddfe5056640dceba89/ca4e2/stock-blogger-5.jpg"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-ad2b6e1df09e35d27655.js.map