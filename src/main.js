import { createApp } from 'vue';
import { useI18n } from 'vue-i18n/dist/vue-i18n.cjs';
import { i18n } from '@/i18n/i18n.js';

import App from './App';
import components from '@/components/UI';
import router from "@/router/router";
import directives from '@/directives';
import store from '@/store';

import '@/styles/style.scss';
import 'swiper/css/bundle';

const app = createApp(App, {
  setup() {
    const {t} = useI18n()
    return {t}
  }
});

// компромиссное удобство, т.к. IDE не может найти компоненты в шаблонах
// плюс явно описывать зависимости от чего конкретный компонент работает получается нагляднее
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

