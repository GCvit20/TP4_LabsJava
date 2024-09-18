<h1 align = "center">EmployeeHub</h1>
<p align="center">
<img src="https://i.postimg.cc/6p2jfG0x/8d582e2f-17df-4be9-b978-97610499b932.jpg" style="max-width: 100%; display: inline-block;" />
</p>

Esta es una aplicación web desarrollada en React JS en la que podes loguearte y gestionar empleados (AMB). Utiliza json-server para simular una base de datos.

## Configuración App React

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/GCvit20/TP4_LabsJava.git
    cd TP4_LabsJava
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el proyecto:
    ```bash
    npm run dev
    ```
    
4. Abre el navegador en `http://localhost:5173` para ver la aplicación en acción.


## Instalación y Configuración Json-Server

1. Instala json-server:
    ```bash
    npm install json-server
    ```

2. Añade configuración para ejecución:
    * Abre archivo **package.json** y agrega lo siguiente debajo de **dependecies**
    ```js
    
    "scripts": {
        "start": "json-server --watch db.json --port 3000"
    }
    ```

3. Inicia el Json-Server:
    ```bash
    npm start
    ```
