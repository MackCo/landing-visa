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
 * Componente principal de la Landing Page
 * Implementa un diseño responsivo utilizando Tailwind CSS y Lucide Icons.
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mensaje de éxito tras simular el envío
    alert("¡Gracias! Leslie se pondrá en contacto contigo muy pronto.");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- NAVEGACIÓN --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-blue-900 leading-none">Leslie Suarez</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-blue-600 font-semibold mt-1">Asesoría de Visas</span>
            </div>
            
            {/* Menú para pantallas grandes */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#metodologia" className="hover:text-blue-600 transition">Metodología</a>
              <a href="#sobre-mi" className="hover:text-blue-600 transition">Sobre mí</a>
              <a href="#contacto" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">Agendar Asesoría</a>
            </div>

            {/* Botón de menú móvil */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú lateral móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl">
            <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Metodología</a>
            <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Sobre mí</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">Agendar Asesoría</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
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
                Soy Leslie Suarez. Ayudo a familias y profesionales a gestionar su visa americana de forma ordenada, segura y con las mejores probabilidades de éxito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contacto" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                  Iniciar mi trámite <ChevronRight size={20} />
                </a>
                <a href="https://wa.me/#" className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition shadow-xl shadow-emerald-100 flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative px-4 md:px-0">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl aspect-[4/5] bg-slate-200 max-w-md mx-auto">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-8 text-center">
                  <Users size={48} className="mb-4 opacity-20" />
                  <p className="font-medium text-sm md:text-base">Foto de Leslie Suarez</p>
                  <p className="text-xs mt-2 italic">Una imagen profesional aquí aumenta la conversión.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-white font-medium text-sm md:text-lg leading-snug">
                    "Leslie hizo que todo el proceso fuera sencillo y me dio mucha confianza para mi entrevista."
                  </p>
                  <p className="text-blue-200 text-xs md:text-sm mt-1 md:mt-2">— Mariana G., Cliente Aprobada</p>
                </div>
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SOBRE MÍ --- */}
      <section id="sobre-mi" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center lg:text-left">¿Por qué confiar en mí?</h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                <p>
                  Mi misión es transformar un proceso confuso en una experiencia clara y segura. Al ver los errores comunes que llevan a rechazos de visa, decidí ofrecer un servicio basado en la **transparencia y preparación técnica**.
                </p>
                <p>
                  Cada perfil es único. Por eso, mi trabajo no es solo llenar formularios, sino construir una estrategia sólida que resalte tus lazos y estabilidad ante el cónsul.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blue-600 pl-4 text-left">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">Personalizado</div>
                    <div className="text-sm text-slate-500">Trato directo conmigo</div>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 text-left">
                    <div className="text-xl md:text-2xl font-bold text-slate-900">Seguro</div>
                    <div className="text-sm text-slate-500">Privacidad de datos</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm mx-auto lg:max-w-none">
                  <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                    <div className="aspect-square bg-blue-600 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-white p-4 shadow-xl shadow-blue-200">
                      <CheckCircle size={32} className="mb-2 md:mb-4" />
                      <span className="text-center font-bold text-xs md:text-base leading-tight">Llenado DS-160</span>
                    </div>
                    <div className="aspect-square bg-slate-900 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-white p-4">
                      <Users size={32} className="mb-2 md:mb-4" />
                      <span className="text-center font-bold text-xs md:text-base leading-tight">Simulacros</span>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="aspect-square bg-slate-100 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-slate-900 p-4">
                      <Calendar size={32} className="mb-2 md:mb-4 text-blue-600" />
                      <span className="text-center font-bold text-xs md:text-base leading-tight">Gestión de Citas</span>
                    </div>
                    <div className="aspect-square bg-blue-50 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-blue-900 p-4 border border-blue-100">
                      <FileText size={32} className="mb-2 md:mb-4 text-blue-600" />
                      <span className="text-center font-bold text-xs md:text-base leading-tight">Documentación</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METODOLOGÍA --- */}
      <section id="metodologia" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-slate-900">Mi Método Paso a Paso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "1", t: "Perfilado", d: "Entrevista para entender tus lazos económicos y sociales." },
              { n: "2", t: "Estrategia", d: "Definimos la mejor forma de presentar tu solicitud oficial." },
              { n: "3", t: "Formularios", d: "Llenado profesional sin errores que causen demoras." },
              { n: "4", t: "Entrenamiento", d: "Preparación psicológica para tu entrevista consular." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                  <span className="text-2xl font-black">{step.n}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-16 md:py-24 bg-white px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Empezamos tu proceso?</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500" required />
                  <input type="tel" placeholder="Número de WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500" required />
                </div>
                <textarea placeholder="Cuéntame brevemente tu situación..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white h-32 focus:ring-2 focus:ring-blue-500 outline-none placeholder-slate-500" required></textarea>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                  Enviar Mensaje Directo
                </button>
              </form>
              <p className="mt-8 text-slate-500 text-xs md:text-sm">
                Al enviar, recibirás una respuesta personalizada de Leslie Suarez.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* --- PIE DE PÁGINA --- */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-slate-900 leading-none">Leslie Suarez</span>
            <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mt-1">Asesoría de Visas</span>
          </div>
          <div className="mt-8 flex justify-center space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-600 transition">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition">WhatsApp</a>
            <a href="#" className="hover:text-blue-600 transition">Privacidad</a>
          </div>
          <p className="text-slate-300 text-[10px] mt-8 uppercase tracking-widest">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}