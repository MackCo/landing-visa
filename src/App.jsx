import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Users, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Mail, 
  Phone, 
  Calendar,
  MessageCircle,
  Award,
  Menu,
  X
} from 'lucide-react';

/**
 * Landing Page Profesional - Leslie Suarez
 * Configurada para navegación fluida y contacto por WhatsApp
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: ''
  });

  // CONFIGURACIÓN DE CONTACTO
  const whatsappNumber = "525585377617"; 
  const quickQueryMessage = encodeURIComponent("Hola Leslie, me gustaría recibir más información sobre tu asesoría de visas.");
  const quickWhatsappLink = `https://wa.me/${whatsappNumber}?text=${quickQueryMessage}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customMessage = `Hola Leslie, mi nombre es ${formData.nombre}. Mi número de contacto es ${formData.telefono} y me gustaría iniciar mi trámite de visa con tu asesoría.`;
    const encodedMessage = encodeURIComponent(customMessage);
    const finalLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(finalLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden scroll-smooth">
      {/* Navegación */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-blue-900 leading-none">Leslie Suarez</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-blue-600 font-semibold mt-1">Asesoría de Visas</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#metodologia" className="hover:text-blue-600 transition">Metodología</a>
              <a href="#sobre-mi" className="hover:text-blue-600 transition">Sobre mí</a>
              <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-center">Agendar Asesoría</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl">
            <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Metodología</a>
            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Sobre mí</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">Agendar Asesoría</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-8 pb-16 md:pt-24 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold mb-6">
                <Award size={14} /> ASESORÍA 100% PERSONALIZADA
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 md:mb-8">
                Logra tu visa con acompañamiento <span className="text-blue-600">experto</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Soy Leslie Suarez. Ayudo a familias y profesionales a gestionar su visa americana de forma ordenada y segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contacto" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                  Iniciar trámite <ChevronRight size={20} />
                </a>
                <a 
                  href={quickWhatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition shadow-xl shadow-emerald-100 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Foto de Leslie */}
            <div className="order-1 lg:order-2 relative px-4 md:px-0">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl aspect-[4/5] bg-slate-100 max-w-md mx-auto">
                <img 
                  src="/leslie.jpg" 
                  alt="Leslie Suarez" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.target.src.includes('leslie.jpg')) {
                        e.target.src = "/Visa.png";
                    } else if (e.target.src.includes('Visa.png')) {
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                        e.target.onerror = null;
                    }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-white font-medium text-sm md:text-lg leading-snug italic">
                    "Leslie me dio la confianza necesaria para mi entrevista."
                  </p>
                  <p className="text-blue-200 text-xs md:text-sm mt-1 md:mt-2">— Mariana G., Cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN SOBRE MÍ (Restaurada) */}
      <section id="sobre-mi" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center lg:text-left">¿Por qué confiar en mí?</h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                <p>
                  Todo comenzó ayudando a amigos cercanos. Al ver la confusión y el miedo que genera el trámite de la visa, decidí profesionalizar mi conocimiento para ofrecer un servicio donde la <strong>honestidad</strong> es lo primero.
                </p>
                <p>
                  No te vendo una aprobación garantizada, te vendo la <strong>mejor preparación posible</strong>. Analizo tu perfil, detecto puntos débiles y te acompaño hasta que sales de tu entrevista.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blue-600 pl-4 text-left">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">Personal</div>
                    <div className="text-sm text-slate-500">Sin intermediarios</div>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 text-left">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">Transparente</div>
                    <div className="text-sm text-slate-500">Sin costos ocultos</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm mx-auto lg:max-w-none text-white">
                  <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                    <div className="aspect-square bg-blue-600 rounded-2xl flex flex-col items-center justify-center p-4 shadow-xl shadow-blue-200">
                      <CheckCircle size={32} className="mb-2" />
                      <span className="text-center font-bold text-xs md:text-sm">Llenado DS-160</span>
                    </div>
                    <div className="aspect-square bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-4">
                      <Users size={32} className="mb-2" />
                      <span className="text-center font-bold text-xs md:text-sm">Simulacros</span>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="aspect-square bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-900 p-4">
                      <Calendar size={32} className="mb-2 text-blue-600" />
                      <span className="text-center font-bold text-xs md:text-sm">Gestión de Citas</span>
                    </div>
                    <div className="aspect-square bg-blue-50 rounded-2xl flex flex-col items-center justify-center text-blue-900 p-4 border border-blue-100">
                      <FileText size={32} className="mb-2 text-blue-600" />
                      <span className="text-center font-bold text-xs md:text-sm">Documentación</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section id="metodologia" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Mi Método</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 font-bold text-4xl mb-4">01</div>
              <h3 className="font-bold text-xl mb-2">Perfilado</h3>
              <p className="text-slate-500 text-sm">Analizamos tus lazos y estabilidad para fortalecer tu caso.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 font-bold text-4xl mb-4">02</div>
              <h3 className="font-bold text-xl mb-2">Formularios</h3>
              <p className="text-slate-500 text-sm">Llenado impecable del formulario DS-160 sin errores técnicos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 font-bold text-4xl mb-4">03</div>
              <h3 className="font-bold text-xl mb-2">Simulacro</h3>
              <p className="text-slate-500 text-sm">Preparación estratégica para las preguntas del oficial consular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white px-4">
        <div className="max-w-xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Empezamos tu trámite?</h2>
          <p className="text-slate-400 mb-8 text-sm">Deja tus datos y te redirigiremos a mi WhatsApp personal con tu información lista.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <input 
                type="text" 
                name="nombre"
                placeholder="Nombre Completo" 
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                required 
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="telefono"
                placeholder="WhatsApp" 
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                required 
              />
            </div>
            <button className="w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-700 transition mt-4 flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
              <MessageCircle size={20} /> Enviar Solicitud por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>Leslie Suarez — Asesoría de Visas © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
