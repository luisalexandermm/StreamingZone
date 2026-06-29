/* ============================================================
   SECCIONINICIO.JS - Seccion "Inicio" (hero) de la pagina publica
============================================================ */

const SectionInicio = ({ onLogin }) => {
  const { T } = useTheme();
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="nav-section" style={{
        position:"relative", minHeight:"100vh",
        display:"flex", alignItems:"center", justifyContent:"center",
        overflow:"hidden", padding:"130px 24px 100px"
      }}>
        <Particles/>
        <div style={{ position:"relative", zIndex:1, maxWidth:860, margin:"0 auto", textAlign:"center" }}>
          <h1 className="slide-up" style={{
            fontFamily:"Poppins", fontSize:"clamp(52px,9vw,96px)", fontWeight:900,
            lineHeight:.95, letterSpacing:"-.04em", marginBottom:28, color:T.text
          }}>
            <span className="grad-text" style={{
              background:`linear-gradient(135deg,${T.blue},${T.purple},${T.gold})`,
              backgroundSize:"200% 200%", animation:"gshift 5s ease infinite"
            }}>STREAMING</span>ZONE
          </h1>
          <p style={{ fontSize:"clamp(15px,2.2vw,19px)", color:T.muted, lineHeight:1.75,
            maxWidth:580, margin:"0 auto 44px" }}>
            La plataforma más completa para gestionar, renovar y controlar todos tus
            servicios digitales desde un único panel inteligente.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="btn-primary" style={{ padding:"15px 38px", fontSize:15, borderRadius:14 }} onClick={onLogin}>
              Empezar gratis →
            </button>
            <button className="btn-outline" style={{ padding:"15px 32px", fontSize:15, borderRadius:14 }}>
              <Icono nombre="play_circle" size={16}/> Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding:"80px 24px", background:T.surface }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ fontSize:11, fontWeight:700, color:T.blue, letterSpacing:".1em", marginBottom:10 }}>¿POR QUÉ STREAMZONE?</div>
            <h2 style={{ fontFamily:"Poppins", fontSize:"clamp(24px,4vw,40px)", fontWeight:800,
              letterSpacing:"-.02em", color:T.text, marginBottom:14 }}>
              Todo lo que necesitas,{" "}
              <span className="grad-text" style={{ background:`linear-gradient(135deg,${T.blue},${T.purple})` }}>en un solo lugar</span>
            </h2>
            <p style={{ color:T.muted, fontSize:15, maxWidth:540, margin:"0 auto" }}>
              Diseñado para usuarios que valoran el control, la elegancia y la eficiencia digital.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
            {[
              { icon:<Icono nombre="shield" size={22}/>, title:"Control Total", c:T.blue,
                desc:"Panel centralizado con todos tus servicios. Fechas, estados y costos en tiempo real sin sorpresas ni olvidos." },
              { icon:<Icono nombre="autorenew" size={22}/>, title:"Renovación Express", c:T.purple,
                desc:"Renueva cualquier servicio en segundos. Recibe alertas antes del vencimiento y actúa a tiempo siempre." },
              { icon:<Icono nombre="bar_chart" size={22}/>, title:"Analytics Inteligente", c:T.gold,
                desc:"Gráficas de gasto mensual, historial completo y reportes exportables en PDF y Excel para llevar tus cuentas." },
              { icon:<Icono nombre="lock" size={22}/>, title:"Seguridad Premium", c:T.green,
                desc:"Cifrado AES-256, autenticación JWT y sesiones seguras. Tus datos siempre protegidos bajo los más altos estándares." },
              { icon:<Icono nombre="notifications" size={22}/>, title:"Notificaciones Smart", c:"#FF8C00",
                desc:"Alertas personalizadas por email, push y panel. Nunca más te sorprenderá un cobro inesperado." },
              { icon:<Icono nombre="headphones" size={22}/>, title:"Soporte 24/7", c:"#FF6B6B",
                desc:"Equipo de soporte siempre disponible. Chat en vivo, email y documentación completa a tu disposición." },
            ].map((f,i)=>(
              <div key={i} className="card card-hover" style={{ padding:26 }}>
                <div style={{ width:48, height:48, borderRadius:12, marginBottom:16,
                  background:`${f.c}18`, border:`1px solid ${f.c}30`,
                  display:"flex", alignItems:"center", justifyContent:"center", color:f.c }}>{f.icon}</div>
                <h3 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:700, marginBottom:8, color:T.text }}>{f.title}</h3>
                <p style={{ color:T.muted, fontSize:13.5, lineHeight:1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION: SERVICIOS
═══════════════════════════════════════════════════════ */
