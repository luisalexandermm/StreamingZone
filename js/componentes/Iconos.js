/* ============================================================
   ICONOS.JS
   En el diseño original se usaba la libreria "lucide-react",
   pero esa libreria se instala con npm y nosotros NO usamos
   npm ni Vite (trabajamos solo con <script> en el HTML).

   Por eso creamos un componente sencillo llamado <Icono/> que
   usa la fuente de iconos "Material Symbols" de Google (se
   carga con un <link> en el index.html, como si fuera una
   fuente de letras normal).

   Como se usa:
     <Icono nombre="search" size={18} color="#fff" />
============================================================ */

function Icono({ nombre, size = 18, color, style = {}, fill }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: size,
        width: size,
        height: size,
        color: color || "currentColor",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0",
        ...style,
      }}
    >
      {nombre}
    </span>
  );
}
