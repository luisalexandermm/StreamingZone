/* ============================================================
   APPSHELL.JS - Estructura del panel: sidebar + topbar + pagina
============================================================ */

const AppShell = ({ role, onLogout }) => {
  const { T } = useTheme();
  const [page, setPage] = React.useState("dashboard");
  const [collapsed, setCollapsed] = React.useState(false);
  const [notifOpen, setNotifOpen] = React.useState(false);

  const renderPage = () => {
    if (role==="client") {
      const m = { dashboard:<ClientDashboard/>, services:<ClientServicesPage/>, renewals:<ClientRenewalsPage/>,
        payments:<ClientPaymentsPage/>, notifs:<ClientNotifsPage/>, profile:<ClientProfilePage/> };
      return m[page]||<ClientDashboard/>;
    } else {
      const m = { dashboard:<AdminDashboard/>, clients:<AdminClientsPage/>, payments:<AdminPaymentsPage/>,
        reports:<AdminReportsPage/>, settings:<AdminSettingsPage/> };
      return m[page]||<AdminDashboard/>;
    }
  };

  return (
    <div style={{ display:"flex", minHeight:"100vh", background:T.bg }}>
      <Sidebar role={role} active={page} setPage={setPage} onLogout={onLogout}
        collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0, overflow:"hidden" }}>
        <AppTopbar role={role} page={page} onNotifClick={()=>setNotifOpen(o=>!o)}/>
        <main style={{ flex:1, padding:"24px 28px", overflowY:"auto" }}>
          {renderPage()}
        </main>
      </div>

      {/* Notification drawer */}
      {notifOpen && (
        <div style={{ position:"fixed", top:0, right:0, bottom:0, width:310,
          background:T.surface, borderLeft:`1px solid ${T.border}`,
          padding:20, overflowY:"auto", zIndex:60 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <h4 style={{ fontFamily:"Poppins", fontSize:15, fontWeight:700, color:T.text }}>Notificaciones</h4>
            <button onClick={()=>setNotifOpen(false)} style={{ background:"none", border:"none", cursor:"pointer", color:T.muted }}><Icono nombre="close" size={17}/></button>
          </div>
          {notifData.map(n=>(
            <div key={n.id} style={{ padding:"12px 14px", borderRadius:11, marginBottom:8,
              background:n.type==="success"?`${T.green}12`:n.type==="warning"?`${T.gold}12`:`${T.blue}12`,
              border:`1px solid ${n.type==="success"?T.green:n.type==="warning"?T.gold:T.blue}33` }}>
              <div style={{ fontSize:13, fontWeight:500, color:T.text, marginBottom:2 }}>{n.msg}</div>
              <div style={{ fontSize:11, color:T.muted }}>{n.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════ */
