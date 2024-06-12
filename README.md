# Trabajo final - Delta6 - Laboratorio de programacion - 

## Integrantes: 
- Busto Matias
- Iturrart Juan
- Meza Pablo
- Roberto Tigrero

## API
Se basa en una estructura del modelo entidad-relacion. Una carrera puede tener muchas materias y una materia tiene una carrera.

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

## Comandos de instalacion y ejecucion de api
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
```
npm run dev
```
