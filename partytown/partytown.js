/* Partytown 0.3.2 - MIT builder.io */
!function(t,e,n,i,r,o,a,s,d,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/partytown/")+(o.debug?"debug/":""))[0]&&(d=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):d.length&&(s=setTimeout(f,1e4),e.addEventListener("pt0",g),r?h(1):n.serviceWorker?n.serviceWorker.register(a+"partytown-sw.js",{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(t,n){for(g(),t=0;t<d.length;t++)(n=e.createElement("script")).innerHTML=d[t].innerHTML,e.head.appendChild(n)}function g(){clearTimeout(s)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,top.crossOriginIsolated);