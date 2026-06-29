/* ============================================================
   DATOS.JS
   Aqui guardamos: los "hooks" de React que vamos a usar en
   TODOS los archivos, los colores de la app (tema claro/oscuro)
   y los datos (servicios, combos, preguntas frecuentes, etc).
   Este archivo se carga PRIMERO en el index.html porque los
   demas archivos lo necesitan.
============================================================ */

/* ═══════════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════════ */
const ThemeCtx = React.createContext();
const useTheme = () => React.useContext(ThemeCtx);

const DARK = {
  bg:"#070B14", surface:"#0F172A", card:"#131D31",
  blue:"#00A8FF", purple:"#6F3DFF", gold:"#D4AF37", green:"#00C853", red:"#FF4D4D",
  text:"#FFFFFF", sub:"#CBD5E1", muted:"#94A3B8",
  border:"rgba(255,255,255,0.07)", shadow:"0 8px 32px rgba(0,0,0,0.35)",
  inputBg:"#0F172A", navBg:"rgba(7,11,20,0.92)", sidebar:"#0F172A", isDark:true,
};
const LIGHT = {
  bg:"#F0F4FA", surface:"#FFFFFF", card:"#FFFFFF",
  blue:"#0086CC", purple:"#5B28E0", gold:"#A07800", green:"#008A35", red:"#D93025",
  text:"#0F172A", sub:"#334155", muted:"#64748B",
  border:"rgba(15,23,42,0.09)", shadow:"0 4px 24px rgba(0,0,0,0.07)",
  inputBg:"#F8FAFF", navBg:"rgba(255,255,255,0.95)", sidebar:"#FFFFFF", isDark:false,
};

