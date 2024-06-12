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
### 1. Abrir una nueva terminal y ejecutar:
```
npm i express
```
### 2. Ejecutar el siguiente comando en la misma terminal:
``` 
npm i -D nodemon
```
### 3. Ejecutar el siguiente comando en la misma terminal: 
```
npm i joi 
```
### 4. Ejecutar el siguiente comando en la misma terminal:
```
npm i sequelize
```
### 5. Ejecutar el siguiente comando en la misma terminal: 
```
npm i sqlite3
```
### 6. Ejecutar el siguiente comando en la misma terminal: 
```
npm i -D sequelize-cli 
```
### 7. Ejecutar el siguiente comando en la misma terminal:
```
npm run dev
```
