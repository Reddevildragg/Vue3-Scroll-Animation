import {App} from 'vue'
import animateInView from './directives/v-animate-in-view';

export default {
    install(app: App)
    {
        app.directive('animate-in-view', animateInView);
    },
}