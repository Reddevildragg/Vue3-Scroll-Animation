import {createApp} from 'vue'
import './design/main.scss'
import App from './App.vue'

import animateInView from './plugins/Vue3-Scroll-Animation/src/Vue3ScrollAnimation.ts';
import './plugins/Vue3-Scroll-Animation/src/animations.scss'

const app = createApp(App)

app.use(animateInView)
app.mount('#app')
