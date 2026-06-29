/* ============================================================
   COMPONENTESUI.JS
   Piezas pequeñas que se repiten en varias paginas:
   Logo, Avatar, insignia de estado, boton de tema claro/oscuro,
   linea separadora, fondo de particulas y tarjeta de estadistica.
============================================================ */

const Logo = ({ size = 20 }) => {
  // "size" sigue controlando la altura, igual que antes, para no
  // romper donde ya se usa <Logo size={...}/> en otros archivos.
  const alto = size * 1.7;
  return (
    <div style={{ display:"flex", alignItems:"center", userSelect:"none" }}>
      <img
        src="assets/logo-compacto.png"
        alt="StreamingZone"
        style={{ height: alto, width: "auto", display:"block" }}
      />
    </div>
  );
};

const Avatar = ({ name, size=36 }) => {
  const { T } = useTheme();
  const ini = (name||"SZ").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      background:`linear-gradient(135deg,${T.blue},${T.purple})`,
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:size*.35, fontWeight:700, color:"#fff",
      flexShrink:0, fontFamily:"Poppins", boxShadow:`0 0 12px ${T.blue}44`
    }}>{ini}</div>
  );
};

const StatusBadge = ({ status }) => {
  const m = {
    active:["badge-green","Activo"], inactive:["badge-muted","Inactivo"],
    expiring:["badge-gold","Por Vencer"], pending:["badge-gold","Pendiente"],
    approved:["badge-green","Aprobado"], rejected:["badge-red","Rechazado"],
  };
  const [cls,lbl] = m[status]||["badge-muted",status];
  return <span className={`badge ${cls}`}>{lbl}</span>;
};

const ThemeToggle = () => {
  const { dark, toggle, T } = useTheme();
  return (
    <button onClick={toggle} style={{
      display:"flex", alignItems:"center", justifyContent:"center",
      width:36, height:36, borderRadius:10, cursor:"pointer",
      background:"none", border:`1px solid ${T.border}`, color:T.muted,
      transition:"all .2s", flexShrink:0
    }}>
      {dark ? <Icono nombre="light_mode" size={15}/> : <Icono nombre="dark_mode" size={15}/>}
    </button>
  );
};

const Divider = () => { const { T } = useTheme(); return <div style={{ height:1, background:T.border, margin:"4px 0" }}/>; };

/* ═══════════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════════ */
const Particles = () => {
  const { T } = useTheme();
  const pts = React.useRef(Array.from({length:18},(_,i)=>({
    id:i, x:Math.random()*100, y:Math.random()*100,
    s:Math.random()*2.5+1, d:Math.random()*7+5,
    delay:Math.random()*4, op:Math.random()*.4+.1
  }))).current;
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
      {pts.map(p=>(
        <div key={p.id} style={{
          position:"absolute", left:`${p.x}%`, top:`${p.y}%`,
          width:p.s, height:p.s, borderRadius:"50%",
          background:p.id%3===0?T.blue:p.id%3===1?T.purple:T.gold,
          opacity:p.op, animation:`floatY ${p.d}s ease-in-out ${p.delay}s infinite`
        }}/>
      ))}
      <div style={{ position:"absolute", top:"10%", left:"15%", width:420, height:420, borderRadius:"50%",
        background:`radial-gradient(circle,${T.blue}18 0%,transparent 70%)`, filter:"blur(55px)" }}/>
      <div style={{ position:"absolute", bottom:"20%", right:"10%", width:350, height:350, borderRadius:"50%",
        background:`radial-gradient(circle,${T.purple}18 0%,transparent 70%)`, filter:"blur(55px)" }}/>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   LANDING — NAVBAR
═══════════════════════════════════════════════════════ */

const StatCard = ({ icon, label, value, sub, accent, trend }) => {
  const { T } = useTheme();
  const ac = accent||T.blue;
  return (
    <div className="stat-card">
      <div style={{ position:"absolute", top:-30, right:-30, width:90, height:90, borderRadius:"50%",
        background:`${ac}18`, filter:"blur(24px)", pointerEvents:"none" }}/>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
        <div style={{ width:42, height:42, borderRadius:11,
          background:`${ac}1A`, border:`1px solid ${ac}35`,
          display:"flex", alignItems:"center", justifyContent:"center", color:ac }}>{icon}</div>
        {trend && (
          <div style={{ display:"flex", alignItems:"center", gap:3,
            color:trend>0?T.green:T.red, fontSize:12, fontWeight:600 }}>
            <Icono nombre="north_east" size={13}/>{Math.abs(trend)}%
          </div>
        )}
      </div>
      <div style={{ fontFamily:"Poppins", fontSize:26, fontWeight:800,
        letterSpacing:"-.02em", marginBottom:3, color:T.text }}>{value}</div>
      <div style={{ fontSize:13, fontWeight:600, color:T.text, marginBottom:2 }}>{label}</div>
      {sub && <div style={{ fontSize:11.5, color:T.muted }}>{sub}</div>}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   CLIENT PAGES
═══════════════════════════════════════════════════════ */
