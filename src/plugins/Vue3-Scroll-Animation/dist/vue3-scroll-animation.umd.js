(function(s,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(s=typeof globalThis<"u"?globalThis:s||self,s.Vue3ScrollAnimation=t())})(this,function(){"use strict";const s={mounted(e,d){const{value:f}=d,{enterClass:n,leaveClass:l,delay:r=0,playOnce:i=!1,threshold:v=.25}=f;let u=!1,o=!1,a;const c=()=>{o=!0,clearTimeout(a),a=setTimeout(()=>{o=!1},100)};window.addEventListener("scroll",c);const _=new IntersectionObserver(m=>{m.forEach(p=>{if(p.isIntersecting){if(!o)return;(!i||i&&!u)&&n&&setTimeout(()=>{e.classList.add(n),e.classList.remove(l)},r),i&&(u=!0)}else!i&&o&&(n&&e.classList.remove(n),l&&setTimeout(()=>{e.classList.add(l)},r))})},{threshold:v});_.observe(e),e.__vueObserver__=_,e.__vueScrollCleanup__=()=>{window.removeEventListener("scroll",c)}},unmounted(e){e.__vueObserver__&&(e.__vueObserver__.disconnect(),delete e.__vueObserver__),e.__vueScrollCleanup__&&(e.__vueScrollCleanup__(),delete e.__vueScrollCleanup__)}},t={install(e){e.directive("animate-in-view",s)}},h="";return t});
