/* ============================================================
   SECCIONSERVICIOS.JS - Seccion que muestra el catalogo
============================================================ */

const SectionServicios = () => {
  const { T } = useTheme();
  const [selected, setSelected] = React.useState(null);

  // Al darle clic en "Adquirir", abrimos WhatsApp con un mensaje
  // ya escrito diciendo qué servicio quiere la persona.
  const adquirir = (servicio) => {
    const mensaje = `Hola, quiero adquirir el servicio de ${servicio.name} (${servicio.price}/mes). ¿Me ayudas con la activación?`;
    const encoded = encodeURIComponent(mensaje);
    window.open(`${WHATSAPP_LINK}?text=${encoded}`, "_blank");
  };

  return (
    <section id="servicios" className="nav-section" style={{ padding:"80px 24px", background:T.surface }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ fontSize:11, fontWeight:700, color:T.blue, letterSpacing:".1em", marginBottom:10 }}>CATÁLOGO</div>
          <h2 style={{ fontFamily:"Poppins", fontSize:"clamp(24px,4vw,40px)", fontWeight:800,
            letterSpacing:"-.02em", color:T.text, marginBottom:14 }}>
            Nuestros Servicios Disponibles
          </h2>
          <p style={{ color:T.muted, fontSize:15, maxWidth:520, margin:"0 auto" }}>
            Accede a las mejores plataformas digitales del mercado. Cuentas premium,
            precios accesibles y activación inmediata.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:18 }}>
          {SERVICES_CAT.map((s,i)=>(
            <div key={i} className="card" onClick={()=>setSelected(selected===i?null:i)}
              style={{
                padding:"22px 24px", cursor:"pointer", transition:"all .22s",
                borderColor: selected===i ? s.color+"88" : T.border,
                background: selected===i
                  ? T.isDark ? `${s.color}10` : `${s.color}08`
                  : T.card,
                boxShadow: selected===i ? `0 8px 32px ${s.color}22` : "none",
              }}>
              {/* Header row */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  {/* Color dot as brand indicator */}
                  <div style={{
                    width:44, height:44, borderRadius:12, flexShrink:0,
                    background:`${s.color}20`, border:`1.5px solid ${s.color}40`,
                    display:"flex", alignItems:"center", justifyContent:"center", color:s.color,
                  }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:800, color:T.text, marginBottom:2 }}>{s.name}</h3>
                    <div style={{ fontSize:11, color:T.muted }}>{s.screens}</div>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
                  <Icono nombre="expand_more" size={15} style={{ color:T.muted, transition:"transform .2s",
                    transform: selected===i ? "rotate(180deg)" : "none" }}/>
                </div>
              </div>

              {/* Badge */}
              <div style={{ marginBottom:10 }}>
                <span style={{
                  display:"inline-block", fontSize:10, fontWeight:700, letterSpacing:".05em",
                  background:`${s.color}18`, color:s.color, border:`1px solid ${s.color}33`,
                  borderRadius:20, padding:"3px 10px"
                }}>{s.badge}</span>
              </div>

              <p style={{ color:T.muted, fontSize:13, lineHeight:1.65, marginBottom:14 }}>{s.desc}</p>

              {/* Price + CTA */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ fontFamily:"Poppins", fontSize:15, fontWeight:800, color:s.color }}>
                  {s.price}
                </div>
                <div style={{
                  fontSize:11, fontWeight:700, color:T.muted,
                  display:"flex", alignItems:"center", gap:3
                }}>
                  {selected===i ? "Cerrar ↑" : "Ver más ↓"}
                </div>
              </div>

              {/* Expanded features */}
              {selected===i && (
                <div style={{ marginTop:16, paddingTop:16, borderTop:`1px solid ${T.border}` }}>
                  <div style={{ fontSize:11, fontWeight:700, color:T.muted, letterSpacing:".08em",
                    textTransform:"uppercase", marginBottom:10 }}>Incluye:</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:7, marginBottom:16 }}>
                    {s.features.map((f,j)=>(
                      <div key={j} style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ width:16, height:16, borderRadius:"50%", flexShrink:0,
                          background:`${s.color}20`, border:`1px solid ${s.color}44`,
                          display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <Icono nombre="check" size={9} style={{ color:s.color }}/>
                        </div>
                        <span style={{ fontSize:13, color:T.sub }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-primary" style={{ width:"100%", padding:"11px", fontSize:13,
                    background:`linear-gradient(135deg,${s.color},${s.color}bb)` }}
                    onClick={(e)=>{ e.stopPropagation(); adquirir(s); }}>
                    Adquirir {s.name} →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How it works */}
        <div style={{ marginTop:72 }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:"clamp(20px,3vw,30px)", fontWeight:800, color:T.text, marginBottom:10 }}>
              ¿Cómo adquiero un servicio?
            </h3>
            <p style={{ color:T.muted, fontSize:14 }}>Proceso simple y rápido en 3 pasos</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:0 }}>
            {[
              { n:"01", title:"Elige tu servicio", desc:"Selecciona la plataforma que deseas y el plan que más se ajuste a ti.", icon:<Icono nombre="monitor" size={22}/>, c:T.blue },
              { n:"02", title:"Realiza el pago",    desc:"Paga por Nequi, transferencia, tarjeta o efectivo de forma rápida y segura.", icon:<Icono nombre="credit_card" size={22}/>, c:T.purple },
              { n:"03", title:"Activación inmediata",desc:"Recibes tus credenciales al instante. Disfruta sin esperas desde el primer minuto.", icon:<Icono nombre="check_circle" size={22}/>, c:T.green },
            ].map((step,i)=>(
              <div key={i} style={{ padding:"24px 20px", textAlign:"center", position:"relative" }}>
                {i<2 && (
                  <div className="hide-mobile" style={{
                    position:"absolute", top:"38px", right:"-14px", zIndex:1,
                    color:T.border, fontSize:20, fontWeight:300
                  }}>→</div>
                )}
                <div style={{ width:56, height:56, borderRadius:"50%", margin:"0 auto 14px",
                  background:`linear-gradient(135deg,${step.c},${step.c}99)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow:`0 6px 20px ${step.c}44`, color:"#fff" }}>{step.icon}</div>
                <div style={{ fontFamily:"Poppins", fontSize:10, fontWeight:800, color:step.c,
                  letterSpacing:".12em", marginBottom:6 }}>{step.n}</div>
                <h4 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:700, color:T.text, marginBottom:7 }}>{step.title}</h4>
                <p style={{ color:T.muted, fontSize:13, lineHeight:1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION: PLANES (COMBOS)
═══════════════════════════════════════════════════════ */
