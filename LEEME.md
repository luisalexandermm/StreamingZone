# StreamZone — organizado igual a tus otros proyectos

Reorganicé el proyecto para que siga exactamente el mismo patrón que usas en
tu carpeta `fronetnd` (Maturana Tech): librerías locales, un componente por
archivo, y separación entre CSS estático y CSS que depende del tema.

## ¿Qué cambió esta vez?

1. **React, ReactDOM y Babel ya NO se piden a internet (CDN).** Ahora son
   copias locales en `js/libs/` (igual que en tu carpeta de referencia).
   Esto es justo lo que arregla el problema de pantalla en blanco: como los
   archivos están en tu propia carpeta, el navegador nunca los bloquea por
   CORS ni por falta de internet.

2. **`React.useState`, `React.useEffect`, etc. con el prefijo `React.`**
   en lugar de sacarlos una vez al inicio. Así cada archivo es independiente
   y se entiende de un vistazo, igual a como lo haces en `Encabezado.js` o
   `app.js` de tu otro proyecto.

3. **`js/componentes/`** en vez de `src/`, con los nombres en PascalCase
   (`Navbar.js`, `Footer.js`, etc.), igual a tu convención.

4. **`css/estilos.css`** nuevo: ahí quedó todo el CSS que NO cambia entre
   modo claro/oscuro (animaciones, reset, tipografía). Lo que SÍ depende
   del color del tema sigue en `js/componentes/EstilosGlobales.js`, porque
   necesita el objeto de colores `T`.

## Estructura final

```
streamzone2/
├── index.html
├── css/
│   └── estilos.css            <- CSS fijo (no depende del tema)
└── js/
    ├── libs/                  <- React, ReactDOM y Babel LOCALES
    │   ├── react.production.min.js
    │   ├── react-dom.production.min.js
    │   └── babel.min.js
    ├── app.js                  <- componente raíz + ReactDOM.render
    └── componentes/
        ├── Datos.js            (colores, contexto de tema, catálogo)
        ├── Iconos.js           (componente <Icono/>)
        ├── EstilosGlobales.js  (CSS que depende del tema)
        ├── ComponentesUI.js    (Logo, Avatar, ThemeToggle, StatCard...)
        ├── Navbar.js
        ├── SeccionInicio.js
        ├── SeccionServicios.js
        ├── SeccionPlanes.js
        ├── SeccionRenovar.js
        ├── SeccionContacto.js
        ├── Footer.js
        ├── AuthModal.js
        ├── LandingPage.js
        ├── Sidebar.js
        ├── AppTopbar.js
        ├── PaginasCliente.js
        ├── PaginasAdmin.js
        └── AppShell.js
```

## Probarlo

Clic derecho en `index.html` → "Open with Live Server" (en un navegador
real, no en el preview interno de VSCode). Como ya no depende de internet
para React/Babel, debería verse sin problema incluso sin conexión.

Validé los 19 archivos con Babel y también simulé la carga completa con las
librerías reales: renderiza sin errores.
