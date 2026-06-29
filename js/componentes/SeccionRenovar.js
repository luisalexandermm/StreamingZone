/* ============================================================
   SECCIONRENOVAR.JS - Seccion para renovar un servicio
============================================================ */

const SectionRenovar = ({ onLogin }) => {
  const { T } = useTheme();
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({ code:"", service:"", duration:"1", method:"" });
  const durations = [
    {val:"1",label:"1 Mes",  sub:"Renovación mensual", disc:""},
    {val:"3",label:"3 Meses",sub:"Ahorra 5%",          disc:"5% OFF"},
    {val:"6",label:"6 Meses",sub:"Ahorra 10%",         disc:"10% OFF"},
    {val:"12",label:"1 Año", sub:"Mejor precio",        disc:"20% OFF"},
  ];
  const methods = [
    { id:"transfer", label:"Transferencia Bancaria", icon:"🏦" },
    { id:"nequi",    label:"Nequi / Daviplata",      icon:"📱" },
    { id:"card",     label:"Tarjeta Crédito/Débito", icon:"💳" },
    { id:"paypal",   label:"PayPal",                  icon:"🅿️" },
  ];

  return (
    <section id="renovar" className="nav-section" style={{ padding:"80px 24px", background:T.surface }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>
          {/* Left: info */}
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:T.blue, letterSpacing:".1em", marginBottom:10 }}>RENOVACIONES</div>
            <h2 style={{ fontFamily:"Poppins", fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800,
              letterSpacing:"-.02em", color:T.text, marginBottom:16 }}>
              Renueva tus servicios{" "}
              <span className="grad-text" style={{ background:`linear-gradient(135deg,${T.blue},${T.purple})` }}>sin complicaciones</span>
            </h2>
            <p style={{ color:T.muted, fontSize:15, lineHeight:1.75, marginBottom:36 }}>
              El proceso de renovación de StreamingZone es el más rápido del mercado. En menos de 3 minutos
              tu servicio estará renovado y recibirás confirmación inmediata.
            </p>

            {[
              { icon:<Icono nombre="schedule" size={18}/>,       c:T.blue,   title:"Proceso en minutos",  desc:"Sin filas, sin llamadas. Todo digital desde tu panel." },
              { icon:<Icono nombre="shield" size={18}/>,      c:T.green,  title:"100% seguro",         desc:"Transacciones cifradas. Tu información siempre protegida." },
              { icon:<Icono nombre="notifications" size={18}/>,        c:T.gold,   title:"Confirmación inmediata",desc:"Recibes email y notificación al instante al completar." },
              { icon:<Icono nombre="check_circle" size={18}/>, c:T.purple, title:"Soporte incluido",    desc:"Si algo falla, nuestro equipo resuelve en menos de 1 hora." },
            ].map((item,i)=>(
              <div key={i} style={{ display:"flex", gap:14, marginBottom:20 }}>
                <div style={{ width:40, height:40, borderRadius:10, flexShrink:0,
                  background:`${item.c}18`, border:`1px solid ${item.c}30`,
                  display:"flex", alignItems:"center", justifyContent:"center", color:item.c }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:T.text, marginBottom:3 }}>{item.title}</div>
                  <div style={{ fontSize:13, color:T.muted, lineHeight:1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop:20, padding:"16px 18px", borderRadius:12,
              background:`${T.blue}10`, border:`1px solid ${T.blue}25` }}>
              <p style={{ fontSize:13, color:T.sub, lineHeight:1.65 }}>
                ¿Prefieres gestionar todo desde tu panel personal?{" "}
                <button onClick={onLogin} style={{ background:"none", border:"none",
                  color:T.blue, cursor:"pointer", fontWeight:700, fontSize:13, fontFamily:"Inter" }}>
                  Inicia sesión aquí →
                </button>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {/* Progress */}
            <div style={{ display:"flex", gap:0, marginBottom:24 }}>
              {["Identificación","Duración","Pago","Confirmar"].map((s,i)=>(
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center" }}>
                  <div style={{ width:"100%", display:"flex", alignItems:"center" }}>
                    {i>0 && <div style={{ flex:1, height:2, background: i<step?`linear-gradient(90deg,${T.blue},${T.purple})`:T.border }}/>}
                    <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0,
                      background: i+1<=step?`linear-gradient(135deg,${T.blue},${T.purple})`:T.inputBg,
                      border:`2px solid ${i+1<=step?T.blue:T.border}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:11, fontWeight:700, color:i+1<=step?"#fff":T.muted }}>
                      {i+1<step?<Icono nombre="check" size={12}/>:i+1}
                    </div>
                    {i<3 && <div style={{ flex:1, height:2, background: i+1<step?`linear-gradient(90deg,${T.blue},${T.purple})`:T.border }}/>}
                  </div>
                  <div style={{ fontSize:10, color:i+1<=step?T.text:T.muted, fontWeight:600, marginTop:5 }}>{s}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding:"26px 28px" }}>
              {step===1 && (
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <h4 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:700, color:T.text }}>¿Quién eres?</h4>
                  <div>
                    <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>CÓDIGO DE CLIENTE</label>
                    <input placeholder="Ej: SZ-0001 (lo encuentras en tu perfil)" value={form.code}
                      onChange={e=>setForm({...form,code:e.target.value})}/>
                    <p style={{ fontSize:11, color:T.muted, marginTop:5 }}>¿No tienes cuenta? <button onClick={onLogin} style={{ background:"none",border:"none",color:T.blue,cursor:"pointer",fontSize:11,fontFamily:"Inter",fontWeight:600 }}>Regístrate gratis →</button></p>
                  </div>
                  <div>
                    <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>SERVICIO A RENOVAR</label>
                    <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                      <option value="">Selecciona tu servicio</option>
                      {mockServices.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                  <button className="btn-primary" onClick={()=>setStep(2)} style={{ padding:"13px" }}>
                    Continuar →
                  </button>
                </div>
              )}

              {step===2 && (
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  <h4 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:700, color:T.text }}>¿Por cuánto tiempo?</h4>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    {durations.map(d=>(
                      <div key={d.val} onClick={()=>setForm({...form,duration:d.val})} style={{
                        padding:"14px 16px", borderRadius:12, cursor:"pointer", transition:"all .18s",
                        background: form.duration===d.val?`${T.blue}14`:T.inputBg,
                        border:`2px solid ${form.duration===d.val?T.blue:T.border}`,
                      }}>
                        <div style={{ fontWeight:700, fontSize:15, color:T.text }}>{d.label}</div>
                        <div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{d.sub}</div>
                        {d.disc && <div style={{ color:T.green, fontSize:11, fontWeight:700, marginTop:3 }}>{d.disc}</div>}
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex", gap:9 }}>
                    <button className="btn-outline" style={{ flex:1 }} onClick={()=>setStep(1)}>← Atrás</button>
                    <button className="btn-primary" style={{ flex:1 }} onClick={()=>setStep(3)}>Continuar →</button>
                  </div>
                </div>
              )}

              {step===3 && (
                <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
                  <h4 style={{ fontFamily:"Poppins", fontSize:16, fontWeight:700, color:T.text }}>Método de Pago</h4>
                  {methods.map(m=>(
                    <div key={m.id} onClick={()=>setForm({...form,method:m.id})} style={{
                      padding:"12px 16px", borderRadius:11, cursor:"pointer", transition:"all .18s",
                      display:"flex", alignItems:"center", gap:12,
                      background: form.method===m.id?`${T.blue}12`:T.inputBg,
                      border:`2px solid ${form.method===m.id?T.blue:T.border}`,
                    }}>
                      <span style={{ fontSize:20 }}>{m.icon}</span>
                      <span style={{ fontSize:14, fontWeight:500, color:T.text }}>{m.label}</span>
                      {form.method===m.id && <Icono nombre="check" size={14} style={{ color:T.blue, marginLeft:"auto" }}/>}
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>COMPROBANTE DE PAGO</label>
                    <div style={{ border:`2px dashed ${T.border}`, borderRadius:12, padding:"20px",
                      textAlign:"center", cursor:"pointer", background:T.inputBg }}>
                      <Icono nombre="download" size={20} style={{ color:T.muted, marginBottom:6 }}/>
                      <div style={{ fontSize:12, color:T.muted }}>Arrastra o haz clic para subir tu comprobante</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:9 }}>
                    <button className="btn-outline" style={{ flex:1 }} onClick={()=>setStep(2)}>← Atrás</button>
                    <button className="btn-primary" style={{ flex:1 }} onClick={()=>setStep(4)}>Enviar Solicitud</button>
                  </div>
                </div>
              )}

              {step===4 && (
                <div style={{ textAlign:"center", padding:"12px 0" }}>
                  <div style={{ width:64, height:64, borderRadius:"50%",
                    background:`linear-gradient(135deg,${T.green},#00A040)`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    margin:"0 auto 18px", boxShadow:`0 0 28px ${T.green}44` }}>
                    <Icono nombre="check_circle" size={32} color="#fff"/>
                  </div>
                  <h3 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:800, color:T.text, marginBottom:10 }}>¡Solicitud Enviada!</h3>
                  <p style={{ color:T.muted, fontSize:14, lineHeight:1.7, marginBottom:24 }}>
                    Tu renovación fue recibida correctamente.<br/>
                    Recibirás confirmación por email en los próximos minutos.
                  </p>
                  <div className="card" style={{ padding:"14px 18px", textAlign:"left", marginBottom:20 }}>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, fontSize:13 }}>
                      <div><div style={{ color:T.muted, fontSize:10, marginBottom:2 }}>CÓDIGO</div><div style={{ fontWeight:700, color:T.text }}>{form.code||"SZ-0001"}</div></div>
                      <div><div style={{ color:T.muted, fontSize:10, marginBottom:2 }}>DURACIÓN</div><div style={{ fontWeight:700, color:T.text }}>{form.duration} mes(es)</div></div>
                      <div><div style={{ color:T.muted, fontSize:10, marginBottom:2 }}>ESTADO</div><StatusBadge status="pending"/></div>
                      <div><div style={{ color:T.muted, fontSize:10, marginBottom:2 }}>FOLIO</div><div style={{ fontWeight:700, color:T.blue }}>SZ-REN-{Date.now().toString().slice(-6)}</div></div>
                    </div>
                  </div>
                  <button className="btn-primary" onClick={()=>setStep(1)} style={{ width:"100%" }}>Nueva Renovación</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION: CONTACTO
═══════════════════════════════════════════════════════ */
