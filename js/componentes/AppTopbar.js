/* ============================================================
   APPTOPBAR.JS - Barra superior dentro del panel
============================================================ */

const AppTopbar = ({ role, page, onNotifClick }) => {
  const { T } = useTheme();
  const [showBanner, setShowBanner] = React.useState(true);
  const pageNames = {
    dashboard:"Dashboard", services:"Mis Servicios", renewals:"Renovaciones",
    payments:"Pagos", notifs:"Notificaciones", profile:"Perfil",
    clients:"Clientes", reports:"Reportes", settings:"Configuración"
  };
  const userName = role==="admin"?"Admin":"María";

  const miniStats = role==="admin"
    ? [{val:"1,284",lbl:"Clientes",c:T.blue},{val:"$12.4K",lbl:"Mes",c:T.gold},{val:"24",lbl:"Pendientes",c:"#FF8C00"}]
    : [{val:"3",lbl:"Activos",c:T.green},{val:"15d",lbl:"Vence",c:T.gold},{val:"$104",lbl:"Pagado",c:T.blue}];

  return (
    <div>
      {/* ── HERO BANNER ── */}
      {showBanner && (
        <div style={{
          position:"relative", overflow:"hidden",
          background:T.isDark
            ? "linear-gradient(135deg,#07111F 0%,#0D1A2D 50%,#111D35 100%)"
            : "linear-gradient(135deg,#E8F0FE 0%,#EEF3FF 50%,#F0F5FF 100%)",
          borderBottom:`1px solid ${T.border}`,
        }}>
          {/* bg glows */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
            <div style={{ position:"absolute", top:-80, right:60, width:300, height:300, borderRadius:"50%",
              background:`radial-gradient(circle,${T.blue}20 0%,transparent 70%)`, filter:"blur(50px)" }}/>
            <div style={{ position:"absolute", bottom:-60, left:180, width:250, height:250, borderRadius:"50%",
              background:`radial-gradient(circle,${T.purple}16 0%,transparent 70%)`, filter:"blur(50px)" }}/>
            {/* tiny floating dots */}
            {[...Array(6)].map((_,i)=>(
              <div key={i} style={{
                position:"absolute", borderRadius:"50%", pointerEvents:"none",
                width: i%2===0?4:3, height: i%2===0?4:3,
                left:`${12+i*16}%`, top:`${25+Math.sin(i*1.2)*35}%`,
                background:i%3===0?T.blue:i%3===1?T.purple:T.gold,
                opacity:.25, animation:`floatY ${5+i}s ease-in-out ${i*.8}s infinite`
              }}/>
            ))}
          </div>

          <div style={{ position:"relative", zIndex:1, padding:"22px 28px",
            display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
            {/* Left: greeting */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:6,
                background:`${T.blue}18`, border:`1px solid ${T.blue}35`,
                borderRadius:16, padding:"4px 12px", marginBottom:8,
                fontSize:10, fontWeight:700, color:T.blue, letterSpacing:".07em" }}>
                <Icono nombre="auto_awesome" size={10}/>
                {role==="admin"?"PANEL ADMINISTRADOR":"BIENVENIDO DE VUELTA"}
              </div>
              <h1 style={{ fontFamily:"Poppins", fontSize:"clamp(20px,3vw,30px)", fontWeight:900,
                letterSpacing:"-.03em", color:T.text, marginBottom:4 }}>
                Hola, <span className="grad-text" style={{ background:`linear-gradient(135deg,${T.blue},${T.purple})` }}>{userName}</span> 👋
              </h1>
              <p style={{ color:T.muted, fontSize:13.5, maxWidth:400 }}>
                {role==="admin"
                  ? "Tienes 24 pagos pendientes y 18 renovaciones esta semana."
                  : "3 servicios activos · Adobe Creative vence en 15 días."}
              </p>
            </div>

            {/* Center: mini stats */}
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {miniStats.map((s,i)=>(
                <div key={i} style={{
                  background:T.isDark?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.75)",
                  border:`1px solid ${T.border}`, borderRadius:12,
                  padding:"10px 16px", textAlign:"center", minWidth:76,
                  backdropFilter:"blur(10px)"
                }}>
                  <div style={{ fontFamily:"Poppins", fontSize:18, fontWeight:800, color:s.c }}>{s.val}</div>
                  <div style={{ fontSize:10, color:T.muted, fontWeight:600, marginTop:1 }}>{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Right: CTA + minimize */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
              <button onClick={()=>setShowBanner(false)} style={{
                background:"none", border:`1px solid ${T.border}`, borderRadius:7,
                padding:"4px 9px", cursor:"pointer", color:T.muted,
                fontSize:10, fontFamily:"Inter", display:"flex", alignItems:"center", gap:4
              }}><Icono nombre="close" size={10}/> Minimizar</button>
              <button className="btn-primary" style={{ padding:"9px 20px", fontSize:13 }}>
                {role==="admin"?"Ver Reportes →":"Renovar →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOPBAR ── */}
      <header style={{ height:58, borderBottom:`1px solid ${T.border}`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 24px", background:T.surface }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {!showBanner && (
            <button onClick={()=>setShowBanner(true)} style={{
              background:T.inputBg, border:`1px solid ${T.border}`, borderRadius:8,
              padding:"4px 10px", cursor:"pointer", color:T.muted,
              fontSize:11, fontFamily:"Inter", display:"flex", alignItems:"center", gap:4
            }}><Icono nombre="auto_awesome" size={10}/> Inicio</button>
          )}
          <h2 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>{pageNames[page]}</h2>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:9 }}>
          <div style={{ position:"relative" }} className="hide-mobile">
            <input placeholder="Buscar…" style={{ width:180, padding:"7px 12px 7px 32px", fontSize:12.5, borderRadius:10 }}/>
            <Icono nombre="search" size={12} style={{ position:"absolute", left:10, top:"50%",
              transform:"translateY(-50%)", color:T.muted, pointerEvents:"none" }}/>
          </div>
          <ThemeToggle/>
          <button onClick={onNotifClick} style={{ position:"relative", background:"none",
            border:`1px solid ${T.border}`, borderRadius:9, padding:7, cursor:"pointer",
            color:T.muted, display:"flex", alignItems:"center" }}>
            <Icono nombre="notifications" size={16}/>
            <span style={{ position:"absolute", top:7, right:7, width:6, height:6,
              borderRadius:"50%", background:T.blue, border:`2px solid ${T.surface}` }}/>
          </button>
          <Avatar name={role==="admin"?"Admin SZ":"María García"} size={32}/>
        </div>
      </header>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   STAT CARD
═══════════════════════════════════════════════════════ */
