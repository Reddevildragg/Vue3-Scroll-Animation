// v-animate-in-view.js
export default {
    mounted(el, binding) {
        const { value } = binding;
        const { enterClass, leaveClass, delay = 0, playOnce = false, threshold = 0.25 } = value;

        let hasPlayed = false;
        let isScrolling = false;
        let scrollTimeout;

        const handleScroll = () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!isScrolling) return;

                        if (!playOnce || (playOnce && !hasPlayed)) {
                            if (enterClass) {
                                setTimeout(() => {
                                    el.classList.add(enterClass);
                                    el.classList.remove(leaveClass);
                                }, delay);
                            }
                        }
                        if (playOnce) {
                            hasPlayed = true;
                        }
                    } else {
                        if (!playOnce && isScrolling) {
                            if (enterClass) {
                                el.classList.remove(enterClass);
                            }
                            if (leaveClass) {
                                setTimeout(() => {
                                    el.classList.add(leaveClass);
                                }, delay);
                            }
                        }
                    }
                });
            },
            {
                threshold: threshold, // Default threshold is 0.25
            }
        );

        observer.observe(el);

        // Save the observer instance to the element
        el.__vueObserver__ = observer;

        // Clean up
        el.__vueScrollCleanup__ = () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },
    unmounted(el) {
        if (el.__vueObserver__) {
            el.__vueObserver__.disconnect();
            delete el.__vueObserver__;
        }
        if (el.__vueScrollCleanup__) {
            el.__vueScrollCleanup__();
            delete el.__vueScrollCleanup__;
        }
    },
};
