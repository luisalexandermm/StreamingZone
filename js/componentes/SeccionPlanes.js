/* ============================================================
   SECCIONPLANES.JS - Seccion de combos / planes y preguntas frecuentes
============================================================ */

const SectionPlanes = ({ onLogin }) => {
  const { T } = useTheme();
  const [openFaq, setOpenFaq] = React.useState(null);
  const [comboBuilder, setComboBuilder] = React.useState(false);
  const [picked, setPicked] = React.useState([]);

  const togglePick = (name) => {
    setPicked(prev => prev.includes(name) ? prev.filter(n=>n!==name) : [...prev, name]);
  };

  const totalCustom = picked.reduce((acc, name) => {
    const s = SERVICES_CAT.find(x=>x.name===name);
    return acc + (s ? s.priceNum : 0);
  }, 0);

  const waMsg = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`${WHATSAPP_LINK}?text=${encoded}`, "_blank");
  };

  return (
    <section id="planes" className="nav-section" style={{ padding:"80px 24px" }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ fontSize:11, fontWeight:700, color:T.blue, letterSpacing:".1em", marginBottom:10 }}>COMBOS POPULARES</div>
          <h2 style={{ fontFamily:"Poppins", fontSize:"clamp(24px,4vw,40px)", fontWeight:800,
            letterSpacing:"-.02em", color:T.text, marginBottom:14 }}>
            Ahorra más con nuestros combos
          </h2>
          <p style={{ color:T.muted, fontSize:15, marginBottom:28, maxWidth:520, margin:"0 auto 28px" }}>
            Combina tus plataformas favoritas y paga menos. Activación inmediata, soporte garantizado.
          </p>
          {/* Armar Combo CTA */}
          <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
            <button className="btn-primary" style={{ padding:"13px 30px", fontSize:14 }}
              onClick={()=>setComboBuilder(true)}>
              ✨ Armar mi Combo
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:8, textDecoration:"none",
              background:"#25D366", color:"#fff", borderRadius:12,
              padding:"13px 24px", fontSize:14, fontWeight:600, fontFamily:"Inter",
              transition:"all .22s ease"
            }}>
              📱 WhatsApp 3145312045
            </a>
          </div>
        </div>

        {/* COMBO BUILDER MODAL */}
        {comboBuilder && (
          <div style={{ position:"fixed", inset:0, zIndex:300,
            background:"rgba(0,0,0,0.7)", backdropFilter:"blur(14px)",
            display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}
            onClick={e=>{ if(e.target===e.currentTarget) setComboBuilder(false); }}>
            <div style={{
              background:T.surface, borderRadius:20, border:`1px solid ${T.border}`,
              width:"100%", maxWidth:760, maxHeight:"88vh", overflowY:"auto",
              padding:"28px 28px"
            }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
                <div>
                  <h3 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:800, color:T.text }}>✨ Arma tu Combo</h3>
                  <p style={{ color:T.muted, fontSize:13, marginTop:3 }}>Selecciona los servicios que quieres y te cotizamos al instante</p>
                </div>
                <button onClick={()=>setComboBuilder(false)} style={{ background:"none", border:"none", cursor:"pointer", color:T.muted }}><Icono nombre="close" size={20}/></button>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:10, marginBottom:22 }}>
                {SERVICES_CAT.map((s,i)=>{
                  const active = picked.includes(s.name);
                  return (
                    <div key={i} onClick={()=>togglePick(s.name)} style={{
                      padding:"12px 14px", borderRadius:12, cursor:"pointer", transition:"all .18s",
                      border:`2px solid ${active ? s.color : T.border}`,
                      background: active ? `${s.color}14` : T.card,
                      display:"flex", alignItems:"center", gap:10
                    }}>
                      <span style={{ fontSize:20 }}>{s.icon}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:12.5, fontWeight:700, color:T.text }}>{s.name}</div>
                        <div style={{ fontSize:11, color: active ? s.color : T.muted, fontWeight:600 }}>{s.price}</div>
                      </div>
                      {active && <div style={{ width:18, height:18, borderRadius:"50%", background:s.color, flexShrink:0,
                        display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icono nombre="check" size={11} color="#fff"/>
                      </div>}
                    </div>
                  );
                })}
              </div>

              {/* Summary bar */}
              <div style={{ background:T.isDark?"#0F172A":"#F0F4FA", borderRadius:14, padding:"16px 20px",
                display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                <div>
                  <div style={{ fontSize:12, color:T.muted, marginBottom:3 }}>
                    {picked.length === 0 ? "Selecciona al menos un servicio" : `${picked.length} servicio(s) seleccionado(s)`}
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                    {picked.map((n,i)=>(
                      <span key={i} style={{ fontSize:11, background:`${T.blue}18`, color:T.blue,
                        border:`1px solid ${T.blue}33`, borderRadius:10, padding:"2px 8px" }}>{n}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:11, color:T.muted }}>Total estimado</div>
                    <div style={{ fontFamily:"Poppins", fontSize:24, fontWeight:900, color:T.blue }}>
                      ${totalCustom.toLocaleString()}
                    </div>
                  </div>
                  <button className="btn-primary" disabled={picked.length===0}
                    style={{ padding:"12px 22px", fontSize:13, opacity: picked.length===0 ? 0.4 : 1 }}
                    onClick={()=>{
                      waMsg(`Hola! Quiero armar un combo con: ${picked.join(", ")}. Total estimado: $${totalCustom.toLocaleString()} COP. ¿Me pueden ayudar?`);
                    }}>
                    📱 Pedir por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMBOS GRID */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:16, marginBottom:64 }}>
          {COMBOS.map((c,i)=>(
            <div key={i} className="card" style={{
              padding:"22px 24px", position:"relative", overflow:"hidden",
              background: c.highlight
                ? T.isDark ? `linear-gradient(135deg,#1A0A2E,#0D1A2D)` : `linear-gradient(135deg,#EEF0FF,#F5F0FF)`
                : T.card,
              border: c.highlight ? `1.5px solid ${T.purple}55` : `1px solid ${T.border}`,
              boxShadow: c.highlight ? `0 8px 32px ${T.purple}22` : "none",
            }}>
              {/* Highlight glow */}
              {c.highlight && (
                <div style={{ position:"absolute", top:-30, right:-30, width:120, height:120, borderRadius:"50%",
                  background:`${T.purple}25`, filter:"blur(30px)", pointerEvents:"none" }}/>
              )}

              {/* Badge */}
              <div style={{ marginBottom:12 }}>
                <span style={{ fontSize:10, fontWeight:800, letterSpacing:".06em",
                  background: c.highlight ? `linear-gradient(135deg,${T.purple},${T.blue})` : `${c.color}18`,
                  color: c.highlight ? "#fff" : c.color,
                  border: c.highlight ? "none" : `1px solid ${c.color}33`,
                  borderRadius:16, padding:"3px 10px" }}>{c.badge}</span>
              </div>

              {/* Icons row */}
              <div style={{ display:"flex", gap:6, marginBottom:10 }}>
                {c.icons.map((ic,j)=>(
                  <div key={j} style={{ width:32, height:32, borderRadius:8, background:T.inputBg,
                    border:`1px solid ${T.border}`, display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:16 }}>{ic}</div>
                ))}
              </div>

              <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:800, color:T.text, marginBottom:4 }}>{c.name}</h3>
              <p style={{ fontSize:12.5, color:T.muted, marginBottom:14, lineHeight:1.5 }}>{c.services}</p>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontFamily:"Poppins", fontSize:24, fontWeight:900, color: c.highlight ? T.purple : T.text }}>
                    {c.price}
                  </div>
                  <div style={{ fontSize:11, color:T.green, fontWeight:700, marginTop:2 }}>{c.saving}</div>
                </div>
                <button onClick={()=>waMsg(`Hola! Me interesa el combo: ${c.name} (${c.price}). ¿Pueden activarlo?`)}
                  style={{
                    background:"#25D366", color:"#fff", border:"none", borderRadius:10,
                    padding:"9px 16px", fontSize:12, fontWeight:700, cursor:"pointer",
                    fontFamily:"Inter", display:"flex", alignItems:"center", gap:6,
                    transition:"all .2s"
                  }}>
                  📱 Pedir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:"clamp(20px,3vw,28px)", fontWeight:800, color:T.text,
            textAlign:"center", marginBottom:32 }}>Preguntas frecuentes</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {FAQS.map((faq,i)=>(
              <div key={i} className="card" style={{ overflow:"hidden" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{
                  width:"100%", background:"none", border:"none", padding:"16px 20px",
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  cursor:"pointer", textAlign:"left"
                }}>
                  <span style={{ fontSize:14, fontWeight:600, color:T.text }}>{faq.q}</span>
                  <Icono nombre="expand_more" size={16} style={{ color:T.muted, flexShrink:0, transition:"transform .2s",
                    transform: openFaq===i?"rotate(180deg)":"none" }}/>
                </button>
                {openFaq===i && (
                  <div style={{ padding:"0 20px 16px", color:T.muted, fontSize:13.5, lineHeight:1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION: RENOVAR
═══════════════════════════════════════════════════════ */
