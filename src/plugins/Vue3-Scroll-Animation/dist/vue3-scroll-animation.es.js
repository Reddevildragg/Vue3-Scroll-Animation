const f = {
  mounted(e, d) {
    const { value: u } = d, { enterClass: n, leaveClass: s, delay: o = 0, playOnce: t = !1, offset: v = 0.1, leaveAtTop: m = !1 } = u;
    let a = !1;
    const i = () => {
      const l = e.getBoundingClientRect(), c = window.innerHeight, r = c * v;
      l.top <= c - r ? m && l.top <= r && !t && s ? setTimeout(() => {
        e.classList.contains(s) || (e.classList.add(s), e.classList.remove(n));
      }, o) : (!t || t && !a) && setTimeout(() => {
        e.classList.contains(n) || (e.classList.add(n), e.classList.remove(s)), t && (a = !0);
      }, o) : !t && s && setTimeout(() => {
        e.classList.contains(s) || (e.classList.add(s), e.classList.remove(n));
      }, o);
    };
    window.addEventListener("scroll", i), window.addEventListener("resize", i), i(), e.style.animationDuration = "0.001s", setTimeout(() => e.style.animationDuration = "", 1e3), e.__vueScrollCleanup__ = () => {
      window.removeEventListener("scroll", i), window.removeEventListener("resize", i);
    };
  },
  unmounted(e) {
    e.__vueScrollCleanup__ && (e.__vueScrollCleanup__(), delete e.__vueScrollCleanup__);
  }
}, _ = {
  install(e) {
    console.log("installing Vue3ScrollAnimation"), e.directive("animate-in-view", f);
  }
};
export {
  _ as default
};
