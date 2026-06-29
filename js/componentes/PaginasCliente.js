/* ============================================================
   PAGINASCLIENTE.JS - Todas las paginas del panel de CLIENTE
============================================================ */

const ClientDashboard = () => {
  const { T } = useTheme();
  return (
    <div className="fade-in" style={{ display:"flex", flexDirection:"column", gap:20 }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:14 }}>
        <StatCard icon={<Icono nombre="monitor" size={19}/>}     label="Servicios Activos"   value="3"       sub="De 4 contratados"     accent={T.blue}   trend={12}/>
        <StatCard icon={<Icono nombre="calendar_month" size={19}/>}    label="Próximo Vencimiento" value="15 días"  sub="Adobe Creative"       accent={T.gold}/>
        <StatCard icon={<Icono nombre="credit_card" size={19}/>}  label="Pagos del Mes"       value="$104"    sub="Enero 2025"           accent={T.green}  trend={8}/>
        <StatCard icon={<Icono nombre="check_circle" size={19}/>} label="Estado"              value="Al día"  sub="Sin pagos pendientes" accent={T.purple}/>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 300px", gap:18 }}>
        <div className="card" style={{ padding:"20px 22px" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text, marginBottom:16 }}>Actividad Reciente</h3>
          {[
            {icon:<Icono nombre="check_circle" size={15}/>,msg:"Pago de Netflix aprobado",time:"Hace 2 días",c:T.green},
            {icon:<Icono nombre="autorenew" size={15}/>,  msg:"Spotify Family renovado", time:"Hace 5 días",c:T.blue},
            {icon:<Icono nombre="error" size={15}/>,msg:"Adobe Creative vence pronto",time:"Hace 7 días",c:T.gold},
            {icon:<Icono nombre="person" size={15}/>,       msg:"Perfil actualizado",      time:"Hace 10 días",c:T.purple},
          ].map((a,i)=>(
            <div key={i} style={{ display:"flex", gap:12, padding:"11px 13px", marginBottom:8,
              borderRadius:10, background:T.inputBg, border:`1px solid ${T.border}` }}>
              <div style={{ width:32, height:32, borderRadius:8, background:`${a.c}18`,
                color:a.c, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{a.icon}</div>
              <div>
                <div style={{ fontSize:13, fontWeight:500, color:T.text }}>{a.msg}</div>
                <div style={{ fontSize:11, color:T.muted, marginTop:1 }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding:"20px 22px" }}>
          <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text, marginBottom:16 }}>Notificaciones</h3>
          {notifData.map(n=>(
            <div key={n.id} style={{ padding:"11px 13px", borderRadius:10, marginBottom:8,
              background:n.type==="success"?`${T.green}12`:n.type==="warning"?`${T.gold}12`:`${T.blue}12`,
              border:`1px solid ${n.type==="success"?T.green:n.type==="warning"?T.gold:T.blue}33` }}>
              <div style={{ fontSize:12, fontWeight:500, color:T.text, marginBottom:2 }}>{n.msg}</div>
              <div style={{ fontSize:10, color:T.muted }}>{n.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientServicesPage = () => {
  const { T } = useTheme();
  return (
    <div className="fade-in">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div>
          <h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Mis Servicios</h3>
          <p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Todas tus suscripciones activas</p>
        </div>
        <button className="btn-primary" style={{ padding:"9px 18px", fontSize:13 }}><Icono nombre="add" size={14}/> Agregar</button>
      </div>
      <div className="card" style={{ overflow:"hidden" }}>
        <table>
          <thead><tr><th>Servicio</th><th>Estado</th><th>Inicio</th><th>Vencimiento</th><th>Precio</th><th>Acciones</th></tr></thead>
          <tbody>
            {mockServices.map(s=>(
              <tr key={s.id}>
                <td>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:34, height:34, borderRadius:9,
                      background:`linear-gradient(135deg,${T.blue},${T.purple})`,
                      display:"flex", alignItems:"center", justifyContent:"center" }}><Icono nombre="monitor" size={15} color="#fff"/></div>
                    <span style={{ fontWeight:600 }}>{s.name}</span>
                  </div>
                </td>
                <td><StatusBadge status={s.status}/></td>
                <td style={{ color:T.muted, fontSize:13 }}>{s.start}</td>
                <td style={{ color:s.status==="expiring"?T.gold:T.muted, fontSize:13, fontWeight:s.status==="expiring"?"700":"400" }}>{s.end}</td>
                <td style={{ fontWeight:700 }}>${s.price.toLocaleString()}</td>
                <td>
                  <div style={{ display:"flex", gap:7 }}>
                    <button className="btn-outline" style={{ padding:"5px 12px", fontSize:12 }}><Icono nombre="visibility" size={13}/></button>
                    <button className="btn-primary" style={{ padding:"5px 14px", fontSize:12 }}>Renovar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ClientRenewalsPage = () => {
  const { T } = useTheme();
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({ code:"", service:"", duration:"1", method:"" });
  const durations = [{val:"1",label:"1 Mes",disc:""},{val:"3",label:"3 Meses",disc:"5% OFF"},{val:"6",label:"6 Meses",disc:"10% OFF"},{val:"12",label:"1 Año",disc:"20% OFF"}];
  const methods = [{id:"transfer",label:"Transferencia Bancaria",icon:"🏦"},{id:"nequi",label:"Nequi / Daviplata",icon:"📱"},{id:"card",label:"Tarjeta",icon:"💳"},{id:"paypal",label:"PayPal",icon:"🅿️"}];
  return (
    <div className="fade-in" style={{ maxWidth:580 }}>
      <div style={{ marginBottom:20 }}>
        <h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Renovar Servicio</h3>
        <p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Proceso rápido en 4 pasos</p>
      </div>
      <div style={{ display:"flex", marginBottom:24 }}>
        {["Datos","Duración","Pago","Listo"].map((s,i)=>(
          <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{ width:"100%", display:"flex", alignItems:"center" }}>
              {i>0 && <div style={{ flex:1, height:2, background:i<step?`linear-gradient(90deg,${T.blue},${T.purple})`:T.border }}/>}
              <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0,
                background:i+1<=step?`linear-gradient(135deg,${T.blue},${T.purple})`:T.inputBg,
                border:`2px solid ${i+1<=step?T.blue:T.border}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:11, fontWeight:700, color:i+1<=step?"#fff":T.muted }}>
                {i+1<step?<Icono nombre="check" size={12}/>:i+1}
              </div>
              {i<3 && <div style={{ flex:1, height:2, background:i+1<step?`linear-gradient(90deg,${T.blue},${T.purple})`:T.border }}/>}
            </div>
            <div style={{ fontSize:10, color:i+1<=step?T.text:T.muted, fontWeight:600, marginTop:4 }}>{s}</div>
          </div>
        ))}
      </div>
      <div className="card" style={{ padding:"24px 28px" }}>
        {step===1 && <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <h4 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Identificación</h4>
          <div><label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>CÓDIGO CLIENTE</label><input placeholder="SZ-0001" value={form.code} onChange={e=>setForm({...form,code:e.target.value})}/></div>
          <div><label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>SERVICIO</label><select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Selecciona...</option>{mockServices.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></div>
          <button className="btn-primary" onClick={()=>setStep(2)} style={{ padding:"12px" }}>Continuar →</button>
        </div>}
        {step===2 && <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <h4 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Duración</h4>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {durations.map(d=>(
              <div key={d.val} onClick={()=>setForm({...form,duration:d.val})} style={{
                padding:"13px 15px", borderRadius:12, cursor:"pointer",
                background:form.duration===d.val?`${T.blue}14`:T.inputBg,
                border:`2px solid ${form.duration===d.val?T.blue:T.border}` }}>
                <div style={{ fontWeight:700, color:T.text }}>{d.label}</div>
                {d.disc && <div style={{ color:T.green, fontSize:11, fontWeight:700 }}>{d.disc}</div>}
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:9 }}><button className="btn-outline" style={{ flex:1 }} onClick={()=>setStep(1)}>← Atrás</button><button className="btn-primary" style={{ flex:1 }} onClick={()=>setStep(3)}>Continuar →</button></div>
        </div>}
        {step===3 && <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
          <h4 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Método de Pago</h4>
          {methods.map(m=>(
            <div key={m.id} onClick={()=>setForm({...form,method:m.id})} style={{
              padding:"11px 15px", borderRadius:11, cursor:"pointer", display:"flex", alignItems:"center", gap:10,
              background:form.method===m.id?`${T.blue}12`:T.inputBg,
              border:`2px solid ${form.method===m.id?T.blue:T.border}` }}>
              <span style={{ fontSize:18 }}>{m.icon}</span>
              <span style={{ fontSize:13.5, fontWeight:500, color:T.text }}>{m.label}</span>
              {form.method===m.id && <Icono nombre="check" size={14} style={{ color:T.blue, marginLeft:"auto" }}/>}
            </div>
          ))}
          <div style={{ display:"flex", gap:9 }}><button className="btn-outline" style={{ flex:1 }} onClick={()=>setStep(2)}>← Atrás</button><button className="btn-primary" style={{ flex:1 }} onClick={()=>setStep(4)}>Enviar</button></div>
        </div>}
        {step===4 && <div style={{ textAlign:"center", padding:"10px 0" }}>
          <div style={{ width:60, height:60, borderRadius:"50%", background:`linear-gradient(135deg,${T.green},#00A040)`,
            display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", boxShadow:`0 0 24px ${T.green}44` }}><Icono nombre="check_circle" size={30} color="#fff"/></div>
          <h3 style={{ fontFamily:"Poppins", fontSize:18, fontWeight:800, color:T.text, marginBottom:8 }}>¡Solicitud Enviada!</h3>
          <p style={{ color:T.muted, fontSize:13.5, lineHeight:1.65, marginBottom:20 }}>Tu renovación fue recibida.<br/>Recibirás confirmación pronto.</p>
          <button className="btn-primary" onClick={()=>setStep(1)} style={{ width:"100%" }}>Nueva Renovación</button>
        </div>}
      </div>
    </div>
  );
};

const ClientPaymentsPage = () => {
  const { T } = useTheme();
  return (
    <div className="fade-in">
      <div style={{ marginBottom:20 }}><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Historial de Pagos</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Tus transacciones y comprobantes</p></div>
      <div className="card" style={{ overflow:"hidden" }}>
        <table><thead><tr><th>ID</th><th>Servicio</th><th>Fecha</th><th>Monto</th><th>Estado</th><th>Ver</th></tr></thead>
          <tbody>{mockPayments.slice(0,4).map(p=>(
            <tr key={p.id}>
              <td><code style={{ fontSize:11, color:T.blue, background:`${T.blue}15`, padding:"2px 7px", borderRadius:5 }}>{p.id}</code></td>
              <td style={{ fontWeight:500 }}>Netflix Premium</td>
              <td style={{ color:T.muted, fontSize:13 }}>{p.date}</td>
              <td style={{ fontWeight:700 }}>${p.amount}</td>
              <td><StatusBadge status={p.status}/></td>
              <td><button className="btn-outline" style={{ padding:"5px 11px", fontSize:12 }}><Icono nombre="visibility" size={13}/></button></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
};

const ClientNotifsPage = () => {
  const { T } = useTheme();
  const types = {
    success:{bg:`${T.green}14`,border:`${T.green}33`,c:T.green,icon:<Icono nombre="check_circle" size={17}/>},
    warning:{bg:`${T.gold}14`,border:`${T.gold}33`,c:T.gold,icon:<Icono nombre="error" size={17}/>},
    info:{bg:`${T.blue}14`,border:`${T.blue}33`,c:T.blue,icon:<Icono nombre="notifications" size={17}/>},
  };
  return (
    <div className="fade-in" style={{ maxWidth:620 }}>
      <div style={{ marginBottom:20 }}><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Notificaciones</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Mantente al tanto de tu cuenta</p></div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {notifData.map(n=>{ const t=types[n.type]; return (
          <div key={n.id} style={{ padding:"15px 18px", borderRadius:12, background:t.bg, border:`1px solid ${t.border}`,
            display:"flex", alignItems:"flex-start", gap:12 }}>
            <div style={{ color:t.c, flexShrink:0, marginTop:1 }}>{t.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13.5, fontWeight:600, color:T.text, marginBottom:3 }}>{n.msg}</div>
              <div style={{ fontSize:11, color:T.muted }}>{n.time}</div>
            </div>
            <button style={{ background:"none", border:"none", color:T.muted, cursor:"pointer" }}><Icono nombre="close" size={14}/></button>
          </div>
        );})}
      </div>
    </div>
  );
};

const ClientProfilePage = () => {
  const { T } = useTheme();
  const [editing, setEditing] = React.useState(false);
  const u = { name:"María García", email:"maria@example.com", phone:"+57 300 123 4567", code:"SZ-0001", joined:"15 de Enero, 2024" };
  return (
    <div className="fade-in" style={{ maxWidth:640 }}>
      <div style={{ marginBottom:20 }}><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Mi Perfil</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Gestiona tu información personal</p></div>
      <div className="card" style={{ padding:28 }}>
        <div style={{ display:"flex", alignItems:"center", gap:18, marginBottom:26, paddingBottom:22, borderBottom:`1px solid ${T.border}` }}>
          <div style={{ position:"relative" }}>
            <Avatar name={u.name} size={70}/>
            <button style={{ position:"absolute", bottom:0, right:0, width:24, height:24, borderRadius:"50%",
              background:T.blue, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}><Icono nombre="edit" size={11} color="#fff"/></button>
          </div>
          <div>
            <h3 style={{ fontFamily:"Poppins", fontSize:20, fontWeight:700, color:T.text }}>{u.name}</h3>
            <div style={{ color:T.muted, fontSize:13, marginTop:2 }}>{u.email}</div>
            <div style={{ marginTop:7 }}><StatusBadge status="active"/></div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20 }}>
          {[{l:"NOMBRE",icon:<Icono nombre="person" size={12}/>,v:u.name},{l:"CORREO",icon:<Icono nombre="mail" size={12}/>,v:u.email},{l:"TELÉFONO",icon:<Icono nombre="call" size={12}/>,v:u.phone},{l:"CÓDIGO",icon:<Icono nombre="shield" size={12}/>,v:u.code}].map((f,i)=>(
            <div key={i}>
              <label style={{ fontSize:10, color:T.muted, fontWeight:700, display:"flex", alignItems:"center", gap:4, marginBottom:4 }}>{f.icon} {f.l}</label>
              {editing?<input defaultValue={f.v}/>:
                <div style={{ background:T.inputBg, border:`1px solid ${T.border}`, borderRadius:10, padding:"10px 14px", fontSize:13.5, fontWeight:500, color:T.text }}>{f.v}</div>}
            </div>
          ))}
        </div>
        <div style={{ padding:"11px 14px", borderRadius:10, background:`${T.blue}10`, border:`1px solid ${T.blue}22`, marginBottom:18, fontSize:12.5, color:T.muted, display:"flex", alignItems:"center", gap:8 }}>
          <Icono nombre="calendar_month" size={14} style={{ color:T.blue }}/>Cliente desde: <strong style={{ color:T.text }}>{u.joined}</strong>
        </div>
        <div style={{ display:"flex", gap:9 }}>
          <button className={editing?"btn-primary":"btn-outline"} onClick={()=>setEditing(e=>!e)} style={{ display:"flex", alignItems:"center", gap:6 }}>
            {editing?<><Icono nombre="check" size={13}/> Guardar</>:<><Icono nombre="edit" size={13}/> Editar</>}
          </button>
          {editing && <button className="btn-outline" onClick={()=>setEditing(false)}>Cancelar</button>}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ADMIN PAGES
═══════════════════════════════════════════════════════ */
