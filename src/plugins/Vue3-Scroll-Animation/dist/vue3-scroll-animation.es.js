const v = {
  mounted(s, u) {
    const { value: d } = u, { enterClass: i, leaveClass: t, delay: n = 0, playOnce: e = !1, offset: f = 0.1, leaveAtTop: m = !1 } = d;
    let a = !1;
    const o = () => {
      const l = s.getBoundingClientRect(), c = window.innerHeight, r = c * f;
      l.top <= c - r ? m && l.top <= r && !e && t ? setTimeout(() => {
        s.classList.contains(t) || (s.classList.add(t), s.classList.remove(i));
      }, n) : (!e || e && !a) && setTimeout(() => {
        s.classList.contains(i) || (s.classList.add(i), s.classList.remove(t)), e && (a = !0);
      }, n) : !e && t && setTimeout(() => {
        s.classList.contains(t) || (s.classList.add(t), s.classList.remove(i));
      }, n);
    };
    window.addEventListener("scroll", o), o(), s.style.animationDuration = "0.001s", setTimeout(() => s.style.animationDuration = "", 1e3), s.__vueScrollCleanup__ = () => {
      window.removeEventListener("scroll", o);
    };
  },
  unmounted(s) {
    s.__vueScrollCleanup__ && (s.__vueScrollCleanup__(), delete s.__vueScrollCleanup__);
  }
}, _ = {
  install(s) {
    console.log("installing Vue3ScrollAnimation"), s.directive("animate-in-view", v);
  }
};
export {
  _ as default
};
