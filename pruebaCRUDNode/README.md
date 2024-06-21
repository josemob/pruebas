<# Nodejs PostgreSQL REST API

Este es el Crud de la prueba KS2

Pasos para clonar e iniciar el proyecto

## Requirementos

- Node.js

- PostgreSQL

## Instalacion

1. Clone el repositorio: `git clone https://github.com/josemob/pruebas.git`

2. Instale la depedencias: `npm install`

3. Crear una base de datos en PostgreSQL

4. Crear un archivo llamado a .env archivo en el directorio raíz y agregue lo siguiente

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=your_port
DB_DATABASE=your_database
```

o simplemente copie el archivo .env.template y rellénelo con sus datos.

5. Run the server: `npm run dev`

## Endpoints

- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

## Eslint

To run eslint: `npm run lint`

## License

Este proyecto es un software de código abierto con licencia