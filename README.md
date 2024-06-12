# Trabajo final - Delta6 - Laboratorio de programación y lenguajes - UNPAZ 2024 

## Integrantes 
- Busto Matias
- Iturrart Juan
- Meza Pablo
- Tigrero Roberto

## Estructura de la API
- **config**:
   - `config.json`: El archivo de configuración contiene parámetros de
configuración globales como las credenciales de la base de datos, el puerto del servidor,
etc.

- **models**:
   - `carreras.js`: Modelo que representa la estructura de datos y las operaciones
relacionadas con "carreras".
   - `index.js`: Archivo principal que carga y exporta todos los modelos
para su uso en otras partes de la aplicación.
   - `materias.js`: Modelo que representa la estructura de datos y las operaciones
relacionadas con "materias".

 - **src**:

   - **controllers**:
     - `carreras.controller.js`: Controlador que maneja las
operaciones CRUD para "carreras".
     - `materias.controller.js`: Controlador que maneja las
operaciones CRUD para "materias".

   - **middlewares**:
     - `carreras.middleware.js`: Middleware específico para "carreras" que puede
manejar validaciones de datos antes de llegar al controlador.
     - `materias.middleware.js`: Middleware específico para "materias" que puede
manejar validaciones de datos antes de llegar al controlador.
     - `schemaValidator.js`: Middleware que valida los schemas de
datos de entrada basándose en ciertas reglas.

   - **routes**:
     - `carreras.route.js`: Define las rutas de la API relacionadas con "carreras" y las
asocia con los controladores y middlewares correspondientes.
     - `materias.route.js`: Define las rutas de la API relacionadas con "materias" y las
asocia con los controladores y middlewares correspondientes.

   - **schemas**:
     - `carreras.schema.js`: Define la estructura de schemas de datos para "carreras", usando una herramienta de validación de schemas como Joi.
     - `materias.schema.js`: Define la estructura de schemas de datos para "materias", usando una herramienta de validación de schemas como Joi.

    - **app.js**:
      - Archivo principal de la aplicación que configura el puerto del servidor, utiliza rutas y pone en marcha el servidor.

## Ejemplo del JSON de Datos
### - Carreras: 
        {
                {
                id,
                nombre,
                grado,
                universidad, 
                }
        }

### - Materias:
        {
                {
                id,
                nombre,
                cuatrimestral,
                anio,
                carreraId,
                }
        }

## Comandos de instalación y ejecución de la API
### Abrir una nueva terminal y ejecutar los siguiente comandos:
```
npm i express
```
``` 
npm i -D nodemon
```
```
npm i joi 
```
```
npm i sequelize
```
```
npm i sqlite3
```
```
npm i -D sequelize-cli 
```
### Ejecutar el siguiente comando para iniciar el servidor:
```
npm run dev
```
#### El servidor estará iniciado en http://127.0.0.1:3000 (puerto por defecto)
#### Anteiormente se deberá descomentar la línea que se encuentra debajo del console.log en el archivo app.js (esto creará las tablas que utilizará la base de datos) y luego volverla a comentar.
