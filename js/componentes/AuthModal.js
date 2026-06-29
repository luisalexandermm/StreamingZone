/* ============================================================
   AUTHMODAL.JS - Ventana modal de inicio de sesion
============================================================ */

const AuthModal = ({ onClose, onLogin, forceAdmin }) => {
  const { T } = useTheme();
  const [mode, setMode] = React.useState("login");
  const [role, setRole] = React.useState(forceAdmin?"admin":"client");
  const [form, setForm] = React.useState({ name:"", email:"", password:"", phone:"" });

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:300,
      display:"flex", alignItems:"center", justifyContent:"center", padding:24
    }}>
      {/* backdrop — no color, just blur */}
      <div onClick={onClose} style={{
        position:"absolute", inset:0,
        background:"rgba(7,11,20,0.7)", backdropFilter:"blur(16px)"
      }}/>
      <div className="card fade-in" style={{
        position:"relative", zIndex:1,
        width:"100%", maxWidth:420, padding:"36px 32px",
        background:T.surface, boxShadow:"0 24px 64px rgba(0,0,0,0.4)"
      }}>
        <button onClick={onClose} style={{
          position:"absolute", top:14, right:14, background:"none", border:"none",
          color:T.muted, cursor:"pointer", padding:7, borderRadius:8
        }}><Icono nombre="close" size={17}/></button>

        <div style={{ textAlign:"center", marginBottom:26 }}>
          <Logo size={19}/>
          {forceAdmin && (
            <div style={{ marginTop:10, display:"inline-flex", alignItems:"center", gap:5,
              background:`${T.purple}18`, border:`1px solid ${T.purple}33`,
              borderRadius:12, padding:"5px 12px", fontSize:11, fontWeight:700, color:T.purple }}>
              <Icono nombre="shield" size={11}/> ACCESO ADMINISTRADOR
            </div>
          )}
          {!forceAdmin && (
            <div style={{ marginTop:20, display:"flex", gap:3, background:T.bg, borderRadius:11, padding:3 }}>
              {["login","register"].map(m=>(
                <button key={m} onClick={()=>setMode(m)} style={{
                  flex:1, padding:"9px", border:"none", borderRadius:9, cursor:"pointer",
                  background:mode===m?`linear-gradient(135deg,${T.blue},${T.purple})`:"transparent",
                  color:mode===m?"#fff":T.muted, fontSize:13, fontWeight:600, fontFamily:"Inter"
                }}>{m==="login"?"Iniciar Sesión":"Registrarse"}</button>
              ))}
            </div>
          )}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {mode==="register" && !forceAdmin && (
            <div>
              <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>NOMBRE</label>
              <input placeholder="Tu nombre completo" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
            </div>
          )}
          <div>
            <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>CORREO</label>
            <input type="email" placeholder="tu@correo.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
          </div>
          <div>
            <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>CONTRASEÑA</label>
            <input type="password" placeholder="••••••••" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
          </div>
          {mode==="register" && !forceAdmin && (
            <div>
              <label style={{ fontSize:11, color:T.muted, fontWeight:700, display:"block", marginBottom:5 }}>TELÉFONO</label>
              <input type="tel" placeholder="+57 300 000 0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
            </div>
          )}

          <button className="btn-primary" style={{ padding:"13px" }} onClick={()=>onLogin(role)}>
            {forceAdmin?"Entrar como Admin":mode==="login"?"Iniciar Sesión":"Crear Cuenta"}
          </button>

          {!forceAdmin && (
            <p style={{ textAlign:"center", fontSize:12, color:T.muted }}>
              {mode==="login"?"¿Sin cuenta? ":"¿Ya tienes cuenta? "}
              <button onClick={()=>setMode(m=>m==="login"?"register":"login")} style={{
                background:"none", border:"none", color:T.blue, cursor:"pointer", fontWeight:700, fontSize:12, fontFamily:"Inter"
              }}>{mode==="login"?"Registrarse":"Iniciar Sesión"}</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   FULL LANDING PAGE
═══════════════════════════════════════════════════════ */
