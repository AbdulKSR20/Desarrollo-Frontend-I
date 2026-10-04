# Tienda de Videojuegos - eCommerce en React 🎮

Este proyecto es una simulación de una tienda de videojuegos (eCommerce) construida completamente en **React** y estilizada con **Bootstrap 5**.

## 🚀 Tecnologías Utilizadas
- **React (Vite):** Framework principal para la construcción de interfaces de usuario.
- **JavaScript (ES6+):** Lógica funcional, manipulación de arreglos (`.map`, `.filter`, `.reduce`).
- **Bootstrap 5:** Sistema de grillas (`row`, `col`) y componentes visuales responsivos (`cards`, `spinners`).
- **Git y GitHub Pages:** Control de versiones y despliegue web.

## 🛠️ Funcionalidades Clave (Semana 8)
1. **Catálogo Dinámico:** Los productos no están fijos en el código. Se utiliza el Hook `useEffect` para simular el consumo de una API externa, descargando los datos desde un archivo local `productos.json` de manera asíncrona.
2. **Estado de Carga (Loading Spinner):** Se implementó una latencia simulada con `setTimeout` dentro del `useEffect`, mostrando un _spinner_ de carga (Renderizado Condicional) antes de dibujar el catálogo.
3. **Gestión de Carrito (`useState`):** 
   - Agregar productos a la memoria del carrito sin mutar el arreglo original (usando _Spread Operator_).
   - Eliminar productos específicos usando `filter` por su índice.
   - Vaciar todo el carrito con un solo clic.
   - Cálculos automáticos matemáticos en tiempo real para el **Total a Pagar** (`reduce`) y la **Cantidad de Productos** (`length`).
4. **Interactividad Avanzada:** Los botones de compra en las tarjetas implementan un estado local (`useState`) que cambia su color a verde y muestra el mensaje "¡Agregado!" temporalmente antes de regresar a su estado original, mejorando la experiencia de usuario.
5. **Diseño Responsivo:** Uso avanzado de clases de Bootstrap (`col-12 col-lg-8`, `flex-grow-1`, `position-sticky`) para que el panel del carrito se ajuste de forma vertical en móviles y se fije flotando en computadoras de escritorio.

## 📦 Instrucciones para Correr el Proyecto Localmente
Si deseas descargar y probar el proyecto en tu máquina local:

1. Clona este repositorio o descarga el archivo `.zip` (Recuerda que no incluye `node_modules`).
2. Abre la terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias leyendo la "receta" del `package.json`:
   ```bash
   npm install
   ```
4. Enciende el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre el enlace que te arroje la consola (generalmente `http://localhost:5173/`).

---
_Proyecto académico desarrollado paso a paso integrando buenas prácticas de componentes funcionales y Hooks de React._
