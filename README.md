# Assesment_ONE

## Tabla de contenidos

- [Herramientas Utilizadas](#herramientas-utilizadas)
- [Prerrequisitos](#prerrequisitos)
- [Iniciar](#iniciar)
- [Estructura De Carpetas](#estructura-de-carpetas)
- [Consideraciones](#consideraciones)

### Herramientas Utilizadas

El stack manejado para el proyecto fue:

* [React.js](https://reactjs.org/) 
* [Tailwindcss](https://tailwindcss.com/) 
* [Redux Toolkit](https://redux-toolkit.js.org/) 

### Prerrequisitos

* React.js v-18.2.0
* Tailwindcss v-3.2.4
* Redux Toolkit v-1.9.1
* Vite v-4.0.0

## Iniciar

Para poder ejecutar el proyecto de manera local dejaré los siguientes pasos para su ejecución correctamente:

### Correr aplicación de manera local 

1. Clonar el repositorio
   ```
   git clone --branch <Nombre de la rama> https://github.com/Calyaan/CalyaanFrontend-V2.git
   ```
   
   
2. Instalar NPM packages 
   ```
   npm install
   ```
   ```
   npm i
   ```
   
3. Asignar las variables de entorno, creando el archvio `.env` en base al archivo `.env.example`.

   ```
   VITE_APP_API_URL= Ejemplo "http://127.0.0.1:4000/api/"
   ```
   
### Estructura De Carpetas
  ```
                             
  src:  
  
     --assets                Imágenes utilizadas de manera estática
     
     --components            Elementos reutilizables en vistas principales

     --config                Configuraciones manuales como axios           
     
     --helpers               Funciones de ayuda 
     
     --hooks                 Custom hooks
     
     --layout                Estilos principales para pantallas contenedoras
     
     --pages                 Vistas divididas en públicas y privadas con roles 
     
     --redux                 Todo el control del estado 
     
        --features              Todos los slice creados para Redux Toolkit

        --api                   La descripción de todas las peticiones http  
  ```

### Consideraciones
