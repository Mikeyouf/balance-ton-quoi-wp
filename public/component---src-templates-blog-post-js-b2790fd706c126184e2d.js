(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return f});n(24);var r=n(0),i=n.n(r),s=n(40),a=n(218),u=n.n(a),o=n(211),c=n(212);e.default=function(t){var e=t.data.wordpressPost,n=t.data.site.siteMetadata.title,r=t.pageContext,a=r.previous,f=r.next,l=u()(e.date).format("DD MMMM YYYY");return i.a.createElement(c.a,{title:n},i.a.createElement(o.a,{title:e.title,keywords:["gatsby","blog","wordpress"]}),i.a.createElement("section",{className:"section has-text-centered"},i.a.createElement("span",{className:"is-uppercase"},l," |"," ",e.categories.map(function(t,e){return i.a.createElement("span",{key:e},t.name)})),i.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light",dangerouslySetInnerHTML:{__html:e.title}})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,a&&i.a.createElement(s.a,{to:"/"+a.slug,rel:"prev"},"← Previous")),i.a.createElement("li",null,f&&i.a.createElement(s.a,{to:"/"+f.slug,rel:"next"},"Next →"))))};var f="1600201554"},218:function(t,e,n){n(219),n(221),n(56),n(76),n(8),n(143),n(24),n(39),n(15),n(222),t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,a),i=e-r<0,s=t.clone().add(n+(i?-1:1),a);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:o,w:s,d:i,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$="en",m={};m[$]=d;var g=function(t){return t instanceof v},p=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||($=r),r},y=function(t,e,n){if(g(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new v(r)},M=h;M.l=p,M.i=g,M.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u})};var v=function(){function l(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return M},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",o)},h.month=function(t){return this.$g(t,"$M",a)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var c=this,f=!!M.u(u)||u,l=M.p(t),h=function(t,e){var n=M.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},d=function(t,e){return M.w(c.toDate()[t].apply(c.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},$=this.$W,m=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case o:return f?h(1,0):h(31,11);case a:return f?h(1,m):h(0,m+1);case s:var y=this.$locale().weekStart||0,v=($<y?$+7:$)-y;return h(f?g-v:g+(6-v),m);case i:case"date":return d(p+"Hours",0);case r:return d(p+"Minutes",1);case n:return d(p+"Seconds",2);case e:return d(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,u){var c,f=M.p(s),l="set"+(this.$u?"UTC":""),h=(c={},c[i]=l+"Date",c.date=l+"Date",c[a]=l+"Month",c[o]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[f],d=f===i?this.$D+(u-this.$W):u;if(f===a||f===o){var $=this.clone().set("date",1);$.$d[h](d),$.init(),this.$d=$.set("date",Math.min(this.$D,$.daysInMonth())).toDate()}else h&&this.$d[h](d);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[M.p(t)]()},h.add=function(t,u){var c,f=this;t=Number(t);var l=M.p(u),h=function(e){var n=y(f);return M.w(n.date(n.date()+Math.round(e*t)),f)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if(l===i)return h(1);if(l===s)return h(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,$=this.valueOf()+t*d;return M.w($,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return M.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:l(i.monthsShort,u,c,3),MMMM:c[u]||c(this,n),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,o,2),ddd:l(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||$[t]||r.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,f){var l,h=M.p(c),d=y(t),$=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,g=M.m(this,d);return g=(l={},l[o]=g/12,l[a]=g,l[u]=g/3,l[s]=(m-$)/6048e5,l[i]=(m-$)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[h]||m,f?g:M.a(g)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=p(t,e,!0),n},h.clone=function(){return M.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}();return y.prototype=v.prototype,y.extend=function(t,e){return t(e,v,y),y},y.locale=p,y.isDayjs=g,y.unix=function(t){return y(1e3*t)},y.en=m[$],y.Ls=m,y}()},219:function(t,e,n){var r=n(1),i=n(220);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},220:function(t,e,n){"use strict";var r=n(9),i=Date.prototype.getTime,s=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=s.call(new Date(-5e13-1))})||!r(function(){s.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:s},221:function(t,e,n){"use strict";var r=n(1),i=n(19),s=n(75);r(r.P+r.F*n(9)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=i(this),n=s(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},222:function(t,e,n){"use strict";var r=n(4),i=n(25),s=n(37),a=n(144),u=n(75),o=n(9),c=n(99).f,f=n(100).f,l=n(11).f,h=n(145).trim,d=r.Number,$=d,m=d.prototype,g="Number"==s(n(57)(m)),p="trim"in String.prototype,y=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,s=(e=p?e.trim():h(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,o=e.slice(2),c=0,f=o.length;c<f;c++)if((a=o.charCodeAt(c))<48||a>i)return NaN;return parseInt(o,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?o(function(){m.valueOf.call(n)}):"Number"!=s(n))?a(new $(y(e)),n,d):y(e)};for(var M,v=n(10)?c($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;v.length>S;S++)i($,M=v[S])&&!i(d,M)&&l(d,M,f($,M));d.prototype=m,m.constructor=d,n(14)(r,"Number",d)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b2790fd706c126184e2d.js.map