/* ═══════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════ */
const WHATSAPP = "573145312045";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}`;

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const SERVICES_CAT = [
  {
    icon:"🎬", color:"#E50914", name:"Netflix",
    badge:"PANTALLA INDIVIDUAL",
    screens:"Pantalla privada · HD/4K",
    desc:"Disfruta de todo el catálogo Netflix con perfil individual propio. Series, películas y documentales originales sin límites.",
    features:["Perfil personal dedicado","HD / 4K según plan","Series y películas originales","Activación inmediata"],
    price:"$15.000",
    priceNum:15000,
  },
  {
    icon:"🎞️", color:"#F97316", name:"Crunchyroll",
    badge:"ANIME & MANGA",
    screens:"Pantalla individual",
    desc:"La plataforma número uno de anime y manga. Accede a miles de títulos en estreno simultáneo con Japón.",
    features:["Estreno simultáneo Japón","Catálogo ilimitado de anime","Sin anuncios","Activación inmediata"],
    price:"$8.000",
    priceNum:8000,
  },
  {
    icon:"📺", color:"#8B5CF6", name:"ViX",
    badge:"ENTRETENIMIENTO",
    screens:"Pantalla individual",
    desc:"El mayor servicio de streaming en español. Telenovelas, deportes, noticias y entretenimiento latino premium.",
    features:["Contenido 100% en español","Deportes en vivo","Telenovelas y series","Sin anuncios"],
    price:"$8.000",
    priceNum:8000,
  },
  {
    icon:"🛒", color:"#00A8E1", name:"Prime Video",
    badge:"AMAZON ORIGINALS",
    screens:"Pantalla individual",
    desc:"Miles de títulos, estrenos exclusivos y series originales de Amazon. La segunda biblioteca más grande del mundo.",
    features:["Estrenos exclusivos","Series originales","4K Ultra HD","Activación inmediata"],
    price:"$10.000",
    priceNum:10000,
  },
  {
    icon:"🎭", color:"#6B21A8", name:"HBO Max",
    badge:"SERIES PREMIUM",
    screens:"Pantalla individual",
    desc:"HBO, Warner Bros y contenido Max exclusivo. Game of Thrones, The Last of Us, Succession y las mejores series del mundo.",
    features:["Series HBO originales","Estrenos de cine Warner","4K HDR","Activación inmediata"],
    price:"$10.000",
    priceNum:10000,
  },
  {
    icon:"🏰", color:"#0063E5", name:"Disney+ Premium",
    badge:"⭐ PREMIUM",
    screens:"Pantalla individual",
    desc:"Disney, Pixar, Marvel, Star Wars y National Geographic en calidad premium con perfil personal dedicado.",
    features:["Marvel & Star Wars","Contenido Pixar y Disney","4K Ultra HD","Perfil dedicado"],
    price:"$12.000",
    priceNum:12000,
  },
  {
    icon:"🏰", color:"#1D4ED8", name:"Disney+ Estándar",
    badge:"ESTÁNDAR",
    screens:"Pantalla individual",
    desc:"Todo el contenido de Disney+ en calidad HD. La opción más accesible para disfrutar Disney, Marvel y más.",
    features:["Marvel & Star Wars","Contenido Pixar y Disney","Calidad HD","Activación inmediata"],
    price:"$8.000",
    priceNum:8000,
  },
  {
    icon:"▶️", color:"#FF0000", name:"YouTube Premium",
    badge:"SIN ANUNCIOS",
    screens:"Cuenta personal",
    desc:"YouTube sin anuncios, reproducción en segundo plano, descargas offline y YouTube Music completamente incluido.",
    features:["Sin anuncios","YouTube Music incluido","Descarga offline","Reproducción en segundo plano"],
    price:"$12.000",
    priceNum:12000,
  },
  {
    icon:"📡", color:"#00B4D8", name:"IPTV — 1 Mes",
    badge:"📡 TV EN VIVO",
    screens:"Multi-dispositivo · 24/7",
    desc:"Miles de canales nacionales e internacionales en vivo. Deportes, noticias, entretenimiento y señales premium 24/7.",
    features:["Miles de canales HD/4K","Deportes en vivo","Canales internacionales","Compatible Smart TV / Celular"],
    price:"$15.000",
    priceNum:15000,
  },
  {
    icon:"📡", color:"#0891B2", name:"IPTV — 6 Meses",
    badge:"💰 AHORRA MÁS",
    screens:"Multi-dispositivo · 24/7",
    desc:"Plan semestral de IPTV con miles de canales. El mejor precio por mes para quienes disfrutan TV en vivo todo el año.",
    features:["Miles de canales HD/4K","Deportes en vivo","6 meses garantizados","Soporte incluido"],
    price:"$60.000",
    priceNum:60000,
  },
  {
    icon:"🎵", color:"#1DB954", name:"Spotify",
    badge:"MÚSICA PREMIUM",
    screens:"Cuenta personal",
    desc:"Escucha millones de canciones, podcasts y audiolibros sin anuncios y con descarga offline en cualquier dispositivo.",
    features:["Sin anuncios","Descarga offline ilimitada","Audio de alta calidad","Acceso global"],
    price:"$10.000",
    priceNum:10000,
  },
  {
    icon:"🎨", color:"#00C4CC", name:"Canva Pro",
    badge:"DISEÑO PREMIUM",
    screens:"Cuenta personal",
    desc:"Crea diseños profesionales con acceso a millones de plantillas, elementos premium, fondo removido y más herramientas.",
    features:["Plantillas premium ilimitadas","Fondo removido","Descarga sin marca de agua","Brand Kit propio"],
    price:"$15.000",
    priceNum:15000,
  },
  {
    icon:"🤖", color:"#10A37F", name:"Gemini IA — 3 Meses",
    badge:"INTELIGENCIA ARTIFICIAL",
    screens:"Cuenta personal",
    desc:"Acceso a Gemini Advanced de Google por 3 meses. El asistente de IA más potente para trabajo, estudio y creatividad.",
    features:["Gemini Advanced","3 meses garantizados","Integración Google Workspace","Máxima capacidad"],
    price:"$30.000",
    priceNum:30000,
  },
  {
    icon:"📼", color:"#E8A400", name:"Plex Premium",
    badge:"MEDIA SERVER",
    screens:"Multi-dispositivo",
    desc:"Organiza y disfruta toda tu biblioteca multimedia en cualquier dispositivo. La mejor solución de media server personal.",
    features:["Sin anuncios","Descarga offline","Sincronización multi-dispositivo","Calidad máxima"],
    price:"$8.000",
    priceNum:8000,
  },
  {
    icon:"🍎", color:"#555555", name:"Apple TV+",
    badge:"ORIGINALES APPLE",
    screens:"6 dispositivos · 4K HDR",
    desc:"Contenido original Apple de altísima calidad. Ted Lasso, Severance, The Morning Show y más ganadores de premios.",
    features:["4K HDR Dolby Vision","6 dispositivos simultáneos","Sin anuncios","100% contenido original"],
    price:"$12.000",
    priceNum:12000,
  },
  {
    icon:"🔞", color:"#FF6B35", name:"Pornhub Premium — 1 Mes",
    badge:"ADULTOS",
    screens:"Cuenta personal",
    desc:"Acceso completo a Pornhub Premium sin anuncios durante 1 mes. Contenido en HD sin interrupciones.",
    features:["Sin anuncios","Contenido HD","1 mes garantizado","Acceso inmediato"],
    price:"$10.000",
    priceNum:10000,
  },
  {
    icon:"🦉", color:"#58CC02", name:"Duolingo Pro",
    badge:"IDIOMAS",
    screens:"Cuenta personal",
    desc:"Aprende idiomas sin límites con Duolingo Super. Sin anuncios, vidas ilimitadas y modo sin conexión disponible.",
    features:["Vidas ilimitadas","Sin anuncios","Modo offline","Progreso acelerado"],
    price:"$12.000",
    priceNum:12000,
  },
  {
    icon:"🎵", color:"#FF0000", name:"Deezer Premium",
    badge:"MÚSICA HiFi",
    screens:"Cuenta personal",
    desc:"Escucha música en calidad HiFi sin límites. Catálogo de 90 millones de canciones con descarga offline incluida.",
    features:["Calidad HiFi FLAC","90M de canciones","Descarga offline","Sin anuncios"],
    price:"$10.000",
    priceNum:10000,
  },
  {
    icon:"📺", color:"#0EA5E9", name:"DirecTV GO — Sin Antena",
    badge:"TV SATELITAL DIGITAL",
    screens:"Multi-dispositivo",
    desc:"Todos los canales premium de DirecTV sin necesidad de antena. Deportes, cine, series y entretenimiento familiar.",
    features:["Sin antena requerida","Canales premium","Deportes en vivo","Multi-dispositivo"],
    price:"$25.000",
    priceNum:25000,
  },
  {
    icon:"🎮", color:"#107C10", name:"Xbox Game Pass Premium",
    badge:"GAMING",
    screens:"Consola + PC + Móvil",
    desc:"Accede a cientos de juegos en Xbox, PC y móvil. EA Play incluido, juegos day-one y descuentos exclusivos.",
    features:["Cientos de juegos","EA Play incluido","Juegos day-one","Cloud Gaming"],
    price:"$55.000",
    priceNum:55000,
  },
  {
    icon:"📱", color:"#FF4500", name:"Magis TV — Dispositivos",
    badge:"STREAMING APP",
    screens:"Multi-dispositivo",
    desc:"La app de streaming más popular. Accede a canales, series y películas en todos tus dispositivos con una sola cuenta.",
    features:["Multi-dispositivo","Canales en vivo","Series y películas","Fácil instalación"],
    price:"$15.000",
    priceNum:15000,
  },
  {
    icon:"🤖", color:"#00A67E", name:"ChatGPT Plus — 1 Mes",
    badge:"IA AVANZADA",
    screens:"Cuenta personal",
    desc:"Acceso a GPT-4, DALL·E, navegación web y plugins. El asistente de IA más poderoso del mundo por 1 mes completo.",
    features:["GPT-4 completo","Generación de imágenes DALL·E","Navegación web","Plugins ilimitados"],
    price:"$35.000",
    priceNum:35000,
  },
];

const COMBOS = [
  {
    name:"Netflix + Disney+ Premium",   services:"Netflix · Disney+ Premium",
    price:"$27.000", highlight:false, badge:"DÚO",
    icons:["🎬","🏰"], color:"#E50914",
    saving:"Ahorras $500",
  },
  {
    name:"Netflix + Prime Video",        services:"Netflix · Amazon Prime Video",
    price:"$25.000", highlight:false, badge:"DÚO",
    icons:["🎬","🛒"], color:"#00A8E1",
    saving:"Ahorras $1.000",
  },
  {
    name:"Netflix + HBO Max",            services:"Netflix · HBO Max",
    price:"$25.000", highlight:false, badge:"DÚO",
    icons:["🎬","🎭"], color:"#6B21A8",
    saving:"Ahorras $2.000",
  },
  {
    name:"Netflix + Disney+ + HBO Video",services:"Netflix · Disney+ · Prime Video",
    price:"$37.000", highlight:false, badge:"TRÍO",
    icons:["🎬","🏰","🛒"], color:"#F97316",
    saving:"Ahorras $1.000",
  },
  {
    name:"Netflix + Disney+ + HBO Max",  services:"Netflix · Disney+ · HBO Max",
    price:"$37.000", highlight:false, badge:"TRÍO",
    icons:["🎬","🏰","🎭"], color:"#6B21A8",
    saving:"Ahorras $1.000",
  },
  {
    name:"Netflix + Disney+ + Prime + HBO Max", services:"Netflix · Disney+ · Prime Video · HBO Max",
    price:"$47.000", highlight:true, badge:"⭐ CUARTETO",
    icons:["🎬","🏰","🛒","🎭"], color:"#E50914",
    saving:"Ahorras $3.000",
  },
  {
    name:"Streaming Full — 5 Plataformas", services:"Netflix · Disney+ · Prime · HBO Max · Paramount+",
    price:"$55.000", highlight:false, badge:"🔥 MEGA COMBO",
    icons:["🎬","🏰","🛒","🎭","📺"], color:"#8B5CF6",
    saving:"Ahorras $15.000",
  },
  {
    name:"YouTube Premium + Spotify",   services:"YouTube Premium · Spotify Premium",
    price:"$22.000", highlight:false, badge:"MÚSICA & VIDEO",
    icons:["▶️","🎵"], color:"#FF0000",
    saving:"Ahorras $2.000",
  },
  {
    name:"Spotify + Canva Pro + Duolingo Pro", services:"Spotify · Canva Pro · Duolingo Pro",
    price:"$35.000", highlight:false, badge:"PRODUCTIVIDAD",
    icons:["🎵","🎨","🦉"], color:"#1DB954",
    saving:"Ahorras $2.000",
  },
  {
    name:"ChatGPT Plus + Gemini IA",    services:"ChatGPT Plus · Gemini Advanced (3 meses)",
    price:"$60.000", highlight:false, badge:"IA TOTAL",
    icons:["🤖","🤖"], color:"#10A37F",
    saving:"Ahorras $5.000",
  },
  {
    name:"IPTV + Netflix + Disney+",     services:"IPTV 1 Mes · Netflix · Disney+",
    price:"$40.000", highlight:false, badge:"TV COMPLETA",
    icons:["📡","🎬","🏰"], color:"#00B4D8",
    saving:"Ahorras $3.000",
  },
  {
    name:"IPTV + Netflix + Disney+ + Prime", services:"IPTV 1 Mes · Netflix · Disney+ · Prime Video",
    price:"$50.000", highlight:false, badge:"TV PREMIUM",
    icons:["📡","🎬","🏰","🛒"], color:"#0891B2",
    saving:"Ahorras $5.000",
  },
];

const FAQS = [
  { q:"¿Cómo adquiero un servicio?", a:"Escríbenos al WhatsApp 3145312045, dinos qué servicio deseas y te activamos de forma inmediata. El proceso toma menos de 5 minutos." },
  { q:"¿Cómo funciona el pago?", a:"Aceptamos Nequi, Daviplata, transferencia bancaria y efectivo. Una vez confirmado el pago, activamos tu servicio al instante." },
  { q:"¿Los servicios son seguros?", a:"Sí. Trabajamos con cuentas privadas y perfiles dedicados. Tu información y acceso son completamente individuales y seguros." },
  { q:"¿Puedo renovar mi servicio?", a:"Por supuesto. Te avisamos antes del vencimiento para que puedas renovar sin interrupciones. También puedes escribirnos directamente." },
  { q:"¿Tienen soporte técnico?", a:"Sí. Disponemos de soporte por WhatsApp para resolver cualquier inconveniente técnico con tu servicio de forma rápida y eficiente." },
];

const mockServices = [
  { id:1, name:"Netflix Premium",  status:"active",   start:"2024-01-15", end:"2025-01-15", price:15000 },
  { id:2, name:"Spotify Premium",  status:"active",   start:"2024-03-01", end:"2025-03-01", price:10000 },
  { id:3, name:"Disney+",          status:"expiring", start:"2024-02-10", end:"2025-02-10", price:12000 },
  { id:4, name:"HBO Max",          status:"active",   start:"2023-12-01", end:"2024-12-01", price:10000 },
];
const mockPayments = [
  { id:"PAY-001", client:"María García",   date:"2025-01-10", amount:18.99, status:"approved" },
  { id:"PAY-002", client:"Carlos López",   date:"2025-01-09", amount:59.99, status:"pending"  },
  { id:"PAY-003", client:"Ana Martínez",   date:"2025-01-08", amount:15.99, status:"approved" },
  { id:"PAY-004", client:"Luis Rodríguez", date:"2025-01-07", amount:9.99,  status:"rejected" },
  { id:"PAY-005", client:"Sofia Pérez",    date:"2025-01-06", amount:18.99, status:"approved" },
];
const mockClients = [
  { id:"SZ-0001", name:"María García",   email:"maria@example.com",  phone:"+57 300 123 4567", status:"active",   joined:"2024-01-15", servicio:"Netflix",       fechaInicio:"2025-01-15", fechaVencimiento:"2025-02-15" },
  { id:"SZ-0002", name:"Carlos López",   email:"carlos@example.com", phone:"+57 311 234 5678", status:"active",   joined:"2024-02-20", servicio:"Disney+ Premium", fechaInicio:"2025-01-20", fechaVencimiento:"2025-02-20" },
  { id:"SZ-0003", name:"Ana Martínez",   email:"ana@example.com",    phone:"+57 322 345 6789", status:"inactive", joined:"2024-03-10", servicio:"Spotify",       fechaInicio:"2024-12-10", fechaVencimiento:"2025-01-10" },
  { id:"SZ-0004", name:"Luis Rodríguez", email:"luis@example.com",   phone:"+57 333 456 7890", status:"active",   joined:"2024-04-05", servicio:"HBO Max",       fechaInicio:"2025-01-05", fechaVencimiento:"2025-02-05" },
];
const notifData = [
  { id:1, type:"success", msg:"Pago #PAY-003 aprobado exitosamente",       time:"Hace 2 min" },
  { id:2, type:"warning", msg:"Renovación de Adobe Creative en 5 días",    time:"Hace 1h"    },
  { id:3, type:"info",    msg:"Nuevo servicio disponible: YouTube Premium", time:"Hace 3h"    },
  { id:4, type:"success", msg:"Cuenta actualizada correctamente",           time:"Hace 1 día" },
];

/* ═══════════════════════════════════════════════════════
   GLOBAL STYLES — no grey overlay, purely CSS-in-JS
═══════════════════════════════════════════════════════ */
