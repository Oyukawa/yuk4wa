import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
const app = createApp(App);
const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#fffffc',
        surface: '#fffffc'
    }
};
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            myCustomLightTheme
        }
    }
});
// NOTE: 不要のためコメントアウト
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
