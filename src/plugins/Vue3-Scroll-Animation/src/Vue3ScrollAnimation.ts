import {App} from 'vue'
import animateInView from './directives/v-animate-in-view';

export default {
    install(app: App)
    {
        console.log('installing Vue3ScrollAnimation')
        app.directive('animate-in-view', animateInView);
    },
}