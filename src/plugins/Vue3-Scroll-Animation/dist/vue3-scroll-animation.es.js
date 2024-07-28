const m = {
  mounted(e, c) {
    const { value: u } = c, { enterClass: s, leaveClass: l, delay: n = 0, playOnce: t = !1, threshold: v = 0.25 } = u;
    let r = !1, i = !1, o;
    const a = () => {
      i = !0, clearTimeout(o), o = setTimeout(() => {
        i = !1;
      }, 100);
    };
    window.addEventListener("scroll", a);
    const _ = new IntersectionObserver(
      (d) => {
        d.forEach((f) => {
          if (f.isIntersecting) {
            if (!i)
              return;
            (!t || t && !r) && s && setTimeout(() => {
              e.classList.add(s), e.classList.remove(l);
            }, n), t && (r = !0);
          } else
            !t && i && (s && e.classList.remove(s), l && setTimeout(() => {
              e.classList.add(l);
            }, n));
        });
      },
      {
        threshold: v
        // Default threshold is 0.25
      }
    );
    _.observe(e), e.__vueObserver__ = _, e.__vueScrollCleanup__ = () => {
      window.removeEventListener("scroll", a);
    };
  },
  unmounted(e) {
    e.__vueObserver__ && (e.__vueObserver__.disconnect(), delete e.__vueObserver__), e.__vueScrollCleanup__ && (e.__vueScrollCleanup__(), delete e.__vueScrollCleanup__);
  }
}, b = {
  install(e) {
    e.directive("animate-in-view", m);
  }
};
export {
  b as default
};
