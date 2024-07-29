export default {
    mounted(el, binding) {
        const {value} = binding;
        const {enterClass, leaveClass, delay = 0, playOnce = false, offset = 0.1, leaveAtTop = false} = value;

        let hasPlayed = false;

        const checkVisibility = () => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const offsetPx = viewportHeight * offset;

            if (rect.top <= viewportHeight - offsetPx) {
                if (leaveAtTop && rect.top <= offsetPx && !playOnce && leaveClass) {
                    setTimeout(() => {
                        if (!el.classList.contains(leaveClass)) {
                            el.classList.add(leaveClass);
                            el.classList.remove(enterClass);
                        }
                    }, delay);
                } else {
                    if (!playOnce || (playOnce && !hasPlayed)) {
                        setTimeout(() => {
                            if (!el.classList.contains(enterClass)) {
                                el.classList.add(enterClass);
                                el.classList.remove(leaveClass);
                            }
                            if (playOnce) {
                                hasPlayed = true;
                            }
                        }, delay);
                    }
                }
            } else if (!playOnce && leaveClass) {
                setTimeout(() => {
                    if (!el.classList.contains(leaveClass)) {
                        el.classList.add(leaveClass);
                        el.classList.remove(enterClass);
                    }
                }, delay);
            }
        };

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility();

        //TODO:need to find a better way to do this and get the default animation in the right state
        el.style.animationDuration = '0.001s';
        setTimeout(() => el.style.animationDuration = '', 1000);

        el.__vueScrollCleanup__ = () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    },
    unmounted(el) {
        if (el.__vueScrollCleanup__) {
            el.__vueScrollCleanup__();
            delete el.__vueScrollCleanup__;
        }
    },
};
