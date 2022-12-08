import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import router from "@/router/router";
import directives from '@/directives';
import store from '@/store';

import '@/styles/style.scss';
import 'swiper/css/bundle';

const app = createApp(App);

// компромиссное удобство, т.к. IDE не может найти компоненты в шаблонах
// плюс явно описывать зависимости от чего конкретный компонент работает получается нагляднее
components.forEach(component => {
  app.component(component.name, component);
})

directives.forEach(directive => {
  app.directive(directive.name, directive);
})

app
  .use(router)
  .use(store)
  .mount('#app');

