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
 * Optimizada para Tailwind CSS v4
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! Leslie se pondrá en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
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
                <a href="#" className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition shadow-xl shadow-emerald-100 flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Espacio de la Foto */}
            <div className="order-1 lg:order-2 relative px-4 md:px-0">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl aspect-[4/5] bg-slate-100 max-w-md mx-auto">
                <img 
                  src="/leslie.jpg" 
                  alt="Leslie Suarez" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si falla leslie.jpg, intenta con Visa.png
                    if (e.target.src.includes('leslie.jpg')) {
                        e.target.src = "/Visa.png";
                    } else if (e.target.src.includes('Visa.png')) {
                        // Si ambos fallan, usa el marcador de posición profesional
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

      {/* Secciones adicionales */}
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

      <section id="contacto" className="py-16 bg-white px-4">
        <div className="max-w-xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Empezamos tu trámite?</h2>
          <p className="text-slate-400 mb-8 text-sm">Deja tus datos y me comunicaré contigo por WhatsApp.</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input type="text" placeholder="Nombre Completo" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="tel" placeholder="WhatsApp" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
            <button className="w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-700 transition mt-4">Enviar Solicitud</button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>Leslie Suarez — Asesoría de Visas © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}