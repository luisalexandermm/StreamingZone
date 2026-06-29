/* ============================================================
   NAVBAR.JS - Barra de navegacion de la pagina publica
============================================================ */

const Navbar = ({ activeSection, onNav, onLogin, onAdminClick }) => {
  const { T } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn);
  },[]);

  const links = [
    { id:"inicio", label:"Inicio" },
    { id:"servicios", label:"Servicios" },
    { id:"planes", label:"Planes" },
    { id:"renovar", label:"Renovar" },
    { id:"contacto", label:"Contacto" },
  ];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      background: scrolled ? T.navBg : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "none",
      transition:"all .3s", padding:"0 24px"
    }}>
      <div style={{ maxWidth:1200, margin:"0 auto", height:68,
        display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <button onClick={()=>onNav("inicio")} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <Logo/>
        </button>
        <div className="hide-mobile" style={{ display:"flex", alignItems:"center", gap:2 }}>
          {links.map(l=>(
            <button key={l.id} onClick={()=>onNav(l.id)} style={{
              background: activeSection===l.id ? `${T.blue}12` : "none",
              border:"none", cursor:"pointer",
              padding:"8px 14px", fontSize:14, fontWeight:500, fontFamily:"Inter",
              borderRadius:8, transition:"all .2s",
              color: activeSection===l.id ? T.blue : T.muted,
            }}>{l.label}</button>
          ))}
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <ThemeToggle/>
          <button className="btn-outline" style={{ padding:"8px 18px", fontSize:13 }} onClick={onLogin}>Acceder</button>
          <button className="btn-primary" style={{ padding:"8px 20px", fontSize:13 }} onClick={onLogin}>Comenzar →</button>
        </div>
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION: INICIO (HERO)
═══════════════════════════════════════════════════════ */
