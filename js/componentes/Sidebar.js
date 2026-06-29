/* ============================================================
   SIDEBAR.JS - Menu lateral del panel (cliente/admin)
============================================================ */

const Sidebar = ({ role, active, setPage, onLogout, collapsed, setCollapsed }) => {
  const { T } = useTheme();
  const clientNav = [
    { id:"dashboard", icon:<Icono nombre="dashboard" size={17}/>, label:"Dashboard"     },
    { id:"services",  icon:<Icono nombre="monitor" size={17}/>,          label:"Mis Servicios" },
    { id:"renewals",  icon:<Icono nombre="autorenew" size={17}/>,        label:"Renovaciones"  },
    { id:"payments",  icon:<Icono nombre="credit_card" size={17}/>,       label:"Pagos"         },
    { id:"notifs",    icon:<Icono nombre="notifications" size={17}/>,              label:"Notificaciones"},
    { id:"profile",   icon:<Icono nombre="person" size={17}/>,              label:"Perfil"        },
  ];
  const adminNav = [
    { id:"dashboard", icon:<Icono nombre="dashboard" size={17}/>, label:"Dashboard"    },
    { id:"clients",   icon:<Icono nombre="group" size={17}/>,            label:"Clientes"     },
    { id:"payments",  icon:<Icono nombre="credit_card" size={17}/>,       label:"Pagos"        },
    { id:"services",  icon:<Icono nombre="inventory_2" size={17}/>,          label:"Servicios"    },
    { id:"renewals",  icon:<Icono nombre="autorenew" size={17}/>,        label:"Renovaciones" },
    { id:"reports",   icon:<Icono nombre="bar_chart" size={17}/>,        label:"Reportes"     },
    { id:"settings",  icon:<Icono nombre="settings" size={17}/>,         label:"Configuración"},
  ];
  const nav = role==="admin"?adminNav:clientNav;

  return (
    <aside style={{
      width:collapsed?64:220, minHeight:"100vh",
      background:T.sidebar, borderRight:`1px solid ${T.border}`,
      display:"flex", flexDirection:"column", padding:"18px 10px",
      transition:"width .25s ease", flexShrink:0, position:"relative"
    }}>
      <button onClick={()=>setCollapsed(c=>!c)} style={{
        position:"absolute", top:20, right:-11, zIndex:10,
        width:22, height:22, borderRadius:"50%",
        background:T.card, border:`1px solid ${T.border}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer", color:T.muted
      }}>
        <Icono nombre="chevron_right" size={12} style={{ transform:collapsed?"none":"rotate(180deg)", transition:"transform .25s" }}/>
      </button>

      <div style={{ marginBottom:22, paddingLeft:3, overflow:"hidden", whiteSpace:"nowrap" }}>
        {collapsed
          ? <div style={{ width:34, height:34, borderRadius:9, background:`linear-gradient(135deg,${T.blue},${T.purple})`,
              display:"flex", alignItems:"center", justifyContent:"center" }}><Icono nombre="bolt" size={16} color="#fff" fill="#fff"/></div>
          : <Logo size={16}/>}
      </div>

      {!collapsed && (
        <div style={{ fontSize:10, fontWeight:700, color:T.muted, letterSpacing:".12em",
          padding:"0 5px", marginBottom:6, textTransform:"uppercase" }}>
          {role==="admin"?"Administración":"Mi Cuenta"}
        </div>
      )}

      <nav style={{ display:"flex", flexDirection:"column", gap:2, flex:1 }}>
        {nav.map(item=>(
          <div key={item.id}
            className={`sidebar-item ${active===item.id?"active":""}`}
            onClick={()=>setPage(item.id)}
            title={collapsed?item.label:""}
            style={{ justifyContent:collapsed?"center":"flex-start",
              padding:collapsed?"10px":"10px 13px" }}>
            <span style={{ flexShrink:0 }}>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>

      <div style={{ marginTop:"auto" }}>
        <Divider/>
        <div className="sidebar-item" onClick={onLogout} title={collapsed?"Salir":""}
          style={{ color:T.red, justifyContent:collapsed?"center":"flex-start",
            padding:collapsed?"10px":"10px 13px", marginTop:6 }}>
          <Icono nombre="logout" size={17}/>
          {!collapsed && <span>Salir</span>}
        </div>
      </div>
    </aside>
  );
};

/* ═══════════════════════════════════════════════════════
   APP TOPBAR WITH HERO BANNER
═══════════════════════════════════════════════════════ */
