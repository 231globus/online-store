//запускает наше приложение
//поступающий модуль в эту функцию имеет метод start



export function bootstrap(module){
    module.start()
}

//экспортируем в самый главынй index.js, 
// это запускает наше приложение из корневого файла js