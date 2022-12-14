import { createApp } from 'vue';
import { i18n } from '@/i18n/i18n.js';

import App from './App';
import components from '@/components/UI';
import router from "@/router/router";
import directives from '@/directives';
import store from '@/store';

import '@/styles/style.scss';
import 'swiper/css/bundle';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
})

directives.forEach(directive => {
  app.directive(directive.name, directive);
})

app
  .use(i18n)
  .use(router)
  .use(store)
  .mount('#app');

