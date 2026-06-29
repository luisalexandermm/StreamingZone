/* ============================================================
   FOOTER.JS - Pie de pagina
============================================================ */

const Footer = ({ onNav, onAdminClick }) => {
  const { T } = useTheme();
  return (
    <footer style={{ background:T.surface, borderTop:`1px solid ${T.border}`, padding:"48px 24px 28px" }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:32, marginBottom:40 }}>
          <div>
            <Logo size={18}/>
            <p style={{ color:T.muted, fontSize:13, lineHeight:1.7, marginTop:14, maxWidth:280 }}>
              La plataforma más completa para gestionar tus servicios digitales. Moderna, rápida y elegante.
            </p>
            <div style={{ display:"flex", gap:8, marginTop:16 }}>
              {["📘","📸","🐦","💼"].map((ic,i)=>(
                <div key={i} style={{ width:34, height:34, borderRadius:8, background:`${T.blue}15`,
                  border:`1px solid ${T.border}`, display:"flex", alignItems:"center", justifyContent:"center",
                  cursor:"pointer", fontSize:16 }}>{ic}</div>
              ))}
            </div>
          </div>
          {[
            { title:"Plataforma", links:["Servicios","Planes","Renovar","Dashboard","API"] },
            { title:"Empresa",    links:["Sobre nosotros","Blog","Careers","Prensa","Partners"] },
            { title:"Soporte",    links:["Centro de ayuda","Contacto","Estado del sistema","Privacidad","Términos"] },
          ].map((col,i)=>(
            <div key={i}>
              <div style={{ fontSize:11, fontWeight:700, color:T.text, letterSpacing:".08em",
                textTransform:"uppercase", marginBottom:14 }}>{col.title}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {col.links.map((l,j)=>(
                  <button key={j} onClick={()=>{}} style={{
                    background:"none", border:"none", cursor:"pointer", textAlign:"left",
                    color:T.muted, fontSize:13, fontFamily:"Inter", padding:0,
                    transition:"color .18s"
                  }} onMouseEnter={e=>e.currentTarget.style.color=T.text}
                    onMouseLeave={e=>e.currentTarget.style.color=T.muted}>{l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop:`1px solid ${T.border}`, paddingTop:20,
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ color:T.muted, fontSize:12 }}>
            © 2026 StreamingZone · Todos los derechos reservados · Bogotá, Colombia 🇨🇴
          </p>
          {/* Admin link — discrete */}
          <button onClick={onAdminClick} style={{
            background:"none", border:"none", cursor:"pointer",
            color:T.muted, fontSize:11, fontFamily:"Inter",
            display:"flex", alignItems:"center", gap:5,
            opacity:0.4, transition:"opacity .2s", padding:"4px 8px", borderRadius:6
          }}
            onMouseEnter={e=>e.currentTarget.style.opacity=".9"}
            onMouseLeave={e=>e.currentTarget.style.opacity=".4"}
          >
            <Icono nombre="lock" size={10}/> Acceso Administrador
          </button>
        </div>
      </div>
    </footer>
  );
};

/* ═══════════════════════════════════════════════════════
   AUTH MODAL
═══════════════════════════════════════════════════════ */
