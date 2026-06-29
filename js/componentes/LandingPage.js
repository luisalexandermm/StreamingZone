/* ============================================================
   LANDINGPAGE.JS - Une todas las secciones de la pagina publica
============================================================ */

const LandingPage = ({ onLogin, onAdminClick }) => {
  const [activeSection, setActiveSection] = React.useState("inicio");

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior:"smooth" });
  };

  React.useEffect(()=>{
    const sections = ["inicio","servicios","planes","renovar","contacto"];
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) setActiveSection(e.target.id); });
    },{ threshold:0.35 });
    sections.forEach(id=>{ const el=document.getElementById(id); if(el) observer.observe(el); });
    return ()=>observer.disconnect();
  },[]);

  return (
    <div>
      <Navbar activeSection={activeSection} onNav={scrollTo} onLogin={onLogin} onAdminClick={onAdminClick}/>
      <SectionInicio onLogin={onLogin}/>
      <SectionServicios/>
      <SectionPlanes onLogin={onLogin}/>
      <SectionRenovar onLogin={onLogin}/>
      <SectionContacto/>
      <Footer onNav={scrollTo} onAdminClick={onAdminClick}/>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   APP SIDEBAR
═══════════════════════════════════════════════════════ */
