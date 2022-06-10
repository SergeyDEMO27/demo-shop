import { createApp } from 'vue';
import router from '@/router/router';
import store from '@/store';
import directives from '@/directives/index';
import App from '@/App.vue';

const app = createApp(App);

directives.map((directive) => app.directive(directive.name, directive));

app.use(router).use(store).mount('#app');
