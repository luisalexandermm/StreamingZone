/* ============================================================
   SECCIONCONTACTO.JS - Seccion de contacto / formulario
============================================================ */

const SectionContacto = () => {
  const { T } = useTheme();
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name:"", email:"", subject:"", msg:"" });

  const contactInfo = [
    { icon:<Icono nombre="mail" size={20}/>,     c:T.blue,   title:"Email",       val:"soporte@streamzone.app"    },
    { icon:<Icono nombre="call" size={20}/>,    c:T.green,  title:"WhatsApp",    val:"+57 300 000 0000"           },
    { icon:<Icono nombre="schedule" size={20}/>,    c:T.gold,   title:"Horario",     val:"Lun–Vie 8am–8pm · Sáb 9am–4pm" },
    { icon:<Icono nombre="location_on" size={20}/>,   c:T.purple, title:"Ubicación",   val:"Bogotá, Colombia 🇨🇴"     },
  ];

  return (
    <section id="contacto" className="nav-section" style={{ padding:"80px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ fontSize:11, fontWeight:700, color:T.blue, letterSpacing:".1em", marginBottom:10 }}>CONTACTO</div>
          <h2 style={{ fontFamily:"Poppins", fontSize:"clamp(24px,4vw,40px)", fontWeight:800,
            letterSpacing:"-.02em", color:T.text, marginBottom:14 }}>
            ¿Tienes alguna pregunta?
          </h2>
          <p style={{ color:T.muted, fontSize:15, maxWidth:480, margin:"0 auto" }}>
            Nuestro equipo está disponible para ayudarte. Escríbenos y respondemos rápido.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:40, alignItems:"start" }}>
          {/* Contact info */}
          <div>
            <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:32 }}>
              {contactInfo.map((c,i)=>(
                <div key={i} className="card" style={{ padding:"16px 20px", display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:42, height:42, borderRadius:11, flexShrink:0,
                    background:`${c.c}18`, border:`1px solid ${c.c}30`,
                    display:"flex", alignItems:"center", justifyContent:"center", color:c.c }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11, color:T.muted, fontWeight:700, marginBottom:2 }}>{c.title}</div>
                    <div style={{ fontSize:14, fontWeight:600, color:T.text }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding:"20px 22px",
              background:`linear-gradient(135deg,${T.blue}12,${T.purple}08)`, borderColor:`${T.blue}30` }}>
              <div style={{ fontSize:13, fontWeight:700, color:T.text, marginBottom:8 }}>⚡ Respuesta rápida garantizada</div>
              <p style={{ fontSize:13, color:T.muted, lineHeight:1.65 }}>
                Respondemos todos los mensajes en menos de 2 horas durante días hábiles.
                Para urgencias, usa el chat de WhatsApp.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding:"28px 30px" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"24px 0" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:800, color:T.text, marginBottom:8 }}>¡Mensaje enviado!</h3>
                <p style={{ color:T.muted, fontSize:14, lineHeight:1.7 }}>
                  Gracias por contactarnos. Te responderemos pronto al correo indicado.
                </p>
                <button className="btn-outline" style={{ marginTop:20 }} onClick={()=>{setSent(false);setForm({name:"",email:"",subject:"",msg:""})}}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <h3 style={{ fontFamily:"Poppins", fontSize:18, fontWeight:700, color:T.text, marginBottom:4 }}>Envíanos un mensaje</h3>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <div>
                    <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>NOMBRE</label>
                    <input placeholder="Tu nombre" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  </div>
                  <div>
                    <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>EMAIL</label>
                    <input type="email" placeholder="tu@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>ASUNTO</label>
                  <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}>
                    <option value="">Selecciona un tema</option>
                    <option>Soporte técnico</option>
                    <option>Pagos y facturación</option>
                    <option>Renovación de servicios</option>
                    <option>Planes y precios</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>MENSAJE</label>
                  <textarea placeholder="Cuéntanos en qué podemos ayudarte…" rows={5}
                    value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})}
                    style={{ resize:"vertical" }}/>
                </div>
                <button className="btn-primary" style={{ padding:"13px" }} onClick={()=>setSent(true)}>
                  <Icono nombre="send" size={15}/> Enviar mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════ */
