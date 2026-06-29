/* ============================================================
   ESTILOSGLOBALES.JS
   Aqui esta el componente <GlobalStyle/> que inyecta el CSS
   que SI depende del tema (claro/oscuro), porque usa los
   colores que vienen en el objeto T.

   El CSS que NO depende del tema (animaciones, reset, etc)
   ya esta en css/estilos.css y se carga con un <link> normal
   en el index.html.
============================================================ */

function GlobalStyle({ T }) {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

      body{background:${T.bg};color:${T.text};}
      ::-webkit-scrollbar-track{background:${T.surface};}
      ::-webkit-scrollbar-thumb{background:${T.blue}55;border-radius:2px;}

      .btn-primary{
        display:inline-flex;align-items:center;justify-content:center;gap:7px;
        background:linear-gradient(135deg,${T.blue},${T.purple});
        color:#fff;border:none;border-radius:12px;
        padding:12px 26px;font-family:'Inter',sans-serif;
        font-size:14px;font-weight:600;cursor:pointer;
        transition:all .22s ease;white-space:nowrap;
      }
      .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px ${T.blue}55;}

      .btn-outline{
        display:inline-flex;align-items:center;justify-content:center;gap:7px;
        background:transparent;
        color:${T.text};border:1.5px solid ${T.border};border-radius:12px;
        padding:12px 26px;font-family:'Inter',sans-serif;
        font-size:14px;font-weight:500;cursor:pointer;
        transition:all .22s ease;white-space:nowrap;
      }
      .btn-outline:hover{border-color:${T.blue};color:${T.blue};background:${T.blue}0F;}

      .card{
        background:${T.card};border:1px solid ${T.border};
        border-radius:16px;transition:all .22s ease;
      }
      .card-hover:hover{border-color:${T.blue}44;box-shadow:${T.shadow};transform:translateY(-2px);}

      input,select,textarea{
        background:${T.inputBg};border:1px solid ${T.border};
        border-radius:12px;color:${T.text};
        font-family:'Inter',sans-serif;font-size:14px;
        padding:12px 16px;width:100%;outline:none;transition:border-color .2s;
      }
      input:focus,select:focus,textarea:focus{
        border-color:${T.blue}88;box-shadow:0 0 0 3px ${T.blue}18;
      }
      input::placeholder,textarea::placeholder{color:${T.muted};}
      select option{background:${T.surface};color:${T.text};}

      table{width:100%;border-collapse:collapse;}
      th{color:${T.muted};font-size:11px;font-weight:700;text-transform:uppercase;
         letter-spacing:.08em;padding:12px 16px;text-align:left;border-bottom:1px solid ${T.border};}
      td{padding:13px 16px;font-size:13.5px;border-bottom:1px solid ${T.border};color:${T.text};}
      tr:last-child td{border-bottom:none;}
      tr:hover td{background:${T.blue}07;}

      .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;}
      .badge-green{background:${T.green}22;color:${T.green};border:1px solid ${T.green}44;}
      .badge-blue {background:${T.blue}22; color:${T.blue}; border:1px solid ${T.blue}44;}
      .badge-gold {background:${T.gold}22; color:${T.gold}; border:1px solid ${T.gold}44;}
      .badge-red  {background:${T.red}22;  color:${T.red};  border:1px solid ${T.red}44;}
      .badge-muted{background:${T.muted}18;color:${T.muted};border:1px solid ${T.muted}33;}

      .sidebar-item{
        display:flex;align-items:center;gap:11px;
        padding:10px 13px;border-radius:10px;cursor:pointer;
        font-size:13.5px;font-weight:500;color:${T.muted};
        transition:all .18s ease;
      }
      .sidebar-item:hover{background:${T.blue}12;color:${T.text};}
      .sidebar-item.active{
        background:linear-gradient(135deg,${T.blue}20,${T.purple}14);
        color:${T.text};border:1px solid ${T.blue}30;
      }
      .sidebar-item.active svg{color:${T.blue};}

      .stat-card{
        background:${T.card};border:1px solid ${T.border};
        border-radius:16px;padding:20px 22px;
        transition:all .22s ease;overflow:hidden;position:relative;
      }
      .stat-card:hover{transform:translateY(-3px);box-shadow:${T.shadow};}
    `}</style>
  );
}
