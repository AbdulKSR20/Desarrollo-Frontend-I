# Tienda de Videojuegos - eCommerce en React 🎮

Este proyecto es la Evaluación Final de Taller (EFT) para el curso de Desarrollo Frontend I. Es una simulación de una tienda de videojuegos online (eCommerce) construida completamente en **React** y estilizada con **Bootstrap 5**.

## 🚀 Tecnologías Utilizadas
- **React (Vite):** Uso de Componentes Funcionales, `useState`, `useEffect` y `props`.
- **JavaScript (ES6+):** Lógica de filtrado y manipulación de arreglos (`.map`, `.filter`, `.reduce`).
- **Bootstrap 5:** Componentes nativos (`NavBar`, `Cards`, `Forms`, `Alerts`, `Spinners`) y grillas responsivas.
- **Git y GitHub:** Control de versiones con historial semántico y despliegue en GitHub Pages.

## 🛠️ Funcionalidades Implementadas
1. **Catálogo Dinámico (`useEffect`):** Los productos se cargan desde un archivo `productos.json` simulando una conexión a una API, incluyendo un *Loading Spinner* mientras se descargan los datos.
2. **Barra de Navegación y Filtros (`<NavBar />`):** Implementación de una barra superior interactiva que se comunica mediante `props` con el estado principal (`App.jsx`) para **filtrar dinámicamente** los productos mostrados (Consolas vs Videojuegos).
3. **Formulario de Contacto Validado (`<Contacto />`):** Un formulario de comunicación que utiliza `useState` para recolectar datos y validar que no existan campos vacíos antes de enviar, renderizando condicionalmente alertas de éxito o error.
4. **Carrito de Compras (CRUD Local):** 
   - **Agregar:** Inserción inmutable de objetos al estado del carrito.
   - **Eliminar:** Borrado selectivo de un ítem por índice usando `.filter()`.
   - **Vaciar:** Reinicio completo del carrito con renderizado condicional inteligente (deshabilitando el botón si ya está vacío).
   - **Cálculo Automático:** Uso de `.reduce()` para sumar dinámicamente el precio total a pagar en tiempo real.
5. **Feedback Visual:** Componentes interactivos que reaccionan a las acciones del usuario, como el botón de "Agregar al Carrito" que cambia de color azul a verde ("Producto agregado") por 400 milisegundos para mejorar la UX.

## 📦 Instrucciones de Instalación y Ejecución Local
Si el evaluador desea correr este proyecto localmente, siga estos pasos:

1. Clonar este repositorio o descargar el `.zip` (no incluye `node_modules`).
2. Abrir la terminal en la raíz de la carpeta del proyecto (`tienda-react`).
3. Instalar las dependencias de Node:
   ```bash
   npm install
   ```
4. Iniciar el servidor local de desarrollo de Vite:
   ```bash
   npm run dev
   ```
5. Abrir el navegador en el enlace proporcionado por la terminal (generalmente `http://localhost:5173/`).

---
_Proyecto desarrollado aplicando las mejores prácticas de modularidad, reutilización de código en React y diseño responsivo "Mobile First"._
