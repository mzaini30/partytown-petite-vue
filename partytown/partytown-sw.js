/* Partytown 0.3.2 - MIT builder.io */
const e=new Map,t=(e,t)=>({y:e.y,l:t}),n=(e,t)=>new Response(e,{headers:{"content-type":t||"text/html","Cache-Control":"no-store"}});self.oninstall=()=>self.skipWaiting(),self.onactivate=()=>self.clients.claim(),self.onmessage=t=>{const n=t.data,r=e.get(n.y);r&&(e.delete(n.y),clearTimeout(r[1]),r[0](n))},self.onfetch=r=>{const s=r.request,o=new URL(s.url).pathname;o.endsWith("sw.html")?r.respondWith(n('<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">/* Partytown 0.3.2 - MIT builder.io */\n(e=>{const t=()=>{},n=e=>e.length,r=e=>{try{return e.constructor.name}catch(e){}return""},s=(e,t)=>e.startsWith(t),o=e=>!(s(e,"webkit")||s(e,"toJSON")||s(e,"constructor")||s(e,"toString")||s(e,"_")),i=()=>Math.round(999999999*Math.random()+4),a=Symbol(),l=Symbol(),c=new Map,u=new Map,h={},p=new WeakMap,d=(e,t,n)=>e?e===e.window?0:"#document"===(n=e.nodeName)?1:"HTML"===n?2:"HEAD"===n?3:"BODY"===n?4:("number"!=typeof(t=e[a])&&m(e,t=i()),t):-1,g=(e,t,n,r,s)=>{if((n=h[e])&&(r=n.L))return s=r.document,0===t?r:1===t?s:2===t?s.documentElement:3===t?s.head:4===t?s.body:c.get(t)},m=(e,t,n)=>{e&&(c.set(t,e),e[a]=t,e[l]=n=Date.now(),n>f+5e3&&(c.forEach(((e,t)=>{e[l]<f&&e.nodeType&&!e.isConnected&&c.delete(t)})),f=n))};let f=0;const y=e.parent,w=document,$=y.partytown||{},v=($.lib||"/~partytown/")+"",T=(e,t,n,o,i)=>void 0!==t&&(o=typeof t)?"string"===o||"number"===o||"boolean"===o||null==t?[0,t]:"function"===o?[6]:(n=n||new Set)&&Array.isArray(t)?n.has(t)?[1,[]]:n.add(t)&&[1,t.map((t=>T(e,t,n)))]:"object"===o?""===(i=r(t))?[2,{}]:"Window"===i?[3,{M:e,r:0}]:"HTMLCollection"===i||"NodeList"===i?[7,Array.from(t).map((t=>T(e,t,n)[1]))]:i.endsWith("Event")?[5,b(e,t,n)]:"CSSRuleList"===i?[12,Array.from(t).map(S)]:s(i,"CSS")&&i.endsWith("Rule")?[11,S(t)]:"CSSStyleDeclaration"===i?[13,b(e,t,n)]:"Attr"===i?[10,[t.name,t.value]]:t.nodeType?[3,{M:e,r:d(t),z:t.nodeName}]:[2,b(e,t,n,!0,!0)]:void 0:t,b=(e,t,n,r,s,i,a,l)=>{if(i={},!n.has(t))for(a in n.add(t),t)o(a)&&(l=t[a],(r||"function"!=typeof l)&&(s||""!==l)&&(i[a]=T(e,l,n)));return i},S=e=>{let t,n={};for(t in e)x.includes(t)&&(n[t]=e[t]);return n},M=(t,n,r,s)=>n?(r=n[0],s=n[1],0===r?s:4===r?E(t,s):1===r?s.map((e=>M(t,e))):3===r?g(s.M,s.r):5===r?L(I(t,s)):2===r?I(t,s):8===r?s:9===r?new e[n[2]](s):void 0):void 0,E=(e,{M:t,r:n,E:r},s)=>((s=u.get(r))||(s=function(...s){e.postMessage([7,{M:t,r:n,E:r,J:T(t,this),b:T(t,s)}])},u.set(r,s)),s),L=e=>new("detail"in e?CustomEvent:Event)(e.type,e),I=(e,t,n,r)=>{for(r in n={},t)n[r]=M(e,t[r]);return n},x="cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(","),N=async(e,t)=>{let r,s,o,i,a,l,c={y:t.y},u=n(t.I),p=0;for(;p<u;p++)try{l=p===u-1,r=t.I[p],s=r.M,o=r.a,h[s]||await new Promise((e=>{let t=0,n=()=>{h[s]||t++>999?e():setTimeout(n,9)};n()})),1===o[0]&&o[1]in h[s].L?m(new h[s].L[o[1]](...M(e,o[2])),r.r):(i=g(s,r.r),i?(a=C(e,i,o,l,r.n),r.c&&m(a,r.c),"object"==typeof(d=a)&&d&&d.then&&(a=await a,c.u=!0),c.F=T(s,a)):c.l=r.r+" not found")}catch(e){l?c.l=String(e.stack||e):console.error(e)}var d;return c},C=(e,t,r,s,o)=>{let i,a,l,c,u,h=0,p=n(r);for(;h<p;h++){a=r[h],i=r[h+1],l=r[h-1];try{if(!Array.isArray(i))if("string"==typeof a||"number"==typeof a){if(h+1===p&&o)return u={},o.map((e=>u[e]=t[e])),u;t=t[a]}else{if(0===i)return void(t[l]=M(e,a));if("function"==typeof t[l]&&(c=M(e,a),"insertRule"===l&&c[1]>n(t.cssRules)&&(c[1]=n(t.cssRules)),t=t[l].apply(t,c),"play"===l))return Promise.resolve()}}catch(e){if(s)throw e;console.debug(e)}}return t},O=(e,t,n)=>{if(!p.has(n)){p.set(n,t);const r=n.document,s=n.history,o=p.get(n.parent),i=()=>e.postMessage([3,{M:t,C:o,K:r.baseURI}]),a=s.pushState.bind(s),l=s.replaceState.bind(s),c=()=>setTimeout((()=>e.postMessage([11,t,r.baseURI])));s.pushState=(e,t,n)=>{a(e,t,n),c()},s.replaceState=(e,t,n)=>{l(e,t,n),c()},n.addEventListener("popstate",c),n.addEventListener("hashchange",c),h[t]={M:t,L:n},"complete"===r.readyState?i():n.addEventListener("load",i)}},R=(e,t)=>{let r,s,o,i=t.M,a=t.L,l=a.document;l&&l.body?(r=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])\'),r||(r=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])\')),r?(r.dataset.ptid=s=d(r,i),o={M:i,r:s},r.src?(o.K=r.src,o.A=r.dataset.ptsrc||r.src):o.g=r.innerHTML,e.postMessage([5,o])):(t.s||(t.s=1,((e,t,r)=>{let s,o,i=r._ptf,a=(r.partytown||{}).forward||[],l=(n,r)=>e.postMessage([8,{M:t,m:n,b:T(t,Array.from(r))}]);if(r._ptf=void 0,a.map((e=>{o=r,e.split(".").map(((e,t,r)=>{o=o[r[t]]=t+1<n(r)?o[r[t]]||("push"===r[t+1]?[]:{}):(...e)=>l(r,e)}))})),i)for(s=0;s<n(i);s+=2)l(i[s],i[s+1])})(e,i,a),l.dispatchEvent(new CustomEvent("pt0"))),e.postMessage([6,i]))):requestAnimationFrame((()=>R(e,t)))},A=()=>{const e=w.implementation.createHTMLDocument(),t=e.createTextNode(""),n=e.createComment(""),s=e.createDocumentFragment(),o=e.createElementNS("http://www.w3.org/2000/svg","svg"),i=U(y,"IntersectionObserver"),a=U(y,"MutationObserver"),l=U(y,"ResizeObserver"),c=y.performance,u=y.screen,h=Object.getOwnPropertyNames(y).filter((e=>/^HTML.+Element$/.test(e))).map((t=>[e.createElement(W(t))])),p=h[0][0],d=[[y.history],[c],[c.navigation],[c.timing],[u],[u.orientation],[i,12],[a,12],[l,12],[t],[n],[s],[p],[p.attributes],[p.classList],[p.dataset],[p.style],[o],[e],[e.doctype],...h].filter((e=>e[0])).map((e=>{const t=e[0],n=e[1],s=r(t);return[s,y[s].prototype,t,n]})),g=[D("Window",y),D("Node",t)],m={f:JSON.stringify($,((e,t)=>("function"==typeof t&&(t=String(t)).startsWith(e+"(")&&(t="function "+t),t))),v:new URL(v,y.location)+"",q:g,w:k("localStorage"),G:k("sessionStorage")};return d.map((([e,t,n,r])=>H(g,e,t,n,r))),m},D=(e,t,n)=>{let r=[],s=[e,"Object",r];for(n in t)j(r,t,n);return s},H=(e,t,n,s,o)=>{if("Object"!==t&&!e.some((e=>e[0]===t))){const i=Object.getPrototypeOf(n),a=r(i),l=[];H(e,a,i,s,o),Object.keys(Object.getOwnPropertyDescriptors(n)).map((e=>j(l,s,e))),e.push([t,a,l,o,s.nodeName])}},j=(e,t,n,s,i,a)=>{try{o(n)&&isNaN(n[0])&&"all"!==n&&("function"==(i=typeof(s=t[n]))?(String(s).includes("[native")||Object.getPrototypeOf(t)[n])&&e.push([n,5]):"object"===i&&null!=s?"Object"!==(a=r(s))&&self[a]&&e.push([n,s.nodeType||a]):"symbol"!==i&&(n.toUpperCase()===n?e.push([n,6,s]):e.push([n,6])))}catch(e){console.warn(e)}},P={Anchor:"A",DList:"DL",Image:"IMG",OList:"OL",Paragraph:"P",TableCaption:"CAPTION",TableCell:"TD",TableCol:"COLGROUP",TableRow:"TR",TableSection:"TBODY",UList:"UL"},W=e=>(e=e.slice(4).replace("Element",""),P[e]||e),k=e=>{let t,r=[],s=0,o=n(y[e]);for(;s<o;s++)t=y[e].key(s),r.push([t,y[e].getItem(t)]);return r},U=(e,n)=>void 0!==e[n]?new e[n](t):0;let F;(t=>{const n=e.navigator.serviceWorker;return n.getRegistration().then((e=>(n.addEventListener("message",(t=>{return n=t.data,r=t=>e.active&&e.active.postMessage(t),N(F,n).then(r);var n,r})),(e,t)=>{0===t[0]?e.postMessage([1,A()]):((e,t,n)=>{2===t[0]?O(e,i(),y):(n=h[t[1]])&&(5===t[0]?requestAnimationFrame((()=>R(e,n))):4===t[0]&&((e,t,n,r,s)=>{(s=t.L.document.querySelector(`[data-ptid="${n}"]`))&&(r?s.dataset.pterror=r:s.type+="-x"),R(e,t)})(e,n,t[2],t[3]))})(e,t)})))})().then((e=>{e&&(F=new Worker(URL.createObjectURL(new Blob([\'/* Partytown 0.3.2 - MIT builder.io */\\n(e=>{const t=Symbol(),n=Symbol(),r=Symbol(),s=Symbol(),i=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=new Map,$={},u=new WeakMap,h=new Map,d={},p=[],g={},m=new Map,f=new Map,w={},y=new Map,I=new Map,v=e=>e.split(","),b=e=>{if(e=g.v+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},S=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),T=v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling"),E=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=v("insertBefore,remove,removeChild,replaceChild"),N=v("className,width,height,hidden,innerHTML,innerText,textContent"),x=v("setAttribute,setProperty"),L=v("getClientRects,getBoundingClientRect"),R=["getComputedStyle"],A=v("addEventListener,dispatchEvent,removeEventListener"),C=A.concat(x,v("add,observe,remove,unobserve")),P=/^[A-Z]([A-Z0-9-]*[A-Z0-9])?$/,W=()=>{},H=e=>e.length,O=e=>{try{return e.constructor.name}catch(e){}return""},k=[],D=()=>Math.round(999999999*Math.random()+4),j="text/partytown",B=(e,t,n)=>Object.defineProperty(e,t,{...n,configurable:!0}),U=(e,t)=>B(e,"name",{value:t}),F=(e,t,n)=>B(e.prototype,t,n),_=(e,t)=>Object.defineProperties(e.prototype,t),q=(e,t,n)=>F(e,t,{value:n,writable:!0}),z=(e,t)=>t in e[o],V=(e,t)=>e[o][t],X=(e,t,n)=>e[o][t]=n,J=[];let Z=0;const Y=(e,r,s,o,a,l)=>{if(J.push({M:e[t],r:e[n],a:[...e[i],...r],c:o,n:a}),3===s)g.D([10,{y:D(),I:[...J]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),J.length=0;else if(1===s)return G(!0);Z=setTimeout(G,20)},G=e=>{if(clearTimeout(Z),H(J)){const t=J[H(J)-1],n={y:D(),I:[...J]};if(J.length=0,e){const e=((e,t)=>{const n=new XMLHttpRequest;return n.open("POST",b("proxytown"),!1),n.send(JSON.stringify(t)),JSON.parse(n.responseText)})(0,n),r=e.u,s=Oe(t.M,t.r,t.a,e.F);if(e.l){if(r)return Promise.reject(e.l);throw new Error(e.l)}return r?Promise.resolve(s):s}g.D([10,n])}},K=(e,t,n,r)=>g.f.get&&(r=g.f.get(ne(e,t)))!==a?r:r=Y(e,t,1,void 0,n),Q=(e,t,n,r)=>{if(g.f.set){if((r=g.f.set({value:n,prevent:l,...ne(e,t)}))===l)return;r!==a&&(n=r)}N.some((e=>t.includes(e)))&&(y.clear(),t[t.length-1]),t=[...t,He(e,n),0],Y(e,t,2)},ee=(e,t,n,r,s,i,o,l)=>g.f.apply&&(o=g.f.apply({args:n,...ne(e,t)}))!==a?o:(l=t[H(t)-1],t=[...t,He(e,n)],r=r||(C.includes(l)?2:1),"setAttribute"===l&&z(e,n[0])?X(e,n[0],n[1]):M.includes(l)?(y.clear(),I.clear()):x.includes(l)&&(r=2,y.clear()),o=Y(e,t,r,s,void 0,i)),te=(e,t,n)=>{Y(e,[1,t,He(e,n)],1)},ne=(e,t)=>({name:t.join("."),continue:a,nodeName:e[r],constructor:O(e)}),re=(t,n,r)=>{let s,i,o=()=>e.origin===t.origin,a=e=>((e=r.get(t.origin))||r.set(t.origin,e=[]),e),l=e=>a().findIndex((t=>t[se]===e)),c={getItem:e=>(s=l(e),s>-1?a()[s][ie]:null),setItem(e,r){s=l(e),s>-1?a()[s][ie]=r:a().push([e,r]),o()&&ee(t,[n,"setItem"],[e,r],2)},removeItem(e){s=l(e),s>-1&&a().splice(s,1),o()&&ee(t,[n,"removeItem"],[e],2)},key:e=>(i=a()[e],i?i[se]:null),clear(){a().length=0,o()&&ee(t,[n,"clear"],k,2)},get length(){return a().length}};t[n]=c},se=0,ie=1;class oe{constructor(e,a,l,c,$){this[t]=e,this[n]=a,this[i]=l||[],this[r]=c,this[o]={},$&&(this[s]=$)}}class ae extends oe{}A.map((e=>ae.prototype[e]=function(...t){return ee(this,[e],t,2)}));class le extends oe{constructor(e,t,n,r){return super(e,t,n,r),new Proxy(this,{get:(e,t)=>K(e,[t]),set:(e,t,n)=>(Q(e,[t],n),!0)})}}const ce=()=>(e.ptm||(e.ptm=[K,Q,ee,te,_,D,oe,ae,t,n,i],g.p(b("partytown-media.js"))),e.ptm),$e=v("AUDIO,CANVAS,VIDEO"),ue=v("Audio,MediaSource"),he=(e,t,n,r,s)=>((s=c.get(t))||(s=de(e,t,n,r),c.set(t,s)),s),de=(t,n,r,s)=>($e.includes(r)&&ce(),new(d[r]?d[r]:r.includes("-")?d.UNKNOWN:e.HTMLElement)(t,n,[],r,s)),pe=(e,t,n,r,s)=>{try{e.h=t,ge(e,n)}catch(e){console.error(n,e),s=String(e.stack||e)}return e.h=-1,s},ge=(e,t,n)=>new Function(`with(this){${t.replace(/\\\\bthis\\\\b/g,"(thi$(this)?window:this)").replace(/\\\\/\\\\/# so/g,"//Xso")};function thi$(t){return t===this}${(g.f.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\\\'function\\\'&&(window.${e}=${e}))`)).join(";")}}`+(n?"\\\\n//# sourceURL="+n:"")).call(e.L),me=(e,t,n)=>{(n=V(e,t))&&setTimeout((()=>n.map((e=>e({type:t})))))},fe=(e,t,n,r,s,i)=>{for(r=e.x;!r.host&&(r=(e=w[e.C]).x,e.M!==e.C););return s=new URL(t||"",r),!n&&g.f.resolveUrl&&(i=g.f.resolveUrl(s,r))?i:s},we=(e,t,n)=>fe(e,t,n)+"",ye=()=>`<script src="${b("partytown.js")}"><\\\\/script>`,Ie=e=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(t){fetch(we(e,t,!0),{mode:"no-cors",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}};class ve extends URL{assign(){}reload(){}replace(){}}class Window extends oe{constructor(t,n,r,s){super(t,0);let i,o,a,l=this;for(i in e)if(!(i in l)&&"onmessage"!==i&&(o=e[i],null!=o)){const t="function"==typeof o&&!o.toString().startsWith("class");l[i]=t?o.bind(e):o}Object.getOwnPropertyNames(e).map((t=>{t in l||(l[t]=e[t])})),h.forEach(((e,n)=>{l[n]=U(class{constructor(...r){const s=new e(t,D());return te(s,n,r),s}},n)})),ue.map((e=>B(l,e,{get(){delete l[e];const t=ce()[e];return l[e]=t(Te(l),l,e)}}))),"trustedTypes"in e&&(l.trustedTypes=e.trustedTypes),w[t]={M:t,C:n,L:new Proxy(l,{has:()=>!0}),j:de(t,1,"#document"),k:de(t,2,"HTML"),o:de(t,3,"HEAD"),d:de(t,4,"BODY"),x:new ve(r)},l.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),l.cancelAnimationFrame=e=>clearTimeout(e),l.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),l.cancelIdleCallback=e=>clearTimeout(e),re(l,"localStorage",m),re(l,"sessionStorage",f),s&&(a={},l.history={pushState(e){a=e},replaceState(e){a=e},get state(){return a},length:0}),l.Worker=void 0}get body(){return Te(this).d}get document(){return Te(this).j}get documentElement(){return Te(this).k}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(we(Te(this),e),t)}get frameElement(){const e=Te(this),t=e.C,n=e.M;return n===t?null:he(t,n,"IFRAME")}get globalThis(){return this}get head(){return Te(this).o}get location(){return Te(this).x}set location(e){Te(this).x.href=e+""}get Image(){return Ie(Te(this))}get name(){return name+this[t]}get navigator(){return(t=>{const n=e.navigator;return n.sendBeacon=(e,n)=>{try{return fetch(we(t,e,!0),{method:"POST",body:n,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}},n})(Te(this))}get origin(){return Te(this).x.origin}get parent(){return be(w[Te(this).C].L,this[t])}postMessage(...e){ee(this,["postMessage"],e,3)}get self(){return this}get top(){for(let e in w)if(w[e].M===w[e].C)return be(w[e].L,this[t])}get window(){return this}get XMLHttpRequest(){const t=Te(this);return class extends e.XMLHttpRequest{open(...e){e[1]=we(t,e[1]),super.open(...e)}set withCredentials(e){}}}}const be=(e,t)=>new Proxy(e,{get:(e,n)=>"postMessage"===n?(...n)=>{H(p)>20&&p.splice(0,5),p.push({i:JSON.stringify(n[0]),M:t}),e.postMessage(...n)}:e[n]}),Se=({M:e,C:t,K:n},r)=>(w[e]||new Window(e,t,n,r),g.D([5,e]),w[e]),Te=e=>w[e[t]],Ee={addEventListener:{value(...e){const t=e[0],n=V(this,t)||[];n.push(e[1]),X(this,t,n)}},async:{get:W,set:W},defer:{get:W,set:W},onload:{get(){let e=V(this,"load");return e&&e[0]||null},set(e){X(this,"load",e?[e]:null)}},onerror:{get(){let e=V(this,"error");return e&&e[0]||null},set(e){X(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:ee(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Me.includes(e)?this[e]=t:ee(this,["setAttribute"],[e,t])}}},Me=v("src,type"),Ne={get(){return V(this,3)||""},set(e){X(this,3,e)}},xe={innerHTML:Ne,innerText:Ne,src:{get(){return V(this,4)||""},set(e){const t=Te(this),n=we(t,e,!0);e=we(t,e),X(this,4,e),Q(this,["src"],e),n!==e&&Q(this,["dataset","ptsrc"],n)}},textContent:Ne,type:{get(){return K(this,["type"])},set(e){Le(e)||(X(this,5,e),Q(this,["type"],e))}},...Ee},Le=e=>!e||"text/javascript"===e;class Node extends oe{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const i=e[t]=this[t],o=e[n],a=e[r],l="SCRIPT"===a,c="IFRAME"===a;if(l){const t=V(e,3),n=V(e,5);if(t){if(Le(n)){const n=pe(Te(e),o,t,0,""),r=n?"pterror":"ptid",s=n||o;Q(e,["type"],j+"-x"),Q(e,["dataset",r],s)}Q(e,["innerHTML"],t)}}return ee(this,["insertBefore"],[e,s],2),c&&((e,t)=>{let n,r,s=0,i=()=>{w[e]&&w[e].s&&!w[e].t?(n=V(t,1)?"error":"load",r=V(t,n),r&&r.map((e=>e({type:n})))):s++>2e3?(r=V(t,"error"),r&&r.map((e=>e({type:"error"})))):setTimeout(i,9)};i()})(o,e),l&&(G(!0),g.D([5,i])),e}get nodeName(){return this[r]}get nodeType(){return 3}get ownerDocument(){return Te(this).j}}class Re{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}}class Ae extends oe{constructor(e,t,n,r){return super(e,t,n),Object.assign(this,r),new Proxy(this,{get:(e,t)=>e[t],set:(e,t,n)=>(Q(e,[t],n),y.clear(),!0)})}getPropertyValue(e){return this[e]}setProperty(e,t){this[e]=t}}class NodeList{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return H(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const Ce=(e,r,s,i,o)=>{return void 0!==s&&(o=typeof s)?"string"===o||"boolean"===o||"number"===o||null==s?[0,s]:"function"===o?[4,{M:e,r:r,E:(a=s,(l=u.get(a))||(u.set(a,l=D()),$[l]=a),l)}]:(i=i||new Set)&&Array.isArray(s)?i.has(s)?[1,[]]:i.add(s)&&[1,s.map((t=>Ce(e,r,t,i)))]:"object"===o?"number"==typeof s[n]?[3,{M:s[t],r:s[n]}]:s instanceof Event?[5,We(e,r,s,!1,i)]:Pe&&s instanceof TrustedHTML?[0,s.toString()]:s instanceof ArrayBuffer?[8,s]:ArrayBuffer.isView(s)?[9,s.buffer,O(s)]:[2,We(e,r,s,!0,i)]:void 0:s;var a,l},Pe="undefined"!=typeof TrustedHTML,We=(e,t,n,r,s,i,o,a)=>{if(i={},!s.has(n))for(o in s.add(n),n)a=n[o],(r||"function"!=typeof a)&&(i[o]=Ce(e,t,a,s));return i},He=(e,r)=>e?Ce(e[t],e[n],r):[0,r],Oe=(e,t,n,r,s,i,o,a)=>{if(r){if(s=r[0],i=r[1],0===s||11===s||12===s)return i;if(4===s)return je(n,i);if(6===s)return W;if(3===s)return ke(i);if(7===s)return new NodeList(i.map(ke));if(10===s)return new Re(i);if(1===s)return i.map((r=>Oe(e,t,n,r)));for(a in o={},i)o[a]=Oe(e,t,[...n,a],i[a]);if(13===s)return new Ae(e,t,n,o);if(5===s){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),n=p.find((e=>e.i===t));n&&(e=w[n.M],e&&(o.source=e.L,o.origin=e.x.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?W:e[String(t)]})}if(2===s)return o}},ke=({M:e,r:t,z:n})=>De(e,t)||he(e,t,n),De=(e,t,n)=>(n=w[e])&&0===t?n.L:1===t?n.j:2===t?n.k:3===t?n.o:4===t?n.d:void 0,je=(e,{M:t,r:n,z:r,E:s})=>($[s]||u.set($[s]=function(...s){const i=he(t,n,r);return ee(i,e,s)},s),$[s]),Be={sheet:{get(){return new Ue(this)}}};class Ue{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,n){const r=String(n);return"item"===r?t=>_e(e,t):"length"===r?Fe(e).length:isNaN(r)?t[n]:_e(e,r)}})}insertRule(e,t){const n=Fe(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=n.length&&(ee(this.ownerNode,["sheet","insertRule"],[e,t],2),n.splice(t,0,0)),this.ownerNode,y.clear(),t}deleteRule(e){ee(this.ownerNode,["sheet","deleteRule"],[e],2),Fe(this.ownerNode).splice(e,1),this.ownerNode,y.clear()}}const Fe=(e,t)=>((t=V(e,2))||(t=K(e,["sheet","cssRules"]),X(e,2,t)),t),_e=(e,t,n)=>(0===(n=Fe(e))[t]&&(n[t]=K(e,["sheet","cssRules",parseInt(t,10)])),n[t]),qe={body:{get(){return Te(this).d}},createElement:{value(e){if(e=e.toUpperCase(),!P.test(e))throw e+" not valid";const n=this[t],r=D(),s=he(n,r,e);if(ee(this,["createElement"],[e],2,r),"IFRAME"===e)Se({M:r,C:n,K:"about:blank"},!0).L.fetch=fetch,Q(s,["srcdoc"],ye());else if("SCRIPT"===e){const e=V(s,5);Le(e)&&Q(s,["type"],j)}return s}},createElementNS:{value(e,n){n=n.toLowerCase();const r=this[t],s=D(),i=he(r,s,n,e);return ee(this,["createElementNS"],[e,n],2,s),i}},createTextNode:{value(e){const n=this[t],r=D(),s=he(n,r,"#text");return ee(this,["createTextNode"],[e],2,r),s}},createEvent:{value:e=>new Event(e)},currentScript:{get(){const e=this[t],n=Te(this).h;return n>0?he(e,n,"SCRIPT"):null}},defaultView:{get(){return Te(this).L}},documentElement:{get(){return Te(this).k}},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[Te(this).d]:"HEAD"===e?[Te(this).o]:ee(this,["getElementsByTagName"],[e])}},head:{get(){return Te(this).o}},implementation:{value:{hasFeature:()=>!0}},location:{get(){return Te(this).x},set(e){Te(this).x.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"}},ze={parentElement:{get(){return this.parentNode}},parentNode:{get(){return Te(this).k}}},Ve={parentElement:{value:null},parentNode:{get(){return Te(this).j}}},Xe={localName:{get(){return this[r].toLowerCase()}},namespaceURI:{get(){return this[s]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[r]}}},Je={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{Je[e]={get(){let t,n=Te(this),r=V(this,4);return"string"!=typeof r&&(t=K(this,["href"]),X(this,4,t),r=new URL(t)[e]),fe(n,r)[e]},set(t){let n=Te(this),r=V(this,4),s=fe(n,r);s[e]=new URL(t+"",s.href),X(this,4,s.href),Q(this,["href"],s.href)}}}));const Ze={contentDocument:{get(){return Ye(this).j}},contentWindow:{get(){return Ye(this).L}},src:{get(){let e=Ye(this).x.href;return e.startsWith("about")&&(e=""),e},set(e){let t,n=new XMLHttpRequest,r=Ye(this);r.x.href=e=we(Te(this),e),r.t=1,X(this,1,void 0),n.open("GET",e,!1),n.send(),t=n.status,t>199&&t<300?(Q(this,["srcdoc"],`<base href="${e}">`+n.responseText.replace(/<script>/g,\\\'<script type="text/partytown">\\\').replace(/<script /g,\\\'<script type="text/partytown" \\\').replace(/text\\\\/javascript/g,j)+ye()),G(!0),g.D([5,r.M])):(X(this,1,t),r.t=0)}},...Ee},Ye=e=>{const r=e[n];return w[r]||Se({M:r,C:e[t],K:K(e,["src"])||"about:blank"},!0),w[r]},Ge=([s,o,a,l,c])=>{const $=Ke[s]?le:"EventTarget"===o?ae:"Object"===o?oe:e[o],u=e[s]=U(e[s]||class extends ${},s);12===l&&h.set(s,u),c&&(d[c]=u),a.map((([s,o,a])=>{s in u.prototype||s in $.prototype||("string"==typeof o?F(u,s,{get(){if(!z(this,s)){const a=this[t],l=this[n],c=[...this[i],s],$=this[r],u=e[o];X(this,s,new u(a,l,c,$))}return V(this,s)},set(e){X(this,s,e)}}):5===o?q(u,s,(function(...e){return ee(this,[s],e)})):o>0&&(void 0!==a?q(u,s,a):F(u,s,{get(){return K(this,[s])},set(e){return Q(this,[s],e)}})))}))},Ke={CSSStyleDeclaration:1,DOMStringMap:1,NamedNodeMap:1},Qe=(e,t)=>q(e,"nodeType",t),et=(e,t)=>t.map((t=>F(e,t,{get(){let e=tt(this,t),n=I.get(e);return n||(n=K(this,[t]),I.set(e,n)),n}}))),tt=(e,r,s)=>[e[t],e[n],r,...(s||k).map((e=>String(e&&e[t]?e[n]:e)))].join("."),nt=(e,t)=>v(t).map((t=>F(e,t,{get(){return z(this,t)||X(this,t,K(this,[t])),V(this,t)},set(e){V(this,t)!==e&&Q(this,[t],e),X(this,t,e)}}))),rt=e=>S.map((t=>F(e,t,{get(){const e=y.get(tt(this,t));if("number"==typeof e)return e;const n=K(this,[t],S);return n&&"object"==typeof n?(Object.entries(n).map((([e,t])=>y.set(tt(this,e),t))),n[t]):n}}))),st=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let n=tt(this,t,e),r=y.get(n);return r||(r=ee(this,[t],e),y.set(n,r)),r}}));class it extends oe{now(){return performance.now()}}const ot=[],at=t=>{const n=t.data,r=n[0],s=n[1];g.s?5===r?(async t=>{let n,r=t.M,s=t.r,i=he(r,s,"SCRIPT"),o=t.g,a=t.K,l=t.A,c="",$=w[r];if(a)try{a=fe($,a)+"",X(i,4,a),n=await e.fetch(a),n.ok?(o=await n.text(),$.h=s,ge($,o,l||a),me(i,"load")):(c=n.statusText,me(i,"error"))}catch(e){console.error(e),c=String(e.stack||e),me(i,"error")}else o&&(c=pe($,s,o,0,c));$.h=-1,g.D([4,r,s,c])})(s):7===r?(({M:e,r:t,E:n,J:r,b:s})=>{if($[n])try{$[n].apply(Oe(e,t,[],r),Oe(e,t,[],s))}catch(e){console.error(e)}})(s):8===r?(({M:e,m:t,b:n})=>{try{let r=w[e].L,s=0,i=H(t);for(;s<i;s++)s+1<i?r=r[t[s]]:r[t[s]].apply(r,Oe(null,0,[],n))}catch(e){console.error(e)}})(s):3===r?Se(s):6===r?(w[s].s=1,w[s].t=0):11===r&&(w[n[1]].x.href=n[2]):1===r?((t=>{const n=g.f=JSON.parse(t.f);g.p=importScripts.bind(e),g.v=t.v,g.D=postMessage.bind(e),g.H=t.H,m.set(origin,t.w),f.set(origin,t.G),delete e.postMessage,delete e.importScripts,e.Node=Node,e.Window=Window,e.CSSStyleSheet=Ue,e.Performance=it,t.q.map(Ge),(()=>{const t=e.Document,n=e.DocumentFragment,r=e.Element;var s,i;v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((e=>delete Window.prototype[e])),_(r,Xe),_(t,qe),_(e.HTMLAnchorElement,Je),_(e.HTMLIFrameElement,Ze),_(e.HTMLScriptElement,xe),_(e.HTMLStyleElement,Be),_(e.HTMLHeadElement,ze),_(e.HTMLBodyElement,ze),_(e.HTMLHtmlElement,Ve),s=Ue,i={type:"text/css"},Object.keys(i).map((e=>q(s,e,i[e]))),Qe(e.Comment,8),Qe(e.DocumentType,10),Qe(n,11),et(Node,T),et(r,E),et(n,E),rt(r),st(r,L),rt(Window),st(Window,R),nt(Window,"devicePixelRatio"),nt(t,"compatMode,referrer"),nt(r,"id")})(),["resolveUrl","get","set","apply"].map((e=>{n[e]&&(n[e]=new Function("return "+n[e])())})),g.s=1})(n[1]),g.D([2]),[...ot].map(at),ot.length=0):ot.push(t)};e.onmessage=at,postMessage([0])})(self);\\n\'],{type:"text/javascript"})),{name:"Partytown 🎉"}),F.onmessage=t=>{const n=t.data;10===n[0]?N(F,n[1]):e(F,n)},y.addEventListener("pt1",(e=>O(F,d(e.detail.frameElement),e.detail))))}))})(window);\n<\/script></head></html>')):o.endsWith("proxytown")&&r.respondWith((r=>new Promise((async s=>{const o=await r.clone().json(),i=await(n=>new Promise((async r=>{const s=[...await self.clients.matchAll()].sort(((e,t)=>e.url>t.url?-1:e.url<t.url?1:0))[0];if(s){const o=[r,setTimeout((()=>{e.delete(n.y),r(t(n,"Timeout"))}),1e4)];e.set(n.y,o),s.postMessage(n)}else r(t(n,"NoParty"))})))(o);s(n(JSON.stringify(i),"application/json"))})))(s))};