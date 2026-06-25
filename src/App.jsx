import React from 'react';
import { Shield } from 'lucide-react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import MatrizRiesgo from './components/MatrizRiesgo';
import Prompts from './components/Prompts';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-mono relative overflow-x-hidden bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
      
      <header className="bg-white text-slate-900 py-6 px-6 border-b-2 border-blue-600 shadow-md sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 shadow-sm animate-pulse">
            <Shield size={36} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 uppercase flex items-center gap-2">
              FarmaSalud <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded font-mono font-normal tracking-normal">SecOps Portal</span>
            </h1>
            <p className="text-slate-500 text-xs mt-0.5 font-bold">
              Auditoría de Seguridad - Unidad 3 | T13034 Fundamentos de Seguridad
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 space-y-8 relative z-10">
        <Resumen />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <MatrizRiesgo />
        <Prompts />
      </main>

      <footer className="bg-white text-slate-500 text-xs py-5 px-6 border-t border-slate-200 mt-12 shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-bold">
          <span>ANÁLISIS DE ENTORNO: <strong className="text-blue-600">Martín Alejandro Ibarra Miranda</strong></span>
          <span>CÁTEDRA: <strong className="text-slate-700">Rubén Schnettler | INACAP Valparaíso</strong></span>
        </div>
      </footer>

    </div>
  );
}

export default App;