/* ============================================================
   PAGINASADMIN.JS - Todas las paginas del panel de ADMIN
============================================================ */

const AdminDashboard = () => {
  const { T } = useTheme();
  const cards = [
    {icon:<Icono nombre="group" size={19}/>,     label:"Clientes Activos",value:"1,284",sub:"+48 este mes",accent:T.blue,  trend:12},
    {icon:<Icono nombre="monitor" size={19}/>,   label:"Servicios",       value:"3,842",sub:"12 categorías",accent:T.purple,trend:8},
    {icon:<Icono nombre="attach_money" size={19}/>,label:"Ingresos Totales",value:"$84,920",sub:"Acumulado",  accent:T.gold,  trend:22},
    {icon:<Icono nombre="trending_up" size={19}/>,label:"Ingresos del Mes",value:"$12,480",sub:"Enero 2025", accent:T.green, trend:15},
    {icon:<Icono nombre="schedule" size={19}/>,     label:"Pagos Pendientes",value:"24",    sub:"Por revisar",accent:"#FF8C00"},
    {icon:<Icono nombre="autorenew" size={19}/>, label:"Renovaciones",    value:"18",    sub:"Esta semana", accent:T.red},
  ];
  return (
    <div className="fade-in" style={{ display:"flex", flexDirection:"column", gap:20 }}>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14 }}>
        {cards.map((c,i)=><StatCard key={i} {...c}/>)}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
        <div className="card" style={{ padding:"20px 22px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Últimos Pagos</h3>
            <span style={{ fontSize:12, color:T.blue, cursor:"pointer", fontWeight:600 }}>Ver todos →</span>
          </div>
          {mockPayments.slice(0,4).map(p=>(
            <div key={p.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 10px",
              marginBottom:7, borderRadius:9, background:T.inputBg }}>
              <Avatar name={p.client} size={28}/>
              <div style={{ flex:1 }}><div style={{ fontSize:12.5, fontWeight:600, color:T.text }}>{p.client}</div><div style={{ fontSize:10, color:T.muted }}>{p.date}</div></div>
              <div style={{ textAlign:"right" }}><div style={{ fontSize:13, fontWeight:700, color:T.text }}>${p.amount}</div><StatusBadge status={p.status}/></div>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding:"20px 22px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
            <h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Últimos Clientes</h3>
            <span style={{ fontSize:12, color:T.blue, cursor:"pointer", fontWeight:600 }}>Ver todos →</span>
          </div>
          {mockClients.map(c=>(
            <div key={c.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 10px",
              marginBottom:7, borderRadius:9, background:T.inputBg }}>
              <Avatar name={c.name} size={28}/>
              <div style={{ flex:1 }}><div style={{ fontSize:12.5, fontWeight:600, color:T.text }}>{c.name}</div><div style={{ fontSize:10, color:T.muted }}>{c.id}</div></div>
              <StatusBadge status={c.status}/>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{ padding:"22px 26px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <div><h3 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Ingresos Mensuales</h3><p style={{ color:T.muted, fontSize:12, marginTop:2 }}>Últimos 6 meses</p></div>
          <div className="badge badge-green">↑ 22% vs anterior</div>
        </div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:8, height:110 }}>
          {[{m:"Ago",h:56},{m:"Sep",h:70},{m:"Oct",h:62},{m:"Nov",h:80},{m:"Dic",h:88},{m:"Ene",h:100}].map((b,i)=>(
            <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <div style={{ width:"100%", height:`${b.h}%`, borderRadius:"5px 5px 0 0",
                background:i===5?`linear-gradient(180deg,${T.blue},${T.purple})`:`${T.blue}28`,
                boxShadow:i===5?`0 0 12px ${T.blue}55`:"none" }}/>
              <div style={{ fontSize:10, color:T.muted }}>{b.m}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdminClientsPage = () => {
  const { T } = useTheme();
  const [search, setSearch] = React.useState("");

  // Empezamos con los clientes de ejemplo, pero los guardamos en un
  // "estado" de React para poder AGREGAR nuevos clientes desde el botón "Nuevo".
  const [clientes, setClientes] = React.useState(mockClients);
  const [mostrarForm, setMostrarForm] = React.useState(false);
  const [viendo, setViendo] = React.useState(null); // cliente que se está viendo en detalle

  const vacio = { name:"", email:"", phone:"", servicio:SERVICES_CAT[0].name, fechaInicio:"", fechaVencimiento:"", status:"active" };
  const [nuevo, setNuevo] = React.useState(vacio);

  const filtered = clientes.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())||c.email.includes(search));

  // Calcula cuántos días faltan para que venza el servicio de un cliente
  const diasParaVencer = (fecha) => {
    if (!fecha) return null;
    const hoy = new Date();
    const venc = new Date(fecha);
    return Math.ceil((venc - hoy) / (1000*60*60*24));
  };

  const guardarNuevoCliente = () => {
    if (!nuevo.name || !nuevo.fechaInicio || !nuevo.fechaVencimiento) {
      alert("Por favor completa al menos el nombre, la fecha de inicio y la fecha de vencimiento.");
      return;
    }
    const id = `SZ-${String(clientes.length + 1).padStart(4,"0")}`;
    setClientes([...clientes, { ...nuevo, id, joined: new Date().toISOString().slice(0,10) }]);
    setNuevo(vacio);
    setMostrarForm(false);
  };

  return (
    <div className="fade-in">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
        <div><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Clientes</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>{clientes.length} registrados</p></div>
        <div style={{ display:"flex", gap:9 }}>
          <div style={{ position:"relative" }}><input placeholder="Buscar…" value={search} onChange={e=>setSearch(e.target.value)} style={{ paddingLeft:32, width:200 }}/><Icono nombre="search" size={12} style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:T.muted, pointerEvents:"none" }}/></div>
          <button className="btn-primary" style={{ padding:"9px 16px", fontSize:13 }} onClick={()=>setMostrarForm(true)}><Icono nombre="add" size={14}/> Nuevo</button>
        </div>
      </div>

      <div className="card" style={{ overflow:"auto" }}>
        <table><thead><tr><th>Código</th><th>Cliente</th><th>Servicio</th><th>Teléfono</th><th>Inicio</th><th>Vence</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>{filtered.map(c=>{
            const dias = diasParaVencer(c.fechaVencimiento);
            return (
            <tr key={c.id}>
              <td><code style={{ fontSize:11, color:T.purple, background:`${T.purple}15`, padding:"2px 7px", borderRadius:5 }}>{c.id}</code></td>
              <td><div style={{ display:"flex", alignItems:"center", gap:9 }}><Avatar name={c.name} size={28}/><span style={{ fontWeight:600 }}>{c.name}</span></div></td>
              <td style={{ color:T.muted, fontSize:13 }}>{c.servicio || "—"}</td>
              <td style={{ color:T.muted, fontSize:13 }}>{c.phone}</td>
              <td style={{ color:T.muted, fontSize:13 }}>{c.fechaInicio || "—"}</td>
              <td>
                <div style={{ fontSize:13, color:T.text }}>{c.fechaVencimiento || "—"}</div>
                {dias!==null && (
                  <div style={{ fontSize:11, color: dias<0 ? T.red : dias<=5 ? T.gold : T.muted }}>
                    {dias<0 ? `Venció hace ${Math.abs(dias)}d` : `Faltan ${dias}d`}
                  </div>
                )}
              </td>
              <td><StatusBadge status={c.status}/></td>
              <td>
                <div style={{ display:"flex", gap:5 }}>
                  <button className="btn-outline" style={{ padding:"5px 9px", fontSize:12 }} onClick={()=>setViendo(c)}><Icono nombre="visibility" size={13}/></button>
                  <button className="btn-outline" style={{ padding:"5px 9px", fontSize:12 }}><Icono nombre="edit" size={13}/></button>
                  <button style={{ background:`${T.red}18`, border:`1px solid ${T.red}33`, borderRadius:8, padding:"5px 9px", cursor:"pointer", color:T.red }}
                    onClick={()=>setClientes(clientes.filter(x=>x.id!==c.id))}>
                    <Icono nombre="delete" size={13}/>
                  </button>
                </div>
              </td>
            </tr>
          );})}</tbody>
        </table>
      </div>

      {/* ====== Ventana para AGREGAR un cliente nuevo ====== */}
      {mostrarForm && (
        <div style={{
          position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:90,
          background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", padding:20
        }} onClick={()=>setMostrarForm(false)}>
          <div className="card" style={{ width:"100%", maxWidth:440, padding:26 }} onClick={e=>e.stopPropagation()}>
            <h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text, marginBottom:18 }}>Agregar cliente nuevo</h3>

            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div>
                <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Nombre completo</label>
                <input value={nuevo.name} onChange={e=>setNuevo({...nuevo, name:e.target.value})} placeholder="Ej: Juan Pérez"/>
              </div>
              <div>
                <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Correo (opcional)</label>
                <input value={nuevo.email} onChange={e=>setNuevo({...nuevo, email:e.target.value})} placeholder="correo@ejemplo.com"/>
              </div>
              <div>
                <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Teléfono</label>
                <input value={nuevo.phone} onChange={e=>setNuevo({...nuevo, phone:e.target.value})} placeholder="+57 300 000 0000"/>
              </div>
              <div>
                <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Servicio que adquirió</label>
                <select value={nuevo.servicio} onChange={e=>setNuevo({...nuevo, servicio:e.target.value})}>
                  {SERVICES_CAT.map(s=><option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                </select>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <div style={{ flex:1 }}>
                  <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Fecha de inicio</label>
                  <input type="date" value={nuevo.fechaInicio} onChange={e=>setNuevo({...nuevo, fechaInicio:e.target.value})}/>
                </div>
                <div style={{ flex:1 }}>
                  <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Fecha de vencimiento</label>
                  <input type="date" value={nuevo.fechaVencimiento} onChange={e=>setNuevo({...nuevo, fechaVencimiento:e.target.value})}/>
                </div>
              </div>
              <div>
                <label style={{ fontSize:12, color:T.muted, marginBottom:5, display:"block" }}>Estado de la cuenta</label>
                <select value={nuevo.status} onChange={e=>setNuevo({...nuevo, status:e.target.value})}>
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                </select>
              </div>
            </div>

            <div style={{ display:"flex", gap:10, marginTop:22 }}>
              <button className="btn-outline" style={{ flex:1 }} onClick={()=>setMostrarForm(false)}>Cancelar</button>
              <button className="btn-primary" style={{ flex:1 }} onClick={guardarNuevoCliente}>Guardar cliente</button>
            </div>
          </div>
        </div>
      )}

      {/* ====== Ventana para VER el detalle de un cliente ====== */}
      {viendo && (
        <div style={{
          position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:90,
          background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", padding:20
        }} onClick={()=>setViendo(null)}>
          <div className="card" style={{ width:"100%", maxWidth:400, padding:26 }} onClick={e=>e.stopPropagation()}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
              <Avatar name={viendo.name} size={44}/>
              <div>
                <div style={{ fontFamily:"Poppins", fontWeight:700, fontSize:16, color:T.text }}>{viendo.name}</div>
                <div style={{ fontSize:12, color:T.muted }}>{viendo.id}</div>
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10, fontSize:13.5 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Servicio</span><b style={{ color:T.text }}>{viendo.servicio || "—"}</b></div>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Teléfono</span><b style={{ color:T.text }}>{viendo.phone}</b></div>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Correo</span><b style={{ color:T.text }}>{viendo.email || "—"}</b></div>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Inicio del servicio</span><b style={{ color:T.text }}>{viendo.fechaInicio || "—"}</b></div>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Vence</span><b style={{ color:T.text }}>{viendo.fechaVencimiento || "—"}</b></div>
              <div style={{ display:"flex", justifyContent:"space-between" }}><span style={{ color:T.muted }}>Estado</span><StatusBadge status={viendo.status}/></div>
            </div>
            <button className="btn-outline" style={{ width:"100%", marginTop:20 }} onClick={()=>setViendo(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

const AdminPaymentsPage = () => {
  const { T } = useTheme();
  const [payments, setPayments] = React.useState(mockPayments);
  return (
    <div className="fade-in">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Pagos</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Gestiona y aprueba pagos</p></div>
        <button className="btn-outline" style={{ fontSize:13, display:"flex", alignItems:"center", gap:6 }}><Icono nombre="download" size={13}/> Exportar</button>
      </div>
      <div className="card" style={{ overflow:"hidden" }}>
        <table><thead><tr><th>ID</th><th>Cliente</th><th>Fecha</th><th>Monto</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>{payments.map(p=>(
            <tr key={p.id}>
              <td><code style={{ fontSize:11, color:T.blue, background:`${T.blue}15`, padding:"2px 7px", borderRadius:5 }}>{p.id}</code></td>
              <td><div style={{ display:"flex", alignItems:"center", gap:9 }}><Avatar name={p.client} size={26}/><span style={{ fontWeight:500 }}>{p.client}</span></div></td>
              <td style={{ color:T.muted, fontSize:13 }}>{p.date}</td>
              <td style={{ fontWeight:700 }}>${p.amount}</td>
              <td><StatusBadge status={p.status}/></td>
              <td>
                <div style={{ display:"flex", gap:5 }}>
                  <button className="btn-outline" style={{ padding:"5px 9px", fontSize:12 }}><Icono nombre="visibility" size={13}/></button>
                  {p.status==="pending" && <>
                    <button onClick={()=>setPayments(px=>px.map(x=>x.id===p.id?{...x,status:"approved"}:x))}
                      style={{ background:`${T.green}18`, border:`1px solid ${T.green}44`, borderRadius:8,
                        padding:"5px 12px", cursor:"pointer", color:T.green, fontSize:12, fontWeight:600, fontFamily:"Inter", display:"flex", alignItems:"center", gap:4 }}>
                      <Icono nombre="check" size={12}/> Aprobar
                    </button>
                    <button onClick={()=>setPayments(px=>px.map(x=>x.id===p.id?{...x,status:"rejected"}:x))}
                      style={{ background:`${T.red}18`, border:`1px solid ${T.red}44`, borderRadius:8,
                        padding:"5px 12px", cursor:"pointer", color:T.red, fontSize:12, fontWeight:600, fontFamily:"Inter", display:"flex", alignItems:"center", gap:4 }}>
                      <Icono nombre="cancel" size={12}/> Rechazar
                    </button>
                  </>}
                </div>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
};

const AdminReportsPage = () => {
  const { T } = useTheme();
  const data=[7200,8500,9100,8800,10200,11500,9900,10800,11200,10500,11800,12480];
  const months=["E","F","M","A","M","J","J","A","S","O","N","D"];
  const max=Math.max(...data);
  return (
    <div className="fade-in">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <div><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Reportes</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Análisis y métricas</p></div>
        <div style={{ display:"flex", gap:8 }}>
          <button className="btn-outline" style={{ fontSize:13, display:"flex", alignItems:"center", gap:6 }}><Icono nombre="description" size={13}/> PDF</button>
          <button className="btn-outline" style={{ fontSize:13, display:"flex", alignItems:"center", gap:6 }}><Icono nombre="download" size={13}/> Excel</button>
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:14, marginBottom:20 }}>
        {[{l:"Ingresos Anuales",v:"$122,080",c:T.gold},{l:"Promedio Mensual",v:"$10,173",c:T.blue},{l:"Mejor Mes",v:"Dic $12,480",c:T.green},{l:"Clientes Nuevos",v:"+284 YTD",c:T.purple}].map((r,i)=>(
          <div key={i} className="card" style={{ padding:"18px 20px" }}>
            <div style={{ fontSize:10, color:T.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:".08em", marginBottom:6 }}>{r.l}</div>
            <div style={{ fontFamily:"Poppins", fontSize:20, fontWeight:800, color:r.c }}>{r.v}</div>
          </div>
        ))}
      </div>
      <div className="card" style={{ padding:"22px 26px", marginBottom:16 }}>
        <h4 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:700, color:T.text, marginBottom:20 }}>Ingresos 2024</h4>
        <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:120 }}>
          {months.map((m,i)=>(
            <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <div style={{ width:"100%", height:`${(data[i]/max)*100}%`, borderRadius:"4px 4px 0 0",
                background:i===11?`linear-gradient(180deg,${T.blue},${T.purple})`:`${T.blue}28`,
                boxShadow:i===11?`0 0 12px ${T.blue}55`:"none" }}/>
              <div style={{ fontSize:9, color:T.muted }}>{m}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card" style={{ padding:"20px 22px" }}>
        <h4 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:700, color:T.text, marginBottom:16 }}>Servicios Más Usados</h4>
        {[{n:"Netflix Premium",p:85,c:T.blue,u:892},{n:"Spotify Family",p:71,c:T.purple,u:743},{n:"Adobe Creative",p:59,c:T.gold,u:621},{n:"Microsoft 365",p:47,c:T.green,u:498}].map((s,i)=>(
          <div key={i} style={{ marginBottom:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
              <span style={{ fontSize:13, fontWeight:500, color:T.text }}>{s.n}</span>
              <span style={{ fontSize:12, color:T.muted, fontWeight:600 }}>{s.u} usuarios</span>
            </div>
            <div style={{ height:5, borderRadius:4, background:T.border, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${s.p}%`, borderRadius:4, background:s.c }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminSettingsPage = () => {
  const { T } = useTheme();
  return (
    <div className="fade-in" style={{ maxWidth:560 }}>
      <div style={{ marginBottom:20 }}><h3 style={{ fontFamily:"Poppins", fontSize:17, fontWeight:700, color:T.text }}>Configuración</h3><p style={{ color:T.muted, fontSize:12.5, marginTop:2 }}>Ajustes del sistema</p></div>
      {[{title:"General",items:["Nombre de Plataforma","Zona Horaria","Moneda","Idioma"]},{title:"Seguridad",items:["Cambiar Contraseña","2FA","Sesiones Activas"]},{title:"Notificaciones",items:["Alertas de Pago","Renovaciones","Nuevos Registros"]}].map((s,i)=>(
        <div key={i} className="card" style={{ padding:"20px 22px", marginBottom:14 }}>
          <h4 style={{ fontFamily:"Poppins", fontSize:14, fontWeight:700, color:T.text, marginBottom:14, paddingBottom:10, borderBottom:`1px solid ${T.border}` }}>{s.title}</h4>
          {s.items.map((item,j)=>(
            <div key={j} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:j<s.items.length-1?`1px solid ${T.border}`:"none" }}>
              <span style={{ fontSize:13.5, fontWeight:500, color:T.text }}>{item}</span>
              <button className="btn-outline" style={{ padding:"5px 12px", fontSize:12 }}>Editar</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   APP SHELL
═══════════════════════════════════════════════════════ */
