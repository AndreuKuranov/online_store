import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

// во всех трёх случаях есть обработка по токену, я бы вынес это в отдельную функцию типа saveUserToken(),
// причем токен слабо связан с самими запросами, получаем UserService и vuex/AuthModule

/*
 будет удобнее создать тоже самое, но классами и инжектить в приложение
 1) в таком случае всё что касается апи запросов будет в RestService
 2) будет класс UserService у которого можно сделать геттер api() {return 'api/user/'} и его переиспользовать
 3) всё что касается обработки токена должно быть во vuex в AuthModule в нём вызывать методы из UserService и использовать для обработки информации по авторизованному юзеру

 сейчас эти фичи находятся в отдельных независимых функциях и никак не связаны,
 И в случае более плотной логики (обработка ошибок, нотификации успешности операций) никак не проверяются
 */

export const registration = async (email, password) => {
  const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}

export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}

// плохое имя, не хватает конкретики, в даном случае это checkUserToken
export const check = async () => {
  // Логика некорректная, сейчас будет вызов апи запроса при старте приложения, а должна браться информация из LocalStorage по текущему юзеру,
  // в случае устаревания токена апи вернёт 401 и на него можно глобально среагировать
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
}