import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs';
import { languages, defaultLocale } from '@/i18n';

const localStorageLang = localStorage.getItem('lang');

const massagis = Object.assign(languages);

export const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages: massagis
})