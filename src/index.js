//импортируем нормалайз
import "./app/styles/normalize.css"

//импортируем стиль 404 страницы
import "./app/styles/404.css"

//импортируем стиль хедера
import "./app/styles/header.css"

//импортируем стиль корзины
import "./app/styles/cart.css"

//импортируем стиль главной
import "./app/styles/main-page.css"

//импорт функции запуска модуля
import { bootstrap } from "./framework";

//импорт итогового модуля, который будет запущен функцией bootstrap
import { appModule } from "./app/app.module";

import "./framework/tools/storage";


bootstrap(appModule)