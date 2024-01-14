import{i as T,A as I,a as x,r as g,B,C as V,D as U,w as G,o as L,E as h,g as D,t as K,n as Z,G as q,H as X,d as j,c as w,m as J}from"./index-h3MAUAXf.js";const Q=Object.assign,ee=typeof window<"u",R=e=>e!==null&&typeof e=="object",E=e=>e!=null,ne=e=>typeof e=="function",M=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),te=()=>ee?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function $(e,n){const t=n.split(".");let u=e;return t.forEach(o=>{var s;u=R(u)&&(s=u[o])!=null?s:""}),u}const ke=null,m=[Number,String],ue={type:Boolean,default:!0},Se=e=>({type:m,default:e}),b=e=>({type:String,default:e});var A=typeof window<"u",re=e=>e===window,F=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),_e=e=>{const n=h(e);if(re(n)){const t=n.innerWidth,u=n.innerHeight;return F(t,u)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():F(0,0)};function Te(e){const n=T(e,null);if(n){const t=D(),{link:u,unlink:o,internalChildren:s}=n;u(t),I(()=>o(t));const c=x(()=>s.indexOf(t));return{parent:n,index:c}}return{parent:null,index:g(-1)}}function oe(e){const n=[],t=u=>{Array.isArray(u)&&u.forEach(o=>{var s;X(o)&&(n.push(o),(s=o.component)!=null&&s.subTree&&(n.push(o.component.subTree),t(o.component.subTree.children)),o.children&&t(o.children))})};return t(e),n}var O=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(u=>n.key!==void 0&&n.key!==null&&u.type===n.type&&u.key===n.key):t};function se(e,n,t){const u=oe(e.subTree.children);t.sort((s,c)=>O(u,s.vnode)-O(u,c.vnode));const o=t.map(s=>s.proxy);n.sort((s,c)=>{const r=o.indexOf(s),i=o.indexOf(c);return r-i})}function Ie(e){const n=B([]),t=B([]),u=D();return{children:n,linkChildren:s=>{K(e,Object.assign({link:i=>{i.proxy&&(t.push(i),n.push(i.proxy),se(u,n,t))},unlink:i=>{const a=t.indexOf(i);n.splice(a,1),t.splice(a,1)},children:n,internalChildren:t},s))}}}function ie(e){let n;L(()=>{e(),Z(()=>{n=!0})}),q(()=>{n&&e()})}function Le(e,n,t={}){if(!A)return;const{target:u=window,passive:o=!1,capture:s=!1}=t;let c=!1,r;const i=d=>{if(c)return;const l=h(d);l&&!r&&(l.addEventListener(e,n,{capture:s,passive:o}),r=!0)},a=d=>{if(c)return;const l=h(d);l&&r&&(l.removeEventListener(e,n,s),r=!1)};I(()=>a(u)),V(()=>a(u)),ie(()=>i(u));let p;return U(u)&&(p=G(u,(d,l)=>{a(l),i(d)})),()=>{p==null||p(),a(u),c=!0}}var v,y;function ae(){if(!v&&(v=g(0),y=g(0),A)){const e=()=>{v.value=window.innerWidth,y.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:v,height:y}}var ce=/scroll|auto|overlay/i,W=A?window:void 0;function de(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function le(e,n=W){let t=e;for(;t&&t!==n&&de(t);){const{overflowY:u}=window.getComputedStyle(t);if(ce.test(u))return t;t=t.parentNode}return n}function je(e,n=W){const t=g();return L(()=>{e.value&&(t.value=le(e.value,n))}),t}te();const fe=e=>e.stopPropagation();function Re(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&fe(e)}function Me(e){const n=h(e);if(!n)return!1;const t=window.getComputedStyle(n),u=t.display==="none",o=n.offsetParent===null&&t.position!=="fixed";return u||o}const{width:We,height:ze}=ae();function f(e){if(E(e))return M(e)?`${e}px`:String(e)}function He(e){if(E(e)){if(Array.isArray(e))return{width:f(e[0]),height:f(e[1])};const n=f(e);return{width:n,height:n}}}const pe=/-(\w)/g,z=e=>e.replace(pe,(n,t)=>t.toUpperCase()),{hasOwnProperty:ge}=Object.prototype;function Ee(e,n,t){const u=n[t];E(u)&&(!ge.call(e,t)||!R(u)?e[t]=u:e[t]=H(Object(e[t]),u))}function H(e,n){return Object.keys(n).forEach(t=>{Ee(e,n,t)}),e}var me={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,n)=>`${e}年${n}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const N=g("zh-CN"),k=B({"zh-CN":me}),ve={messages(){return k[N.value]},use(e,n){N.value=e,this.add({[e]:n})},add(e={}){H(k,e)}};var he=ve;function we(e){const n=z(e)+".";return(t,...u)=>{const o=he.messages(),s=$(o,n+t)||$(o,t);return ne(s)?s(...u):s}}function C(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,u)=>t+C(e,u),""):Object.keys(n).reduce((t,u)=>t+(n[u]?C(e,u):""),""):""}function ye(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${C(n,t)}`)}function P(e){const n=`van-${e}`;return[n,ye(n),we(n)]}function Y(e){return e.install=n=>{const{name:t}=e;t&&(n.component(t,e),n.component(z(`-${t}`),e))},e}function Ye(e){const n=D();n&&Q(n.proxy,e)}const[Be,S]=P("badge"),be={dot:Boolean,max:m,tag:b("div"),color:String,offset:Array,content:m,showZero:ue,position:b("top-right")};var Ce=j({name:Be,props:be,setup(e,{slots:n}){const t=()=>{if(n.content)return!0;const{content:r,showZero:i}=e;return E(r)&&r!==""&&(i||r!==0&&r!=="0")},u=()=>{const{dot:r,max:i,content:a}=e;if(!r&&t())return n.content?n.content():E(i)&&M(a)&&+a>+i?`${i}+`:a},o=r=>r.startsWith("-")?r.replace("-",""):`-${r}`,s=x(()=>{const r={background:e.color};if(e.offset){const[i,a]=e.offset,{position:p}=e,[d,l]=p.split("-");n.default?(typeof a=="number"?r[d]=f(d==="top"?a:-a):r[d]=d==="top"?f(a):o(a),typeof i=="number"?r[l]=f(l==="left"?i:-i):r[l]=l==="left"?f(i):o(i)):(r.marginTop=f(a),r.marginLeft=f(i))}return r}),c=()=>{if(t()||e.dot)return w("div",{class:S([e.position,{dot:e.dot,fixed:!!n.default}]),style:s.value},[u()])};return()=>{if(n.default){const{tag:r}=e;return w(r,{class:S("wrapper")},{default:()=>[n.default(),c()]})}return c()}}});const xe=Y(Ce),[De,Ve]=P("config-provider"),Ae=Symbol(De),[Pe,_]=P("icon"),$e=e=>e==null?void 0:e.includes("/"),Fe={dot:Boolean,tag:b("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var Oe=j({name:Pe,props:Fe,setup(e,{slots:n}){const t=T(Ae,null),u=x(()=>e.classPrefix||(t==null?void 0:t.iconPrefix)||_());return()=>{const{tag:o,dot:s,name:c,size:r,badge:i,color:a}=e,p=$e(c);return w(xe,J({dot:s,tag:o,class:[u.value,p?"":`${u.value}-${c}`],style:{color:a,fontSize:f(r)},content:i},e.badgeProps),{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n),p&&w("img",{class:_("image"),src:c},null)]}})}}});const Ue=Y(Oe);export{xe as B,Ue as I,ze as a,Ie as b,P as c,Y as d,Q as e,f,He as g,ke as h,Te as i,E as j,ee as k,Se as l,b as m,m as n,je as o,Re as p,Ye as q,Le as r,Me as s,ue as t,_e as u,We as w};
