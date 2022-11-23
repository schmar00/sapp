(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();function a(){}function M(e){return e()}function N(){return Object.create(null)}function b(e){e.forEach(M)}function P(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function _(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function z(){return R(" ")}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}let m;function h(e){m=e}function W(){if(!m)throw new Error("Function called outside component initialization");return m}function X(e){W().$$.on_mount.push(e)}const d=[],A=[],y=[],I=[],D=Promise.resolve();let v=!1;function J(){v||(v=!0,D.then(q))}function E(e){y.push(e)}const x=new Set;let g=0;function q(){const e=m;do{for(;g<d.length;){const t=d[g];g++,h(t),Q(t.$$)}for(h(null),d.length=0,g=0;A.length;)A.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];x.has(n)||(x.add(n),n())}y.length=0}while(d.length);for(;I.length;)I.pop()();v=!1,x.clear(),h(e)}function Q(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const $=new Set;let V;function C(e,t){e&&e.i&&($.delete(e),e.i(t))}function Y(e,t,n,o){if(e&&e.o){if($.has(e))return;$.add(e),V.c.push(()=>{$.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Z(e){e&&e.c()}function H(e,t,n,o){const{fragment:r,after_update:u}=e.$$;r&&r.m(t,n),o||E(()=>{const s=e.$$.on_mount.map(M).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...s):b(s),e.$$.on_mount=[]}),u.forEach(E)}function U(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(d.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,o,r,u,s,c=[-1]){const l=m;h(e);const i=e.$$={fragment:null,ctx:[],props:u,update:a,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:N(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(i.root);let O=!1;if(i.ctx=n?n(e,t.props||{},(f,j,...L)=>{const k=L.length?L[0]:j;return i.ctx&&r(i.ctx[f],i.ctx[f]=k)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](k),O&&ee(e,f)),j}):[],i.update(),O=!0,b(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const f=K(t.target);i.fragment&&i.fragment.l(f),f.forEach(p)}else i.fragment&&i.fragment.c();t.intro&&C(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),q()}h(l)}class F{$destroy(){U(this,1),this.$destroy=a}$on(t,n){if(!P(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){let t;return{c(){t=w("div")},m(n,o){_(n,t,o),t.innerHTML=e[0]},p(n,[o]){o&1&&(t.innerHTML=n[0])},i:a,o:a,d(n){n&&p(t)}}}function ne(e){return`<a href="${e.value}" class="text-xs font-semibold inline-block py-1 px-2 rounded 
    ${e.value.includes("resource")?"bg-red-300":e.value.includes("skos")?"bg-green-300":"bg-blue-300"} 
    last:mr-0 mr-1">
      ${e.value.split("/").at(-1).split("#").at(-1)}
    </a>`}function re(e,t,n){let o="",r=[],u=encodeURIComponent(`PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
                                SELECT ?p ?o
                                WHERE { 
                                  <http://resource.geolba.ac.at/GeologicUnit/439> ?p ?o .
                                }
                                LIMIT 10`);return X(async()=>{await fetch("https://resource.geolba.ac.at/PoolParty/sparql/GeologicUnit?query="+u+"&format=application/json").then(s=>s.json()).then(s=>{r=s.results.bindings,console.log(r),n(0,o+='<table class=""><thead>');for(let c of Object.keys(r[0]))n(0,o+=`<th class="">${c}</th>`);n(0,o+="</thead><tbody>");for(let c of Object.values(r)){n(0,o+="<tr>");for(let l of Object.values(Object.values(c)))n(0,o+=`<td class="text-left border px-2 py-2">${l.type=="uri"?ne(l):l.value}</td>`);n(0,o+="</tr>")}n(0,o+="</tbody></table>")})}),[o]}class oe extends F{constructor(t){super(),B(this,t,re,te,S,{})}}function se(e){let t,n,o,r,u;return r=new oe({}),{c(){t=w("div"),t.textContent="http://resource.geolba.ac.at/GeologicUnit/439",n=z(),o=w("div"),Z(r.$$.fragment),T(t,"class","text-orange-400"),T(o,"class","relative w-full")},m(s,c){_(s,t,c),_(s,n,c),_(s,o,c),H(r,o,null),u=!0},p:a,i(s){u||(C(r.$$.fragment,s),u=!0)},o(s){Y(r.$$.fragment,s),u=!1},d(s){s&&p(t),s&&p(n),s&&p(o),U(r)}}}class ue extends F{constructor(t){super(),B(this,t,null,se,S,{})}}new ue({target:document.getElementById("app")});
