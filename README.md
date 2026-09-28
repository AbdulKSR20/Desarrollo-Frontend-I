# Tienda de Videojuegos 🎮

Esta es una tienda de videojuegos en línea desarrollada con **React (Vite)** y **Bootstrap**. El proyecto incluye un catálogo interactivo de productos y un carrito de compras funcional.

## Características principales ✨

*   **Catálogo de Productos:** Muestra una lista de videojuegos con sus descripciones y precios.
*   **Carrito de Compras:** Los usuarios pueden agregar juegos al carrito, ver la cantidad total, calcular el precio a pagar y eliminar artículos individualmente.
*   **Diseño Responsivo:** Interfaz adaptada para visualizarse correctamente tanto en dispositivos móviles (celulares y tablets) como en computadoras de escritorio.
*   **Despliegue Continuo:** Configurado con `gh-pages` para un despliegue rápido y sencillo en GitHub Pages.

## Tecnologías utilizadas 💻

*   **React:** Biblioteca para construir la interfaz de usuario basada en componentes.
*   **Vite:** Herramienta de construcción y servidor de desarrollo.
*   **Bootstrap:** Framework de CSS utilizado para el diseño, las grillas responsivas y los estilos generales.
*   **JavaScript (ES6+)**, **HTML5**.

## Estructura de Componentes 🧩

*   `App.jsx`: Componente principal que administra el estado global del carrito y organiza el layout de la página.
*   `Producto.jsx`: Componente reutilizable para cada tarjeta de videojuego.
*   `Carrito.jsx`: Componente que renderiza los elementos añadidos, maneja su eliminación y calcula los totales.

## Cómo ejecutar el proyecto localmente 🚀

Para clonar y probar este proyecto en tu propia computadora, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/abdulksr20/Desarrollo-Frontend-I.git
   ```

2. **Ingresa al directorio del proyecto:**
   ```bash
   cd Desarrollo-Frontend-I
   ```
   *(Nota: si la carpeta se llama `tienda-react`, ingresa a esa).*

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Esto abrirá la aplicación en tu navegador, generalmente en `http://localhost:5173/`.*


