
# Cesde Backend

Este proyecto es backend desarrollado con NestJs y una base de datos en postgresql




## Para correr el proyecto debemos de tener un ambiente de desarrollo con las siguientes tecnologias

1. Nodejs
2. una base de datos postgresql puede ser en docker

## Para poder visualizar el proyecto debemos de ejecutar los siguientes comandos

```bash
$ npm install
```

## Compilar y correr el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Debemos de configurar unas variables de entorno

Las variables de entorno se deben de crear en un archivo .env (contamos con un archivo .env.template), lo que puedes hacer es renombrar este archivo y ponerle .env

`DB_HOST`

`DB_NAME`

`DB_USER`

`DB_PASSWORD`

`DB_PORT`

## 🚀 Script de base de datos se encuentra en la raiz del proyecto


script-database.sql

Se desde de ejecutar este script y anteriormente configurar las variables de entorno


## 🔗 Documentación

Cuando se tenga ejecutado el proyecto, podemos ver una documentación en swagger
ingresando al enlace 

 - [Docs](http://localhost:3000/docs)

