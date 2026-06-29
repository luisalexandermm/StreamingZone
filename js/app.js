/* ============================================================
   APP.JS
   Este es el archivo PRINCIPAL. Aqui esta el componente
   <StreamingZone/> que decide que se ve en pantalla (la pagina
   publica o el panel) y AL FINAL le decimos a React en que
   parte del HTML debe "pintar" todo (el <div id="root">).

   Este archivo se carga DE ULTIMO en el index.html, porque
   necesita que todos los demas componentes ya existan.
============================================================ */

function StreamingZone() {
  const [dark, setDark] = React.useState(true);
  const T = dark ? DARK : LIGHT;
  const [view, setView] = React.useState("landing");
  const [forceAdmin, setForceAdmin] = React.useState(false);
  const [role, setRole] = React.useState(null);
  const [showAuth, setShowAuth] = React.useState(false);

  const openLogin    = ()=>{ setForceAdmin(false); setShowAuth(true); };
  const openAdmin    = ()=>{ setForceAdmin(true);  setShowAuth(true); };
  const handleLogin  = (r)=>{ setRole(r); setShowAuth(false); setView("app"); };
  const handleLogout = ()=>{ setRole(null); setView("landing"); setForceAdmin(false); };

  return (
    <ThemeCtx.Provider value={{ dark, toggle:()=>setDark(d=>!d), T }}>
      <GlobalStyle T={T}/>

      {view==="landing" && (
        <LandingPage onLogin={openLogin} onAdminClick={openAdmin}/>
      )}

      {view==="app" && (
        <AppShell role={role} onLogout={handleLogout}/>
      )}

      {/* Auth modal rendered on top of whatever view is active */}
      {showAuth && (
        <AuthModal
          onClose={()=>setShowAuth(false)}
          onLogin={handleLogin}
          forceAdmin={forceAdmin}
        />
      )}
    </ThemeCtx.Provider>
  );
}

// --------------------------------------------------------------
// Aqui le decimos a React: "pinta el componente StreamingZone
// dentro del elemento que tiene id='root' en el index.html"
// --------------------------------------------------------------
const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<StreamingZone />);

// Log de confirmación
console.info('[StreamingZone] ✓ Aplicación React cargada correctamente');

